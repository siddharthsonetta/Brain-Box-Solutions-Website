"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clients } from "@/data/clients";

export default function Clientele() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracting, setUserInteracting] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  // Triple clients list to ensure smooth infinite loop
  const displayClients = [...clients, ...clients, ...clients];

  // Auto-scroll loop
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let lastTimestamp: number | null = null;
    const speed = 0.55; // Pixels per frame (~33px/sec at 60fps)

    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && !userInteracting && scrollRef.current) {
        const container = scrollRef.current;
        // Normalize scroll delta based on refresh rate
        const delta = (speed * Math.min(elapsed, 32)) / 16.67;
        container.scrollLeft += delta;

        // When scrolled past half the content, seamlessly wrap back to beginning
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPaused, userInteracting]);

  // Set initial middle scroll position on mount so scrolling backward works immediately
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  const handleScrollManual = useCallback((direction: "prev" | "next") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    setUserInteracting(true);

    // Approximate width of 2 items
    const scrollAmount = container.clientWidth * 0.6;
    const targetScroll =
      direction === "next"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    // Resume autoplay after user finishes manual step
    setTimeout(() => {
      setUserInteracting(false);
    }, 1200);
  }, []);

  return (
    <section className="bg-white border-y border-slate-100 py-16 md:py-20 overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[120px] bg-blue-500/5 rounded-full blur-[70px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Clientele
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Trusted by Businesses Across Industries
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
              Building lasting partnerships through reliable IT infrastructure and cloud solutions.
            </p>
          </div>

          {/* Accessible Controls */}
          <div className="flex items-center justify-center md:justify-end gap-2 shrink-0">
            <button
              onClick={() => handleScrollManual("prev")}
              className="p-2.5 rounded-xl border border-slate-200/80 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-xs active:scale-95 transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-label="Previous client logos"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScrollManual("next")}
              className="p-2.5 rounded-xl border border-slate-200/80 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-xs active:scale-95 transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-label="Next client logos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={() => setUserInteracting(true)}
          onTouchEnd={() => {
            setTimeout(() => setUserInteracting(false), 1500);
          }}
        >
          {/* Subtle edge fades for infinite marquee feel */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none py-3 -mx-2.5 select-none touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayClients.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="w-1/2 sm:w-1/3 lg:w-1/6 shrink-0 px-2.5"
              >
                <div className="h-24 md:h-28 bg-white border border-slate-200/70 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/30 hover:shadow-md group cursor-default">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={60}
                      className="max-h-12 max-w-[85%] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center px-1">
                      <span className="text-slate-800 font-bold text-xs sm:text-sm tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {client.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-1 line-clamp-1">
                        {client.industry}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
