"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Shield, Server, Cpu, HardDrive } from "lucide-react";

export default function HeroVisual() {
  const nodes = [
    {
      id: "tally",
      label: "TallyPrime",
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      x: "15%",
      y: "25%",
      delay: 0,
    },
    {
      id: "busy",
      label: "Busy ERP",
      icon: <Server className="h-5 w-5 text-indigo-600" />,
      x: "85%",
      y: "20%",
      delay: 0.2,
    },
    {
      id: "marg",
      label: "Marg Cloud",
      icon: <Cpu className="h-5 w-5 text-sky-600" />,
      x: "80%",
      y: "75%",
      delay: 0.4,
    },
    {
      id: "database",
      label: "Secure DB",
      icon: <Database className="h-5 w-5 text-cyan-600" />,
      x: "20%",
      y: "70%",
      delay: 0.6,
    },
    {
      id: "backup",
      label: "Backup Node",
      icon: <HardDrive className="h-5 w-5 text-emerald-600" />,
      x: "50%",
      y: "15%",
      delay: 0.8,
    },
  ];

  return (
    <div className="relative w-full h-[360px] md:h-[450px] flex items-center justify-center select-none">
      {/* Background Gradient Mesh Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[60px]" />

      {/* Network Topology SVG Connections with Data Flow Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Connection lines from central core (50%, 50%) to nodes */}
        {/* Tally Connection (15%, 25%) */}
        <path d="M 50% 50% L 15% 25%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite]" />
        
        {/* Busy Connection (85%, 20%) */}
        <path d="M 50% 50% L 85% 20%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite_reverse]" />

        {/* Marg Connection (80%, 75%) */}
        <path d="M 50% 50% L 80% 75%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite]" />

        {/* Database Connection (20%, 70%) */}
        <path d="M 50% 50% L 20% 70%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite_reverse]" />

        {/* Backup Connection (50%, 15%) */}
        <path d="M 50% 50% L 50% 15%" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_10s_linear_infinite]" />
      </svg>

      {/* Custom CSS for stroke animation */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -120;
          }
        }
      `}</style>

      {/* Central Cloud core node */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 relative flex flex-col items-center justify-center p-6 bg-white border border-blue-500/20 shadow-xl rounded-2xl h-32 w-32 md:h-36 md:w-36"
      >
        <div className="absolute inset-0 rounded-2xl bg-blue-50/50 animate-pulse -z-10" />
        <div className="p-3.5 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-500/20">
          <Shield className="h-6 w-6 md:h-7 md:w-7 animate-[spin_10s_linear_infinite]" />
        </div>
        <span className="text-xs font-bold text-slate-800 mt-3 tracking-wide">BrainBox Core</span>
        <span className="text-[9px] font-extrabold text-blue-500 uppercase tracking-widest mt-0.5">Secure Cloud</span>
      </motion.div>

      {/* Satellite orbiting nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: node.delay },
            scale: { duration: 0.5, delay: node.delay },
            y: { duration: 3.5, delay: node.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ left: node.x, top: node.y }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <div className="flex items-center space-x-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-md hover:border-blue-500/20 transition-all hover:scale-[1.03]">
            <div className="p-1.5 bg-slate-50 rounded-lg">
              {node.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 leading-tight">
                {node.label}
              </span>
              <span className="text-[9px] font-semibold text-slate-400 -mt-0.5 uppercase tracking-wider">
                Online
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Small floating data packet particle circles using brand colors (blue, green, orange) */}
      <motion.div
        animate={{ x: ["15%", "50%", "85%"], y: ["25%", "50%", "20%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 shadow-md shadow-blue-600/40 pointer-events-none"
      />
      <motion.div
        animate={{ x: ["80%", "50%", "20%"], y: ["75%", "50%", "70%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/40 pointer-events-none"
      />
      <motion.div
        animate={{ x: ["50%", "50%"], y: ["15%", "50%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-3 h-3 rounded-full bg-orange-500 shadow-md shadow-orange-500/40 pointer-events-none"
      />
    </div>
  );
}
