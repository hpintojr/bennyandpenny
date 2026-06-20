# WCAG Accessibility Program

Site: bennyandpenny.com  
Target: WCAG 2.2 Level AA  
Status: active remediation and reusable standard for the Benny & Penny's Adventures site

## Scope

- Public pages: Home, Work, Adventures, About, Contact, Privacy, Terms, Accessibility, and 404
- Shared UI: header, footer, desktop and mobile navigation, cards, links, forms, dialogs, floating access launcher, and future components
- Complete process: navigation, reading content, completing the Contact form, and receiving a clear result

## Working rules

1. Native HTML before ARIA.
2. Keyboard path for every action.
3. Focus must remain visible and must not be obscured.
4. One clear h1 and logical headings per route.
5. Meaningful links and explicit new-tab behavior.
6. Accessible names, roles, and states for custom controls.
7. No third-party accessibility overlay is a substitute for code remediation.
8. Critical and high barriers block release.
9. Public accessibility controls must never create a dead end: an intentionally minimized control must always leave a visible, keyboard-accessible way to restore it.

## Floating accessibility launcher standard

This is the approved shared pattern for Benny & Penny's sites.

### Placement and visibility

- Render on every public page, fixed at the lower-left viewport edge with safe-area spacing.
- Use a native button with a recognizable accessibility SVG, a programmatic name of **Open accessibility preferences**, and a minimum 44 by 44 CSS pixel target.
- Keep the text-based footer trigger and the Accessibility page as permanent alternate ways to open the same dialog.
- The launcher may be minimized by the visitor. It must not be permanently hidden with no recovery path.
- Minimized state becomes a compact visible **Accessibility** restore tab. On small screens, it may show only the icon visually, but must retain the accessible name **Show accessibility launcher**.
- Store only the minimized/expanded preference locally on that device. Do not send launcher settings to analytics, CRM, or marketing tools.

### Interaction contract

- Primary launcher button opens the native accessibility-preferences dialog.
- Minimize button converts the full launcher to the restore tab and moves keyboard focus to that restore tab.
- Restore tab expands the launcher and moves keyboard focus to the primary launcher button.
- Dialog Escape, Close, and Done return focus to the button that opened the dialog.
- The launcher must work with mouse, touch, Tab, Enter, and Space.
- The native dialog must trap focus while open and use the browser modal layer so background content is inactive.
- Respect `prefers-reduced-motion` and the site pause-motion setting. No essential action can depend on animation.
- Hide the launcher in print styles only.

### Appearance and non-interference

- Use site brand colors, but verify contrast for the icon, button, tooltip, border, and focus indicator.
- Keep the dock below the modal dialog layer and above normal page content.
- Do not cover cookie banners, chat controls, vital form actions, or emergency/help controls. Reassess the dock position whenever a persistent third-party control is added.
- Provide a short visual tooltip for pointer/focus users without relying on the tooltip as the accessible name.

### Preferences inside the dialog

- Text size: Standard, Large, Largest.
- High contrast: strengthens text, borders, and controls.
- Pause animations: disables nonessential site motion.
- Readable font: uses a plain system sans-serif for content and controls.
- Reset preferences: restores defaults.
- Preferences are local-device enhancements and do not replace operating-system or browser accessibility features.

### Required tests

- Launcher and restore tab pass keyboard-only testing, including focus movement after minimize/restore.
- Dialog passes native modal keyboard behavior: open, close, Escape, Tab sequence, and focus return.
- Launcher and restore tab work at 200% zoom, 400% reflow, 320 CSS px, text-spacing override, forced-colors mode, and reduced-motion mode.
- Automated browser tests cover opening, minimizing, restoring, dialog controls, and persistence after reload.
- Screen-reader tests announce the launcher, minimize/restore controls, dialog title, and state changes clearly.

## Current foundation

- Skip link, landmarks, visible focus, reduced motion, forced colors, and contrast support
- Keyboard mobile menu with focus containment and Escape close
- Accessible Contact validation and status updates
- Native settings controller for text size, high contrast, paused motion, and readable font
- Floating, collapsible native accessibility launcher with local-device persistence and a recoverable restore tab
- Text footer trigger and Accessibility statement as permanent alternate access paths
- Automated smoke and browser audit tooling

## Required release evidence

- Automated test output
- Manual keyboard checklist
- Screen-reader results
- Contrast results
- Zoom and reflow evidence
- Floating-launcher behavior evidence
- Open issue register and owner signoff

## Reuse requirement for Benny & Penny's Adventures

When the Benny & Penny's Adventures site is updated, copy the behavioral standard above—not merely the appearance. The Adventures implementation must use native controls, keep the footer trigger and Accessibility page, include a recoverable minimized state, preserve the same keyboard/focus contract, and add its own route-by-route tests for store, book detail, cart, checkout, account, library, gifting, orders, and customer-support journeys.

## Open work

- Measure all final text, control, overlay, dock, tooltip, and focus contrast pairs.
- Complete 200% zoom, 400% reflow, and text-spacing checks.
- Run NVDA plus Chrome or Firefox and VoiceOver plus Safari tests.
- Complete the image alternative review.
- Run and retain production smoke and browser audit reports.
- Confirm actual production Contact submission success and failure behavior.
