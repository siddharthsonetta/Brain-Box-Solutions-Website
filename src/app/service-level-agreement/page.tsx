import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) | Brain Box Solutions",
  description:
    "Review our infrastructure availability targets, maintenance windows, support response benchmarks, and escalation protocols for Brain Box Solutions cloud hosting.",
  alternates: {
    canonical: "https://brainboxsolutions.net/service-level-agreement",
  },
};

const sections: PolicySection[] = [
  { id: "sla-scope", title: "Scope & Applicability" },
  { id: "uptime-target", title: "Target Infrastructure Availability" },
  { id: "maintenance-windows", title: "Scheduled Maintenance & Outages" },
  { id: "support-channels", title: "Support Channels & Availability" },
  { id: "severity-response", title: "Incident Severity & Response Benchmarks" },
  { id: "escalation-matrix", title: "Escalation Matrix & Incident Management" },
  { id: "sla-exclusions", title: "Exclusions & Relief Events" },
  { id: "service-credits", title: "Service Credits & Contractual Remedies" },
  { id: "customer-responsibilities", title: "Customer Responsibilities for SLA Adherence" },
];

export default function ServiceLevelAgreementPage() {
  return (
    <PolicyLayout
      title="Service Level Agreement"
      badge="Service Performance & Reliability"
      lastUpdated="October 2026"
      description="This Service Level Agreement defines the operational availability targets, response time commitments, and maintenance standards governing Brain Box Solutions managed cloud and dedicated hosting environments."
      sections={sections}
    >
      {/* 1. SLA Scope */}
      <section id="sla-scope" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Scope &amp; Applicability
        </h2>
        <p>
          This Service Level Agreement (&quot;SLA&quot;) establishes the standard operating commitments provided by Brain Box Solutions for contracted enterprise infrastructure services, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li><strong>Tally on Cloud:</strong> Multi-user hosted TallyPrime application servers;</li>
          <li><strong>Dedicated Servers:</strong> Leased bare-metal and private virtualized server nodes (Windows and Linux);</li>
          <li><strong>Cloud Remote Workspaces:</strong> TSPlus Remote Desktop and application publishing infrastructure;</li>
          <li><strong>Enterprise Cloud Backup:</strong> Managed backup repositories and automated replication pipelines.</li>
        </ul>
        <p>
          This SLA applies to active, paid enterprise subscriptions in good financial standing. It does not apply to free trial environments, proofs-of-concept, or public website browsing.
        </p>
      </section>

      {/* 2. Target Uptime */}
      <section id="uptime-target" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Target Infrastructure Availability
        </h2>
        <p>
          Brain Box Solutions strives to maintain continuous, enterprise-grade availability across all provisioned core compute, hypervisor, storage, and network routing tiers.
        </p>
        <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 text-sm">Target Monthly Network &amp; Host Availability</span>
            <span className="text-xl font-extrabold text-blue-700">99.9%</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Infrastructure availability is calculated as the total percentage of minutes in a given calendar month during which core host nodes and upstream network connectivity are operational and responsive, excluding permissible scheduled maintenance windows and external exclusion events.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Enterprise Verification Note:</strong> The 99.9% availability target represents our baseline operational design goal. Customized mission-critical high-availability (HA) clustering or multi-datacenter replication setups with bespoke contractual penalty formulas are defined in individualized client Master Services Agreements.
        </div>
      </section>

      {/* 3. Scheduled Maintenance */}
      <section id="maintenance-windows" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Scheduled Maintenance &amp; Outages
        </h2>
        <p>
          To maintain rigorous hardware health, hypervisor resilience, and essential operating system security patches, Brain Box Solutions periodically performs scheduled preventive maintenance:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Routine Maintenance Windows</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard maintenance is scheduled during off-peak hours, typically between <strong>12:00 AM and 05:00 AM IST (Indian Standard Time)</strong>. Clients are notified at least 24 to 48 hours in advance via email or operational WhatsApp channels.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Emergency Security Hotfixes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In cases where critical zero-day vulnerabilities, active threat mitigations, or immediate hardware failures require instant remediation, Brain Box Solutions reserves the right to apply emergency patches with the shortest possible advance advisory.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic">
          Scheduled maintenance windows carried out within communicated timeframes do not count toward monthly downtime calculations.
        </p>
      </section>

      {/* 4. Support Channels */}
      <section id="support-channels" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Support Channels &amp; Availability
        </h2>
        <p>
          Technical support is accessible through verified enterprise communication channels:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-1">Telephone Support</h4>
            <p className="text-xs text-slate-600 mb-2">Priority voice assistance for urgent outages.</p>
            <a href="tel:+919820246622" className="text-xs font-semibold text-blue-600 hover:underline">
              +91 98202 46622
            </a>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-1">Help Desk Email</h4>
            <p className="text-xs text-slate-600 mb-2">Written ticket creation with log attachments.</p>
            <a href="mailto:info@brainboxsolutions.net" className="text-xs font-semibold text-blue-600 hover:underline break-all">
              info@brainboxsolutions.net
            </a>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-1">Dedicated WhatsApp</h4>
            <p className="text-xs text-slate-600 mb-2">Fast operational desk for registered clients.</p>
            <span className="text-xs font-semibold text-emerald-600">+91 98202 46622</span>
          </div>
        </div>
        <p className="text-xs text-slate-600">
          <strong>Operating Hours:</strong> Standard support operates <strong>Monday through Saturday, 10:00 AM – 7:00 PM IST</strong>. Automated 24/7 host ping monitoring alerts our on-duty infrastructure engineers to core datacenter or hardware failures around the clock.
        </p>
      </section>

      {/* 5. Severity & Response */}
      <section id="severity-response" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Incident Severity &amp; Target Response Benchmarks
        </h2>
        <p>
          Support incidents are categorized by severity to guarantee appropriate engineering prioritization. The following represent target initial response intervals from confirmation of receipt:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Severity Level</th>
                <th className="p-3">Impact Definition</th>
                <th className="p-3">Target First Response</th>
                <th className="p-3">Update Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-red-600">P1 — Critical</td>
                <td className="p-3 text-slate-600">Entire cloud server is down, unreachable, or hypervisor offline; business operations halted.</td>
                <td className="p-3 font-semibold text-slate-900">1 – 2 Hours</td>
                <td className="p-3 text-slate-600">Every 1 – 2 hours until stabilized</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-amber-600">P2 — High</td>
                <td className="p-3 text-slate-600">Severe latency, individual RDP session failures, printing subsystem failure affecting multiple users.</td>
                <td className="p-3 font-semibold text-slate-900">4 Hours</td>
                <td className="p-3 text-slate-600">Every 4 hours during business day</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-blue-600">P3 — Normal</td>
                <td className="p-3 text-slate-600">General user provisioning, disk expansion request, backup snapshot download, general configuration inquiries.</td>
                <td className="p-3 font-semibold text-slate-900">12 – 24 Business Hours</td>
                <td className="p-3 text-slate-600">As milestones are resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">
          Target response times indicate when an engineer begins substantive triage and analysis of the reported incident. Total resolution time depends on the nature of hardware replacement, software debugging, or external dependency restoration.
        </p>
      </section>

      {/* 6. Escalation */}
      <section id="escalation-matrix" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Escalation Matrix &amp; Incident Management
        </h2>
        <p>
          If an incident is not acknowledged or adequately progressed within the target benchmark windows, clients may invoke our multi-tier escalation hierarchy:
        </p>
        <div className="space-y-3 text-xs text-slate-600">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Level 1</span>
            <div>
              <p className="font-semibold text-slate-900">Infrastructure Support Desk</p>
              <p>Initial ticket logging, credential verification, remote diagnostic reboot, first-level network trace.</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Level 2</span>
            <div>
              <p className="font-semibold text-slate-900">Senior Systems Administrator / Cloud Architect</p>
              <p>Hypervisor-level debugging, firewall rule modification, storage array rebuild, OS kernel recovery.</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
            <span className="font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] shrink-0">Level 3</span>
            <div>
              <p className="font-semibold text-slate-900">Head of Operations / Technical Director</p>
              <p>Datacenter hardware physical replacement, carrier BGP routing escalation, contractual SLA review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Exclusions */}
      <section id="sla-exclusions" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Exclusions &amp; Relief Events
        </h2>
        <p>
          Brain Box Solutions shall not be deemed in breach of availability benchmarks, nor liable for downtime, under the following exclusion conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Scheduled Maintenance:</strong> Outages occurring during declared maintenance windows communicated in advance;
          </li>
          <li>
            <strong>External ISP &amp; Carrier Outages:</strong> Disruptions in local broadband, 4G/5G mobile carriers, or national Tier-1 transit backbones outside our datacenter core;
          </li>
          <li>
            <strong>Client-Side Modifications:</strong> Misconfigurations executed by client administrators (e.g., misconfigured Windows Firewall rules, deleted system DLLs, exhausted internal drive partitions);
          </li>
          <li>
            <strong>Third-Party Application Bugs:</strong> Corruptions or crashes residing entirely within client software (such as unhandled Tally TDL customizations, accounting data file corruption, or unpatched third-party plugins);
          </li>
          <li>
            <strong>Suspension for Non-Payment / Abuse:</strong> Server disconnections resulting from overdue account delinquency or violations of our Acceptable Use Policy;
          </li>
          <li>
            <strong>Force Majeure Events:</strong> Natural disasters, civic disturbances, acts of government or statutory telecommunication cutoffs beyond human control.
          </li>
        </ul>
      </section>

      {/* 8. Service Credits */}
      <section id="service-credits" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Service Credits &amp; Contractual Remedies
        </h2>
        <p>
          Where an enterprise client holds a signed Master Services Agreement incorporating SLA penalty clauses, non-performance of guaranteed monthly availability may qualify the account for service credits applicable against future recurring hosting invoices.
        </p>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <p>
            <strong>Credit Claim Procedure:</strong> Credit requests must be submitted in writing to{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-medium">
              info@brainboxsolutions.net
            </a>{" "}
            within ten (10) business days following the calendar month in which the downtime incident occurred, including ticket numbers and outage timestamps.
          </p>
          <p>
            Service credits are non-cash adjustments credited against subsequent service invoices. Total cumulative credits for any single monthly billing period shall not exceed 25% of that month&apos;s base recurring hosting fee for the affected service.
          </p>
        </div>
      </section>

      {/* 9. Customer Responsibilities */}
      <section id="customer-responsibilities" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          9. Customer Responsibilities for SLA Adherence
        </h2>
        <p>
          To enable Brain Box Solutions to maintain performance standards, customers agree to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>Maintain up-to-date administrative contact details and designated technical escalation contacts;</li>
          <li>Promptly grant diagnostic credentials or remote viewing permissions during troubleshooting investigations;</li>
          <li>Refrain from disabling core antivirus, security agents, or system backup utilities installed by Brain Box Solutions;</li>
          <li>Regularly monitor local user bandwidth utilization and ensure end-user network stability.</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
