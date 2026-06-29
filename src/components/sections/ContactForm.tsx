"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { services, companyInfo } from "@/data/content";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Client-side validations
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
    >
      {/* Contact Info Column */}
      <div className="lg:col-span-5 bg-slate-50 border-r border-slate-100 p-8 md:p-12 text-slate-600 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Get in touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Let&apos;s build secure cloud environments together.
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 font-medium">
            Have questions about taking your accounting databases to the cloud? Need a private VPS partition or custom ERP setup? Reach out to our IT consultants today.
          </p>
        </div>

        <ul className="space-y-6 text-sm">
          <li className="flex items-start space-x-4">
            <div className="p-2.5 bg-blue-50 border border-blue-100/50 rounded-lg text-blue-600 shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Headquarters</h4>
              <p className="mt-1 text-slate-500 leading-relaxed text-xs font-medium">
                {companyInfo.address.fullAddress}
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="p-2.5 bg-blue-50 border border-blue-100/50 rounded-lg text-blue-600 shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Call / WhatsApp</h4>
              <p className="mt-1 text-slate-500 text-xs font-medium">
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="text-slate-700 hover:text-blue-600 transition-colors">
                  {companyInfo.phone}
                </a>
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="p-2.5 bg-blue-50 border border-blue-100/50 rounded-lg text-blue-600 shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Email Address</h4>
              <p className="mt-1 text-slate-500 text-xs font-medium">
                <a href={`mailto:${companyInfo.email}`} className="text-slate-700 hover:text-blue-600 transition-colors">
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </li>
        </ul>

        {/* Google Maps Embed Location */}
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-inner mt-4">
          <iframe
            src={companyInfo.googleMapsEmbedUrl}
            width="100%"
            height="160"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            title="Brain Box Solutions office coordinates map location"
          />
        </div>

        <div className="text-xs text-slate-500 pt-2 border-t border-slate-900/60">
          Uptime SLA guarantee: {companyInfo.globalSla}
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-7 p-8 md:p-12">
        {status === "success" ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in">
            <div className="p-4 bg-green-50 rounded-full text-green-600">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Thank you for reaching out. A Brain Box Solutions IT consultant will review your message and contact you within the next 2 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98202 46622"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label htmlFor="company" className="text-xs font-semibold text-slate-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Enterprises LLC"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="space-y-1.5">
              <label htmlFor="service" className="text-xs font-semibold text-slate-700">
                Service of Interest
              </label>
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23475569%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat cursor-pointer"
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
                <option value="custom">Other / Consulting Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                How can we assist you? <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your requirements..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 resize-none"
              />
            </div>

            {/* Error Message */}
            {status === "error" && (
              <div className="flex items-center space-x-2 text-xs font-medium text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
