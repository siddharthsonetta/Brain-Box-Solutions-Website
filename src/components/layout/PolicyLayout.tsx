"use client";

import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck, Mail, Phone, FileText } from "lucide-react";

export interface PolicySection {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  badge?: string;
  title: string;
  lastUpdated: string;
  description: string;
  sections: PolicySection[];
  children: React.ReactNode;
  relatedPolicies?: { name: string; href: string }[];
}

export default function PolicyLayout({
  badge = "Legal & Compliance",
  title,
  lastUpdated,
  description,
  sections,
  children,
  relatedPolicies = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Service Level Agreement", href: "/service-level-agreement" },
    { name: "Data Backup Policy", href: "/data-backup-policy" },
    { name: "Support Policy", href: "/support-policy" },
  ],
}: PolicyLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 mb-12 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1.5 text-blue-600" />
                Last updated: {lastUpdated}
              </span>
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-1.5 text-blue-600" />
                Brain Box Solutions Governance
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  On this page
                </h3>
                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                  {sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-xs font-medium text-slate-600 hover:text-blue-600 hover:translate-x-1 py-1.5 transition-all leading-normal"
                    >
                      <span className="text-slate-400 font-mono mr-1.5 text-[11px]">
                        {(idx + 1).toString().padStart(2, "0")}.
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Legal Help Box */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Have questions about this policy?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our compliance and IT infrastructure team is available to assist with contractual or privacy inquiries.
                </p>
                <div className="pt-2 space-y-2 text-xs font-medium">
                  <a
                    href="mailto:info@brainboxsolutions.net"
                    className="flex items-center text-blue-300 hover:text-white transition-colors py-1"
                  >
                    <Mail className="h-4 w-4 mr-2 text-blue-400 shrink-0" />
                    <span>info@brainboxsolutions.net</span>
                  </a>
                  <a
                    href="tel:+919820246622"
                    className="flex items-center text-blue-300 hover:text-white transition-colors py-1"
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-400 shrink-0" />
                    <span>+91 98202 46622</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Text Column */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 md:p-12 shadow-xs space-y-10 prose-slate max-w-none text-slate-700 leading-relaxed font-normal">
              {children}
            </div>

            {/* Related Policies Strip */}
            {relatedPolicies && relatedPolicies.length > 0 && (
              <div className="mt-8 bg-white rounded-2xl border border-slate-200/80 p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Related Governance &amp; Policies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {relatedPolicies.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

