"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HowItWorksDiagramProps {
  howItWorks?: {
    step: number;
    title: string;
    description: string;
  }[];
}

export default function HowItWorksDiagram({ howItWorks }: HowItWorksDiagramProps) {
  if (!howItWorks || howItWorks.length === 0) return null;

  return (
    <section id="how-it-works" className="scroll-mt-[130px] py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-slate-400">Our seamless process for delivering enterprise technology.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 opacity-30"></div>
          
          {howItWorks.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center max-w-xs w-full"
            >
              <div className="w-24 h-24 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-blue-400 mb-6 z-10 shadow-xl shadow-blue-900/20">
                {step.step}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              
              {idx < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-8 text-slate-600">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
