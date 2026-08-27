"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  title: string;
  content: string[];
}

export default function ServiceOverview({ title, content }: ServiceOverviewProps) {
  return (
    <section id="overview" className="scroll-mt-[130px] py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">{title}</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            {content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
