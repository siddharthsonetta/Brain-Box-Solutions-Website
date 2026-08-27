"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BenefitSectionProps {
  benefits: {
    title: string;
    description: string;
  }[];
}

export default function BenefitSection({ benefits }: BenefitSectionProps) {
  return (
    <section id="benefits" className="scroll-mt-[130px] py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Business Value</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why Choose This Solution</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
