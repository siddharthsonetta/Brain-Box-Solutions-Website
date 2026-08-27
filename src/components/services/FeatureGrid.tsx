"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface FeatureGridProps {
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const stagger = { animate: { transition: { staggerChildren: 0.1 } } };
  const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <section id="features" className="scroll-mt-[130px] py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Core Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Platform Features</h2>
        </div>
        
        <motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            // @ts-expect-error - Lucide icons dynamic
            const IconComponent = Icons[feature.icon] || Icons.CheckCircle2;
            return (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
