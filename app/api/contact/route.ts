import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  project_type?: string;
  budget?: string;
  message?: string;
  company_url?: string; // honeypot
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@bennyandpenny.com";
const FROM_EMAIL = process.env.MAILJET_FROM_EMAIL || "hello@bennyandpenny.com";
const FROM_NAME = process.env.MAILJET_FROM_NAME || "Benny & Penny's Website";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function clean(v: unknown, max = 5000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function saveToNeon(row: Record<string, string>) {
  if (!process.env.DATABASE_URL) return { ok: false, skipped: true };
  const sql = neon(process.env.DATABASE_URL);
  await sql`
    INSERT INTO contact_submissions
      (name, email, company, project_type, budget, message, ip, user_agent, source)
    VALUES
      (${row.name}, ${row.email}, ${row.company}, ${row.project_type},
       ${row.budget}, ${row.message}, ${row.ip}, ${row.user_agent}, ${row.source})
  `;
  return { ok: true };
}

async function sendViaMailjet(row: Record<string, string>) {
  const pub = process.env.MAILJET_API_KEY;
  const priv = process.env.MAILJET_SECRET_KEY;
  if (!pub || !priv) return { ok: false, skipped: true };

  const auth = Buffer.from(`${pub}:${priv}`).toString("base64");
  const subject = `New inquiry from ${row.name}${row.company ? ` (${row.company})` : ""}`;
  const text = [
    `Name: ${row.name}`,
    `Email: ${row.email}`,
    `Company: ${row.company || "—"}`,
    `Project type: ${row.project_type || "—"}`,
    `Budget: ${row.budget || "—"}`,
    "",
    "Message:",
    row.message,
  ].join("\n");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#183437;line-height:1.6">
      <h2 style="margin:0 0 12px;color:#175b59">New website inquiry</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${row.name}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${row.email}</p>
      <p style="margin:0 0 4px"><strong>Company:</strong> ${row.company || "—"}</p>
      <p style="margin:0 0 4px"><strong>Project type:</strong> ${row.project_type || "—"}</p>
      <p style="margin:0 0 12px"><strong>Budget:</strong> ${row.budget || "—"}</p>
      <p style="margin:0 0 4px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;margin:0;padding:12px 14px;background:#effaf5;border-radius:10px">${row.message}</p>
    </div>`;

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: FROM_EMAIL, Name: FROM_NAME },
          To: [{ Email: TO_EMAIL }],
          ReplyTo: { Email: row.email, Name: row.name },
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Mailjet ${res.status}: ${detail.slice(0, 300)}`);
  }
  return { ok: true };
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success, drop silently.
  if (clean(body.company_url)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email, and a message." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 422 });
  }

  const row = {
    name,
    email,
    company: clean(body.company, 200),
    project_type: clean(body.project_type, 200),
    budget: clean(body.budget, 100),
    message,
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "",
    user_agent: request.headers.get("user-agent") || "",
    source: "bennyandpenny.com/work-with-us",
  };

  const results = await Promise.allSettled([saveToNeon(row), sendViaMailjet(row)]);
  const [dbResult, mailResult] = results;

  const dbOk = dbResult.status === "fulfilled" && dbResult.value.ok;
  const mailOk = mailResult.status === "fulfilled" && mailResult.value.ok;

  if (dbResult.status === "rejected") console.error("Neon insert failed:", dbResult.reason);
  if (mailResult.status === "rejected") console.error("Mailjet send failed:", mailResult.reason);

  // Success if at least one channel captured the submission.
  if (dbOk || mailOk) {
    return NextResponse.json({ ok: true, stored: dbOk, emailed: mailOk });
  }

  // Nothing configured yet, or both failed.
  const bothSkipped =
    dbResult.status === "fulfilled" && dbResult.value.skipped &&
    mailResult.status === "fulfilled" && mailResult.value.skipped;
  const error = bothSkipped
    ? "Contact delivery isn't configured yet. Please email hello@bennyandpenny.com directly."
    : "We couldn't send your message right now. Please try again or email hello@bennyandpenny.com.";
  return NextResponse.json({ ok: false, error }, { status: 502 });
}
