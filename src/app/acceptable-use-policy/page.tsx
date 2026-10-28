import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Acceptable Use Policy (AUP) | Brain Box Solutions",
  description:
    "Review our Acceptable Use Policy outlining prohibited activities, network security rules, and infrastructure compliance standards for Brain Box Solutions hosted services.",
  alternates: {
    canonical: "https://brainboxsolutions.net/acceptable-use-policy",
  },
};

const sections: PolicySection[] = [
  { id: "aup-scope", title: "Purpose & Scope of Application" },
  { id: "unlawful-conduct", title: "Unlawful Activities & Statutory Violations" },
  { id: "network-abuse", title: "Network & Infrastructure Abuse (DDoS, Scanning)" },
  { id: "email-spam", title: "Email Abuse & Unsolicited Bulk Messaging (SPAM)" },
  { id: "malware-exploits", title: "Malware, Ransomware & Unauthorized Code" },
  { id: "ip-infringement", title: "Intellectual Property & Software Piracy" },
  { id: "crypto-mining", title: "Cryptocurrency Mining Restrictions" },
  { id: "customer-security", title: "Customer Security Obligations" },
  { id: "enforcement-cooperation", title: "Enforcement, CERT-In & Law Enforcement" },
  { id: "reporting-abuse", title: "Reporting Violations & Abuse Desk" },
];

