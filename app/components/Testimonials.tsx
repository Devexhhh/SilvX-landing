"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { testimonials } from "../lib/data";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // 1. Triple the array for seamless looping.
  const infiniteData = [...testimonials, ...testimonials, ...testimonials];

  // 2. Setup initial position and responsive width calculation
  useEffect(() => {
    const calculateWidth = () => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const firstCard = container.firstElementChild as HTMLElement;

      if (firstCard) {
        // Capture width + gap (32px is 'gap-8')
        const width = firstCard.offsetWidth + 32;
        setCardWidth(width);

        // Initial jump to the middle set (disable snap temporarily for the jump)
        container.style.scrollSnapType = "none";
        container.scrollLeft = width * testimonials.length;
        container.style.scrollSnapType = "x mandatory";
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // 3. Infinite Scroll Logic
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || cardWidth === 0) return;

    const container = scrollRef.current;
    const totalSetWidth = cardWidth * testimonials.length;

    // Boundary checks for infinite loop
    if (container.scrollLeft <= 0) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = totalSetWidth;
      container.style.scrollBehavior = 'smooth';
    }
    else if (container.scrollLeft >= totalSetWidth * 2) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = totalSetWidth;
      container.style.scrollBehavior = 'smooth';
    }
  }, [cardWidth]);

  // 4. Button controls
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || cardWidth === 0) return;

    const container = scrollRef.current;
    container.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative w-full bg-brand-bg py-12 md:py-20 flex flex-col items-center overflow-hidden">

      {/* THE SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        // px-[5vw] on mobile gives a peek at the next card
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory w-full px-[5vw] md:px-[calc(50vw-250px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        {infiniteData.map((t, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[90vw] md:w-[500px] flex flex-col"
          >
            {/* Visual Card */}
            <div
              className={`w-full aspect-[4/3] md:aspect-[16/10] rounded-sm relative flex items-center justify-center overflow-hidden group shadow-lg shadow-brand-black/5 ${t.bg}`}
            >
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <h3 className="text-white text-2xl md:text-[40px] font-bold tracking-[0.25em] uppercase z-10 group-hover:scale-105 transition-transform duration-700">
                {t.company}
              </h3>
            </div>

            {/* Quote Block */}
            <div className="mt-6 md:mt-8 flex-1 flex flex-col">
              <p className="text-brand-black font-sans text-[14px] md:text-[15px] font-light leading-relaxed mb-8 md:mb-10 min-h-[120px] md:min-h-[140px]">
                "{t.quote}"
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto border-t border-brand-silver/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-silver/10 border border-brand-silver/5 flex items-center justify-center overflow-hidden">
                    <User size={20} strokeWidth={1.5} className="text-brand-silver/40 mt-2" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans font-bold text-[12px] md:text-[13px] text-brand-black">
                      {t.name}
                    </p>
                    <p className="font-mono text-[8px] md:text-[9px] text-brand-silver uppercase tracking-[0.15em] mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>

                <button className="bg-brand-emerald text-white px-4 md:px-5 py-2 md:py-2.5 text-[11px] md:text-[12px] font-sans font-bold tracking-wide rounded-[3px] hover:bg-brand-emerald-dark transition-all active:scale-95 shrink-0 cursor-pointer">
                  Read story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Carousel Controls */}
      <div className="flex justify-center gap-4 mt-12 md:mt-16">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 md:w-14 md:h-14 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-colors shadow-md active:scale-95 cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={24} strokeWidth={2} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 md:w-14 md:h-14 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-colors shadow-md active:scale-95 cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight size={24} strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}