"use client";

import { motion } from "framer-motion";

interface SpecificationsTableProps {
  specifications: {
    label: string;
    value: string;
  }[];
}

export default function SpecificationsTable({ specifications }: SpecificationsTableProps) {
  return (
    <section id="specifications" className="scroll-mt-[130px] py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Specifications</h2>
          <p className="text-slate-400">High-level details of our infrastructure capabilities.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden"
        >
          <div className="divide-y divide-slate-700/50">
            {specifications.map((spec, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row p-6 min-h-[72px] items-center hover:bg-slate-800 transition-colors">
                <div className="sm:w-1/3 font-bold text-blue-400 mb-2 sm:mb-0">{spec.label}</div>
                <div className="sm:w-2/3 text-slate-300">{spec.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
