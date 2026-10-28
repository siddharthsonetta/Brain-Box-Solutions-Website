"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  organization: string;
  date: string;
  photo: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "dharmesh",
    name: "Dharmesh Solanki",
    organization: "SDS Global Services",
    date: "27th June, 2025",
    photo: "/images/testimonials/dharmesh-solanki.jpg",
    text: "Brainbox cloud solutions has exceeded our expectations! The installation at our client's office has been seamless, and the system runs smoothly. Bhavesh's exceptional support and personal attention to queries have been impressive. His responsiveness and expertise make him a trusted partner. I highly recommend Brain Box Solutions cloud services to anyone seeking reliable and efficient solutions. His professionalism and dedication are truly commendable!"
  },
  {
    id: "mansi",
    name: "Mansi Shah",
    organization: "Trishla International",
    date: "27th June, 2023",
    photo: "/images/testimonials/mansi-shah.jpg",
    text: "Recently, I suffered a sudden knee injury and was advised to work from home. Bhavesh Thakkar promptly visited my office, assessed my server setup, and arranged a cloud solution within just four hours. His quick response, well-trained team, and efficient implementation made working remotely completely hassle-free. Brain Box Solutions provides reliable, cost-effective cloud services that simplify business operations, reduce IT infrastructure expenses, and enable secure data access from anywhere in the world. I highly recommend their services to all business owners looking for dependable cloud computing solutions."
  },
  {
    id: "sagar",
    name: "Sagar Shah",
    organization: "Fotokraft production",
    date: "24th June, 2020",
    photo: "/images/testimonials/sagar-shah.jpg",
    text: "I had referred Mr. Bhavesh to one of my friend who required cloud service. He is satisfied with the service Brain Box Solutions is providing. I am also using their service for my business and I am very happy with the service. I would like to recommend Brain Box Solutions to all my friends and business partners."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <section className="bg-slate-50 py-20 md:py-32 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Real experiences from businesses using Brain Box Solutions to simplify their technology.
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Container */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 min-h-[500px] flex items-stretch overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="w-full flex flex-col md:flex-row items-stretch"
              >
                {/* Left: Customer Info */}
                <div className="md:w-1/3 bg-slate-900 p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                  
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden bg-slate-800 flex items-center justify-center">
                    {/* Fallback avatar if image fails to load or is missing */}
                    <User className="w-16 h-16 text-slate-600 absolute" />
                    <img
                      src={current.photo}
                      alt={current.name}
                      className="object-cover w-full h-full relative z-10 bg-slate-800"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {current.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-400">
                      {current.organization}
                    </p>
                    <p className="text-xs font-medium text-slate-400 pt-2">
                      {current.date}
                    </p>
                  </div>
                </div>

                {/* Right: Testimonial Text */}
                <div className="md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  <Quote className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 text-slate-100 rotate-180 pointer-events-none" />
                  
                  <div className="relative z-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    <div className="space-y-4 text-slate-600 leading-relaxed md:text-lg">
                      {current.text.split('\n').map((paragraph, i) => (
                        paragraph.trim() ? (
                          <p key={i} className="font-medium">
                            {paragraph}
                          </p>
                        ) : (
                          <div key={i} className="h-2" />
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1} of ${testimonials.length}`}
                  aria-current={currentIndex === idx ? "true" : "false"}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                    currentIndex === idx 
                      ? "bg-blue-600 w-8" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
