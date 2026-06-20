# Contact Form — Setup (for ChatGPT / future wiring)

The contact form is **built and wired in code**. It needs only credentials + the DB table to go fully live. Claude scaffolded this; hooking up Neon and Mailjet is the remaining step.

## What's already in the repo

```txt
components/ContactForm.tsx     → sleek client form (name, email, company, project type,
                                 budget, message), honeypot, loading/success/error states
app/work-with-us/page.tsx      → renders <ContactForm /> in the "Start here" panel
app/api/contact/route.ts       → POST handler: validates, inserts to Neon, emails via Mailjet
app/globals.css                → .cform styles (teal/mint, focus rings, spinner, success state)
db/contact_submissions.sql     → Neon table schema
.env.example                   → the env vars to set
package.json                   → @neondatabase/serverless added
```

## How it behaves

- `POST /api/contact` accepts JSON, validates name/email/message, drops spam via a honeypot.
- It tries **both** channels in parallel and succeeds if **either** works:
  1. Insert a row into Neon (`contact_submissions`) when `DATABASE_URL` is set.
  2. Send an email to `CONTACT_TO_EMAIL` (default `hello@bennyandpenny.com`) via Mailjet when the Mailjet keys are set.
- If neither is configured, it returns a friendly error telling the visitor to email directly.

## Steps to go live

1. **Install deps** (once): `npm install` (pulls in `@neondatabase/serverless`).
2. **Create the table**: run `db/contact_submissions.sql` against the Neon database.
3. **Set env vars** locally (`.env.local`) and in **Vercel → Settings → Environment Variables** (Production + Preview):
   - `DATABASE_URL` — Neon **pooled** connection string.
   - `MAILJET_API_KEY`, `MAILJET_SECRET_KEY` — from Mailjet account.
   - `MAILJET_FROM_EMAIL` — a **verified** Mailjet sender (e.g. `hello@bennyandpenny.com`); verify the domain/sender in Mailjet first or sends will fail.
   - `CONTACT_TO_EMAIL` — defaults to `hello@bennyandpenny.com`.
4. **Redeploy** (push to `main`) so Vercel picks up the new env vars.
5. **Test**: submit the form on `/work-with-us`; confirm a row appears in Neon and an email arrives.

## Notes / options

- Runtime is `nodejs` (needed for the Mailjet Basic-auth fetch and Neon driver).
- Mailjet is called via its REST API (`/v3.1/send`) with `fetch` — no extra SDK needed.
- To swap Mailjet for another provider later, only `sendViaMailjet()` in `route.ts` changes.
- Consider adding rate limiting / a captcha if spam appears; the honeypot handles basic bots.
- `ReplyTo` is set to the submitter, so replying to the notification email goes straight to them.
