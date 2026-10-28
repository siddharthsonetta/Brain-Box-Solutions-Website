import { Metadata } from "next";
import Link from "next/link";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Technical Support Policy | Brain Box Solutions",
  description:
    "Review our technical support policy, operational hours, official support channels, service boundaries, and severity response targets for Brain Box Solutions.",
  alternates: {
    canonical: "https://brainboxsolutions.net/support-policy",
  },
};

const sections: PolicySection[] = [
  { id: "support-scope", title: "Support Scope: In-Scope vs. Out-of-Scope" },
  { id: "official-channels", title: "Official Support Channels & Contact Methods" },
  { id: "operating-hours", title: "Business Hours & 24/7 Monitoring" },
  { id: "severity-tiers", title: "Severity Classifications & Target Response Times" },
  { id: "escalation-matrix", title: "Multi-Tier Escalation Hierarchy" },
  { id: "customer-cooperation", title: "Customer Collaboration & Troubleshooting Guidelines" },
  { id: "third-party-dependencies", title: "Upstream & Third-Party Software Dependencies" },
  { id: "policy-governance", title: "Policy Amendments & Contractual Linkage" },
];

export default function SupportPolicyPage() {
  return (
    <PolicyLayout
      title="Technical Support Policy"
      badge="Customer Care & Operations"
      lastUpdated="October 2026"
      description="This Support Policy clarifies the scope of technical assistance, operational hours, communication channels, response targets, and customer responsibilities for Brain Box Solutions services."
      sections={sections}
    >
      {/* 1. Support Scope */}
      <section id="support-scope" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Support Scope: In-Scope vs. Out-of-Scope
        </h2>
        <p>
          Brain Box Solutions delivers managed infrastructure, cloud virtualization, and remote application deployment solutions. To set clear expectations and ensure efficient ticket resolution, we clearly delineate covered technical areas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
            <h3 className="font-bold text-emerald-950 text-sm mb-2">
              &check; What Is Covered (In-Scope)
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>&bull; Server hypervisor availability and physical hardware health;</li>
              <li>&bull; Core datacenter network routing, firewall ports, and IP reachability;</li>
              <li>&bull; Guest operating system boot issues and fundamental OS services;</li>
              <li>&bull; TSPlus Remote Desktop gateway connectivity and user license activation;</li>
              <li>&bull; Configuration and verification of automated cloud backup snapshots;</li>
              <li>&bull; TSPrint / TSScan virtual driver server-side pipeline support.</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">
              &cross; What Is Excluded (Out-of-Scope)
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>&bull; Customer accounting ledger reconciliation, trial balances, or tax audits;</li>
              <li>&bull; Debugging custom third-party Tally Definition Language (TDL) code;</li>
              <li>&bull; Internal bugs within third-party proprietary ERP or database software;</li>
              <li>&bull; Local office Wi-Fi, Ethernet switches, or broadband ISP troubleshooting;</li>
              <li>&bull; Physical repair or maintenance of client end-user laptops and PCs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Official Channels */}
      <section id="official-channels" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Official Support Channels &amp; Contact Methods
        </h2>
        <p>
          All support inquiries must be routed through verified channels to ensure proper logging, timestamping, and technical tracking:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Help Desk Email</h4>
            <p className="mb-2">Recommended for detailed inquiries and attaching screenshots.</p>
            <a href="mailto:info@brainboxsolutions.net" className="font-semibold text-blue-600 hover:underline break-all">
              info@brainboxsolutions.net
            </a>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Priority Phone Hotline</h4>
            <p className="mb-2">Direct voice assistance for critical server interruptions.</p>
            <a href="tel:+919820246622" className="font-semibold text-blue-600 hover:underline">
              +91 98202 46622
            </a>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Dedicated WhatsApp</h4>
            <p className="mb-2">Operational chat desk for rapid status checks.</p>
            <span className="font-semibold text-emerald-600">+91 98202 46622</span>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic">
          To maintain ticket integrity, do not dispatch support requests to personal employee mobile numbers or unofficial email addresses.
        </p>
      </section>

      {/* 3. Operating Hours */}
      <section id="operating-hours" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Business Hours &amp; 24/7 Monitoring
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 my-3">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Standard Help Desk Hours</h4>
            <p className="text-slate-600">
              <strong>Monday to Saturday:</strong> 10:00 AM – 7:00 PM IST (Indian Standard Time)
            </p>
            <p className="text-slate-500">
              During standard hours, our engineering staff handles ticket triage, password resets, configuration adjustments, and user provisioning requests.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <h4 className="font-bold text-blue-950 text-sm">24/7/365 Infrastructure Telemetry</h4>
            <p className="text-slate-600">
              <strong>Continuous Real-Time Telemetry:</strong> 24 Hours / 7 Days a Week
            </p>
            <p className="text-slate-500">
              Automated host health pinging, hypervisor monitoring, and network uplink surveillance run non-stop. On-call engineers are triggered automatically for physical node or network outages outside standard hours.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Severity Tiers */}
      <section id="severity-tiers" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Severity Classifications &amp; Target Response Times
        </h2>
        <p>
          Incidents are evaluated by impact severity. Target response times represent the interval between ticket logging and initial diagnosis by a systems engineer:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Severity Level</th>
                <th className="p-3">Impact Characteristics</th>
                <th className="p-3">Target First Response</th>
                <th className="p-3">Update Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-red-600">Critical (Severity 1)</td>
                <td className="p-3 text-slate-600">Complete server unresponsiveness, host down, or total inability to access Tally across all users.</td>
                <td className="p-3 font-semibold text-slate-900">1 – 2 Hours</td>
                <td className="p-3 text-slate-600">Every 1 – 2 hours until restored</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-amber-600">High (Severity 2)</td>
                <td className="p-3 text-slate-600">Major performance latency, multiple user login failures, remote printing spooler offline.</td>
                <td className="p-3 font-semibold text-slate-900">4 Hours</td>
                <td className="p-3 text-slate-600">Every 4 hours during business day</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-blue-600">Normal (Severity 3)</td>
                <td className="p-3 text-slate-600">New user account provisioning, disk expansion, backup download request, general billing queries.</td>
                <td className="p-3 font-semibold text-slate-900">12 – 24 Business Hours</td>
                <td className="p-3 text-slate-600">Upon milestone progress</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <strong>Resolution Time Clarification:</strong> While we aim for rapid remediation, target response times reflect our commitment to begin technical investigation. Absolute resolution times depend on root cause complexity, required hardware part dispatch, or external software vendor hotfixes.
        </div>
      </section>

      {/* 5. Escalation */}
      <section id="escalation-matrix" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Multi-Tier Escalation Hierarchy
        </h2>
        <p>
          To maintain accountability throughout technical investigations, tickets advance through our escalation structure:
        </p>
        <div className="space-y-3 text-xs text-slate-600">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Tier 1</span>
            <div>
              <p className="font-semibold text-slate-900">Service Desk Specialist</p>
              <p>Receives tickets, checks network reachability, verifies user credentials, restarts remote desktop services, and triages the issue.</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Tier 2</span>
            <div>
              <p className="font-semibold text-slate-900">Cloud Infrastructure Engineer</p>
              <p>Analyzes Windows Server event logs, reconfigures virtual switches, handles snapshot rollbacks, and resolves advanced hypervisor alerts.</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Tier 3</span>
            <div>
              <p className="font-semibold text-slate-900">Technical Director / Infrastructure Lead</p>
              <p>Handles complex hardware replacements, carrier BGP routing escalation, architectural re-provisioning, and senior management escalation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Cooperation */}
      <section id="customer-cooperation" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Customer Collaboration &amp; Troubleshooting Guidelines
        </h2>
        <p>
          Prompt ticket resolution requires effective collaboration between client representatives and our technical team. Clients agree to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li><strong>Authorized Points of Contact:</strong> Ensure support tickets are submitted by designated administrative or IT representatives listed on the account.</li>
          <li><strong>Detailed Issue Description:</strong> Provide exact error codes, screenshots, timestamps, affected usernames, and reproducible steps.</li>
          <li><strong>Remote Diagnostics Access:</strong> Provide remote desktop viewing access (via AnyDesk, TeamViewer, or TSPlus) when client-side workstation behavior needs inspection.</li>
          <li><strong>Non-Interference:</strong> Avoid modifying system registry keys, disabling security firewalls, or altering core hypervisor drivers without prior consultation with our team.</li>
        </ul>
      </section>

      {/* 7. Third-Party Dependencies */}
      <section id="third-party-dependencies" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Upstream &amp; Third-Party Software Dependencies
        </h2>
        <p>
          Where an incident originates from third-party vendor software (such as an unhandled exception inside a TallyPrime release, a Microsoft Windows Server cumulative update bug, or local ISP routing blocks), Brain Box Solutions will act in good faith to assist in isolating the fault.
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          However, Brain Box Solutions cannot guarantee resolution timelines that depend on third-party software publishers releasing engineering bugfixes or upstream telecommunication carriers restoring fiber lines.
        </p>
      </section>

      {/* 8. Governance */}
      <section id="policy-governance" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Policy Amendments &amp; Contractual Linkage
        </h2>
        <p>
          This Support Policy is integrated with and subject to our{" "}
          <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">
            Terms and Conditions
          </Link>{" "}
          and our{" "}
          <Link href="/service-level-agreement" className="text-blue-600 hover:underline">
            Service Level Agreement
          </Link>
          . Bespoke support tiers (such as dedicated 24/7 named engineer coverage) can be provisioned under custom enterprise agreements.
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Support Help Desk</p>
          <p>LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p>
            Support Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>
          </p>
          <p>
            Hotline:{" "}
            <a href="tel:+919820246622" className="text-blue-600 hover:underline font-semibold">
              +91 98202 46622
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}

