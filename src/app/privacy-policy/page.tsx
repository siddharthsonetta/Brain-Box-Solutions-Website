import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Brain Box Solutions",
  description:
    "Learn how Brain Box Solutions collects, processes, and protects your information across our website and enterprise cloud hosting infrastructure.",
  alternates: {
    canonical: "https://brainboxsolutions.net/privacy-policy",
  },
};

const sections: PolicySection[] = [
  { id: "introduction", title: "Introduction & Overview" },
  { id: "scope-roles", title: "Scope & Distinction of Roles" },
  { id: "information-collected", title: "Information Collected on Website" },
  { id: "hosted-data", title: "Customer Data on Hosted Infrastructure" },
  { id: "processing-purposes", title: "Purposes for Processing Data" },
  { id: "cookies-tracking", title: "Cookies & Website Analytics" },
  { id: "infrastructure-sharing", title: "Third-Party & Infrastructure Disclosures" },
  { id: "security-safeguards", title: "Data Storage & Security Safeguards" },
  { id: "retention-deletion", title: "Data Retention & Disposal" },
  { id: "customer-rights", title: "Your Rights under Indian Data Protection Law" },
  { id: "external-services", title: "Third-Party Integrations & External Links" },
  { id: "updates", title: "Policy Amendments" },
  { id: "contact-desk", title: "Privacy Inquiries & Grievances" },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      badge="Data Protection & Privacy"
      lastUpdated="October 2026"
      description="This policy outlines how Brain Box Solutions handles personal information gathered through our website and clarifies our governance over customer accounting databases and hosted enterprise workloads."
      sections={sections}
    >
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Introduction &amp; Overview
        </h2>
        <p>
          Brain Box Solutions (&quot;Brain Box Solutions&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the privacy and confidentiality of visitors to our website (
          <a href="https://brainboxsolutions.net" className="text-blue-600 hover:underline">
            https://brainboxsolutions.net
          </a>
          ) as well as the enterprise customers who entrust us with their managed cloud, remote hosting, and infrastructure solutions.
        </p>
        <p>
          This Privacy Policy sets forth our practices regarding the collection, handling, storage, and protection of information in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the provisions of the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
        </p>
      </section>

      {/* 2. Scope & Roles */}
      <section id="scope-roles" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Scope &amp; Distinction of Roles
        </h2>
        <p>
          To maintain absolute legal transparency, we distinctly divide our operations into two separate categories:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
            <h3 className="font-bold text-slate-900 text-sm mb-2 text-blue-900">
              A. Website Visitors &amp; Inquiries (Data Fiduciary)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you browse our public website or submit an inquiry via our contact form, Brain Box Solutions acts as a <strong>Data Fiduciary</strong> (Controller). We determine the purpose and means of collecting your business contact details to respond to your service requests.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-2 text-slate-900">
              B. Hosted Customer Workloads (Data Processor)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When clients utilize our Tally on Cloud, dedicated servers, or enterprise backup platforms, the customer remains the sole <strong>Data Fiduciary</strong> of their internal accounting files, company ledgers, and databases. Brain Box Solutions acts strictly as an <strong>Infrastructure Provider / Data Processor</strong> operating under customer instructions and strict contractual confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Information Collected on Website */}
      <section id="information-collected" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Information Collected on the Website
        </h2>
        <p>
          We collect personal and professional information directly from you when you interact with our public website:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Contact &amp; Identity Details:</strong> Full name, corporate email address, contact telephone number, and company name provided through our contact forms or consultation requests.
          </li>
          <li>
            <strong>Service Interest Details:</strong> The particular cloud hosting package, accounting ERP solution (e.g., Tally Prime, TSPlus), or backup topology requested.
          </li>
          <li>
            <strong>Correspondence Records:</strong> Records of communications transmitted via our website desk, email, direct telephone calls, or official WhatsApp Business messaging.
          </li>
          <li>
            <strong>Technical Log Data:</strong> Standard internet protocol (IP) addresses, browser type, referring/exit pages, operating system, date/time stamp, and basic access logs automatically generated by web servers to ensure uptime and cybersecurity defenses.
          </li>
        </ul>
      </section>

      {/* 4. Hosted Data */}
      <section id="hosted-data" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Customer Data on Hosted Infrastructure
        </h2>
        <p>
          For our contracted hosting services (such as Tally on Cloud, Linux/Windows dedicated instances, and automated backup vaults):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Zero Content Mining:</strong> Brain Box Solutions does not inspect, read, copy, sell, or commercially exploit customer databases, financial records, inventory data, or employee records hosted on private virtual machines or dedicated servers.
          </li>
          <li>
            <strong>Restricted Administrative Access:</strong> Systems engineers access server environments only when explicitly authorized by the client for server maintenance, migration assistance, OS patch deployment, or troubleshooting requested by the client.
          </li>
          <li>
            <strong>Customer Ownership:</strong> All proprietary business data, financial records, and intellectual property stored on our infrastructure remain the exclusive property of the customer.
          </li>
        </ul>
      </section>

      {/* 5. Purposes of Processing */}
      <section id="processing-purposes" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Purposes for Processing Data
        </h2>
        <p>We process collected information strictly for legitimate commercial and technical purposes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>To respond to service inquiries, provide customized infrastructure quotes, and schedule consultations.</li>
          <li>To provision, authenticate, and configure cloud servers, remote desktop credentials, and backup storage quotas.</li>
          <li>To administer customer accounts, process billing invoices, and facilitate contract renewals.</li>
          <li>To deliver technical support, incident troubleshooting, and urgent infrastructure notifications.</li>
          <li>To ensure platform security, defend against unauthorized penetration attempts, and comply with applicable statutory requirements in India.</li>
        </ul>
      </section>

      {/* 6. Cookies */}
      <section id="cookies-tracking" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Cookies &amp; Website Analytics
        </h2>
        <p>
          Our website prioritizes user privacy. We utilize only essential and functional cookies necessary for secure navigation, load distribution, and form submission integrity. We do not deploy invasive third-party cross-site advertising networks, profiling trackers, or behavioral surveillance trackers.
        </p>
        <p>
          For comprehensive details on how session cookies function and how you can manage browser preferences, please review our dedicated{" "}
          <a href="/cookie-policy" className="text-blue-600 hover:underline font-semibold">
            Cookie Policy
          </a>
          .
        </p>
      </section>

      {/* 7. Third-Party Sharing */}
      <section id="infrastructure-sharing" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Third-Party &amp; Infrastructure Disclosures
        </h2>
        <p>
          We do not sell, rent, or trade your personal information. Disclosures are limited strictly to sanctioned operational partners under strict non-disclosure obligations:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Data Center Facility Providers:</strong> Tier-compliant, secure data center facilities located within India that provide physical housing, power redundancy, and high-speed network transit for our server hardware.
          </li>
          <li>
            <strong>Authorized Software Licensors:</strong> When you purchase specialized licenses through us (such as TSPlus, TSPrint/TSScan, or Microsoft licensing), essential customer identification details may be registered with the licensor strictly to validate and activate software keys.
          </li>
          <li>
            <strong>Legal &amp; Regulatory Authorities:</strong> We may disclose information only if required by court order, law enforcement subpoena, or statutory directive issued under Indian law.
          </li>
        </ul>
      </section>

      {/* 8. Security Safeguards */}
      <section id="security-safeguards" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Data Storage &amp; Security Safeguards
        </h2>
        <p>
          Brain Box Solutions enforces enterprise-grade physical and digital security protocols to protect data against unauthorized access, alteration, disclosure, or destruction:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li><strong>Data Transmission:</strong> Web traffic and customer administration channels are encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS).</li>
          <li><strong>Storage Encryption:</strong> Automated backup repositories utilize AES-256 bit encryption algorithms.</li>
          <li><strong>Network Perimeters:</strong> Managed firewall rules, isolated Virtual LANs (VLANs), and restricted IP access lists protect private server environments.</li>
          <li><strong>Access Governance:</strong> Role-based access controls (RBAC) ensure that only authorized technical personnel can access core host hypervisors.</li>
        </ul>
      </section>

      {/* 9. Retention & Disposal */}
      <section id="retention-deletion" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          9. Data Retention &amp; Disposal
        </h2>
        <p>
          We retain website inquiry information only for as long as necessary to fulfill the operational purpose for which it was gathered, or as mandated by Indian accounting and taxation laws (typically up to 7 years for financial billing records).
        </p>
        <p>
          Upon verified termination of hosting contracts, customer server instances and backup archives are retained for a designated contract grace period (e.g. 15 to 30 days) to permit data offboarding, following which disk blocks are securely scrubbed and permanently de-provisioned.
        </p>
      </section>

      {/* 10. Customer Rights */}
      <section id="customer-rights" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          10. Your Rights under Indian Data Protection Law
        </h2>
        <p>
          In accordance with the Digital Personal Data Protection Act, 2023, website visitors and customers have the right to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Request confirmation of whether Brain Box Solutions is processing your personal data.</li>
          <li>Request correction or updating of inaccurate or outdated contact information.</li>
          <li>Request erasure of personal data that is no longer required for the purpose it was gathered, subject to statutory retention exceptions.</li>
          <li>Nominate an individual to exercise rights on your behalf in the event of incapacity.</li>
          <li>Seek grievance redressal regarding the processing of your personal information.</li>
        </ul>
      </section>

      {/* 11. External Services */}
      <section id="external-services" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          11. Third-Party Integrations &amp; External Links
        </h2>
        <p>
          Our website contains external outbound links to third-party services (such as WhatsApp for direct technical inquiries and Facebook). We do not control and are not responsible for the privacy practices, content, or cookie policies of third-party platforms. We advise reviewing their respective privacy notices when visiting their platforms.
        </p>
      </section>

      {/* 12. Updates */}
      <section id="updates" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          12. Policy Amendments
        </h2>
        <p>
          We may periodically update this Privacy Policy to reflect modifications in our IT infrastructure, statutory obligations, or service offerings. Any revisions will be published on this page with an updated &quot;Last updated&quot; date. Continued interaction with our website or services constitutes acknowledgment of the revised terms.
        </p>
      </section>

      {/* 13. Contact Desk */}
      <section id="contact-desk" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          13. Privacy Inquiries &amp; Grievances
        </h2>
        <p>
          To exercise your data privacy rights, report a concern, or request clarification regarding our data handling procedures, please contact our administrative desk:
        </p>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-2">
          <p className="font-bold text-slate-900">Brain Box Solutions</p>
          <p className="text-slate-600">Attention: Privacy &amp; Data Compliance Desk</p>
          <p className="text-slate-600">LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p className="text-slate-600">
            Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 font-semibold hover:underline">
              info@brainboxsolutions.net
            </a>
          </p>
          <p className="text-slate-600">
            Phone:{" "}
            <a href="tel:+919820246622" className="text-blue-600 font-semibold hover:underline">
              +91 98202 46622
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}

