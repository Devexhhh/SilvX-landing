"use client";

import React from 'react';

export default function TrustedBy() {
  const logos = ["1z & Partner.", "L'ORÉAL", "Valeo", "VORYS", "Dennemeyer"];

  return (
    // Removed top-12. Adjusted to pt-32 (top padding) and pb-24 (bottom padding)
    <section className="relative w-full bg-[#f5f4f1] pt-32 pb-24 flex flex-col items-center">
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6">
        <p className="text-center text-black/40 text-[11px] font-sans tracking-[0.2em] uppercase mb-16">
          Trusted by over 500+ patent professionals
        </p>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f4f1] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f4f1] to-transparent z-10" />

          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-16 gap-y-10 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-black font-sans text-xl md:text-[22px] font-semibold tracking-tight hover:text-black transition-colors cursor-pointer whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Guide Extension */}
      <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none z-0 px-6">
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-black/[0.03]" />
        <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-black/[0.03]" />
      </div>
    </section>
  );
}