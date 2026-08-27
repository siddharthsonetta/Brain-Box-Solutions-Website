import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { services } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import FeatureGrid from "@/components/services/FeatureGrid";
import BenefitSection from "@/components/services/BenefitSection";
import SpecificationsTable from "@/components/services/SpecificationsTable";
import HowItWorksDiagram from "@/components/services/HowItWorksDiagram";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.hero.title} | Brain Box Solutions`,
    description: service.hero.description,
    openGraph: {
      title: `${service.hero.title} | Brain Box Solutions`,
      description: service.hero.description,
      url: `/services/${service.slug}`,
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) notFound();

  return (
    <div className="bg-white pt-[88px]">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href={`http://brainboxsolutions.net/services/${service.slug}`} />

      {/* Sticky Internal Nav */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 overflow-x-auto scrollbar-hide custom-scrollbar-hide">
            <Link href="/services" className="text-slate-500 hover:text-blue-600 flex items-center text-sm font-bold border-r border-slate-200 pr-4 sm:pr-6 shrink-0 group">
              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">All Services</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="flex gap-4 sm:gap-6 text-sm font-bold text-slate-600 pl-4 sm:pl-6 shrink-0">
              <a href="#overview" className="hover:text-blue-600 whitespace-nowrap">Overview</a>
              <a href="#features" className="hover:text-blue-600 whitespace-nowrap">Capabilities</a>
              {service.benefits?.length > 0 && <a href="#benefits" className="hover:text-blue-600 whitespace-nowrap">Benefits</a>}
              {service.specifications && service.specifications.length > 0 && <a href="#specifications" className="hover:text-blue-600 whitespace-nowrap">Specs</a>}
              {service.faq?.length > 0 && <a href="#faq" className="hover:text-blue-600 whitespace-nowrap">FAQ</a>}
            </div>
          </div>
        </div>
      </div>

      <ServiceHero 
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        description={service.hero.description}
        image={service.hero.image}
        category={service.category}
      />
      
      <ServiceOverview title={service.overview.title} content={service.overview.content} />
      
      {service.howItWorks && service.howItWorks.length > 0 && (
        <HowItWorksDiagram howItWorks={service.howItWorks} />
      )}

      {service.features && service.features.length > 0 && (
        <FeatureGrid features={service.features} />
      )}

      {service.benefits && service.benefits.length > 0 && (
        <BenefitSection benefits={service.benefits} />
      )}

      {service.specifications && service.specifications.length > 0 && (
        <SpecificationsTable specifications={service.specifications} />
      )}

      {service.faq && service.faq.length > 0 && (
        <ServiceFAQ faq={service.faq} />
      )}

      {service.cta && (
        <ServiceCTA cta={service.cta} title={service.hero.title} />
      )}
    </div>
  );
}
