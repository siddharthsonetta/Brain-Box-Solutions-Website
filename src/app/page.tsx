import Link from "next/link";
import { ArrowRight, Calendar, Grid, Headset, Shield, Server } from "lucide-react";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactForm from "@/components/sections/ContactForm";
import HeroVisual from "@/components/sections/HeroVisual";
import PartnerShowcase from "@/components/PartnerShowcase";
import Testimonials from "@/components/sections/Testimonials";
import Clientele from "@/components/sections/Clientele";
import CloudInfrastructureVisual from "@/components/sections/CloudInfrastructureVisual";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services, companyInfo, homepageContent } from "@/data/content";

export default function Home() {
  const featuredSlugs = ["dedicated-servers", "tally-on-cloud", "enterprise-cloud-backup"];
  const featuredServices = featuredSlugs
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is typeof services[0] => s !== undefined);

  const trustMetrics = [
    { icon: <Calendar className="h-6 w-6" />, value: "10+", label: "Years Experience" },
    { icon: <Shield className="h-6 w-6" />, value: "99.99%", label: "Uptime Focus" },
    { icon: <Grid className="h-6 w-6" />, value: "20+", label: "Solutions Offered" },
    { icon: <Headset className="h-6 w-6" />, value: "24/7", label: "Proactive Support" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "url": "https://brainboxsolutions.net",
    "logo": "https://brainboxsolutions.net/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.phone,
      "contactType": "customer service",
      "email": companyInfo.email,
    },
    "description": companyInfo.tagline,
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Deep background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8 text-left">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="inline-flex items-center space-x-2 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
                  <span>CLOUD • INFRASTRUCTURE • BUSINESS TECHNOLOGY</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15]">
                  {homepageContent.hero.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-lg">
                  {homepageContent.hero.subheadline}
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Button href="/services" size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 border-0">
                    <span>Explore Solutions</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-600 hover:bg-slate-800 hover:text-white">
                    Talk to Our Experts
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6 w-full flex justify-center">
              <AnimatedSection direction="left" delay={0.4} className="w-full">
                <HeroVisual />
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / VALUE STRIP */}
      <section className="bg-slate-50 border-b border-slate-200/50 py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {trustMetrics.map((metric, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col items-center text-center px-4 w-full md:border-r border-slate-200/60 last:border-r-0 group">
                  <div className="text-blue-600 mb-2">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {metric.value}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {metric.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SOLUTIONS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="mb-12">
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Our Products & Services
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.slug} direction="up" delay={index * 0.1} className="flex h-full">
                <div className="w-full flex">
                  <ServiceCard service={service} />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex justify-center">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group transition-all"
              >
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CLIENTELE CAROUSEL */}
      <Clientele />

      {/* 4. SIGNATURE INFRASTRUCTURE VISUAL SECTION */}
      <section className="bg-slate-900 text-white py-20 md:py-32 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cloud_data.jpg')] opacity-10 bg-cover bg-center mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Architecture Built for Scale
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              How Our Infrastructure Protects Your Business
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              We design impenetrable, high-performance environments that guarantee your operations run smoothly, no matter the demand or external threats.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <CloudInfrastructureVisual />
          </AnimatedSection>
        </div>
      </section>

      {/* 5. WHY BRAIN BOX */}
      <section className="bg-slate-50 border-y border-slate-200/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <AnimatedSection direction="up" className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {homepageContent.whyChooseUs.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {homepageContent.whyChooseUs.title}
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              {homepageContent.whyChooseUs.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homepageContent.whyChooseUs.features.map((feat, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.05} className="flex h-full">
                <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Shield className="w-24 h-24 text-blue-600" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{feat.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <AnimatedSection direction="up">
        <PartnerShowcase />
      </AnimatedSection>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="bg-white py-20 md:py-28 border-t border-slate-200/40 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              {homepageContent.ctaSection.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {homepageContent.ctaSection.title}
            </h2>
            <p className="text-sm text-slate-500">
              {homepageContent.ctaSection.description}
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
