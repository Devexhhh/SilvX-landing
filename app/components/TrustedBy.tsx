"use client";

import React from 'react';

export default function TrustedBy() {
  // Replaced law firms with crucial fintech, vaulting, and payment infrastructure partners
  const logos = ["Augmont", "Brink's Global", "UPI AutoPay", "Razorpay", "ISO 27001"];

  return (
    // Background remains Silver-White (slate-50)
    <section className="relative w-full bg-slate-50 py-12 md:py-16 flex flex-col items-center border-b border-slate-100">

      {/* Centered Content Wrapper */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6">
        {/* Updated text to reflect the massive retail user base and security */}
        <p className="text-center text-slate-400 text-[10px] md:text-[11px] font-sans tracking-[0.2em] uppercase mb-10 md:mb-16 px-4">
          Securing the daily wealth of 50,000+ Indians
        </p>

        <div className="relative">
          {/* Edge Fade Gradients - Hidden on mobile as the grid wraps, visible on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Logo Grid 
              On Mobile: Centered wrap with smaller gaps
              On Desktop: Space-between alignment
          */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <span
                key={logo}
                // Responsive font sizes: text-lg for mobile, text-[22px] for desktop
                className="text-slate-900 font-sans text-lg md:text-[22px] font-semibold tracking-tight hover:text-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
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