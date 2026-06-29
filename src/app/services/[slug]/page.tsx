import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Cloud, Database, Server, Cpu, Layers, MessageSquare, Phone } from "lucide-react";
import { services, companyInfo } from "@/data/content";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Cloud Hosting & Software Solutions`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Brain Box Solutions`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const getIcon = (slug: string) => {
    switch (slug) {
      case "tally-on-cloud":
      case "busy-on-cloud":
      case "marg-on-cloud":
        return <Cloud className="h-8 w-8 text-blue-600" />;
      case "database-hosting":
        return <Database className="h-8 w-8 text-cyan-600" />;
      case "virtual-server":
        return <Server className="h-8 w-8 text-sky-600" />;
      case "dedicated-machine":
        return <Cpu className="h-8 w-8 text-indigo-600" />;
      case "customized-erp":
        return <Layers className="h-8 w-8 text-indigo-600" />;
      default:
        return <Server className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Canonical URL for SEO */}
      <link rel="canonical" href={`http://brainboxsolutions.net/services/${service.slug}`} />

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span>All Services</span>
        </Link>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-10 border-b border-slate-100 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                {getIcon(service.slug)}
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-widest">
                {service.category === "cloud" ? "Cloud Hosting" : "Enterprise Software"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {service.title}
            </h1>
            <p className="text-base text-slate-500 leading-relaxed font-medium">
              {service.tagline}
            </p>
          </div>

          <div className="shrink-0 pt-2 flex flex-row sm:flex-col gap-3">
            <Button
              href={`${companyInfo.whatsappUrl}?text=Hello%20Brain%20Box%20Solutions%2C%20I%20am%20interested%20in%20a%20free%20demo%20for%20${encodeURIComponent(service.title)}.`}
              external
              className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center space-x-2 border-none"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Get Live Demo</span>
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details & Advantages */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                Key Advantages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.advantages.map((adv, idx) => (
                  <div key={idx} className="bg-slate-50/50 border border-slate-100 p-5 rounded-xl space-y-2">
                    <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md inline-block">
                      <Check className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{adv.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Plans / Pricing Sidebar */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Service Packages
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Choose a configuration
                </h3>
              </div>

              {/* Plans Loop */}
              <div className="space-y-4">
                {service.plans.map((plan, idx) => (
                  <div
                    key={idx}
                    className="p-5 border border-slate-100 rounded-xl hover:border-blue-500/20 hover:bg-slate-50/20 transition-all space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">
                        {plan.name}
                      </span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center text-xs text-slate-500">
                          <Check className="h-3.5 w-3.5 text-blue-600 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Direct Help */}
              <div className="bg-[#EFF6FF] text-slate-800 rounded-xl p-5 text-center space-y-4 border border-blue-200/50 shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">Need a custom plan?</h4>
                  <p className="text-xs text-slate-600 leading-normal font-medium">
                    We can allocate customized RAM cores, private subnet firewalls, and direct backup nodes.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  <Button
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
                  >
                    Send Custom Inquiry
                  </Button>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center space-x-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Support: {companyInfo.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
