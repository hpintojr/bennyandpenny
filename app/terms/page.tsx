import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Benny & Penny's — A Tech Company: contract execution and scope, payment terms and refunds, and binding arbitration.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Service | Benny & Penny's",
    description: "Terms governing custom technical development, consulting, and publishing services.",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1 className="display">Terms of Service</h1>
          <p className="legalMeta">Effective June 19, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="shell legal">
          <p className="legalLead">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of bennyandpenny.com and the
            services offered by Benny &amp; Penny&apos;s — A Tech Company (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            including custom technical development, CRM and AI platforms, business consultation, and publishing
            services. By using our site or services, you agree to these Terms.
          </p>

          <h2>Contract Execution and Scope of Services</h2>

          <h3>1. Formation of Contract</h3>
          <p>
            All custom technical services, including API integrations, website development, and business
            consultation, as well as publishing agreements, require a separate, signed Statement of Work (SOW)
            or formal contract. For our software as a service (SaaS) and CRM offerings, accessing or paying for
            the platform constitutes agreement to the specific terms outlined at checkout.
          </p>

          <h3>2. Scope of Work</h3>
          <p>
            The SOW or publishing agreement defines the specific deliverables, production timelines, and fees.
            Any development or content requests outside the original scope require a written amendment and may
            incur additional fees.
          </p>

          <h3>3. Third-Party Platforms and APIs</h3>
          <p>
            Our CRM and AI services utilize third-party infrastructure. By using these services, you agree to
            comply with the acceptable use policies of our underlying providers. We are not liable for outages,
            data loss, or changes in third-party API terms that affect custom integrations or automated
            assistants.
          </p>

          <h3>4. Publishing Rights and Content Distribution</h3>
          <p>
            Contracts for book publishing, content distribution, and print-on-demand services are governed
            strictly by their respective publishing agreements. General website terms do not supersede or alter
            the specific intellectual property, royalty, or distribution clauses established in a finalized
            publishing contract.
          </p>

          <h3>5. Termination and Modifications</h3>
          <p>
            Standard SaaS subscriptions may be canceled according to the terms selected at checkout. Custom
            technical contracts and publishing agreements are subject to the specific termination and
            cancellation clauses detailed within their respective signed documents.
          </p>

          <h2>Payment Terms, Fees, and Refunds</h2>

          <h3>1. Payment Terms by Service Type</h3>
          <ul className="legalList">
            <li>
              <strong>Software and CRM Subscriptions (SaaS):</strong> Fees are billed on a recurring monthly or
              annual basis, as selected at checkout. Payment is due in full at the start of each billing cycle.
              Access to the platform is contingent upon successful payment processing.
            </li>
            <li>
              <strong>Custom Development, Integration, and Consulting:</strong> Projects are subject to the
              payment schedules specified in their respective Statement of Work (SOW). This typically involves an
              initial non-refundable deposit followed by milestone-based or net-30 payments.
            </li>
            <li>
              <strong>Publishing and Production Services:</strong> Fees for publishing services, manuscript
              formatting, cover design, or print-on-demand production setups must be paid according to the terms
              outlined in the specific publishing agreement.
            </li>
          </ul>

          <h3>2. Late Fees and Non-Payment</h3>
          <ul className="legalList">
            <li>
              <strong>SaaS Accounts:</strong> If a recurring payment fails, a grace period of 7 days will be
              provided to update billing information. Failure to resolve payment within this period will result
              in automatic suspension of CRM, AI assistant, and platform access.
            </li>
            <li>
              <strong>Custom Services and Publishing:</strong> Invoices not paid within 30 days of the invoice
              date are subject to a late fee of 1.5% per month on the outstanding balance, or the maximum rate
              permitted by law, whichever is lower. We reserve the right to halt all ongoing development,
              hosting, or publishing services if any invoice remains unpaid past its due date.
            </li>
          </ul>

          <h3>3. Refund Policy</h3>
          <ul className="legalList">
            <li>
              <strong>Subscription Services:</strong> All SaaS and CRM subscription payments are non-refundable.
              We do not provide prorated refunds or credits for partial months or unused platform features.
            </li>
            <li>
              <strong>Custom Development and Publishing Services:</strong> Fees for custom code, API integration,
              consultation hours, and completed publishing milestones are non-refundable once work has commenced
              or deliverables have been transferred, as outlined in the individual SOW or contract.
            </li>
          </ul>

          <h2>Dispute Resolution and Binding Arbitration</h2>

          <h3>1. Agreement to Arbitrate</h3>
          <p>
            Any dispute, claim, or controversy arising out of or relating to these Terms of Service, your use of
            our CRM and AI platforms, custom technical development, or publishing services, shall be resolved
            exclusively by binding arbitration, rather than in a court of law. By agreeing to these terms, you
            waive the right to a trial by jury.
          </p>

          <h3>2. Exceptions to Arbitration</h3>
          <p>This arbitration agreement does not apply to:</p>
          <ul className="legalList">
            <li>Cases that qualify to be resolved in small claims court.</li>
            <li>
              Claims seeking injunctive or equitable relief to stop the unauthorized use, theft, or infringement
              of intellectual property (including proprietary code, APIs, and published manuscripts).
            </li>
          </ul>

          <h3>3. Class Action Waiver</h3>
          <p>
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and
            not in a class, consolidated, or representative action. The arbitrator may not consolidate more than
            one person&apos;s claims and may not otherwise preside over any form of a representative or class
            proceeding.
          </p>

          <h3>4. Arbitration Process</h3>
          <p>
            The arbitration shall be administered according to the commercial arbitration rules of a recognized
            dispute resolution provider, such as the American Arbitration Association (AAA). The arbitration
            shall take place in your designated jurisdiction or virtually, as mutually agreed upon. The
            arbitrator&apos;s award shall be binding and may be entered as a judgment in any court of competent
            jurisdiction.
          </p>

          <h3>5. 30-Day Opt-Out Right</h3>
          <p>
            You have the right to opt out of this arbitration agreement by sending written notice of your
            decision to opt out within 30 days of initially accepting these Terms of Service or purchasing a
            service. If you opt out, all disputes will be resolved in the state or federal courts located in
            your designated jurisdiction.
          </p>

          <h2>Questions</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a className="textLink" href="mailto:hello@bennyandpenny.com">hello@bennyandpenny.com</a>. See also our{" "}
            <Link className="textLink" href="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
