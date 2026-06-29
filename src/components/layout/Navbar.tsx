"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Server, Cloud, Cpu, Database, Layers } from "lucide-react";
import { services, companyInfo, homepageContent } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "tally-on-cloud":
      case "busy-on-cloud":
      case "marg-on-cloud":
        return <Cloud className="h-5 w-5 text-blue-600" />;
      case "database-hosting":
        return <Database className="h-5 w-5 text-cyan-600" />;
      case "virtual-server":
        return <Server className="h-5 w-5 text-sky-600" />;
      case "dedicated-machine":
        return <Cpu className="h-5 w-5 text-indigo-600" />;
      case "customized-erp":
        return <Layers className="h-5 w-5 text-indigo-600" />;
      default:
        return <Server className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center"
            >
              <img
                src="/images/logo.png"
                alt="Brain Box Solutions"
                className="h-10 md:h-12 w-auto object-contain"
                draggable={false}
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors py-2 cursor-pointer ${
                        pathname.startsWith("/services")
                          ? "text-blue-600"
                          : "text-slate-600 hover:text-blue-600"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4 z-50"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-white group-hover:shadow-sm border border-slate-100 transition-colors">
                                {getServiceIcon(service.slug)}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                  {service.title}
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                            <span className="text-slate-400">Need a custom cloud configuration?</span>
                            <Link
                              href="/services"
                              className="font-semibold text-blue-600 hover:underline animate-pulse"
                            >
                              View All Services &rarr;
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`${companyInfo.whatsappUrl}?text=Hello%20Brain%20Box%20Solutions%2C%20I%20am%20interested%20in%20a%20free%20demo%20of%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer"
            >
              Get Free Demo
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-blue-600 p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute top-full left-0 right-0 py-4 px-6 overflow-hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="flex flex-col space-y-2">
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Services
                      </span>
                      <div className="grid grid-cols-1 gap-2 pl-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`text-sm font-medium py-1.5 transition-colors ${
                              pathname === `/services/${service.slug}`
                                ? "text-blue-600"
                                : "text-slate-600 hover:text-blue-600"
                            }`}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="text-sm font-semibold text-blue-600 py-1.5 hover:underline"
                        >
                          All Services Page
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-semibold py-2 transition-colors ${
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-slate-100" />
              <div className="flex flex-col space-y-3 pt-2">
                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href={`${companyInfo.whatsappUrl}?text=Hello%20Brain%20Box%20Solutions%2C%20I%20am%20interested%20in%20a%20free%20demo%20of%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 border border-slate-200 text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Get Free Demo
                </motion.a>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
