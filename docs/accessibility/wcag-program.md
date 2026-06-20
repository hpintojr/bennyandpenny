# WCAG Accessibility Program

Site: bennyandpenny.com
Target: WCAG 2.2 Level AA
Status: active remediation

## Scope

- Public pages: Home, Work, Adventures, About, Contact, Privacy, Terms, Accessibility, and 404
- Shared UI: header, footer, desktop and mobile navigation, cards, links, forms, dialogs, and future components
- Complete process: navigation, reading content, completing the Contact form, and receiving a clear result

## Working rules

1. Native HTML before ARIA.
2. Keyboard path for every action.
3. Focus must remain visible.
4. One clear h1 and logical headings per route.
5. Meaningful links and explicit new-tab behavior.
6. Accessible names, roles, and states for custom controls.
7. No overlay substitute for code remediation.
8. Critical and high barriers block release.

## Current foundation

- Skip link, landmarks, visible focus, reduced motion, forced colors, and contrast support
- Keyboard mobile menu with focus containment and Escape close
- Accessible Contact validation and status updates
- Native settings controller for text size, high contrast, paused motion, and readable font
- Accessibility statement and support channel
- Automated smoke and browser audit tooling

## Required release evidence

- Automated test output
- Manual keyboard checklist
- Screen-reader results
- Contrast results
- Zoom and reflow evidence
- Open issue register and owner signoff

## Open work

- Measure all final text, control, overlay, and focus contrast pairs.
- Complete 200% zoom, 400% reflow, and text-spacing checks.
- Run NVDA plus Chrome or Firefox and VoiceOver plus Safari tests.
- Complete the image alternative review.
- Run and retain production smoke and browser audit reports.
- Confirm actual production Contact submission success and failure behavior.
