import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Data Backup and Retention Policy | Brain Box Solutions",
  description:
    "Understand the backup mechanisms, retention lifecycles, recovery procedures, and customer responsibilities for data protection with Brain Box Solutions.",
  alternates: {
    canonical: "https://brainboxsolutions.net/data-backup-policy",
  },
};

const sections: PolicySection[] = [
  { id: "backup-scope", title: "Scope & Architecture" },
  { id: "schedules-frequency", title: "Backup Schedules & Snapshot Frequency" },
  { id: "security-encryption", title: "Storage Security & Encryption Standards" },
  { id: "retention-cycles", title: "Retention Periods & Version Lifecycles" },
  { id: "restoration-procedures", title: "Restoration Procedures, RTO & RPO" },
  { id: "recovery-limitations", title: "Inherent Limitations & Disclaimers" },
  { id: "customer-verification", title: "Customer Verification & Local Archiving" },
  { id: "termination-disposal", title: "Decommissioning & Secure Data Sanitization" },
];

export default function DataBackupPolicyPage() {
  return (
    <PolicyLayout
      title="Data Backup and Retention Policy"
      badge="Business Continuity & Data Protection"
      lastUpdated="October 2026"
      description="This policy details how Brain Box Solutions executes automated snapshot cycles, manages backup retention, assists in disaster recovery, and defines customer obligations for ongoing data verification."
      sections={sections}
    >
      {/* 1. Scope & Architecture */}
      <section id="backup-scope" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Scope &amp; Architecture
        </h2>
        <p>
          At Brain Box Solutions, safeguarding business continuity is central to our cloud hosting and server management offerings. This Data Backup and Retention Policy governs:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li><strong>Tally on Cloud:</strong> Automated snapshots of company data folders (e.g., Tally data directories), transactional vaults, and application configurations;</li>
          <li><strong>Dedicated Servers:</strong> Full-image bare-metal or hypervisor-level snapshots and dedicated disk volume replications;</li>
          <li><strong>Enterprise Cloud Backup:</strong> Immutable secondary off-site repositories engineered for ransomware defense and disaster recovery.</li>
        </ul>
        <p>
          This policy applies specifically to environments provisioned with an active, paid backup plan or bundled managed hosting package. Unmanaged dedicated servers leased without an add-on backup service remain the sole operational backup responsibility of the client.
        </p>
      </section>

      {/* 2. Schedules & Frequency */}
      <section id="schedules-frequency" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Backup Schedules &amp; Snapshot Frequency
        </h2>
        <p>
          For contracted managed instances, backup routines are automated to minimize operational disruption during standard business trading:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2">Automated Daily Snapshots</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard managed accounts undergo automated incremental or differential daily snapshots during off-peak night cycles (typically between 01:00 AM and 04:00 AM IST) to capture end-of-day accounting entries and database commits.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
            <h3 className="font-bold text-blue-950 text-sm mb-2">High-Frequency &amp; Real-Time</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For high-volume transaction centers or enterprise ERP deployments, customized multi-hour incremental backup jobs (e.g., every 2 to 4 hours) or continuous replication can be provisioned as defined in the client&apos;s Service Order.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Security & Encryption */}
      <section id="security-encryption" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Storage Security &amp; Encryption Standards
        </h2>
        <p>
          Data protected by Brain Box Solutions is treated with rigorous defensive safeguards to defend against unauthorized exfiltration and ransomware corruption:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Encryption in Transit:</strong> Snapshot transfers between production hosts and dedicated backup targets utilize hardened Transport Layer Security (TLS 1.3 / SSH) channels.
          </li>
          <li>
            <strong>Encryption at Rest:</strong> Backup volumes stored on secondary disk arrays are encrypted using industry-standard AES-256 bit algorithms.
          </li>
          <li>
            <strong>Air-Gapped / Isolated Repositories:</strong> Backup storage repositories are isolated on separate VLANs with restricted administrative credentials to prevent lateral malware infection if a production OS is compromised.
          </li>
        </ul>
      </section>

      {/* 4. Retention Cycles */}
      <section id="retention-cycles" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Retention Periods &amp; Version Lifecycles
        </h2>
        <p>
          Backup data is maintained according to strict rotation schedules to balance recovery depth with storage efficiency:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-3">Plan Tier</th>
                <th className="p-3">Daily Retention</th>
                <th className="p-3">Weekly / Monthly Snapshots</th>
                <th className="p-3">Archive Lifespan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Standard Managed Plan</td>
                <td className="p-3 text-slate-600">Last 7 rolling daily snapshots</td>
                <td className="p-3 text-slate-600">1 end-of-week baseline</td>
                <td className="p-3 text-slate-600">14 calendar days total</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Enhanced Enterprise Plan</td>
                <td className="p-3 text-slate-600">Last 14 rolling daily snapshots</td>
                <td className="p-3 text-slate-600">4 weekly snapshots</td>
                <td className="p-3 text-slate-600">30 calendar days total</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-900">Custom BCDR / Archival</td>
                <td className="p-3 text-slate-600">Configured per customer SLA</td>
                <td className="p-3 text-slate-600">Quarterly &amp; Annual Baselines</td>
                <td className="p-3 text-slate-600">Up to 1 – 7 years (Contracted)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Retention Confirmation:</strong> Uncontracted or expired snapshots older than the active plan retention limit are automatically purged and permanently overwritten. Clients requiring extended statutory financial retention (such as 8 years for Indian Companies Act compliance) must explicitly contract an extended cold-storage archive tier.
        </div>
      </section>

      {/* 5. Restoration Procedures */}
      <section id="restoration-procedures" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Restoration Procedures, RTO &amp; RPO
        </h2>
        <p>
          In the event of accidental file deletion, database corruption, or server instability, restoration workflows proceed as follows:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Restoration Request:</strong> An authorized technical representative submits a written restore request to{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>{" "}
            or calls the support line (+91 98202 46622), identifying the specific target timestamp and folder path.
          </li>
          <li>
            <strong>Identity Verification:</strong> Our support desk validates the request against pre-authorized primary account credentials to prevent unauthorized data tampering.
          </li>
          <li>
            <strong>Execution &amp; Verification:</strong> The selected snapshot is mounted in a segregated recovery staging folder, verified for file integrity, and restored directly or provided as an archived download.
          </li>
        </ol>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Recovery Point Objective (RPO)</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">24 Hours (Standard) / Up to 4 Hours (Enterprise)</p>
            <p className="text-xs text-slate-500 mt-1">Maximum potential data age of the most recent restorable snapshot.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Recovery Time Objective (RTO)</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">2 – 6 Hours from verified request</p>
            <p className="text-xs text-slate-500 mt-1">Estimated duration required to mount and restore production databases.</p>
          </div>
        </div>
      </section>

      {/* 6. Limitations & Disclaimers */}
      <section id="recovery-limitations" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Inherent Limitations &amp; Disclaimers
        </h2>
        <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 text-xs text-slate-700 space-y-3">
          <p className="font-bold text-red-950 text-sm">
            Critical Data Notice &amp; Technical Limitations
          </p>
          <p className="leading-relaxed">
            While Brain Box Solutions employs robust backup automation and tested storage arrays, <strong>no automated backup system can guarantee 100% prevention of data loss or absolute recoverability under all circumstances</strong>.
          </p>
          <p className="leading-relaxed">
            Brain Box Solutions expressly disclaims liability for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>In-flight transactional entries written after the last scheduled snapshot was taken;</li>
            <li>Latent database corruptions existing within customer data prior to snapshot execution (e.g., an already corrupt Tally company data file);</li>
            <li>Incompatibility of third-party accounting modules, custom TDL files, or unverified add-ons upon restore;</li>
            <li>Destruction caused by zero-day malware executing with client administrative credentials that actively encrypts connected storage volumes before detection.</li>
          </ul>
        </div>
      </section>

      {/* 7. Customer Verification */}
      <section id="customer-verification" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Customer Verification &amp; Local Archiving
        </h2>
        <p>
          Data governance is a shared responsibility. To ensure optimal defense against catastrophic business interruption:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Periodic Restorability Testing:</strong> Clients are strongly urged to periodically request test restores of accounting datasets (at least quarterly) to verify application-level validity.
          </li>
          <li>
            <strong>Secondary Local Backups (3-2-1 Rule):</strong> Clients should regularly download and store an independent, offline copy of their core Tally and accounting datasets onto their local office storage or secondary media.
          </li>
          <li>
            <strong>Notification of Storage Exhaustion:</strong> If a client server approaches disk capacity limits, automated backup snapshots may fail. Clients must monitor operational space or approve necessary storage expansions promptly.
          </li>
        </ul>
      </section>

      {/* 8. Decommissioning & Sanitization */}
      <section id="termination-disposal" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Decommissioning &amp; Secure Data Sanitization
        </h2>
        <p>
          Upon legitimate cancellation, termination, or non-renewal of cloud hosting services:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>Data Export Grace Period:</strong> Brain Box Solutions retains customer data volumes in an accessible state for a grace window of <strong>seven (7) to fifteen (15) calendar days</strong> following contract termination, during which the customer may request a full archive download.
          </li>
          <li>
            <strong>Final Purge &amp; Overwrite:</strong> Following the expiry of the grace window, all allocated virtual volumes, secondary snapshot repositories, and associated backup files are permanently purged and cryptographically overwritten in accordance with standard digital media sanitization practices.
          </li>
          <li>
            <strong>No Post-Purge Recovery:</strong> Once sanitization is executed, Brain Box Solutions has no technological means of recovering, reconstructing, or retrieving any customer files.
          </li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
