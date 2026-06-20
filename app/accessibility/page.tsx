import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for Benny & Penny's — A Tech Company, including our WCAG 2.2 AA target and how to report an access barrier.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    url: "/accessibility",
    title: "Accessibility | Benny & Penny's",
    description:
      "How Benny & Penny's is improving access for visitors who use assistive technologies.",
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
            Benny &amp; Penny&apos;s is working to make this website usable by the widest possible audience,
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

          <h2>What we are working on</h2>
          <ul className="legalList">
            <li>Keyboard-accessible navigation, forms, links, and interactive controls.</li>
            <li>Visible focus indicators, readable contrast, responsive reflow, and reduced-motion support.</li>
            <li>Meaningful headings, landmarks, labels, alternative text, and status messages.</li>
            <li>Accessible contact and portfolio experiences, with continued review of new site content and features.</li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            Some third-party websites linked from this portfolio, embedded services, and externally hosted content
            may not be fully controlled by Benny &amp; Penny&apos;s. We will review and address barriers within our control
            when they are reported or discovered.
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
            relevant, and the support you need. We aim to acknowledge accessibility requests within five business days.
          </p>

          <h2>Last reviewed</h2>
          <p>June 20, 2026</p>
        </div>
      </section>
    </>
  );
}
