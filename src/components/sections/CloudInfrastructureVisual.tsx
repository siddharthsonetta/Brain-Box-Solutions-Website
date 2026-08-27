"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Shield, HardDrive, ArrowDown } from "lucide-react";

export default function CloudInfrastructureVisual() {
  const steps = [
    {
      id: "business-apps",
      title: "Business Applications",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      desc: "Tally, ERPs, and CRMs",
    },
    {
      id: "secure-cloud",
      title: "Secure Cloud Gateway",
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      desc: "Firewalls & DDoS Protection",
    },
    {
      id: "compute",
      title: "Compute & Storage",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      desc: "High-Performance Servers",
    },
    {
      id: "backup",
      title: "Automated Backup",
      icon: <HardDrive className="w-6 h-6 text-cyan-500" />,
      desc: "Encrypted Data Vaults",
    },
    {
      id: "continuity",
      title: "Business Continuity",
      icon: <Cloud className="w-6 h-6 text-sky-500" />,
      desc: "Disaster Recovery Ready",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between relative py-12 md:py-8">
      {/* Background connection line for desktop */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
      
      {/* Background connection line for mobile */}
      <div className="block md:hidden absolute top-0 left-1/2 w-1 h-full bg-slate-200 -translate-x-1/2 z-0" />

      {/* Animated glowing line for desktop */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 -translate-y-1/2 z-0"
      />

      {/* Animated glowing line for mobile */}
      <motion.div
        initial={{ height: "0%" }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        className="block md:hidden absolute top-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2 z-0"
      />

      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="relative z-10 flex flex-col items-center my-6 md:my-0 group"
        >
          {/* Node Circle */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-xl group-hover:border-blue-500/30 transition-colors duration-300 relative">
            <div className="absolute inset-0 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              {step.icon}
            </div>
            
            {/* Pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              className="absolute inset-0 rounded-full border-2 border-blue-400"
            />
          </div>

          {/* Text content */}
          <div className="mt-4 text-center bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-slate-100 shadow-sm md:absolute md:top-24 md:w-40 md:-ml-10">
            <h4 className="text-[13px] md:text-sm font-bold text-slate-900">{step.title}</h4>
            <p className="text-[10px] md:text-xs text-slate-500 mt-1">{step.desc}</p>
          </div>
          
          {/* Mobile arrow indicator between steps */}
          {index < steps.length - 1 && (
            <div className="block md:hidden absolute -bottom-10 text-slate-300">
              <ArrowDown className="w-4 h-4" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
