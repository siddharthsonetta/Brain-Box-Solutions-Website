"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-500 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center"
              >
                <img
                  src="/images/logo.png"
                  alt="Brain Box Solutions"
                  className="h-12 w-auto object-contain"
                  draggable={false}
                />
              </motion.div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
              Brain Box Solutions delivers high-performance cloud hosting and custom ERP software for businesses looking to scale. We simplify infrastructure management, reduce risk, and maximize security.
            </p>
            <div className="flex space-x-3.5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.facebook.com/people/Brain-Box-Solutions/100048065002696/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors border border-slate-200/20"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3.625L16 8h-3V6.625c0-.625.375-1.125 1.125-1.125H16V2h-3c-2.375 0-4 1.625-4 4v2z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="p-2 rounded-lg bg-slate-200/50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors border border-slate-200/20"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="p-2 rounded-lg bg-slate-200/50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors border border-slate-200/20"
                aria-label="Twitter/X"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group font-medium">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cloud Solutions */}
          <div>
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-6">
              Cloud Services
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center group font-medium"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-slate-900 text-xs font-bold uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-600">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  LG-20, Xth Central Mall,<br />
                  Mahavir Nagar, Kandivali West,<br />
                  Mumbai, Maharashtra 400067
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <a href="tel:+919820246622" className="hover:text-blue-600 text-slate-700 transition-colors">
                  +91 98202 46622
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-600">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <a href="mailto:info@brainboxsolutions.net" className="hover:text-blue-600 text-slate-700 transition-colors">
                  info@brainboxsolutions.net
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919820246622?text=Hello%20Brain%20Box%20Solutions%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-sm transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Lower Banner */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0 font-medium">
          <p>&copy; {currentYear} Brain Box Solutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
