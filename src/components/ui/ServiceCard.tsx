"use client";

import Link from "next/link";
import { ArrowRight, Server, Cloud, Cpu, Database, Layers, CheckCircle } from "lucide-react";
import { Service } from "@/data/content";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "tally-on-cloud":
      case "busy-on-cloud":
      case "marg-on-cloud":
        return <Cloud className="h-6 w-6 text-blue-600" />;
      case "database-hosting":
        return <Database className="h-6 w-6 text-cyan-600" />;
      case "virtual-server":
        return <Server className="h-6 w-6 text-sky-600" />;
      case "dedicated-machine":
        return <Cpu className="h-6 w-6 text-indigo-600" />;
      case "customized-erp":
        return <Layers className="h-6 w-6 text-indigo-600" />;
      default:
        return <Server className="h-6 w-6 text-blue-600" />;
    }
  };

  // Extract the primary benefit from advantages
  const primaryBenefit = service.advantages[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white rounded-xl border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/30 flex flex-col justify-between h-full"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-50/0 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative space-y-4">
        {/* Category & Icon */}
        <div className="flex items-center justify-between">
          <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300 border border-slate-100">
            {getIcon(service.slug)}
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">
            {service.category === "cloud" ? "Cloud" : "Software"}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-0.5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[11px] font-semibold text-blue-600/80">
            {service.tagline}
          </p>
        </div>

        {/* 1-Line Description */}
        <p className="text-xs text-slate-500 leading-normal line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Single Highlighted Key Benefit Pill */}
        {primaryBenefit && (
          <div className="pt-2">
            <div className="inline-flex items-center space-x-2 bg-blue-50/70 border border-blue-100/50 px-3 py-1.5 rounded-lg text-xs w-full">
              <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
              <span className="text-slate-700 leading-tight font-medium text-[11px]">
                <strong>{primaryBenefit.title}</strong>: {primaryBenefit.desc}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="relative pt-4 mt-4 border-t border-slate-100">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-700 group/link"
        >
          <span>Learn More &amp; Pricing</span>
          <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
