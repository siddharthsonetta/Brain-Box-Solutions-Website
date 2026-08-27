"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceFAQProps {
  faq: {
    question: string;
    answer: string;
  }[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  return (
    <section id="faq" className="scroll-mt-[130px] py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-4 min-h-[72px] flex items-center justify-between font-bold text-slate-900 text-left hover:bg-slate-50 transition-colors"
              >
                {item.question}
                {activeIndex === idx ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
