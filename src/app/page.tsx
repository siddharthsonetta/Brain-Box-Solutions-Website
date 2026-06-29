"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Cpu, Users, Server, Shield, Activity, Lock, Calendar, Handshake, Grid, Headset } from "lucide-react";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactForm from "@/components/sections/ContactForm";
import StatCounter from "@/components/ui/StatCounter";
import HeroVisual from "@/components/sections/HeroVisual";
import PartnerShowcase from "@/components/PartnerShowcase";
import { services, companyInfo, homepageContent } from "@/data/content";
import { motion } from "framer-motion";

export default function Home() {
  const featuredServices = services.filter((s) =>
    ["tally-on-cloud", "busy-on-cloud", "virtual-server"].includes(s.slug)
  );

  const heroTrustIndicators = [
    { icon: <Users className="h-4.5 w-4.5 text-blue-600" />, label: "500+ Businesses Served" },
    { icon: <Server className="h-4.5 w-4.5 text-blue-600" />, label: "99.99% Uptime SLA" },
    { icon: <Activity className="h-4.5 w-4.5 text-blue-600" />, label: "24/7 Support Monitor" },
    { icon: <Lock className="h-4.5 w-4.5 text-blue-600" />, label: "Enterprise Security" },
  ];

  const whyChooseUsIcons = [
    <Users key="users" className="h-6 w-6 text-blue-600" />,
    <Lock key="lock" className="h-6 w-6 text-indigo-600" />,
    <Activity key="activity" className="h-6 w-6 text-sky-600" />,
    <Zap key="zap" className="h-6 w-6 text-cyan-600" />,
    <ShieldCheck key="shield" className="h-6 w-6 text-emerald-600" />,
    <Cpu key="cpu" className="h-6 w-6 text-blue-600" />
  ];

  const trustMetrics = [
    { icon: <Calendar className="h-6 w-6" />, value: 15, suffix: "+", label: "Years in Business" },
    { icon: <Handshake className="h-6 w-6" />, value: 6, suffix: "+", label: "Technology Partners" },
    { icon: <Grid className="h-6 w-6" />, value: 20, suffix: "+", label: "Solutions Offered" },
    { icon: <Headset className="h-6 w-6" />, value: 24, suffix: "/7", label: "Support Availability" }
  ];

  // JSON-LD structured data for search engine optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "url": "http://brainboxsolutions.net",
    "logo": "http://brainboxsolutions.net/wp-content/uploads/2022/12/logo.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service",
      "email": companyInfo.email,
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address.mall + ", " + companyInfo.address.street,
      "addressLocality": companyInfo.address.city,
      "addressRegion": companyInfo.address.state,
      "postalCode": companyInfo.address.zip,
      "addressCountry": "IN"
    },
    "description": "Brain Box Solutions is a premier IT Consulting and technology business solutions provider, specializing in Tally on Cloud, Digital Transformation, and software services.",
    "sameAs": [
      companyInfo.socials.facebook
    ]
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Cloud Blue Background (#F7FAFF) */}
      <section className="relative overflow-hidden bg-[#F7FAFF] border-b border-slate-100 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb05_1px,transparent_1px),linear-gradient(to_bottom,#2563eb05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Outcome copy & Action items */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-blue-100/80 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-200/30"
              >
                <span>{homepageContent.hero.badge}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:leading-[1.15]"
              >
                {homepageContent.hero.title}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium"
              >
                {homepageContent.hero.subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
              >
                <Button href="/services" size="lg" className="w-full sm:w-auto shadow-md shadow-blue-600/10">
                  <span>{homepageContent.hero.primaryCta}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto bg-white/60 backdrop-blur-sm">
                  {homepageContent.hero.secondaryCta}
                </Button>
              </motion.div>

              {/* Inline Trust Indicators below CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-slate-200/60 grid grid-cols-2 gap-4"
              >
                {heroTrustIndicators.map((indicator, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-bold">
                    <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
                      {indicator.icon}
                    </div>
                    <span>{indicator.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Interactive Infrastructure Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <HeroVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Animated Statistics/Trust Section - White Background */}
      <section className="bg-white border-b border-slate-200/50 py-8 md:py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0">
            {trustMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center px-4 w-full lg:border-r border-slate-200/60 last:border-r-0 group"
              >
                {/* Small supporting icon element above the number */}
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300 mb-0.5">
                  {metric.icon}
                </div>
                
                {/* Large visually dominant number */}
                {metric.label === "Support Availability" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none"
                  >
                    24/7
                  </motion.div>
                ) : (
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-none">
                    <StatCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={0}
                    />
                  </div>
                )}
                
                {/* Smaller label underneath */}
                <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1.5 group-hover:text-slate-700 transition-colors">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud & Software Services - Technology Blue Background (#EFF6FF) */}
      <section className="bg-[#EFF6FF] border-b border-slate-200/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Reliable Cloud Solutions &amp; IT Consulting
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Host Your Accounting &amp; Core ERP Systems
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline group"
            >
              <span>View all cloud packages</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Soft Grey Background (#F8FAFC) */}
      <section className="bg-[#F8FAFC] border-b border-slate-200/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {homepageContent.whyChooseUs.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {homepageContent.whyChooseUs.title}
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              {homepageContent.whyChooseUs.description}
            </p>
          </div>

          {/* 3x2 Grid layout for 6 cards using #F8FAFC */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageContent.whyChooseUs.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl border border-slate-200/35 shadow-sm space-y-4 hover:border-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-2.5 bg-white rounded-lg inline-block border border-slate-100 shadow-sm">
                  {whyChooseUsIcons[idx]}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Technology Partners Section - Auto-scrolling marquee with Soft Blue Background */}
      <PartnerShowcase />

      {/* Contact Form Section - Technology Blue Background (#EFF6FF) */}
      <section id="contact" className="bg-[#EFF6FF] py-20 md:py-28 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {homepageContent.ctaSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {homepageContent.ctaSection.title}
            </h2>
            <p className="text-sm text-slate-500">
              {homepageContent.ctaSection.description}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
