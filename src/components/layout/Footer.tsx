"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <img
                  src="/images/logo.png"
                  alt="Brain Box Solutions"
                  className="h-10 md:h-12 w-auto object-contain"
                  draggable={false}
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              Brain Box Solutions delivers high-performance cloud hosting, secure infrastructure, and enterprise business applications. We simplify management, reduce risk, and maximize uptime.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a
                href="https://www.facebook.com/people/Brain-Box-Solutions/100048065002696/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.625L16 8h-3V6.625c0-.625.375-1.125 1.125-1.125H16V2h-3c-2.375 0-4 1.625-4 4v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-t border-slate-200/60 pt-6 md:border-0 md:pt-0">
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full md:cursor-default focus:outline-none"
            >
              <h3 className="text-slate-900 text-xs font-bold uppercase tracking-widest md:mb-6">
                Company
              </h3>
              <ChevronDown className={`h-4 w-4 md:hidden transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-4 text-sm font-medium mt-6 md:mt-0 md:block overflow-hidden transition-all ${openSection === 'company' ? 'block' : 'hidden'}`}>
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all inline-block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all inline-block py-1">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all inline-block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cloud Solutions */}
          <div className="border-t border-slate-200/60 pt-6 md:border-0 md:pt-0">
            <button 
              onClick={() => toggleSection('solutions')}
              className="flex items-center justify-between w-full md:cursor-default focus:outline-none"
            >
              <h3 className="text-slate-900 text-xs font-bold uppercase tracking-widest md:mb-6">
                Solutions
              </h3>
              <ChevronDown className={`h-4 w-4 md:hidden transition-transform ${openSection === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-4 text-sm font-medium mt-6 md:mt-0 md:block overflow-hidden transition-all ${openSection === 'solutions' ? 'block' : 'hidden'}`}>
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.hero.title}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="border-t border-slate-200/60 pt-6 md:border-0 md:pt-0 space-y-6">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-widest">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  LG-13, Xth Central Mall,<br />
                  Mahavir Nagar, Kandivali West,<br />
                  Mumbai, Maharashtra 400067
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <a href="tel:+919820246622" className="hover:text-blue-600 transition-colors py-1 inline-block">
                  +91 98202 46622
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <a href="mailto:info@brainboxsolutions.net" className="hover:text-blue-600 transition-colors py-1 inline-block break-all">
                  info@brainboxsolutions.net
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://wa.me/919820246622?text=Hello%20Brain%20Box%20Solutions%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all border border-slate-200 hover:border-emerald-200 w-full md:w-auto justify-center"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0 font-medium">
          <p className="text-center md:text-left">&copy; {currentYear} Brain Box Solutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
