"use client";

import { partners } from "@/data/partners";
import { motion } from "framer-motion";

export default function PartnerShowcase() {
  return (
    <section className="bg-white border-y border-slate-100 py-16 md:py-20 overflow-hidden relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Enterprise Alliances
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Trusted Technology Partners
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Partnering with industry-leading technology providers to deliver reliable, secure, and scalable business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center justify-center bg-white border border-slate-100 rounded-2xl p-8 h-[140px] md:h-[160px] shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all duration-300"
            >
              <img
                src={`/images/partners/${partner.id}.${partner.extension || 'png'}`}
                alt={partner.name}
                className="max-w-[85%] max-h-[75%] w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
