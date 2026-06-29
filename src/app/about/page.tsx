"use client";

import { motion } from "framer-motion";
import { Info, Target, Eye, ShieldCheck, Zap, Cpu, Users } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import { aboutPageContent } from "@/data/content";

export default function AboutPage() {
  const cards = [
    {
      icon: <Info className="h-6 w-6 text-blue-600" />,
      title: aboutPageContent.overviewCard.title,
      description: aboutPageContent.overviewCard.description,
      bgColor: "bg-[#F8FAFC] border-slate-200/60",
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      title: aboutPageContent.missionCard.title,
      description: aboutPageContent.missionCard.description,
      bgColor: "bg-[#F8FAFC] border-slate-200/60",
    },
    {
      icon: <Eye className="h-6 w-6 text-sky-600" />,
      title: aboutPageContent.visionCard.title,
      description: aboutPageContent.visionCard.description,
      bgColor: "bg-[#F8FAFC] border-slate-200/60",
    },
  ];

  const values = aboutPageContent.principles.items;

  return (
    <div className="relative pt-24 pb-0 bg-white">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href="http://brainboxsolutions.net/about" />

      {/* Header & Overview Grid Section - White background */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {aboutPageContent.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {aboutPageContent.title}
            </h1>
          </motion.div>

          {/* Structured Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`p-8 rounded-2xl border ${card.bgColor} shadow-sm flex flex-col space-y-4 hover:shadow-md transition-all duration-300`}
              >
                <div className="p-3 bg-white rounded-xl inline-block w-fit shadow-sm border border-slate-100/50">
                  {card.icon}
                </div>
                <h2 className="text-lg font-bold text-slate-900">{card.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Soft Blue Background (#EFF6FF) */}
      <section className="bg-[#EFF6FF] border-y border-slate-200/55 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutPageContent.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section - Soft Grey Background (#F8FAFC) */}
      <section className="bg-[#F8FAFC] border-b border-slate-200/40 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {aboutPageContent.principles.badge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {aboutPageContent.principles.title}
            </h2>
            <p className="text-xs text-slate-500">
              {aboutPageContent.principles.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, idx) => {
              const icons = [
                <ShieldCheck key="s" className="h-6 w-6 text-blue-600" />,
                <Zap key="z" className="h-6 w-6 text-cyan-600" />,
                <Cpu key="c" className="h-6 w-6 text-indigo-600" />,
                <Users key="u" className="h-6 w-6 text-blue-600" />
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm space-y-4 hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-50 rounded-lg inline-block border border-slate-100/50 shadow-sm">
                    {icons[idx]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{val.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
