import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Cloud, Database, ShieldCheck, Lock } from "lucide-react";
import { RichServiceData } from "@/data/services/types";

interface ServiceCardProps {
  service: RichServiceData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case "cloud":
        return <Server className="h-6 w-6 text-blue-400" />;
      case "business-apps":
        return <Cloud className="h-6 w-6 text-indigo-400" />;
      case "backup-continuity":
        return <Database className="h-6 w-6 text-cyan-400" />;
      case "security-support":
        return <ShieldCheck className="h-6 w-6 text-emerald-400" />;
      default:
        return <Server className="h-6 w-6 text-blue-400" />;
    }
  };

  const primaryBenefit = service.benefits && service.benefits.length > 0 ? service.benefits[0] : null;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/60 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-500/30 flex flex-col justify-between h-full">
      {/* Background Image / Visual Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        {service.hero.image ? (
          <Image
            src={service.hero.image}
            alt={service.hero.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-700 uppercase tracking-wider shadow-sm border border-slate-200">
          {service.category.replace("-", " ")}
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 left-6 p-3 bg-white rounded-xl shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-300">
          {getIcon(service.category)}
        </div>
      </div>

      <div className="relative flex-grow p-6 pt-2 flex flex-col space-y-4">
        {/* Title & Tagline */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {service.hero.title}
          </h3>
          <p className="text-xs font-semibold text-blue-600">
            {service.hero.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
          {service.hero.description}
        </p>

        {/* Highlighted Key Benefit */}
        {primaryBenefit && (
          <div className="pt-2 mt-auto">
            <div className="flex items-start space-x-2 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg text-xs w-full group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors duration-300">
              <Lock className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 leading-tight font-medium">
                <strong className="text-slate-900">{primaryBenefit.title}</strong>: {primaryBenefit.description}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="relative p-6 pt-0 mt-auto border-t border-slate-100 bg-slate-50/50 group-hover:bg-blue-600 transition-colors duration-300">
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-white pt-4"
        >
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
