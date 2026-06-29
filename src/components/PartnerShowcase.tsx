"use client";

import { partners } from "@/data/partners";
import { motion } from "framer-motion";

export default function PartnerShowcase() {
  // Triple the list to create an infinite loop experience without gaps
  const loopedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white border-y border-slate-100 py-10 md:py-12 overflow-hidden relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Enterprise Alliances
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            Trusted Technology Partners
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Partnering with industry-leading technology providers to deliver reliable, secure, and scalable business solutions.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="flex w-full select-none overflow-hidden relative py-2">
        {/* Shadow overlays for smooth edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex space-x-6 animate-marquee whitespace-nowrap min-w-full">
          {loopedPartners.map((partner, idx) => (
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              key={`${partner.id}-${idx}`}
              className="inline-flex items-center justify-center bg-white border border-slate-100 rounded-xl w-[220px] h-[110px] md:w-[260px] md:h-[130px] p-5 shadow-sm hover:shadow hover:border-blue-500/20 transition-all duration-300 group shrink-0"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={`/images/partners/${partner.id}.png`}
                  alt={partner.name}
                  className="max-w-[70%] max-h-[70%] w-auto h-auto object-contain"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Custom CSS Marquee Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
