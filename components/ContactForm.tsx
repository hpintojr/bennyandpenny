"use client";

import { useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = [
  "Systems Architecture & Platform Build",
  "API, CRM & Telephony Integrations",
  "Business Consulting & Development",
  "Marketing, Brand Design & Web",
  "Publishing & Production",
  "Something else",
];

const budgets = [
  "Not sure yet",
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  // When the form first mounted — used for a bot "filled too fast" check.
  const mountedAt = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    // Time-on-page: bots submit near-instantly; humans take seconds.
    data.elapsed_ms = String(Date.now() - mountedAt.current);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="cform cform--success" role="status" aria-live="polite">
        <div className="cform__check" aria-hidden="true">✓</div>
        <h3>Thank you — message sent.</h3>
        <p>I&apos;ll review your note and get back to you personally at the email you provided.</p>
        <button type="button" className="button button--light" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      {/* honeypots: hidden from humans; bots tend to fill every field */}
      <div className="cform__hp" aria-hidden="true">
        <label htmlFor="company_url">Company website (leave blank)</label>
        <input id="company_url" type="text" name="company_url" tabIndex={-1} autoComplete="off" />
        <label htmlFor="nickname">Nickname (leave blank)</label>
        <input id="nickname" type="text" name="nickname" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-name">Name <span aria-hidden="true">*</span></label>
          <input id="cf-name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
        </div>
        <div className="cform__field">
          <label htmlFor="cf-email">Email <span aria-hidden="true">*</span></label>
          <input id="cf-email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
        </div>
      </div>

      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" placeholder="Company / organization" autoComplete="organization" />
        </div>
        <div className="cform__field">
          <label htmlFor="cf-type">Project type</label>
          <select id="cf-type" name="project_type" defaultValue="">
            <option value="" disabled>Choose one...</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="cform__field">
        <label htmlFor="cf-budget">Budget range</label>
        <select id="cf-budget" name="budget" defaultValue="">
          <option value="" disabled>Optional…</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div className="cform__field">
        <label htmlFor="cf-message">Project details <span aria-hidden="true">*</span></label>
        <textarea id="cf-message" name="message" required rows={5} placeholder="What are you building, and what does success look like?" />
      </div>

      {status === "error" && (
        <p className="cform__error" role="alert">{error}</p>
      )}

      <button type="submit" className="button cform__submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <span className="cform__spinner" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>Send message →</>
        )}
      </button>

      <p className="note cform__fineprint">
        Your details are sent securely and used only to respond to your inquiry.
      </p>
    </form>
  );
}
