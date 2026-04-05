"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { experts } from "../lib/data";// Importing the data

export default function ExpertPanel() {
  const [start, setStart] = useState(0);
  const visible = experts.slice(start, start + 3);

  return (
    <section className="relative w-full bg-brand-bg py-20 flex flex-col items-center">

      {/* Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl md:text-[52px] text-brand-black leading-[1.1] mb-12 pb-5 font-serif tracking-tight text-center">
          Guided by Financial Veterans
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {visible.map((e, idx) => (
            <div key={idx} className="group cursor-pointer">

              {/* Image Placeholder - Silver / Metallic Aesthetic */}
              <div className="relative w-full aspect-[4/5] bg-brand-silver-light rounded-sm overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-emerald/10">
                {/* Subtle Grain Texture */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Silver Gradient to mimic studio lighting */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/5 to-transparent" />

                <User size={48} strokeWidth={1} className="text-brand-black/10 group-hover:text-brand-emerald/30 group-hover:scale-110 transition-all duration-700" />
              </div>

              {/* Text & Social Content */}
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h3 className="font-serif text-[22px] text-brand-black mb-1.5 tracking-tight group-hover:text-brand-emerald transition-colors">
                    {e.name}
                  </h3>
                  <p className="text-brand-silver text-[14px] font-sans font-light leading-relaxed">
                    {e.role}
                  </p>
                </div>

                {/* LinkedIn Badge - Re-styled to Silver/Emerald */}
                <button className="w-7 h-7 bg-brand-black rounded-sm flex items-center justify-center flex-shrink-0 mt-1 hover:bg-brand-emerald transition-all duration-300 shadow-md cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Controls - Updated to Obsidian/Emerald */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => setStart(Math.max(0, start - 1))}
            className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-all shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-brand-black disabled:cursor-not-allowed cursor-pointer"
            disabled={start === 0}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            onClick={() => setStart(Math.min(experts.length - 3, start + 1))}
            className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center text-white hover:bg-brand-emerald transition-all shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-brand-black disabled:cursor-not-allowed cursor-pointer"
            disabled={start >= experts.length - 3}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}