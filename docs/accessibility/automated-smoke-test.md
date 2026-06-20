# Accessibility Smoke-Test Workflow

The repository includes a dependency-free markup regression check at:

```txt
scripts/accessibility-smoke.mjs
```

It is not a substitute for an axe scan, manual keyboard testing, contrast testing, or screen-reader QA. It exists to catch common regressions in server-rendered markup before they reach production.

## What it checks

- Public routes return the expected status.
- Each route has `lang="en"`, a non-empty title, and exactly one rendered `h1`.
- Public routes include the skip link, named `main` landmark, and named primary navigation.
- Rendered images have an `alt` attribute.
- `target="_blank"` links include `rel="noopener"`.
- The Contact page includes its core labelled controls.
- The Accessibility page exposes the support contact.
- A missing route returns a 404 with `noindex, nofollow` metadata.

## Run locally

Start the application in one terminal:

```bash
npm run dev
```

Then, in another terminal:

```bash
npm run a11y:smoke
```

The default target is `http://localhost:3000`.

## Run against production

```bash
SITE_URL=https://www.bennyandpenny.com npm run a11y:smoke
```

## Release use

Run this after a production deployment is ready, then complete the manual checklist in:

```txt
docs/accessibility/manual-qa-checklist.md
```

Record any failures in `docs/accessibility/phase-1-baseline.md` and treat manual test evidence as the signoff record.
