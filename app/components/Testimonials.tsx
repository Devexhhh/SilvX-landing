"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { testimonials } from "../lib/data";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  // 1. Triple the array to create a wide enough track for seamless looping.
  const infiniteData = [...testimonials, ...testimonials, ...testimonials];

  // 2. Setup the initial scroll position to sit perfectly in the middle set.
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstCard = container.firstElementChild as HTMLElement;

    if (firstCard) {
      // Calculate exactly one full set width (including the 32px gap)
      const singleCardWithGap = firstCard.offsetWidth + 32;
      setCardWidth(singleCardWithGap);

      // Start the user exactly at the beginning of the SECOND set of data
      container.scrollLeft = singleCardWithGap * testimonials.length;
    }
  }, []);

  // 3. The true circular logic. We hook into the onScroll event.
  // When the user scrolls too far left or right, we INSTANTLY (without animation)
  // jump them back to the corresponding spot in the middle set.
  const handleScroll = useCallback(() => {
    if (!scrollRef.current || cardWidth === 0) return;

    const container = scrollRef.current;
    const totalSetWidth = cardWidth * testimonials.length;

    // If we scroll past the start of the FIRST set, jump to the end of the MIDDLE set
    if (container.scrollLeft <= 0) {
      // Disable smooth scrolling temporarily for the instant jump
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = totalSetWidth;
      // Re-enable smooth scrolling after the jump
      setTimeout(() => container.style.scrollBehavior = 'smooth', 10);
    }
    // If we scroll past the end of the MIDDLE set, jump to the start of the MIDDLE set
    else if (container.scrollLeft >= totalSetWidth * 2) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = totalSetWidth;
      setTimeout(() => container.style.scrollBehavior = 'smooth', 10);
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
    <section className="relative w-full bg-brand-bg py-5 flex flex-col items-center overflow-hidden">

      {/* THE SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // We ensure scroll-smooth is active for normal swipes/clicks
        className="flex gap-8 overflow-x-auto snap-x w-full px-[7.5vw] md:px-[calc(50vw-250px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        {infiniteData.map((t, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[85vw] md:w-[500px] flex flex-col"
          >
            {/* Image Placeholder */}
            <div
              className={`w-full aspect-[4/3] md:aspect-[16/10] rounded-sm relative flex items-center justify-center overflow-hidden group shadow-lg shadow-brand-black/5 ${t.bg}`}
            >
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <h3 className="text-white text-3xl md:text-[40px] font-bold tracking-[0.25em] uppercase z-10 group-hover:scale-105 transition-transform duration-700">
                {t.company}
              </h3>
            </div>

            {/* Quote Block */}
            <div className="mt-8 flex-1 flex flex-col">
              <p className="text-brand-black font-sans text-[15px] font-light leading-relaxed mb-10 min-h-[140px]">
                "{t.quote}"
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto border-t border-brand-silver/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-silver/10 border border-brand-silver/5 flex items-center justify-center overflow-hidden">
                    <User size={20} strokeWidth={1.5} className="text-brand-silver/40 mt-2" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans font-bold text-[13px] text-brand-black">
                      {t.name}
                    </p>
                    <p className="font-mono text-[9px] text-brand-silver uppercase tracking-[0.15em] mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>

                <button className="bg-brand-emerald text-white px-5 py-2.5 text-[12px] font-sans font-bold tracking-wide rounded-[3px] hover:bg-brand-emerald-dark transition-all hover:shadow-lg hover:shadow-brand-emerald/20 active:scale-95 shrink-0 cursor-pointer">
                  Read story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center gap-3 mt-20">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald-dark transition-colors shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald-dark transition-colors shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}