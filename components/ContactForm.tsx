"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

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

const fieldIds: Record<FieldName, string> = {
  name: "cf-name",
  email: "cf-email",
  message: "cf-message",
};

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name?.trim()) errors.name = "Enter your name.";
  if (!data.email?.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message?.trim()) errors.message = "Tell us a little about your project.";

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const mountedAt = useRef<number>(Date.now());
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const hasErrors = Object.keys(fieldErrors).length > 0 || status === "error";

  useEffect(() => {
    if (!hasErrors) return;
    const frame = window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [hasErrors]);

  function clearFieldError(field: FieldName) {
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function focusField(field: FieldName) {
    document.getElementById(fieldIds[field])?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      setSubmissionError("");
      setFieldErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setSubmissionError("");
    setFieldErrors({});
    data.elapsed_ms = String(Date.now() - mountedAt.current);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "We could not send your message. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setSubmissionError(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="cform cform--success" role="status" aria-live="polite">
        <div className="cform__check" aria-hidden="true">✓</div>
        <h3>Thank you — message sent.</h3>
        <p>I&apos;ll review your note and get back to you personally at the email you provided.</p>
        <button type="button" className="button button--light" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate aria-busy={status === "submitting"}>
      <p id="cform-required-note" className="cform__requiredNote">
        <span className="cform__requiredMark" aria-hidden="true">*</span> Required fields
      </p>

      {hasErrors && (
        <div ref={errorSummaryRef} className="cform__errorSummary" role="alert" tabIndex={-1}>
          <h3>Please correct the following:</h3>
          <ul>
            {fieldErrors.name && (
              <li><a href={`#${fieldIds.name}`} onClick={(event) => { event.preventDefault(); focusField("name"); }}>{fieldErrors.name}</a></li>
            )}
            {fieldErrors.email && (
              <li><a href={`#${fieldIds.email}`} onClick={(event) => { event.preventDefault(); focusField("email"); }}>{fieldErrors.email}</a></li>
            )}
            {fieldErrors.message && (
              <li><a href={`#${fieldIds.message}`} onClick={(event) => { event.preventDefault(); focusField("message"); }}>{fieldErrors.message}</a></li>
            )}
            {status === "error" && <li>{submissionError}</li>}
          </ul>
        </div>
      )}

      {/* Honeypots are unavailable to keyboard and assistive-technology users. */}
      <div className="cform__hp" aria-hidden="true">
        <label htmlFor="company_url">Company website (leave blank)</label>
        <input id="company_url" type="text" name="company_url" tabIndex={-1} autoComplete="off" />
        <label htmlFor="nickname">Nickname (leave blank)</label>
        <input id="nickname" type="text" name="nickname" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-name">Name <span className="cform__requiredMark" aria-hidden="true">*</span></label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "cf-name-error cform-required-note" : "cform-required-note"}
            placeholder="Your name"
            autoComplete="name"
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name && <p id="cf-name-error" className="cform__fieldError">{fieldErrors.name}</p>}
        </div>
        <div className="cform__field">
          <label htmlFor="cf-email">Email <span className="cform__requiredMark" aria-hidden="true">*</span></label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "cf-email-error cform-required-note" : "cform-required-note"}
            placeholder="you@company.com"
            autoComplete="email"
            onChange={() => clearFieldError("email")}
          />
          {fieldErrors.email && <p id="cf-email-error" className="cform__fieldError">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="cf-company">Company <span className="visuallyHidden">(optional)</span></label>
          <input id="cf-company" name="company" type="text" placeholder="Company / organization" autoComplete="organization" />
        </div>
        <div className="cform__field">
          <label htmlFor="cf-type">Project type <span className="visuallyHidden">(optional)</span></label>
          <select id="cf-type" name="project_type" defaultValue="">
            <option value="" disabled>Choose one...</option>
            {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>

      <div className="cform__field">
        <label htmlFor="cf-budget">Budget range <span className="visuallyHidden">(optional)</span></label>
        <select id="cf-budget" name="budget" defaultValue="">
          <option value="" disabled>Optional…</option>
          {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
        </select>
      </div>

      <div className="cform__field">
        <label htmlFor="cf-message">Project details <span className="cform__requiredMark" aria-hidden="true">*</span></label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          aria-required="true"
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "cf-message-error cform-required-note" : "cform-required-note"}
          placeholder="What are you building, and what does success look like?"
          onChange={() => clearFieldError("message")}
        />
        {fieldErrors.message && <p id="cf-message-error" className="cform__fieldError">{fieldErrors.message}</p>}
      </div>

      <button type="submit" className="button cform__submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <span className="cform__spinner" aria-hidden="true" />
            Sending message…
          </>
        ) : (
          <>
            <span>Send message</span>
            <span aria-hidden="true">→</span>
          </>
        )}
      </button>

      <p className="note cform__fineprint">
        Your details are sent securely and used only to respond to your inquiry.
      </p>
    </form>
  );
}
