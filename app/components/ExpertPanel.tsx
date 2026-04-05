"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const experts = [
  { name: "Dan Enebo", role: "Former Chief IP Counsel at Cargill" },
  { name: "Robert (Bob) Hulse", role: "Head of Patent Prosecution, Fenwick and West" },
  { name: "Helene Laville Fiorucci", role: "Former Lead Patent Counsel at Solvay" },
  { name: "Stewart Karge", role: "Patent Attorney, Karge IP" },
  { name: "Sarah Jenkins", role: "Senior IP Strategist, TechLaw Partners" }, // Added for pagination testing
];

export default function ExpertPanel() {
  const [start, setStart] = useState(0);
  const visible = experts.slice(start, start + 3);

  return (
    <section className="relative w-full bg-[#f5f4f1] flex flex-col items-center">

      {/* Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 ">

        {/* Header */}
        {/* Replaced style={{ paddingBottom: "20px" }} with pb-5 */}
        <h2 className="text-4xl md:text-[52px] text-black leading-[1.1] mb-12 pb-5 font-serif tracking-tight text-center py-15">
          SilvX's Patent Expert Panel
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {visible.map((e, idx) => (
            <div key={idx} className="group cursor-pointer">

              {/* Image Placeholder - Editorial Portrait Crop */}
              <div className="relative w-full aspect-[4/5] bg-[#e8e8e5] rounded-sm overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:shadow-xl">
                {/* Subtle Grain Texture */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Gradient to mimic lighting on a portrait */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent" />

                <User size={48} strokeWidth={1} className="text-black/10 group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Text & Social Content */}
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h3 className="font-serif text-[22px] text-black mb-1.5 tracking-tight group-hover:text-black/70 transition-colors">
                    {e.name}
                  </h3>
                  <p className="text-black/50 text-[14px] font-sans font-light leading-relaxed">
                    {e.role}
                  </p>
                </div>

                {/* LinkedIn Badge */}
                <button className="w-7 h-7 bg-[#0a66c2] rounded-sm flex items-center justify-center flex-shrink-0 mt-1 hover:bg-[#004182] transition-colors shadow-md">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={() => setStart(Math.max(0, start - 1))}
            className="w-12 h-12 bg-[#18181b] rounded-sm flex items-center justify-center text-white hover:bg-black transition-colors shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-[#18181b] disabled:active:scale-100 disabled:cursor-not-allowed"
            disabled={start === 0}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            onClick={() => setStart(Math.min(experts.length - 3, start + 1))}
            className="w-12 h-12 bg-[#18181b] rounded-sm flex items-center justify-center text-white hover:bg-black transition-colors shadow-md active:scale-95 disabled:opacity-20 disabled:hover:bg-[#18181b] disabled:active:scale-100 disabled:cursor-not-allowed"
            disabled={start >= experts.length - 3}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}