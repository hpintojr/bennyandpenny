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

          <h2>Acceptance and Eligibility</h2>
          <p>
            By accessing this site or engaging our services, you confirm that you are at least 18 years old
            and have the authority to enter into these Terms on behalf of yourself or the entity you represent.
            If you do not agree, please do not use the site or our services.
          </p>
          <p>
            Where a signed Statement of Work (SOW), publishing agreement, or platform checkout terms exist,
            those documents control for that engagement and take precedence over these general Terms to the
            extent of any conflict.
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

          <h2>Intellectual Property</h2>

          <h3>1. Deliverables</h3>
          <p>
            Unless a signed SOW or publishing agreement states otherwise, ownership of final, paid-for
            deliverables transfers to you upon our receipt of full payment. Until full payment is received, all
            work product remains our property.
          </p>

          <h3>2. Pre-Existing and Background IP</h3>
          <p>
            We retain all rights to our pre-existing tools, frameworks, libraries, templates, know-how, and any
            general-purpose components used to create deliverables. We grant you a non-exclusive license to use
            those components solely as incorporated into your deliverables.
          </p>

          <h3>3. Your Content</h3>
          <p>
            You retain ownership of the content, data, manuscripts, and materials you provide. You grant us a
            limited license to use them as needed to perform the services, and you represent that you have the
            rights to all materials you provide.
          </p>

          <h3>4. Portfolio Use</h3>
          <p>
            Unless you request otherwise in writing, we may identify you as a client and display non-confidential
            aspects of completed work in our portfolio and marketing.
          </p>

          <h3>5. Site Content</h3>
          <p>
            All content on bennyandpenny.com — including text, design, logos, and the Benny &amp; Penny&apos;s
            marks — is owned by us or our licensors and may not be copied or reused without permission.
          </p>

          <h2>Acceptable Use</h2>
          <p>When using our site, platforms, or services, you agree not to:</p>
          <ul className="legalList">
            <li>Use them for any unlawful, infringing, harmful, or fraudulent purpose.</li>
            <li>Attempt to gain unauthorized access to, disrupt, or reverse engineer our systems, code, or APIs.</li>
            <li>Introduce malware, scrape at scale, or abuse rate limits or automated/AI features.</li>
            <li>Upload content you do not have the right to use, or that is unlawful or violates third-party rights.</li>
          </ul>
          <p>We may suspend or terminate access for conduct that violates this section.</p>

          <h2>Confidentiality</h2>
          <p>
            Each party may receive non-public information from the other. Both parties agree to use such
            confidential information only to perform under these Terms or an applicable agreement, and to protect
            it with reasonable care. This does not apply to information that is or becomes public, is
            independently developed, or is required to be disclosed by law.
          </p>

          <h2>Warranties and Disclaimer</h2>
          <p>
            We perform services in a professional and workmanlike manner. Except as expressly stated in a signed
            agreement, the site, platforms, and services are provided &quot;as is&quot; and &quot;as available,&quot;
            without warranties of any kind, whether express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement. We do not warrant that the services will be uninterrupted,
            error-free, or free of harmful components, and we are not responsible for third-party platforms,
            APIs, or infrastructure outside our control.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or for lost profits, revenue, data, or goodwill, arising out of
            or relating to the site or services. Our total aggregate liability for any claim will not exceed the
            amount you paid us for the specific service giving rise to the claim during the three (3) months
            preceding the event, or one hundred U.S. dollars ($100) if no fees were paid.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Benny &amp; Penny&apos;s — A Tech Company, and Hamilton
            Pinto Jr., from any claims, damages, liabilities, and reasonable legal fees arising from your
            content, your use of the services, or your violation of these Terms or applicable law.
          </p>

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

          <h2>Governing Law and Venue</h2>
          <p>
            These Terms are governed by the laws of the State of California, without regard to its
            conflict-of-laws rules. Subject to the arbitration provisions above, any matter not subject to
            arbitration will be brought exclusively in the state or federal courts located in California, and you
            consent to their jurisdiction.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Material changes take effect when posted, as indicated
            by the updated effective date above. Your continued use of the site or services after changes are
            posted constitutes acceptance of the revised Terms.
          </p>

          <h2>Miscellaneous</h2>
          <ul className="legalList">
            <li><strong>Entire agreement:</strong> these Terms, together with any signed SOW, publishing agreement, or checkout terms, are the entire agreement between us regarding their subject matter.</li>
            <li><strong>Order of precedence:</strong> if there is a conflict, a signed SOW or publishing agreement controls first, then checkout terms, then these Terms.</li>
            <li><strong>Severability:</strong> if any provision is found unenforceable, the remaining provisions stay in effect.</li>
            <li><strong>Waiver:</strong> failure to enforce a provision is not a waiver of it.</li>
            <li><strong>Assignment:</strong> you may not assign these Terms without our written consent; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Force majeure:</strong> neither party is liable for delays or failures caused by events beyond its reasonable control.</li>
          </ul>

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
