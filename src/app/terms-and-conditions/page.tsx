import { Metadata } from "next";
import Link from "next/link";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions | Brain Box Solutions",
  description:
    "Review the terms and conditions governing the use of the Brain Box Solutions website, IT consulting services, and enterprise cloud hosting solutions.",
  alternates: {
    canonical: "https://brainboxsolutions.net/terms-and-conditions",
  },
};

const sections: PolicySection[] = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "scope-distinction", title: "Website Terms vs. Cloud Service Contracts" },
  { id: "intellectual-property", title: "Intellectual Property & Website Content" },
  { id: "service-descriptions", title: "Service Descriptions, Proposals & Quotes" },
  { id: "customer-obligations", title: "Customer Responsibilities & Account Security" },
  { id: "third-party-software", title: "Third-Party Software, Licences & Dependencies" },
  { id: "availability-maintenance", title: "Service Availability & Scheduled Maintenance" },
  { id: "billing-payments", title: "Fees, Invoicing, Renewals & Payment Terms" },
  { id: "limitation-liability", title: "Warranties & Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "suspension-termination", title: "Suspension & Account Termination" },
  { id: "governing-law", title: "Governing Law & Dispute Resolution" },
  { id: "contact-amendments", title: "Modifications to Terms & Contact Desk" },
];

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      badge="Legal Governance"
      lastUpdated="October 2026"
      description="These terms govern your access to the Brain Box Solutions website, online inquiries, and the contractual framework applied to our enterprise cloud and infrastructure hosting services."
      sections={sections}
    >
      {/* 1. Acceptance */}
      <section id="acceptance" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          Welcome to Brain Box Solutions (&quot;Brain Box Solutions&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing, browsing, or using our website located at{" "}
          <a href="https://brainboxsolutions.net" className="text-blue-600 hover:underline">
            https://brainboxsolutions.net
          </a>
          , or by engaging our cloud hosting, server infrastructure, or remote application services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (&quot;Terms&quot;).
        </p>
        <p>
          If you are entering into this agreement on behalf of a company, corporate enterprise, partnership, or other legal entity, you represent and warrant that you possess the legal authority to bind that entity to these Terms. If you do not have such authority, or if you do not agree with any part of these Terms, you must immediately refrain from using our website and services.
        </p>
      </section>

      {/* 2. Scope Distinction */}
      <section id="scope-roles" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Scope: Website Terms vs. Cloud Service Contracts
        </h2>
        <p>
          It is essential to distinguish between public website usage and contracted cloud infrastructure services:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              Public Website Visitors
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Browsing our website, reading technical insights, and sending inquiries are governed solely by these online Terms and our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              . No commercial service warranties apply to informational website browsing.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
            <h3 className="font-bold text-blue-950 text-sm mb-2">
              Contracted Cloud &amp; Hosting Clients
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Purchased hosting, virtual private servers, dedicated server leases, Tally on Cloud instances, and enterprise backup subscriptions are governed by individualized <strong>Master Services Agreements (MSA)</strong>, Statements of Work (SOW), or written Service Orders. In the event of any conflict between these general website terms and a signed MSA, the signed enterprise contract shall prevail.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Intellectual Property &amp; Website Content
        </h2>
        <p>
          All content published on this website—including but not limited to text, graphics, logos, button icons, software architecture descriptions, diagrams, service names, and interface layouts—is the exclusive intellectual property of Brain Box Solutions or its licensors and is protected by applicable Indian and international copyright, trademark, and unfair competition laws.
        </p>
        <p>
          You are granted a limited, revocable, non-exclusive, non-transferable license to access and display website materials solely for your personal or internal business evaluation of our services. You may not copy, reproduce, republish, decompile, scrape, reverse engineer, or create derivative works from this website without our explicit prior written consent.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
          <strong className="text-slate-900">Third-Party Trademarks:</strong> Tally, TallyPrime, and Tally.ERP are trademarks of Tally Solutions Pvt. Ltd. Microsoft Windows Server, Remote Desktop Services (RDS), and related software are trademarks of Microsoft Corporation. TSPlus, TSPrint, and TSScan are trademarks of their respective software vendors. All third-party trademarks are recognized and remain the sole property of their respective owners.
        </div>
      </section>

      {/* 4. Service Descriptions */}
      <section id="service-descriptions" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Service Descriptions, Proposals &amp; Quotes
        </h2>
        <p>
          Brain Box Solutions strives to maintain precise, current, and clear information regarding our cloud capabilities, dedicated server specifications, and software deployment solutions. However:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Estimations &amp; Custom Sizing:</strong> Server resource calculators, benchmark metrics, and bandwidth configurations displayed on the website serve as illustrative guidelines. Final technical specifications are defined based on the client&apos;s specific concurrency and workload sizing.
          </li>
          <li>
            <strong>Quotations Validity:</strong> Commercial quotations and infrastructure estimates issued in writing or via digital proposals remain valid for the period specified on the quotation (standardly 15 calendar days from issuance) and are subject to component hardware availability and exchange rate stability.
          </li>
          <li>
            <strong>Right to Refuse:</strong> Brain Box Solutions reserves the right to decline service inquiries, cancel unfulfilled provisioning requests, or modify technical roadmaps where technological incompatibility or compliance risks are identified.
          </li>
        </ul>
      </section>

      {/* 5. Customer Obligations */}
      <section id="customer-obligations" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Customer Responsibilities &amp; Account Security
        </h2>
        <p>
          When deploying applications or leasing computing capacity through Brain Box Solutions, the client undertakes full responsibility for:
        </p>
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Credential Confidentiality:</strong> Safeguarding administrative login credentials, SSH keypairs, Remote Desktop (RDP) passwords, and multi-factor authentication (MFA) tokens provided for cloud instance access.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Authorized User Governance:</strong> Ensuring that only designated employees, accountants, or authorized contractors access hosted environments. The client is solely liable for all actions executed under their provisioned credentials.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Acceptable Usage:</strong> Strictly complying with our{" "}
              <Link href="/acceptable-use-policy" className="text-blue-600 hover:underline">
                Acceptable Use Policy
              </Link>
              . Under no circumstances may client instances be used for malicious scanning, unsolicited bulk email (SPAM), denial-of-service activities, or hosting unlawful media.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Third-Party Software */}
      <section id="third-party-software" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Third-Party Software, Licences &amp; Dependencies
        </h2>
        <p>
          Our cloud environments frequently host or interface with third-party software products:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Client Software Licensing (BYOL):</strong> Unless explicitly bundled and invoiced by Brain Box Solutions under an authorized reseller arrangement, customers must possess genuine, legal licenses for software executed within their environments (such as TallyPrime licenses, Microsoft Office, or proprietary ERP software).
          </li>
          <li>
            <strong>End-User License Agreements (EULA):</strong> Customers agree to comply with all respective vendor EULAs, terms of service, and usage boundaries set forth by Microsoft, Tally Solutions, TSPlus, and peripheral software publishers.
          </li>
          <li>
            <strong>Vendor Upgrades &amp; Breaking Changes:</strong> Brain Box Solutions is not liable for operational incompatibilities, feature removals, or data migrations caused by upstream third-party software updates or operating system patches.
          </li>
        </ul>
      </section>

      {/* 7. Availability & Maintenance */}
      <section id="availability-maintenance" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Service Availability &amp; Scheduled Maintenance
        </h2>
        <p>
          Brain Box Solutions engineers its cloud hosting and network architecture for continuous high availability. However, continuous, uninterrupted, and error-free operation cannot be guaranteed across public internet routing nodes.
        </p>
        <p>
          For specific commitments, response intervals, and uptime criteria governing production instances, please consult our formal{" "}
          <Link href="/service-level-agreement" className="text-blue-600 hover:underline">
            Service Level Agreement (SLA)
          </Link>
          .
        </p>
        <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-600">
          <strong>Routine Maintenance Windows:</strong> Scheduled hypervisor updates, security patching, and core network maintenance are generally executed during off-peak hours (between 12:00 AM and 05:00 AM IST) with advance advisory notifications dispatched to primary account contacts.
        </div>
      </section>

      {/* 8. Billing & Payments */}
      <section id="billing-payments" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Fees, Invoicing, Renewals &amp; Payment Terms
        </h2>
        <p>
          Commercial terms for provisioned hosting resources are structured as follows:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Advance Invoicing:</strong> Cloud hosting subscriptions, dedicated server leases, and managed backup services are billed in advance on a recurring monthly, quarterly, or annual billing cycle.
          </li>
          <li>
            <strong>Taxes &amp; Statutory Levies:</strong> Stated quotations and fees are exclusive of applicable Indian Goods and Services Tax (GST) unless explicitly noted otherwise. Valid GST invoices are generated upon payment confirmation.
          </li>
          <li>
            <strong>Renewal &amp; Due Dates:</strong> Invoices must be settled by the specified due date. Failure to remit payment may result in temporary service restriction, bandwidth suspension, or instance de-allocation as detailed in our{" "}
            <Link href="/cancellation-refund-policy" className="text-blue-600 hover:underline">
              Cancellation and Refund Policy
            </Link>
            .
          </li>
        </ul>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Commercial Agreement Notice:</strong> Specific enterprise credit periods, dedicated hardware security deposits, and customized SLA penalties are determined on an individual customer basis and recorded in the client&apos;s signed Master Services Agreement.
        </div>
      </section>

      {/* 9. Limitation of Liability */}
      <section id="limitation-liability" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          9. Warranties &amp; Limitation of Liability
        </h2>
        <p>
          Except as expressly warranted in a signed enterprise SLA, our website, infrastructure, and services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, whether express, implied, or statutory.
        </p>
        <p className="font-semibold text-slate-900 text-sm">
          To the maximum extent permitted by applicable Indian law:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            Brain Box Solutions disclaims all implied warranties of merchantability, fitness for a particular business purpose, uninterrupted continuity, or non-infringement.
          </li>
          <li>
            In no event shall Brain Box Solutions, its partners, directors, or employees be liable for any indirect, incidental, special, punitive, consequential, or exemplary damages—including but not limited to loss of profits, commercial interruption, lost business goodwill, accounting discrepancies, or loss of corrupt customer data.
          </li>
          <li>
            Our total aggregate financial liability arising out of or related to our services—regardless of the cause of action (whether in contract, tort, negligence, or strict liability)—shall be capped at the total amount actually paid by the client to Brain Box Solutions for the specific service giving rise to the claim during the preceding one (1) month immediately prior to the event.
          </li>
        </ul>
      </section>

      {/* 10. Indemnification */}
      <section id="indemnification" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          10. Indemnification
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless Brain Box Solutions, its proprietors, affiliates, employees, and infrastructure partners from and against any third-party claims, liabilities, damages, losses, expenses, or legal costs (including reasonable advocates&apos; fees) arising out of or related to:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-600">
          <li>Your breach of these Terms or related operational policies;</li>
          <li>The nature, legality, or transmission of data, files, and accounting entries hosted inside your allocated environment;</li>
          <li>Unlicensed or infringing software deployed by you or your end-users;</li>
          <li>Violation of applicable statutory laws or regulations, including the Indian Information Technology Act, 2000.</li>
        </ol>
      </section>

      {/* 11. Suspension & Termination */}
      <section id="suspension-termination" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          11. Suspension &amp; Account Termination
        </h2>
        <p>
          Brain Box Solutions reserves the right to immediately suspend or permanently terminate infrastructure access, without prior liability, under any of the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>Substantial delinquency in payment exceeding agreed grace periods;</li>
          <li>Confirmed breach of our Acceptable Use Policy (such as malware distribution, port scanning, or illegal data hosting);</li>
          <li>Receipt of a binding legal order or written directive from Indian law enforcement agencies, CERT-In, or a court of competent jurisdiction;</li>
          <li>Critical security threats originating from the customer&apos;s server that endanger the integrity of neighboring tenant nodes or datacenter infrastructure.</li>
        </ul>
      </section>

      {/* 12. Governing Law */}
      <section id="governing-law" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          12. Governing Law &amp; Dispute Resolution
        </h2>
        <p>
          These Terms and all commercial engagements shall be governed by, construed, and enforced in accordance with the substantive laws of the <strong>Republic of India</strong>, without regard to conflict of law principles.
        </p>
        <p>
          Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination, or invalidity thereof shall first be submitted to good-faith mutual discussions between authorized executives. If unresolved within thirty (30) days, the dispute shall be subject to the exclusive jurisdiction of the competent civil courts situated in <strong>Mumbai, Maharashtra, India</strong>.
        </p>
      </section>

      {/* 13. Modifications & Contact */}
      <section id="contact-amendments" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          13. Modifications to Terms &amp; Contact Desk
        </h2>
        <p>
          We reserve the right to revise, update, or replace any portion of these Terms at our sole discretion. Updated terms take effect immediately upon posting to this URL with an updated revision date. Your continued utilization of our services or website following any changes signifies your explicit acceptance.
        </p>
        <p>
          For contractual inquiries, legal notices, or clarification regarding these Terms, please contact our administrative desk:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Legal &amp; Contractual Governance</p>
          <p>LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p>
            Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>
          </p>
          <p>
            Telephone:{" "}
            <a href="tel:+919820246622" className="text-blue-600 hover:underline font-semibold">
              +91 98202 46622
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}

