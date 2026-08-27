"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Server, Shield, Activity, HardDrive } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200/50">
      {/* Base Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_background.jpg"
          alt="Premium Cloud Infrastructure"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
        {/* Subtle overlay to integrate the image with the blue theme */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7FAFF]/80 via-transparent to-transparent" />
      </div>

      {/* Floating UI Elements */}
      
      {/* Security Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg"
      >
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <Shield className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-300 font-bold">Security</p>
          <p className="text-sm text-white font-semibold">Active Monitoring</p>
        </div>
      </motion.div>

      {/* Infrastructure Node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 left-12 md:bottom-16 md:left-16 flex flex-col items-center bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
      >
        <div className="relative">
          <Server className="w-8 h-8 text-blue-400" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        </div>
        <div className="mt-3 text-center">
          <p className="text-white text-sm font-bold">Node Alpha</p>
          <p className="text-blue-300 text-[10px] uppercase tracking-widest mt-0.5">Connected</p>
        </div>
      </motion.div>

      {/* Data Backup Status */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-3 bg-white/90 backdrop-blur-md border border-slate-200 p-3 rounded-xl shadow-xl"
      >
        <div className="p-2 bg-blue-100 rounded-lg">
          <HardDrive className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Sync Status</p>
          <p className="text-sm text-slate-900 font-semibold">Continuous</p>
        </div>
      </motion.div>

      {/* Network Activity */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-16 right-8 md:top-20 md:right-12 flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full shadow-lg"
      >
        <Activity className="w-4 h-4 text-cyan-400" />
        <span className="text-xs text-white font-medium tracking-wide">Secure Link</span>
      </motion.div>

    </div>
  );
}
