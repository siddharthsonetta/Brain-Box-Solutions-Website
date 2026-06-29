"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "cloud" | "software">("all");

  const filteredServices = services.filter((service) => {
    if (activeFilter === "all") return true;
    return service.category === activeFilter;
  });

  const filterTabs = [
    { id: "all", label: "All Solutions" },
    { id: "cloud", label: "Cloud Hosting Solutions" },
    { id: "software", label: "Software Solutions" },
  ] as const;

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#EFF6FF] min-h-screen">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="http://brainboxsolutions.net/services" />

      {/* Subtle grid backdrop decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb03_1px,transparent_1px),linear-gradient(to_bottom,#2563eb05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Enterprise Cloud Hosting &amp; Custom ERP Solutions
          </h1>
          <p className="text-base text-slate-500 leading-relaxed font-medium">
            Explore our comprehensive suite of managed cloud environments, database containers, and custom software systems tailored to optimize operations and secure business records.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 border-b border-slate-200/40 pb-px">
          <div className="flex space-x-1 bg-slate-200/40 p-1 rounded-xl border border-slate-200/20 backdrop-blur-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={service.slug}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Solution CTA Banner - Redesigned to Soft Blue #EFF6FF Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-[#EFF6FF] text-slate-800 rounded-2xl p-8 md:p-12 border border-blue-200/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-4 max-w-xl text-center md:text-left relative">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Looking for a custom private cloud cluster?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              We specialize in custom server configurations, multi-region database replication, active directory synchronization, and private network integrations. Let&apos;s build a custom plan for your enterprise.
            </p>
          </div>

          <div className="shrink-0 relative">
            <a
              href="/contact?ref=custom-cloud"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-sm hover:shadow cursor-pointer"
            >
              Consult with our Architects
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