export default function AcceptableUsePolicyPage() {
  return (
    <PolicyLayout
      title="Acceptable Use Policy"
      badge="Network Security & Conduct"
      lastUpdated="October 2026"
      description="This Acceptable Use Policy defines the mandatory operating guidelines, prohibited technical conduct, and defensive standards required of all users operating on Brain Box Solutions cloud infrastructure."
      sections={sections}
    >
      {/* 1. Purpose & Scope */}
      <section id="aup-scope" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. Purpose &amp; Scope of Application
        </h2>
        <p>
          This Acceptable Use Policy (&quot;AUP&quot;) governs the use of all systems, networks, dedicated servers, virtual private machines, Tally on Cloud containers, remote desktop gateways, and backup repositories owned or managed by Brain Box Solutions.
        </p>
        <p>
          This policy applies universally to all account holders, their employees, contractors, agents, and any third party accessing compute resources provisioned under a customer agreement. By using our infrastructure, you agree to comply with this policy and ensure that all end-users acting under your accounts strictly adhere to its provisions.
        </p>
      </section>

      {/* 2. Unlawful Activities */}
      <section id="unlawful-conduct" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Unlawful Activities &amp; Statutory Violations
        </h2>
        <p>
          Brain Box Solutions infrastructure may only be utilized for lawful business and technical purposes. The transmission, storage, distribution, or facilitation of any material or activity that violates applicable Indian or international law is strictly prohibited, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li>Violations of the Indian Information Technology Act, 2000, and related cybersecurity amendments;</li>
          <li>Financial fraud, deceptive investment schemes, money laundering, or illegal betting/gambling services;</li>
          <li>Hosting, generating, or transmitting unlawful, defamatory, obscene, child sexual abuse material (CSAM), or terroristic propaganda;</li>
          <li>Conducting extortion, cyberstalking, harassment, or unauthorized invasion of personal privacy.</li>
        </ul>
      </section>

      {/* 3. Network Abuse */}
      <section id="network-abuse" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Network &amp; Infrastructure Abuse (DDoS, Scanning)
        </h2>
        <p>
          Customers must not engage in any activity that compromises the operational resilience, availability, or throughput of our datacenters or external networks. Strictly prohibited actions include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 my-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Denial of Service Attacks</h4>
            <p>Initiating, participating in, or amplifying Denial of Service (DoS) or Distributed Denial of Service (DDoS) floods, SYN attacks, or UDP amplification floods.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Unauthorized Network Probing</h4>
            <p>Executing port scans, ping sweeps, vulnerability scanners, or unauthorized penetration testing against any third-party network without prior written authorization.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Routing &amp; IP Spoofing</h4>
            <p>Forging TCP/IP packet headers, spoofing IP addresses, ARP poisoning, or broadcasting malicious BGP routing announcements.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Shared Resource Starvation</h4>
            <p>Executing unoptimized runaway loops, continuous disk I/O thrashing, or memory hogging designed to degrade neighboring multi-tenant virtual environments.</p>
          </div>
        </div>
      </section>

      {/* 4. Email Abuse */}
      <section id="email-spam" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Email Abuse &amp; Unsolicited Bulk Messaging (SPAM)
        </h2>
        <p>
          Brain Box Solutions maintains a zero-tolerance policy regarding unsolicited commercial email:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            <strong>SPAM &amp; Bulk Mailings:</strong> Sending unsolicited bulk email, promotional newsletters to scraped email lists, or commercial spam through our IP ranges is strictly banned.
          </li>
          <li>
            <strong>Open Relays &amp; Open Proxies:</strong> Operating unsecured mail transfer agents (MTAs) configured as open relays, or running open HTTP/SOCKS proxies accessible to public abuse, is prohibited.
          </li>
          <li>
            <strong>Phishing &amp; Brand Impersonation:</strong> Hosting credential harvesting landing pages, spoofed bank login screens, or deceptive corporate communication portals will result in immediate IP blacklisting and contract termination.
          </li>
        </ul>
      </section>

      {/* 5. Malware & Exploits */}
      <section id="malware-exploits" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. Malware, Ransomware &amp; Unauthorized Code
        </h2>
        <p>
          You may not store, upload, link to, or execute malicious software within provisioned cloud machines. This includes, without limitation:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li>Viruses, worms, Trojan horses, rootkits, keystroke loggers, and spyware;</li>
          <li>Ransomware payloads or command-and-control (C2) botnet controller scripts;</li>
          <li>Exploit kits, buffer overflow vectors, and zero-day execution harnesses.</li>
        </ul>
        <p className="text-xs text-slate-500 italic">
          If a customer server is compromised by external attackers due to unpatched software, Brain Box Solutions reserves the right to isolate the virtual network interface immediately to prevent outbound infections.
        </p>
      </section>

      {/* 6. Intellectual Property */}
      <section id="ip-infringement" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Intellectual Property &amp; Software Piracy
        </h2>
        <p>
          Hosted machines must not be utilized to infringe the copyright, patent, trademark, or proprietary trade secrets of any entity:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li><strong>Cracked Software &amp; Keygens:</strong> Hosting, running, or sharing cracked software releases, serial number generators, or activation bypass tools (including pirated Windows, Microsoft Office, or unauthorized Tally patches) is prohibited.</li>
          <li><strong>Torrent Trackers &amp; Warez:</strong> Operating BitTorrent trackers, peer-to-peer file-sharing seeds for copyrighted media, or public warez download directories is prohibited.</li>
        </ul>
      </section>

      {/* 7. Crypto Mining */}
      <section id="crypto-mining" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Cryptocurrency Mining Restrictions
        </h2>
        <p>
          Unlicensed Proof-of-Work (PoW) cryptocurrency mining (including Monero, Bitcoin, Ethereum, and altcoin mining software) is strictly prohibited on all shared hypervisors, cloud VPS environments, and Tally on Cloud instances.
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          Cryptocurrency mining causes sustained, extreme CPU saturation and thermal strain that directly degrades shared host node performance for neighboring clients. Dedicated server customers with leased bare-metal hardware may only execute compute-intensive distributed computations where specifically acknowledged in writing.
        </p>
      </section>

      {/* 8. Customer Security Obligations */}
      <section id="customer-security" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Customer Security Obligations
        </h2>
        <p>
          Each customer is responsible for maintaining the security of their provisioned operating environments:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li><strong>Password Complexity:</strong> Implement strong, non-dictionary passwords (minimum 12 characters combining uppercase, lowercase, numerals, and special characters) across all administrative and user RDP accounts.</li>
          <li><strong>Patch Management:</strong> Regularly apply recommended security updates and vendor service packs to guest operating systems and hosted accounting software.</li>
          <li><strong>Session Hygiene:</strong> Configure idle session timeouts to ensure remote desktop sessions do not remain open indefinitely on unattended client workstations.</li>
        </ul>
      </section>

      {/* 9. Enforcement & CERT-In */}
      <section id="enforcement-cooperation" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          9. Enforcement, CERT-In &amp; Law Enforcement
        </h2>
        <p>
          Brain Box Solutions reserves the right to investigate suspected violations of this policy. Upon identifying a breach:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li><strong>Immediate Isolation:</strong> We may suspend network routing, block offending IP ports, or temporarily disconnect offending virtual machines to protect network integrity;</li>
          <li><strong>Remediation Notice:</strong> For minor or unintentional infractions (e.g., an accidental open relay), the customer will be issued a written notice to remediate within 24 hours;</li>
          <li><strong>Permanent Termination:</strong> Severe, intentional, or unlawful actions will result in instant account termination without refund;</li>
          <li><strong>Statutory Cooperation:</strong> In compliance with directives issued by the Indian Computer Emergency Response Team (CERT-In) and statutory law enforcement agencies under the Information Technology Act, 2000, Brain Box Solutions will cooperate fully with official investigations and produce server access logs upon receipt of lawful orders.</li>
        </ul>
      </section>

      {/* 10. Reporting Abuse */}
      <section id="reporting-abuse" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          10. Reporting Violations &amp; Abuse Desk
        </h2>
        <p>
          If you identify any network abuse, spam activity, or security incidents originating from an IP address owned or allocated by Brain Box Solutions, please report the incident immediately with relevant headers and log traces:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Network Abuse &amp; Security Desk</p>
          <p>LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p>
            Abuse Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>
          </p>
          <p>
            Emergency Security Desk:{" "}
            <a href="tel:+919820246622" className="text-blue-600 hover:underline font-semibold">
              +91 98202 46622
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}
