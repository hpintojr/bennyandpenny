import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Work with Hamilton Pinto Jr. on custom software architecture, API and CRM integrations, business consulting, brand and web development, and publishing projects.",
  alternates: { canonical: "/work-with-us" },
  openGraph: {
    url: "/work-with-us",
    title: "Work with Benny & Penny — A Tech Company",
    description:
      "Start a conversation about custom platform builds, integrations, business consulting, brand and web, or publishing production.",
  },
};

const engagements = [
  "Software architecture and custom platform builds",
  "API integration and systems / business intelligence",
  "Brand, visual identity, and web",
  "Go-to-market and launch systems",
  "Publishing, imprint, and production-pipeline projects",
];

export default function ContactPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1 className="display">Let&apos;s build the next one.</h1>
          <p className="lede">
            I take on a small number of aligned engagements across software, brand, and publishing.
            Tell me what you&apos;re building.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell contactGrid">
          <div className="contactPanel contactPanel--dark">
            <p className="eyebrow">What I take on</p>
            <h2 className="h2">Where I can help most.</h2>
            <ul className="contactList">
              {engagements.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="contactPanel">
            <p className="eyebrow">Start here</p>
            <h2 className="h2">Tell me about the project.</h2>
            <ContactForm />
            <p className="note" style={{ marginTop: "1rem" }}>
              Prefer email? Reach me directly at{" "}
              <a className="textLink" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell pageIntro">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2 className="h2">Straight answers, then a clear plan.</h2>
          </div>
          <p className="lede">
            I&apos;ll listen for the heart of the project first, then tell you honestly whether there&apos;s a
            strong, aligned way to build it together.
          </p>
        </div>
      </section>
    </>
  );
}
