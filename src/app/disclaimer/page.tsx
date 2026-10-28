import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Website Disclaimer | Brain Box Solutions",
  description:
    "Review the website disclaimer, third-party trademark notices, and limitations of liability for Brain Box Solutions informational content.",
  alternates: {
    canonical: "https://brainboxsolutions.net/disclaimer",
  },
};

const sections: PolicySection[] = [
  { id: "general-information", title: "General Informational Nature of Website" },
  { id: "third-party-trademarks", title: "Independence & Third-Party Trademarks" },
  { id: "performance-benchmarks", title: "Technical Specifications & Performance Estimates" },
  { id: "no-financial-advice", title: "No Financial, Accounting or Tax Advice" },
  { id: "external-hyperlinks", title: "External Hyperlinks & Third-Party Portals" },
  { id: "non-waivable-rights", title: "Non-Waivable Statutory Legal Rights" },
  { id: "disclaimer-updates", title: "Modifications & Questions" },
];

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Website Disclaimer"
      badge="Legal Disclaimers & Notices"
      lastUpdated="October 2026"
      description="This disclaimer articulates the limitations governing general informational materials published on the Brain Box Solutions website, clarifies third-party trademark relationships, and defines technical estimation boundaries."
      sections={sections}
    >
      {/* 1. General Information */}
      <section id="general-information" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. General Informational Nature of Website
        </h2>
        <p>
          The information provided on this website (
          <a href="https://brainboxsolutions.net" className="text-blue-600 hover:underline">
            https://brainboxsolutions.net
          </a>
          ) is published by Brain Box Solutions for general informational and commercial demonstration purposes only.
        </p>
        <p>
          While we make every reasonable effort to keep the content accurate, complete, and up to date, Brain Box Solutions makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the website materials, solution blueprints, or promotional case studies. Any reliance you place on such information is strictly at your own risk.
        </p>
      </section>

      {/* 2. Third-Party Trademarks & Independence */}
      <section id="third-party-trademarks" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Independence &amp; Third-Party Trademarks
        </h2>
        <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-3">
          <p className="font-bold text-blue-950 text-sm">
            Independent Infrastructure &amp; Solutions Provider
          </p>
          <p className="leading-relaxed">
            Brain Box Solutions is an independent IT infrastructure, cloud hosting, and system integration services provider. Reference to any specific commercial products, processes, or services by trade name, trademark, manufacturer, or vendor does not constitute or imply an official endorsement, sponsorship, or recommendation by those entities, except where explicitly noted under an authorized partner or reseller arrangement.
          </p>
          <div className="pt-2 border-t border-blue-200/60 space-y-1.5 font-medium text-slate-800">
            <p>&bull; <strong>Tally, TallyPrime, and Tally.ERP:</strong> Registered trademarks of Tally Solutions Pvt. Ltd., Bengaluru, India.</p>
            <p>&bull; <strong>Microsoft, Windows, Windows Server, RDS:</strong> Registered trademarks of Microsoft Corporation, Redmond, WA, USA.</p>
            <p>&bull; <strong>TSPlus, TSPrint, TSScan:</strong> Trademarks of their respective developer organizations.</p>
            <p>&bull; <strong>Lenovo, ThinkSystem:</strong> Registered trademarks of Lenovo Group Ltd.</p>
          </div>
          <p className="text-[11px] text-slate-500 italic pt-1">
            All registered trade names, trademarks, and service marks mentioned on this website remain the exclusive intellectual property of their respective holders.
          </p>
        </div>
      </section>

      {/* 3. Performance & Benchmarks */}
      <section id="performance-benchmarks" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Technical Specifications &amp; Performance Estimates
        </h2>
        <p>
          Descriptions of server hardware, NVMe throughput speeds, IOPS benchmarks, memory configurations, and concurrent user capacity figures published across our website represent theoretical maximums or lab-tested environments.
        </p>
        <p className="text-sm text-slate-600">
          Actual real-world performance will naturally vary depending on numerous external variables outside our control, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
          <li>The volume, structure, and integrity of customer accounting data files;</li>
          <li>The complexity of user-installed third-party scripts, custom TDL modules, or reporting plugins;</li>
          <li>Local ISP bandwidth, routing latency, jitter, and Wi-Fi stability at the client&apos;s physical office premises;</li>
          <li>The client workstation hardware configuration and operating system environment.</li>
        </ul>
      </section>

      {/* 4. No Financial Advice */}
      <section id="no-financial-advice" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. No Financial, Accounting or Tax Advice
        </h2>
        <p>
          Brain Box Solutions specializes exclusively in computer systems infrastructure, cloud virtualization, network security, and remote software publishing.
        </p>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>Non-Advisory Clarification:</strong> Neither Brain Box Solutions nor any of its technical representatives are licensed chartered accountants, certified auditors, or tax advisory professionals. No communication, server deployment configuration, or technical recommendation shall be construed as financial, accounting, legal, or tax advice under the Indian Income Tax Act or GST regulations. Customers are advised to consult their certified accounting professionals for ledger audit and statutory compliance requirements.
        </div>
      </section>

      {/* 5. External Hyperlinks */}
      <section id="external-hyperlinks" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. External Hyperlinks &amp; Third-Party Portals
        </h2>
        <p>
          Our website may contain hyperlinks leading to external websites, payment gateways, or software portals operated by third parties. These links are provided solely for user convenience.
        </p>
        <p className="text-sm text-slate-600">
          Brain Box Solutions has no control over the nature, content, uptime, or availability of those external sites. The inclusion of any link does not necessarily imply a recommendation or endorse the views expressed within them. We encourage visitors to review the terms and privacy practices of any third-party website they visit.
        </p>
      </section>

      {/* 6. Non-Waivable Rights */}
      <section id="non-waivable-rights" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Non-Waivable Statutory Legal Rights
        </h2>
        <p>
          Nothing in this disclaimer is intended to limit or exclude any statutory consumer rights, mandatory warranties, or legal liabilities that cannot be lawfully excluded under applicable laws of the Republic of India, including the Consumer Protection Act, 2019, or the Information Technology Act, 2000.
        </p>
      </section>

      {/* 7. Updates */}
      <section id="disclaimer-updates" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Modifications &amp; Questions
        </h2>
        <p>
          We reserve the right to amend this disclaimer at any time without prior individual notice. Please check this page periodically for updates.
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Inquiries Desk</p>
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
