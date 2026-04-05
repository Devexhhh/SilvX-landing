"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    company: "L'ORÉAL",
    quote: "Ankar has fundamentally transformed how our IP team operates. The quality of our patent drafts has improved dramatically while cutting the time spent on routine tasks in half. We can now focus on strategic innovation rather than paperwork.",
    name: "Marie Dupont",
    title: "HEAD OF IP, L'ORÉAL",
    // Converted to Tailwind arbitrary class
    bg: "bg-[radial-gradient(circle_at_50%_50%,#451a03_0%,#171717_100%)]",
  },
  {
    company: "VORYS",
    quote: "Whilst Vorys views AI as a powerful accelerator of quality, its use is always governed by one principle: client discretion. Some clients fully embrace AI-enhanced patent practice; others prefer traditional workflows. Vorys ensures that every engagement follows client instructions, outside-counsel guidelines, and the sensitivities of the matter.",
    name: "Carey Jordan",
    title: "CHAIR, VORYS IP GROUP",
    // Converted to Tailwind arbitrary class
    bg: "bg-[radial-gradient(circle_at_50%_50%,#78350f_0%,#1c1917_100%)]",
  },
  {
    company: "DENNEMEYER",
    quote: "My work will soon be supported by AI that will allow me to draft more efficiently. This is where attorneys create the greatest value for clients by focusing on higher-level strategic alignment.",
    name: "Jochen Sties",
    title: "PARTNER, PRINZ & PARTNER",
    // Converted to Tailwind arbitrary class
    bg: "bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,#0f172a_100%)]",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll logic for the buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // 500px (card width) + 32px (gap)
      const offset = 532;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -offset : offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#f5f4f1] py-32 flex flex-col items-center overflow-hidden">

      {/* THE SCROLL CONTAINER
        px-[calc(50vw-250px)] ensures the 500px card sits exactly in the center of ANY screen when snapped 
        The strange bracket classes at the end hide the scrollbar natively using pure Tailwind!
      */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory w-full px-[7.5vw] md:px-[calc(50vw-250px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="snap-center shrink-0 w-[85vw] md:w-[500px] flex flex-col"
          >
            {/* Image Placeholder */}
            {/* Replaced style={{ background: t.bg }} by injecting the tailwind class directly */}
            <div
              className={`w-full aspect-[4/3] md:aspect-[16/10] rounded-sm relative flex items-center justify-center overflow-hidden group shadow-lg shadow-black/5 ${t.bg}`}
            >
              {/* Subtle grain texture */}
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <h3 className="text-white text-3xl md:text-[40px] font-bold tracking-[0.25em] uppercase z-10 group-hover:scale-105 transition-transform duration-700">
                {t.company}
              </h3>
            </div>

            {/* Quote */}
            <div className="mt-8 flex-1 flex flex-col">
              <p className="text-[#222] font-sans text-[15px] font-light leading-relaxed mb-10 min-h-[140px]">
                "{t.quote}"
              </p>

              {/* Footer row: Profile & Button */}
              <div className="flex items-center justify-between mt-auto border-t border-black/5 pt-6">

                {/* Profile Block */}
                <div className="flex items-center gap-3">
                  {/* Faux Avatar */}
                  <div className="w-10 h-10 rounded-full bg-[#f0f0f0] border border-black/5 flex items-center justify-center overflow-hidden">
                    <User size={20} strokeWidth={1.5} className="text-black/30 mt-2" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans font-bold text-[13px] text-black">
                      {t.name}
                    </p>
                    <p className="font-mono text-[9px] text-black/50 uppercase tracking-[0.15em] mt-0.5">
                      {t.title}
                    </p>
                  </div>
                </div>

                {/* The "Learn more" Button */}
                <button className="bg-[#111111] text-white px-5 py-2.5 text-[12px] font-sans font-bold tracking-wide rounded-[3px] hover:bg-black transition-all hover:shadow-lg active:scale-95 shrink-0">
                  Learn more
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
          className="w-12 h-12 bg-[#18181b] rounded-sm flex items-center justify-center text-white hover:bg-black transition-colors shadow-md active:scale-95"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 bg-[#18181b] rounded-sm flex items-center justify-center text-white hover:bg-black transition-colors shadow-md active:scale-95"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

    </section>
  );
}