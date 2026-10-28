import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy | Brain Box Solutions",
  description:
    "Review the cancellation terms, notice periods, refund conditions, and data retrieval policies for Brain Box Solutions hosting and infrastructure services.",
  alternates: {
    canonical: "https://brainboxsolutions.net/cancellation-refund-policy",
  },
};

const sections: PolicySection[] = [
  { id: "policy-scope", title: "Scope & Billing Cycles" },
  { id: "cancellation-procedure", title: "Cancellation Procedure & Notice Periods" },
  { id: "data-retrieval-grace", title: "Grace Period & Data Retrieval Prior to Deprovisioning" },
  { id: "non-refundable-items", title: "Non-Refundable Services & Pass-Through Costs" },
  { id: "refund-eligibility", title: "Refund Eligibility & Pro-Rata Guidelines" },
  { id: "dedicated-hardware", title: "Dedicated Hardware Leases & Bespoke Deployments" },
  { id: "billing-disputes", title: "Billing Disputes & Discrepancies" },
  { id: "commercial-verification", title: "Commercial Verification & Contact Desk" },
];

export default function CancellationRefundPolicyPage() {
  return (
    <PolicyLayout
      title="Cancellation and Refund Policy"
      badge="Billing & Subscriptions"
      lastUpdated="October 2026"
      description="This policy establishes the formal terms governing service cancellations, subscription renewals, refund qualifications, and data extraction guidelines across all Brain Box Solutions cloud services."
      sections={sections}
    >
      {/* 1. Scope & Billing */}
      <section id="policy-scope" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Scope &amp; Billing Cycles
        </h2>
        <p>
          Brain Box Solutions provides cloud computing, Tally on Cloud, dedicated servers, remote desktop infrastructure, and managed data backups. Services are provisioned on a prepaid recurring subscription basis (monthly, quarterly, semi-annually, or annually) as selected by the client at the time of order confirmation.
        </p>
        <p>
          Unless written notice of cancellation is provided in accordance with this policy, subscriptions automatically renew at the conclusion of each billing cycle to preserve operational continuity of mission-critical accounting and business databases.
        </p>
      </section>

      {/* 2. Cancellation Procedure */}
      <section id="cancellation-procedure" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Cancellation Procedure &amp; Notice Periods
        </h2>
        <p>
          To maintain billing integrity and prevent unauthorized server teardowns, all cancellation requests must follow our formal verification protocol:
        </p>
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Written Request Requirement:</strong> Cancellation requests must be transmitted in writing from the registered primary account email address to{" "}
              <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
                info@brainboxsolutions.net
              </a>
              . Verbal cancellations via phone or casual messaging are not deemed legally valid without written email confirmation.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Advance Notice Standard:</strong> For standard monthly cloud subscriptions, cancellation requests must be submitted at least <strong>fifteen (15) calendar days prior</strong> to the next scheduled renewal billing date. For quarterly or annual agreements, a minimum of <strong>thirty (30) calendar days</strong> notice is standard.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0" />
            <p>
              <strong>Account Settlement:</strong> Outstanding invoices for bandwidth overages, supplementary storage, or prior support milestones must be settled in full prior to contract closure.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Grace Period & Data Retrieval */}
      <section id="data-retrieval-grace" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Grace Period &amp; Data Retrieval Prior to Deprovisioning
        </h2>
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-3">
          <h3 className="font-bold text-sm text-amber-900">Important Data Protection Timeline</h3>
          <p className="leading-relaxed">
            The customer is solely responsible for extracting, copying, and archiving all hosted databases, Tally data folders, and user documents prior to the effective cancellation date.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>
              <strong>Active Service Window:</strong> Full administrative RDP and FTP access remains available until the final day of the paid subscription term.
            </li>
            <li>
              <strong>Post-Expiry Grace Retention:</strong> Following expiration or verified cancellation, Brain Box Solutions maintains a protective data freeze window of <strong>seven (7) to fifteen (15) calendar days</strong> before permanent volume formatting.
            </li>
            <li>
              <strong>Permanent Deletion:</strong> After the grace period concludes, servers are wiped, storage partitions zeroed, and backup snapshot jobs terminated permanently without recovery capability.
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Non-Refundable Items */}
      <section id="non-refundable-items" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Non-Refundable Services &amp; Pass-Through Costs
        </h2>
        <p>
          The following products, services, and operational charges are strictly non-refundable once ordered or provisioned:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Initial Setup &amp; Migration Fees:</strong> One-time engineering costs for server provisioning, hypervisor configuration, Tally data migration, and firewall hardening;
          </li>
          <li>
            <strong>Third-Party Software Licences:</strong> Dedicated software licenses procured on behalf of the customer—including TSPlus permanent licenses, TSPrint/TSScan licenses, Microsoft Windows Server CALs, or antivirus seats—as vendor licensing fees are paid upfront and cannot be rescinded;
          </li>
          <li>
            <strong>Consumed Bandwidth &amp; Compute:</strong> Any hosting time already elapsed or network egress bandwidth consumed during the active billing period;
          </li>
          <li>
            <strong>SSL Certificates &amp; Domain Names:</strong> Any statutory registry domain fees or SSL certificate issuances acquired through our infrastructure partners.
          </li>
        </ul>
      </section>

      {/* 5. Refund Eligibility */}
      <section id="refund-eligibility" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Refund Eligibility &amp; Pro-Rata Guidelines
        </h2>
        <p>
          Refunds are evaluated objectively based on service status and performance criteria:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs text-slate-600">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Unprovisioned Services</h4>
            <p className="leading-relaxed">
              If an order is cancelled prior to physical hardware provisioning, hypervisor allocation, or software license registration, a refund of recurring hosting fees may be granted, less nominal payment gateway processing charges.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Prepaid Multi-Month / Annual Terms</h4>
            <p className="leading-relaxed">
              Where an annual or semi-annual contract is terminated early by mutual agreement, any pro-rata refund for remaining unutilized full calendar months will be recalculated based on standard non-discounted monthly rack rates.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic">
          Approved refunds will be processed via original banking payment modes (NEFT, RTGS, or original payment gateway) within 10 to 14 business days following written approval.
        </p>
      </section>

      {/* 6. Dedicated Hardware */}
      <section id="dedicated-hardware" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Dedicated Hardware Leases &amp; Bespoke Deployments
        </h2>
        <p>
          Leases for high-performance bare-metal servers, custom RAM/NVMe storage builds, or isolated networking racks are procured and reserved under strict datacenter supplier commitments.
        </p>
        <p className="text-sm text-slate-600">
          Consequently, dedicated server leases carry a mandatory minimum commitment period (typically 3, 6, or 12 months as indicated on the purchase proposal). Early termination before the end of the contracted commitment term remains subject to full payment of remaining contracted monthly hardware charges.
        </p>
      </section>

      {/* 7. Billing Disputes */}
      <section id="billing-disputes" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Billing Disputes &amp; Discrepancies
        </h2>
        <p>
          If you believe an invoice contains an error or calculation discrepancy, you must notify our billing team within <strong>ten (10) calendar days</strong> of invoice receipt. Both parties agree to review usage logs and invoice details in good faith. Undisputed invoice portions must be paid by the due date to avoid automated service suspension.
        </p>
      </section>

      {/* 8. Commercial Verification */}
      <section id="commercial-verification" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Commercial Verification &amp; Contact Desk
        </h2>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Commercial Policy Note:</strong> Specific refund clauses, trial money-back guarantees (if any), and cancellation charge schedules are customized in individual customer Master Services Agreements. Nothing in this policy modifies signed bespoke contract terms.
        </div>
        <p className="text-sm text-slate-600 pt-2">
          To initiate a cancellation, request invoice review, or clarify billing terms:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Billing &amp; Subscriptions Desk</p>
          <p>LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p>
            Billing Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>
          </p>
          <p>
            Accounts Telephone:{" "}
            <a href="tel:+919820246622" className="text-blue-600 hover:underline font-semibold">
              +91 98202 46622
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}
