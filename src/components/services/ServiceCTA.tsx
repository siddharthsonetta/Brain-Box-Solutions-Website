"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyInfo } from "@/data/content";

interface ServiceCTAProps {
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  title: string;
}

export default function ServiceCTA({ cta, title }: ServiceCTAProps) {
  return (
    <section className="scroll-mt-[130px] py-24 relative overflow-hidden bg-blue-600 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-800"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{cta.title}</h2>
          <p className="text-xl text-blue-100 mb-10">{cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${companyInfo.whatsappUrl}?text=Hello%20Brain%20Box%20Solutions%2C%20I%20am%20interested%20in%20${encodeURIComponent(title)}.`} className="inline-flex items-center justify-center bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
              {cta.buttonText}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-colors">
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
