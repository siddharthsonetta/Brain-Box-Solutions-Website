"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Shield,
  Briefcase,
  ShieldCheck,
  Settings,
  TrendingUp,
  Factory,
  Building2,
  Calculator,
  Rocket,
  Lock,
  Coins,
  HardDrive,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* 1. ABOUT HERO */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span 
                variants={fadeInUp}
                className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 block"
              >
                ABOUT BRAIN BOX SOLUTIONS
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
              >
                Technology That Works Around Your Business
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-600 leading-relaxed mb-8"
              >
                We are a technology solutions company specializing in Cloud Computing, Cloud Backup, and Tally on Cloud services. Our mission is to help businesses work securely, efficiently, and from anywhere, without worrying about data loss, downtime, or infrastructure costs.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/server_rack.jpg"
                alt="Cloud Infrastructure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US - VISUAL STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <Image
                src="/images/cloud_data.jpg"
                alt="Cloud Data Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </motion.div>

            <div className="space-y-12 order-1 lg:order-2">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                  About Us
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                  We focus on delivering premium cloud technology solutions that empower your business. We handle the complexity of infrastructure so you can focus entirely on your growth and operations.
                </motion.p>
              </motion.div>

              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Principle 1 */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Secure</h3>
                    <p className="text-slate-600">Technology designed around data protection and reliability.</p>
                  </div>
                </motion.div>

                {/* Principle 2 */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                      <Settings className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Simple</h3>
                    <p className="text-slate-600">Solutions that make business technology easier to manage.</p>
                  </div>
                </motion.div>

                {/* Principle 3 */}
                <motion.div variants={fadeInUp} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center border border-sky-100">
                      <TrendingUp className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable</h3>
                    <p className="text-slate-600">Infrastructure that can adapt as the business grows.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src="/images/cloud_data.jpg" alt="Cloud Computing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Cloud Computing Solutions</h3>
                <ul className="space-y-4 flex-1">
                  {["Secure cloud infrastructure for business applications", "Anytime, anywhere access", "Scalable solutions as per business growth", "Reduced IT and hardware costs"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src="/images/cybersecurity.jpg" alt="Cloud Backup" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Cloud Backup & Data Protection</h3>
                <ul className="space-y-4 flex-1">
                  {["Automated and scheduled cloud backups", "High-level data security and encryption", "Fast data recovery and disaster management", "Protection against system failure, ransomware, and data loss"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src="/images/hero_background.jpg" alt="Tally on Cloud" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-sky-600" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Tally on Cloud</h3>
                <ul className="space-y-4 flex-1">
                  {["Access Tally from anywhere, anytime", "Multi-user and multi-location support", "No need for heavy servers or local setup", "High-speed, secure, and reliable environment"].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_background.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Who We Serve</h2>
            <p className="text-lg text-slate-300">We cater to businesses across industries, including:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manufacturing Companies", icon: Factory, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { title: "Corporate Offices", icon: Building2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
              { title: "Chartered Accountants & Accounting Firms", icon: Calculator, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
              { title: "Startups & Growing Businesses", icon: Rocket, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${item.border} bg-white/5 backdrop-blur-sm flex flex-col items-center text-center justify-center hover:bg-white/10 transition-colors duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why Choose Brain Box Solutions?</h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Image - Hidden on smaller screens to keep layout clean */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl z-10">
              <Image src="/images/server_rack.jpg" alt="Infrastructure" fill className="object-cover" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative z-20">
              <div className="space-y-6 lg:pr-48 lg:-mt-12">
                {[
                  { title: "Reliable & secure cloud solutions", icon: Lock },
                  { title: "Cost-effective pricing models", icon: Coins },
                  { title: "Easy implementation and support", icon: Settings },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow lg:justify-end lg:text-right lg:flex-row-reverse"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 lg:pl-48 lg:mt-32">
                {[
                  { title: "Business continuity & data safety assured", icon: HardDrive },
                  { title: "Personalized solutions based on client needs", icon: Users },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.15) }}
                    className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section className="relative py-32 overflow-hidden">
        <Image src="/images/cloud_data.jpg" alt="Cloud Network" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-950/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Our Commitment</h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-12">
              We focus on simplicity, security, and scalability, ensuring that your business technology works seamlessly while you focus on growth.
            </p>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-blue-900/50"
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
