
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Server, Cloud, Database, ShieldCheck, ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState("cloud");
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsServicesDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesDropdownOpen(false);
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      // Very simple click outside logic: if clicking a link, the pathname change will close it.
      // If clicking outside the nav, close it.
      if (isServicesDropdownOpen) {
        const target = e.target as HTMLElement;
        if (!target.closest("header")) {
          setIsServicesDropdownOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cloud": return <Server className="h-4 w-4 text-blue-500" />;
      case "business-apps": return <Cloud className="h-4 w-4 text-indigo-500" />;
      case "backup-continuity": return <Database className="h-4 w-4 text-cyan-500" />;
      case "security-support": return <ShieldCheck className="h-4 w-4 text-emerald-500" />;
      default: return <Server className="h-4 w-4 text-blue-500" />;
    }
  };

  const categories = [
    { id: "cloud", name: "Cloud & Infrastructure" },
    { id: "business-apps", name: "Business Applications" },
    { id: "backup-continuity", name: "Backup & Continuity" },
    { id: "security-support", name: "Security & Support" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-white/80 backdrop-blur-md py-4 md:py-5 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[60]">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                      className={`flex items-center space-x-1 text-sm font-bold transition-colors py-2 cursor-pointer ${
                        pathname.startsWith("/services")
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    {/* Compact Nested Dropdown */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] max-w-[90vw] bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200 z-50 overflow-hidden flex flex-col"
                        >
                          <div className="flex h-[380px]">
                            {/* Categories (Left Panel) */}
                            <div className="w-1/3 bg-slate-50 border-r border-slate-100 p-4 space-y-1">
                              {categories.map(category => (
                                <div
                                  key={category.id}
                                  onMouseEnter={() => setActiveDesktopCategory(category.id)}
                                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-colors cursor-pointer ${
                                    activeDesktopCategory === category.id 
                                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/60" 
                                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`${activeDesktopCategory === category.id ? "scale-110 transition-transform" : ""}`}>
                                      {getCategoryIcon(category.id)}
                                    </div>
                                    <span className="text-sm font-bold">{category.name}</span>
                                  </div>
                                  <ChevronRight className={`h-4 w-4 ${activeDesktopCategory === category.id ? "text-blue-600" : "text-slate-400"}`} />
                                </div>
                              ))}
                            </div>

                            {/* Services (Right Panel) */}
                            <div className="w-2/3 p-6 overflow-y-auto bg-white custom-scrollbar">
                              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 pb-2 border-b border-slate-100">
                                {categories.find(c => c.id === activeDesktopCategory)?.name}
                              </h4>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {services.filter(s => s.category === activeDesktopCategory).map(service => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors h-14"
                                  >
                                    <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                                      {service.hero.title}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Footer Action */}
                          <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center">
                            <Link
                              href="/services"
                              className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center group transition-colors ml-auto"
                            >
                              View All Services
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                  className={`text-sm font-bold transition-colors ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-900 p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] bg-white z-50 overflow-y-auto pb-24 border-t border-slate-100"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="flex flex-col space-y-4">
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                        Services
                      </span>
                      <div className="flex flex-col space-y-3">
                        {categories.map(category => {
                          const isActive = activeMobileCategory === category.id;
                          return (
                            <div key={category.id} className="border border-slate-100 rounded-xl overflow-hidden">
                              <button
                                onClick={() => setActiveMobileCategory(isActive ? null : category.id)}
                                className={`w-full flex items-center justify-between p-4 ${isActive ? "bg-slate-50" : "bg-white"}`}
                              >
                                <span className="text-sm font-bold text-slate-900 flex items-center gap-3">
                                  {getCategoryIcon(category.id)}
                                  {category.name}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? "rotate-180" : ""}`} />
                              </button>
                              
                              <AnimatePresence>
                                {isActive && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden bg-slate-50 border-t border-slate-100"
                                  >
                                    <div className="p-4 flex flex-col space-y-3 pl-10 border-l-2 border-slate-200 ml-4 mb-2">
                                      {services.filter(s => s.category === category.id).map(service => (
                                        <Link
                                          key={service.slug}
                                          href={`/services/${service.slug}`}
                                          onClick={() => setIsOpen(false)}
                                          className="text-sm font-semibold text-slate-600 hover:text-blue-600 py-1"
                                        >
                                          {service.hero.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                        <Link 
                          href="/services" 
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-bold text-blue-600 flex items-center pt-2 pl-2"
                        >
                          View All Services <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-bold transition-colors border-b border-slate-100 pb-4 ${
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-6 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
