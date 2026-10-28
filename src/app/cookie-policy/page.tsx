import { Metadata } from "next";
import Link from "next/link";
import PolicyLayout, { PolicySection } from "@/components/layout/PolicyLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Brain Box Solutions",
  description:
    "Learn about how Brain Box Solutions uses cookies, local browser storage, and privacy-respecting website technologies on brainboxsolutions.net.",
  alternates: {
    canonical: "https://brainboxsolutions.net/cookie-policy",
  },
};

const sections: PolicySection[] = [
  { id: "what-are-cookies", title: "What Are Cookies & Web Storage?" },
  { id: "cookie-audit", title: "Our Cookie Usage & Technology Audit" },
  { id: "categories", title: "Categories of Cookies We Use" },
  { id: "third-party-embeds", title: "Third-Party Embeds & Services (Google Maps)" },
  { id: "managing-cookies", title: "How to Control & Disable Cookies" },
  { id: "do-not-track", title: "Do-Not-Track & Privacy Protections" },
  { id: "policy-updates", title: "Updates to This Cookie Policy" },
  { id: "contact-privacy", title: "Contact Us Regarding Cookie Privacy" },
];

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      badge="Web Privacy & Cookies"
      lastUpdated="October 2026"
      description="This policy explains how Brain Box Solutions utilizes cookies and browser web storage technologies when you navigate our public website."
      sections={sections}
    >
      {/* 1. What Are Cookies */}
      <section id="what-are-cookies" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          1. What Are Cookies &amp; Web Storage?
        </h2>
        <p>
          Cookies are small text files placed on your computer, smartphone, or other Internet-connected device when you visit websites. They are widely used by web developers to make websites function smoothly, remember your session navigation, and provide aggregate diagnostic information to site administrators.
        </p>
        <p>
          In addition to standard cookies, modern web platforms may use local browser storage (such as HTML5 `localStorage` and `sessionStorage`) to store lightweight interface preferences without sending user tracking payloads back to remote marketing servers.
        </p>
      </section>

      {/* 2. Cookie Audit */}
      <section id="cookie-audit" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          2. Our Cookie Usage &amp; Technology Audit
        </h2>
        <p>
          Brain Box Solutions maintains a privacy-first web footprint. We believe in transparency regarding the technical footprint our website leaves on your device:
        </p>
        <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-950 space-y-2">
          <p className="font-bold text-sm text-emerald-900">Privacy Verification Summary</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>No Invasive Advertising Networks:</strong> We do not run third-party behavioral ad trackers, retargeting pixels (such as Meta Pixel or TikTok tracking), or invasive ad banners.</li>
            <li><strong>No Sale of Browsing Profiles:</strong> We never sell, monetize, or broker data about your browsing habits to commercial brokers.</li>
            <li><strong>Strictly Functional Infrastructure:</strong> Our cookies exist solely to serve web pages rapidly, secure contact form submissions, and maintain page responsiveness.</li>
          </ul>
        </div>
      </section>

      {/* 3. Categories */}
      <section id="categories" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          3. Categories of Cookies We Use
        </h2>
        <div className="space-y-4 text-xs text-slate-600">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">A. Strictly Necessary &amp; Security Cookies</h3>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px] uppercase">Always Active</span>
            </div>
            <p className="leading-relaxed">
              These cookies and session tokens are indispensable for the core operation of our Next.js web application. They enable navigation between pages, facilitate server-side rendering, and defend our inquiry forms against Cross-Site Request Forgery (CSRF) and automated spam bots.
            </p>
            <p className="font-mono text-[11px] text-slate-500">Examples: Session routing indicators, CSRF prevention tokens, edge CDN load-balancing flags.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">B. Functional &amp; Preference Storage</h3>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold text-[10px] uppercase">Functional</span>
            </div>
            <p className="leading-relaxed">
              These lightweight browser storage values remember user interface preferences, such as keeping mobile accordion navigation menus in their intended position or remembering whether you have acknowledged our compliance notices.
            </p>
            <p className="font-mono text-[11px] text-slate-500">Examples: Accordion state persistence, UI theme toggles.</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">C. Diagnostic &amp; Performance Telemetry</h3>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold text-[10px] uppercase">Performance</span>
            </div>
            <p className="leading-relaxed">
              When enabled, aggregated, non-identifying telemetry (such as core web vitals and page load speed) helps our engineers diagnose server latency, identify broken links, and optimize server response times across Indian and international ISP networks.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Third-Party Embeds */}
      <section id="third-party-embeds" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          4. Third-Party Embeds &amp; Services (Google Maps)
        </h2>
        <p>
          Our contact page features an interactive map embedded from Google Maps to help visitors locate our registered office at Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai.
        </p>
        <p className="text-sm text-slate-600">
          When you view or interact with this embedded map, Google LLC may place functional or analytical cookies according to its own privacy standards. Google&apos;s processing of such information is governed by the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Privacy Policy
          </a>
          .
        </p>
      </section>

      {/* 5. Managing Cookies */}
      <section id="managing-cookies" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          5. How to Control &amp; Disable Cookies
        </h2>
        <p>
          You have the right to decide whether to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to reject cookies or notify you whenever a cookie is placed:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Google Chrome</h4>
            <p>Settings &rarr; Privacy and security &rarr; Third-party cookies &rarr; Block third-party cookies or adjust site permissions.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Apple Safari</h4>
            <p>Preferences &rarr; Privacy &rarr; Prevent cross-site tracking and Manage Website Data.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Mozilla Firefox</h4>
            <p>Settings &rarr; Privacy &amp; Security &rarr; Enhanced Tracking Protection (Standard, Strict, or Custom).</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Microsoft Edge</h4>
            <p>Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies and site data.</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic">
          Please note that disabling strictly necessary session cookies may affect your browsing experience, such as the responsiveness of interactive contact forms.
        </p>
      </section>

      {/* 6. Do Not Track */}
      <section id="do-not-track" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          6. Do-Not-Track &amp; Privacy Protections
        </h2>
        <p>
          Many modern web browsers include a &quot;Do Not Track&quot; (DNT) or Global Privacy Control (GPC) signal. Because Brain Box Solutions does not engage in behavioral cross-site user tracking or profile sales, our website naturally aligns with the core privacy objectives of DNT signals.
        </p>
      </section>

      {/* 7. Updates */}
      <section id="policy-updates" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          7. Updates to This Cookie Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time to reflect modifications in our operational technologies or applicable Indian data privacy regulations. Any updates will be posted to this page with an updated revision date.
        </p>
      </section>

      {/* 8. Contact */}
      <section id="contact-privacy" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
          8. Contact Us Regarding Cookie Privacy
        </h2>
        <p>
          If you have questions or concerns about our use of cookies or web storage, please refer to our comprehensive{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline font-semibold">
            Privacy Policy
          </Link>{" "}
          or reach out to our privacy desk:
        </p>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
          <p className="font-bold text-slate-900 text-sm">Brain Box Solutions — Web Governance Team</p>
          <p>LG-13, Xth Central Mall, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067, India</p>
          <p>
            Email:{" "}
            <a href="mailto:info@brainboxsolutions.net" className="text-blue-600 hover:underline font-semibold">
              info@brainboxsolutions.net
            </a>
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}

