# Accessibility Automation Workflow

The repository contains two complementary automated accessibility checks:

```txt
Server-rendered smoke test: scripts/accessibility-smoke.mjs
Browser axe audit:        tests/accessibility/wcag.spec.ts
```

Neither is a substitute for manual keyboard testing, contrast testing, zoom/reflow checks, or screen-reader QA.

## 1. Server-rendered smoke test

The smoke test catches common markup regressions before they reach production.

### What it checks

- Public routes return the expected status.
- Each route has `lang="en"`, a non-empty title, and exactly one rendered `h1`.
- Public routes include the skip link, named `main` landmark, and named primary navigation.
- Rendered images have an `alt` attribute.
- `target="_blank"` links include `rel="noopener"`.
- The Contact page includes its core labelled controls.
- The Accessibility page exposes the support contact.
- A missing route returns a 404 with framework-provided `noindex` metadata.

### Run locally

Start the application in one terminal:

```bash
npm run dev
```

Then, in another terminal:

```bash
npm run a11y:smoke
```

The default target is `http://localhost:3000`.

### Run against production

```bash
SITE_URL=https://www.bennyandpenny.com npm run a11y:smoke
```

### GitHub Action

Run **Actions → Accessibility Smoke Test** and provide the production or preview URL.

## 2. Browser axe audit

The browser audit uses Playwright and axe-core in desktop and mobile Chromium. It audits WCAG 2.0, 2.1, and 2.2 A/AA rules and fails on critical or serious violations.

```bash
BASE_URL=https://www.bennyandpenny.com npm run a11y:axe
```

For full setup and workflow instructions, read:

```txt
docs/accessibility/browser-audit.md
```

## Release use

Run both automated checks after a production deployment is ready, then complete the manual checklist in:

```txt
docs/accessibility/manual-qa-checklist.md
```

Record any failures in `docs/accessibility/phase-1-baseline.md` and treat manual test evidence as the final signoff record.
