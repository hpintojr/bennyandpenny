import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Benny & Penny's — A Tech Company: what we collect, how we use it, the providers we rely on, and your rights.",
  alternates: { canonical: "/privacy" },
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
              <strong>We do not</strong> knowingly collect sensitive personal information, and we do not sell
              your personal information.
            </li>
          </ul>

          <h2>2. How We Use Information</h2>
          <ul className="legalList">
            <li>To respond to your inquiry and communicate with you about a potential or active engagement.</li>
            <li>To provide, maintain, and improve our services.</li>
            <li>To detect, prevent, and address spam, fraud, or technical issues.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>3. Service Providers</h2>
          <p>
            We use trusted third parties to operate the site and process contact submissions. These providers
            process data on our behalf and only as needed to deliver their service:
          </p>
          <ul className="legalList">
            <li><strong>Vercel</strong> — website hosting and delivery.</li>
            <li><strong>Mailjet</strong> — transactional email used to deliver your inquiry to us.</li>
            <li><strong>Neon</strong> — database storage for contact submissions.</li>
          </ul>
          <p>
            Each provider maintains its own privacy and security practices. We are not responsible for the
            independent practices of third parties beyond our agreements with them.
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain contact submissions for as long as needed to respond to your inquiry, maintain business
            records, and comply with legal obligations. You may request deletion of your information at any time
            (see Your Rights below).
          </p>

          <h2>5. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect the information we collect.
            However, no method of transmission or storage is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or delete the personal
            information we hold about you, or to object to or restrict certain processing. To make a request,
            email{" "}
            <a className="textLink" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a> and we will
            respond within a reasonable timeframe.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            This website and its contact form are intended for adults (for example, caregivers, clients, and
            business contacts). It is not directed to children, and we do not knowingly collect personal
            information from children. If you believe a child has provided us information, contact us and we will
            delete it.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected by updating
            the effective date above. Continued use of the site after an update constitutes acceptance of the
            revised policy.
          </p>

          <h2>9. Contact</h2>
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
