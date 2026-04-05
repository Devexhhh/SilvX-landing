"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { experts } from "../lib/data"; // Importing the data

export default function ExpertPanel() {
  const [start, setStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width to determine how many items to show
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On mobile, show 1. On desktop, show 3.
  const visibleCount = isMobile ? 1 : 3;
  const visibleExperts = experts.slice(start, start + visibleCount);

  // Navigation logic
  const handleNext = () => {
    if (start < experts.length - visibleCount) {
      setStart(start + 1);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section className="relative w-full bg-brand-bg py-15 md:py-20 flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl md:text-[52px] text-brand-black leading-[1.2] md:leading-[1.1] mb-10 md:mb-12 pb-2 md:pb-5 font-serif tracking-tight text-center">
          Guided by Financial Veterans
        </h2>

        {/* Grid Container */}
        {/* On mobile: grid-cols-1 ensures the single sliced item takes full width.
            On desktop: grid-cols-3 ensures the three sliced items sit side-by-side.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {visibleExperts.map((e, idx) => (
            <div
              key={idx}
              className="group cursor-pointer w-full max-w-sm mx-auto md:max-w-none animate-in fade-in slide-in-from-right-4 duration-500"
            >
              {/* Image Portrait */}
              <div className="relative w-full aspect-[4/5] bg-brand-silver-light rounded-sm overflow-hidden mb-5 md:mb-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-emerald/10">
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/5 to-transparent" />
                <User size={48} strokeWidth={1} className="text-brand-black/10 group-hover:text-brand-emerald/30 group-hover:scale-110 transition-all duration-700" />
              </div>

              {/* Text Info */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-serif text-[20px] md:text-[22px] text-brand-black mb-1 md:mb-1.5 tracking-tight group-hover:text-brand-emerald transition-colors">
                    {e.name}
                  </h3>
                  <p className="text-brand-silver text-[13px] md:text-[14px] font-sans font-light leading-relaxed">
                    {e.role}
                  </p>
                </div>

                <button className="w-8 h-8 md:w-7 md:h-7 bg-brand-black rounded-sm flex items-center justify-center flex-shrink-0 mt-1 hover:bg-brand-emerald transition-all duration-300 shadow-md cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-3.5 md:h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-12 md:mt-10">
          <button
            onClick={handlePrev}
            className="w-14 h-14 md:w-12 md:h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-all shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-brand-black disabled:cursor-not-allowed cursor-pointer"
            disabled={start === 0}
          >
            <ChevronLeft size={24} className="md:w-5 md:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 md:w-12 md:h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-all shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-brand-black disabled:cursor-not-allowed cursor-pointer"
            disabled={start >= experts.length - visibleCount}
          >
            <ChevronRight size={24} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}