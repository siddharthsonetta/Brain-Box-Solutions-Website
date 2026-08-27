"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  category: string;
}

export default function ServiceHero({ title, subtitle, image, description, category }: ServiceHeroProps) {
  const getCategoryLabel = () => {
    switch(category) {
      case "cloud": return "Cloud & Infrastructure";
      case "business-apps": return "Business Applications";
      case "backup-continuity": return "Backup & Continuity";
      case "security-support": return "Security & Support";
      default: return "Enterprise Solution";
    }
  };

  return (
    <section className="relative py-16 md:py-24 md:pb-28 overflow-hidden bg-slate-900 text-white min-h-[70vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block"
          >
            {getCategoryLabel()}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 font-medium mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-300 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <a href="#overview" className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
