"use client";

import React from 'react';

export default function TrustedBy() {
  const logos = ["1z & Partner.", "L'ORÉAL", "Valeo", "VORYS", "Dennemeyer"];

  return (
    <section className="relative w-full bg-[#f5f4f1] py-12 md:py-15 flex flex-col items-center">

      {/* Centered Content Wrapper */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6">
        <p className="text-center text-black/40 text-[11px] font-sans tracking-[0.2em] uppercase mb-16">
          Trusted by over 500+ patent professionals
        </p>

        <div className="relative">
          {/* Edge Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f4f1] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f4f1] to-transparent z-10 pointer-events-none" />

          {/* Logo Grid */}
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
    </section>
  );
}