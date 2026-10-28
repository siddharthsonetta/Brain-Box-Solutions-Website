
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server, Shield, Cloud, Database, MonitorPlay, Settings, Phone, 
  ArrowRight, CheckCircle2, Factory, Building2, Calculator, Rocket,
  ChevronDown, ChevronUp, Cpu, HardDrive, Lock, Laptop, Printer
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const faqs = [
    {
      q: "What is cloud computing?",
      a: "Cloud computing delivers computing services—including servers, storage, databases, networking, software, and analytics—over the Internet. This offers faster innovation, flexible resources, and economies of scale, allowing you to pay only for what you use and reducing your local hardware dependencies."
    },
    {
      q: "What is a dedicated server?",
      a: "A dedicated server is a physical server leased entirely to your business. Unlike virtual servers where resources are shared, you get uncompromised access to all the CPU, RAM, and storage on the machine, making it ideal for high-traffic or resource-intensive workloads."
    },
    {
      q: "What is Tally on Cloud?",
      a: "Tally on Cloud allows you to host your Tally ERP software on our secure cloud infrastructure. It enables your team and accountants to access live financial data simultaneously from anywhere in the world, using any device, without needing a local server."
    },
    {
      q: "How does cloud backup protect business data?",
      a: "Cloud backup automatically replicates your critical data to our secure, off-site storage vaults. This protects your business against accidental deletion, hardware failures, and ransomware attacks by ensuring you always have a clean, recent copy of your data available for rapid restoration."
    },
    {
      q: "Can users access applications remotely?",
      a: "Yes. Using solutions like TSPlus, we can web-enable almost any legacy Windows application. This allows your workforce to access essential software securely from any modern web browser, on any device, without installing complex VPNs."
    },
    {
      q: "What is disaster recovery?",
      a: "Disaster recovery (DR) is a set of policies and technologies designed to ensure your critical business infrastructure can be quickly restored after a catastrophic event (like hardware failure or natural disaster). We replicate your systems so you can failover and maintain business continuity."
    },
    {
      q: "Which service is right for my business?",
      a: "It depends on your goals. If you need raw performance, choose Dedicated Servers. For flexible workloads, Cloud Computing is best. If you need accounting accessibility, go with Tally on Cloud. Contact our experts, and we'll help architect the perfect solution for your specific requirements."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cloud_data.jpg" alt="Cloud Infrastructure" fill className="object-cover opacity-20 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-2xl">
              <motion.span variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block">
                Brain Box Solutions
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Cloud & Technology Solutions Built Around Your Business
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed mb-8">
                Secure, scalable cloud infrastructure, automated backup, and enterprise business applications. We handle the technology so you can focus on growth.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#core-solutions" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-colors">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm transition-colors">
                  Talk to Our Experts
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[500px]"
            >
               {/* Sophisticated visual layers */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl z-10">
                 <Cloud className="w-24 h-24 text-blue-400 mb-4" />
                 <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                   Secure Environment Active
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <button onClick={() => scrollToCategory('cloud-infrastructure')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Cloud & Infrastructure</button>
            <button onClick={() => scrollToCategory('business-apps')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Business Applications</button>
            <button onClick={() => scrollToCategory('backup-continuity')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Backup & Continuity</button>
            <button onClick={() => scrollToCategory('security-support')} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Security & Support</button>
          </div>
        </div>
      </div>

      {/* CORE SOLUTIONS (FEATURED) */}
      <section id="core-solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Core Solutions</h2>
            <p className="text-lg text-slate-600">Enterprise-grade technology services empowering modern businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured 1: Cloud Computing */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 relative overflow-hidden">
                <Image src="/images/cloud_data.jpg" alt="Cloud Computing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-slate-900">Cloud & Infrastructure</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Computing</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">Replace aging local servers with flexible, high-availability cloud infrastructure. Scale resources up or down instantly and access your business applications from anywhere securely.</p>
                <ul className="space-y-2 mb-8">
                  {["Anywhere Access", "Instant Scalability", "Reduced Hardware Costs"].map(f => (
                    <li key={f} className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />{f}</li>
                  ))}
                </ul>
                <Link href="/services/cloud-computing" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-2 transition-transform">
                  Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Featured 2: Tally on Cloud */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-64 relative overflow-hidden">
                <Image src="/images/tally-on-cloud.png" alt="Tally on Cloud" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/40"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-slate-900">Business Applications</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Tally on Cloud</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">Access Tally from anywhere, anytime, on any device. Eliminate local server costs, enhance team collaboration, and keep your financial data secure with automated backups.</p>
                <ul className="space-y-2 mb-8">
                  {["Multi-User Collaboration", "Zero Hardware Costs", "Automated Daily Backups"].map(f => (
                    <li key={f} className="flex items-center text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />{f}</li>
                  ))}
                </ul>
                <Link href="/services/tally-on-cloud" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-2 transition-transform">
                  Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOUD COMPUTING DIAGRAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">How Our Cloud Architecture Works</h2>
              <p className="text-lg text-slate-600 mb-8">We deliver enterprise infrastructure over the internet, drastically reducing your dependency on local hardware. Enjoy unparalleled flexibility and operational efficiency.</p>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {/* Flow steps */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><Building2 className="w-5 h-5"/></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm"><h4 className="font-bold text-slate-900">Your Business</h4><p className="text-sm text-slate-500">Users connect securely from any location.</p></div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><Cloud className="w-5 h-5"/></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm"><h4 className="font-bold text-slate-900">Brain Box Cloud</h4><p className="text-sm text-slate-500">High-availability servers process requests.</p></div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-sky-100 text-sky-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><Database className="w-5 h-5"/></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm"><h4 className="font-bold text-slate-900">Applications & Data</h4><p className="text-sm text-slate-500">ERP, Tally, and databases run seamlessly.</p></div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><Shield className="w-5 h-5"/></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm"><h4 className="font-bold text-slate-900">Backup & Security</h4><p className="text-sm text-slate-500">Automated protection and encryption.</p></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image src="/images/cloud_data.jpg" alt="Cloud Diagram" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOUD & INFRASTRUCTURE / DEDICATED SERVERS */}
      <section id="cloud-infrastructure" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/server_rack.jpg" alt="Server Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2 block">Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Dedicated Servers</h2>
            <p className="text-lg text-slate-300 max-w-3xl">When raw performance and absolute control are non-negotiable. Our dedicated servers provide uncompromised computing power, isolated resources, and flexible configurations to host your most demanding business applications and high-traffic workloads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Windows Server */}
            <Link href="/services/windows-dedicated-servers" className="block group h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-between">
                <div>
                  <MonitorPlay className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Windows Dedicated</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">Optimized for Remote Desktop, Active Directory, and Microsoft ecosystems.</p>
                </div>
                <span className="text-blue-400 text-sm font-bold flex items-center group-hover:text-blue-300 mt-2">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>

            {/* Linux Server */}
            <Link href="/services/linux-dedicated-servers" className="block group h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-between">
                <div>
                  <Cpu className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Linux Dedicated</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">Flexible, secure open-source environments for web apps and databases.</p>
                </div>
                <span className="text-blue-400 text-sm font-bold flex items-center group-hover:text-blue-300 mt-2">View Details <ArrowRight className="w-4 h-4 ml-1" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS APPLICATIONS */}
      <section id="business-apps" className="py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Business Applications</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">Work From Anywhere</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tally Detail */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3"></div>
              <Cloud className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Tally on Cloud Mastery</h3>
              <p className="text-lg text-slate-600 mb-8">Access Tally securely from anywhere in the world. We eliminate the need for heavy local servers, providing a centralized, multi-user environment that keeps your financial records protected, backed up, and always available.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Centralized Data", "Multi-Location Access", "Automated Backup", "Reduced IT Overhead"].map(f => (
                  <div key={f} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /><span className="font-medium text-slate-700">{f}</span></div>
                ))}
              </div>
              <Link href="/services/tally-on-cloud" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                View Tally Plans
              </Link>
            </div>

            {/* TSPlus & TSPrint */}
            <div className="space-y-8">
              <Link href="/services/tsplus" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <Laptop className="w-8 h-8 text-sky-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">TSPlus Remote Access</h3>
                  <p className="text-slate-600 text-sm">Web-enable legacy Windows applications for instant browser access globally.</p>
                </div>
              </Link>
              <Link href="/services/tsprint-tsscan" className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <Printer className="w-8 h-8 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">TSPrint & TSScan</h3>
                  <p className="text-slate-600 text-sm">Seamless remote printing and direct scanning for cloud applications.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BACKUP & CONTINUITY */}
      <section id="backup-continuity" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image src="/images/secure-cloud-backup-journey.png" alt="Secure Cloud Backup Journey" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl text-white">
                  <h4 className="font-bold mb-2">Automated Data Flow</h4>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span>Data Source</span><ArrowRight className="w-4 h-4 text-emerald-400" />
                    <span>Encryption</span><ArrowRight className="w-4 h-4 text-emerald-400" />
                    <span>Secure Vault</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">Data Protection</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">Enterprise Cloud Backup & Disaster Recovery</h2>
              <p className="text-lg text-slate-600 mb-8">Safeguard your most critical corporate assets. We provide automated, highly secure backup solutions and comprehensive disaster recovery plans to ensure your business survives hardware failures, ransomware, and human error.</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100"><HardDrive className="text-emerald-600 w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Automated Cloud Backups</h4>
                    <p className="text-slate-600 text-sm">Scheduled, encrypted replication of your servers and databases to off-site vaults.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 border border-blue-100"><Shield className="text-blue-600 w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Disaster Recovery (BCDR)</h4>
                    <p className="text-slate-600 text-sm">Rapid failover capabilities to ensure business continuity during catastrophic events.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/services/enterprise-cloud-backup" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-colors">Cloud Backup</Link>
                <Link href="/services/backup-disaster-recovery" className="inline-flex items-center justify-center bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors">Disaster Recovery</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECURITY & SUPPORT */}
      <section id="security-support" className="py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2 block">Management</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">Security & Expert Support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/security-services" className="block group h-full">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Lock className="w-8 h-8 text-indigo-600"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Security Services</h3>
                <p className="text-slate-600 text-sm">Multi-layered infrastructure protection, managed firewalls, and proactive threat monitoring.</p>
              </div>
            </Link>
            
            <Link href="/services/implementation-support" className="block group h-full">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Settings className="w-8 h-8 text-sky-600"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Implementation</h3>
                <p className="text-slate-600 text-sm">End-to-end assistance for migrating, configuring, and maintaining your cloud environments.</p>
              </div>
            </Link>

            <Link href="/services/instant-technical-support" className="block group h-full">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Phone className="w-8 h-8 text-emerald-600"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Instant Tech Support</h3>
                <p className="text-slate-600 text-sm">Direct access to qualified engineers for rapid resolution and ongoing assistance.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHICH SOLUTION IS RIGHT FOR YOU? */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Which solution is right for you?</h2>
            <p className="text-slate-400">Match your business challenge to our tailored solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { q: "Need uncompromised raw performance?", a: "Dedicated Servers", link: "/services/dedicated-servers", icon: Server },
              { q: "Need Tally accessible anywhere?", a: "Tally on Cloud", link: "/services/tally-on-cloud", icon: Cloud },
              { q: "Need business data protection?", a: "Cloud Backup", link: "/services/enterprise-cloud-backup", icon: Shield },
              { q: "Need remote Windows applications?", a: "TSPlus", link: "/services/tsplus", icon: MonitorPlay },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block group h-full">
                <div className="bg-slate-800/50 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all h-full flex flex-col justify-between">
                  <p className="text-sm text-slate-400 mb-3">{item.q}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-blue-400" />
                      <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{item.a}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Built for Business</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
              { title: "Manufacturing", icon: Factory, desc: "ERP hosting and multi-location Tally access." },
              { title: "Corporate Offices", icon: Building2, desc: "Secure data backups and dedicated infrastructure." },
              { title: "C.A. & Accounting", icon: Calculator, desc: "Tally on Cloud and centralized client data." },
              { title: "Startups", icon: Rocket, desc: "Scalable cloud computing to grow instantly." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 h-full flex flex-col">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-slate-900 text-left hover:bg-slate-50 transition-colors"
                >
                  {faq.q}
                  {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero_background.jpg')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">Let&apos;s Build the Right Cloud Environment for Your Business</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Tell us what your business needs, and we&apos;ll help you find the right technology solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
                Talk to Our Experts
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
