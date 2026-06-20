# Browser Accessibility Audit

The repository now includes a Playwright + axe-core audit for critical and serious WCAG findings in a real Chromium browser.

```txt
Tests: tests/accessibility/wcag.spec.ts
Config: playwright.accessibility.config.ts
Command: npm run a11y:axe
Workflow: .github/workflows/accessibility-axe.yml
```

## What it covers

- Every public portfolio route in desktop Chromium and mobile Chromium emulation.
- Axe rules tagged for WCAG 2.0, 2.1, and 2.2 A/AA.
- Critical and serious violations fail the test.
- Contact-form validation feedback and invalid-state markup.
- Mobile menu expanded state and Escape-to-close behavior.

## Run locally

Start the site in one terminal:

```bash
npm run dev
```

Then run the audit in another terminal:

```bash
npm install
npx playwright install chromium
npm run a11y:axe
```

## Run against production or a Vercel preview

```bash
BASE_URL=https://www.bennyandpenny.com npm run a11y:axe
```

## GitHub Action

Use **Actions → Browser Accessibility Audit → Run workflow**, then enter the production or preview URL. The workflow uploads the Playwright report and failure traces/screenshots as an artifact.

## Limits

This audit is valuable regression coverage, but it does not replace manual testing for keyboard flow, screen-reader output, zoom/reflow, text spacing, forced colors, reduced motion, or review of real-world content alternatives.
