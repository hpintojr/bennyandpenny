import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for Benny & Penny — A Tech Company, including our WCAG 2.2 AA target, floating accessibility preferences, and how to report an access barrier.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    url: "/accessibility",
    title: "Accessibility | Benny & Penny",
    description:
      "How Benny & Penny is improving access for visitors who use assistive technologies.",
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Accessibility</p>
          <h1 className="display">Access is part of building it right.</h1>
          <p className="lede">
            Benny &amp; Penny is working to make this website usable by the widest possible audience,
            including people who use assistive technologies.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell legal">
          <p className="legalLead">
            We use Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as our design and engineering target.
            Accessibility is an ongoing process of testing, improving, and remediating barriers as we identify them.
          </p>

          <h2>Accessibility preferences</h2>
          <p>
            Use the floating accessibility icon at the lower-left of the page to adjust text size, high contrast,
            motion, and font readability for this device. You can minimize the icon when you do not need it; a compact
            Accessibility tab remains available to restore it. The text-based <strong>Accessibility preferences</strong>
            button in the site footer opens the same controls.
          </p>
          <p>
            These optional preferences work alongside browser and operating-system accessibility settings and are saved
            only on this device.
          </p>

          <h2>What we are working on</h2>
          <ul className="legalList">
            <li>Keyboard-accessible navigation, forms, links, interactive controls, and floating preferences launcher.</li>
            <li>Visible focus indicators, readable contrast, responsive reflow, and reduced-motion support.</li>
            <li>Meaningful headings, landmarks, labels, alternative text, and status messages.</li>
            <li>Automated accessibility checks plus manual keyboard, screen-reader, contrast, and zoom testing.</li>
            <li>Accessible contact and portfolio experiences, with continued review of new site content and features.</li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            This portfolio is actively being reviewed against WCAG 2.2 Level AA. Some third-party websites linked
            from this portfolio, embedded services, and externally hosted content may not be fully controlled by
            Benny &amp; Penny. We will review and address barriers within our control when they are reported or
            discovered.
          </p>

          <h2>Request help or report a barrier</h2>
          <p>
            If you have trouble using any part of this site, need information in an alternative format, or would
            like to report an accessibility barrier, email us at{" "}
            <a className="textLink" href="mailto:hello@bennyandpenny.com?subject=Accessibility%20support%20request">
              hello@bennyandpenny.com
            </a>.
          </p>
          <p>
            Please include the page or feature involved, the assistive technology or browser you are using when
            relevant, and the support you need. We aim to acknowledge accessibility requests within five business days
            and will work with you to identify a reasonable alternative format or assistance where needed.
          </p>

          <h2>Last reviewed</h2>
          <p>June 20, 2026</p>
        </div>
      </section>
    </>
  );
}
