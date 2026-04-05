"use client";

import React from 'react';

export default function Security() {
  return (
    <section className="relative w-full bg-[#161616] flex flex-col items-center border-t border-white/[0.05] py-[60px]">

      {/* Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <div className="pr-0 md:pr-8">
          <div className="flex items-center gap-2 text-[12px] font-sans font-bold tracking-[0.2em] uppercase text-white/50 mb-8">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-white/50 w-1 h-1" />
              <div className="bg-white/20 w-1 h-1" />
              <div className="bg-white/20 w-1 h-1" />
              <div className="bg-white/50 w-1 h-1" />
            </div>
            Security
          </div>

          <h2 className="font-serif text-4xl md:text-[44px] text-white leading-[1.15] tracking-tight mb-6">
            Every layer of Ankar is engineered to meet the highest standards of data protection and security
          </h2>

          <p className="text-white/60 font-sans font-light text-[15px] leading-relaxed mb-10 max-w-md">
            Our platform achieved full certification before our first customer. We believe that in IP, trust isn't optional. It's foundational.
          </p>

          <button className="bg-white text-black px-7 py-3.5 rounded-[3px] text-[13px] font-sans font-bold tracking-wide hover:bg-gray-200 transition-all active:scale-95">
            Read our principles
          </button>
        </div>

        {/* --- RIGHT COLUMN: BADGE GRID --- */}
        <div className="flex justify-center lg:justify-end w-full">
          {/* Constrained width to ensure it stays a tight box */}
          <div className="w-full max-w-[460px] grid grid-cols-2 gap-[1px] bg-[#2a2a2a] rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">

            {/* Card 1: SOC 2 (Fixed height instead of aspect-square) */}
            <div className="bg-[#151515] h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-white/50 fill-none" strokeWidth="0.75">
                  <circle cx="24" cy="24" r="20" />
                  <path d="M10 32 Q24 40 38 32" strokeDasharray="1 3" />
                  <path d="M10 16 Q24 8 38 16" strokeDasharray="1 3" />
                  <text x="24" y="27" textAnchor="middle" className="text-[10px] font-sans fill-white/50 font-light tracking-widest" stroke="none">AICPA</text>
                </svg>
              </div>
              <span className="text-white/80 text-[13px] font-sans font-medium tracking-wide">SOC 2</span>
            </div>

            {/* Card 2: ISO27001 */}
            <div className="bg-[#151515] h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-white/50 fill-none" strokeWidth="0.75">
                  <circle cx="24" cy="24" r="20" />
                  <ellipse cx="24" cy="24" rx="8" ry="20" />
                  <path d="M4 24 h40" />
                  <text x="24" y="27" textAnchor="middle" className="text-[9px] font-sans fill-white/50 font-light tracking-wider" stroke="none">ISO 27001</text>
                </svg>
              </div>
              <span className="text-white/80 text-[13px] font-sans font-medium tracking-wide">ISO27001</span>
            </div>

            {/* Card 3: No training */}
            <div className="bg-[#151515] h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-white/50 fill-none" strokeWidth="1">
                  <rect x="8" y="14" width="32" height="8" rx="1" />
                  <circle cx="14" cy="18" r="1" className="fill-white/50" />
                  <rect x="8" y="26" width="32" height="8" rx="1" />
                  <circle cx="14" cy="30" r="1" className="fill-white/50" />
                </svg>
              </div>
              <span className="text-white/80 text-[13px] font-sans font-medium tracking-wide">No training on your data</span>
            </div>

            {/* Card 4: Encryption */}
            <div className="bg-[#151515] h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-[#1a1a1a] transition-colors">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-white/50 fill-none" strokeWidth="1">
                  <rect x="14" y="22" width="20" height="16" rx="2" />
                  <path d="M18 22 V16 A6 6 0 0 1 30 16 V22" />
                  <circle cx="24" cy="30" r="1" className="fill-white/50" />
                </svg>
              </div>
              <span className="text-white/80 text-[13px] font-sans font-medium tracking-wide text-center">End to end data encryption</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}