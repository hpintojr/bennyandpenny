-- Neon (Postgres) schema for the contact form.
-- Run this once against your Neon database (e.g. in the Neon SQL editor or psql).

CREATE TABLE IF NOT EXISTS contact_submissions (
  id          BIGSERIAL PRIMARY KEY,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  company     TEXT,
  project_type TEXT,
  budget      TEXT,
  message     TEXT NOT NULL,
  ip          TEXT,
  user_agent  TEXT,
  source      TEXT
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx
  ON contact_submissions (email);
