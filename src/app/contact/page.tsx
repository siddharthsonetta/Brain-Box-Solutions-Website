"use client";

import ContactForm from "@/components/sections/ContactForm";
import { contactPageContent } from "@/data/content";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="http://brainboxsolutions.net/contact" />

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {contactPageContent.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {contactPageContent.title}
          </h1>
          <p className="text-base text-slate-500 leading-relaxed font-medium">
            {contactPageContent.description}
          </p>
        </motion.div>

        {/* Embedded Form Component */}
        <ContactForm />
      </div>
    </div>
  );
}
