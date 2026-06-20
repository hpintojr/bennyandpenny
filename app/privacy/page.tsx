import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Benny & Penny's — A Tech Company: what we collect, how we use it, the providers we rely on, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy Policy | Benny & Penny's",
    description: "How Benny & Penny's collects, uses, and protects contact-form information.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1 className="display">Privacy Policy</h1>
          <p className="legalMeta">Effective June 19, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="shell legal">
          <p className="legalLead">
            This Privacy Policy explains how Benny &amp; Penny&apos;s — A Tech Company (&quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;) collects, uses, and protects information when you visit bennyandpenny.com or contact
            us through the site. We collect only what we need to respond to you and operate our services.
          </p>

          <h2>1. Information We Collect</h2>
          <ul className="legalList">
            <li>
              <strong>Information you provide:</strong> when you submit our contact form, we collect your name,
              email address, and any company, project type, budget, or message details you choose to share.
            </li>
            <li>
              <strong>Technical information:</strong> to help prevent abuse and deliver the site, we may record
              limited technical data such as your IP address and browser user-agent at the time of a submission.
            </li>
            <li>
              <strong>We do not</strong> knowingly collect sensitive personal information, and we do not sell or
              rent your personal information.
            </li>
          </ul>

          <h2>2. How We Use Information</h2>
          <ul className="legalList">
            <li>To respond to your inquiry and communicate with you about a potential or active engagement.</li>
            <li>To provide, maintain, and improve our services.</li>
            <li>To detect, prevent, and address spam, fraud, or technical issues.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>3. Cookies and Analytics</h2>
          <p>
            The site relies on essential, privacy-respecting functionality and does not use advertising or
            cross-site tracking cookies. If we add privacy-friendly analytics in the future, we will update this
            policy and, where required, request your consent. Your browser settings let you control or block
            cookies at any time.
          </p>

          <h2>4. Service Providers</h2>
          <p>
            We use trusted third parties to operate the site and process contact submissions. These providers
            process data on our behalf and only as needed to deliver their service:
          </p>
          <ul className="legalList">
            <li><strong>Vercel</strong> — website hosting and delivery.</li>
            <li><strong>Sequenzy</strong> — transactional email used to deliver your inquiry to us.</li>
            <li><strong>Neon</strong> — database storage for contact submissions.</li>
          </ul>
          <p>
            Each provider maintains its own privacy and security practices. We are not responsible for the
            independent practices of third parties beyond our agreements with them.
          </p>

          <h2>5. Legal Bases for Processing</h2>
          <p>
            Where applicable law (such as the EU/UK GDPR) requires it, we process your information on these legal
            bases: your <strong>consent</strong> (which you may withdraw at any time); our <strong>legitimate
            interests</strong> in responding to inquiries and securing the site; <strong>performance of a
            contract</strong> with you; and <strong>compliance with legal obligations</strong>.
          </p>

          <h2>6. International Data Transfers</h2>
          <p>
            We and our service providers are based in or process data in the United States. If you contact us
            from outside the United States, your information may be transferred to and processed in the U.S. We
            take steps to ensure appropriate safeguards are in place for such transfers as required by law.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain contact submissions for as long as needed to respond to your inquiry, maintain business
            records, and comply with legal obligations. You may request deletion of your information at any time
            (see Your Privacy Rights below).
          </p>

          <h2>8. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect the information we collect.
            However, no method of transmission or storage is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>9. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or receive a copy of
            the personal information we hold about you, and to object to or restrict certain processing.
          </p>
          <p>
            <strong>California residents:</strong> under the CCPA/CPRA you have the right to know what personal
            information we collect, to request deletion or correction, and to opt out of the &quot;sale&quot; or
            &quot;sharing&quot; of personal information. We do not sell or share your personal information, and we
            will not discriminate against you for exercising your rights.
          </p>
          <p>
            To make any request, email{" "}
            <a className="textLink" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>. We will
            verify and respond within the timeframe required by applicable law.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            This website and its contact form are intended for adults (for example, caregivers, clients, and
            business contacts). It is not directed to children, and we do not knowingly collect personal
            information from children. If you believe a child has provided us information, contact us and we will
            delete it.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected by updating
            the effective date above. Continued use of the site after an update constitutes acceptance of the
            revised policy.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a className="textLink" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>. See also our{" "}
            <Link className="textLink" href="/terms">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
