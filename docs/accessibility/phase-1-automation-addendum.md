# Phase 1 Automation Addendum

**Date:** 2026-06-20  
**Project:** `bennyandpenny.com`  
**Target:** WCAG 2.2 AA

This addendum extends the Phase 1 baseline with automated regression coverage.

## Added coverage

- `scripts/accessibility-smoke.mjs` checks server-rendered public routes for basic landmarks, titles, image alternatives, target-blank safety, contact controls, accessibility support contact, and 404 noindex behavior.
- `tests/accessibility/wcag.spec.ts` uses Playwright and axe-core in desktop and mobile Chromium to identify critical and serious WCAG 2.0, 2.1, and 2.2 A/AA violations.
- The browser audit also checks Contact validation feedback and mobile-menu Escape behavior.
- `.github/workflows/accessibility-smoke.yml` supports manual markup checks against a production or preview URL.
- `.github/workflows/accessibility-axe.yml` supports manual browser audit runs and uploads test artifacts.

## Additional remediation completed

- The visual Benny & Penny's Adventures lockups on Work and Adventures now expose the complete name to screen readers.
- The 404 route uses framework-provided `noindex` behavior. Duplicate custom robots metadata was removed.

## Execution requirement

These tests are now available but have not been recorded as passed through a GitHub Actions run in this session. Run both after production is ready:

```bash
SITE_URL=https://www.bennyandpenny.com npm run a11y:smoke
BASE_URL=https://www.bennyandpenny.com npm run a11y:axe
```

Then record the result and any violations in `docs/accessibility/phase-1-baseline.md`.
