"use client";

import React from 'react';

// ==========================================
// THE CALL TO ACTION COMPONENT (Emerald & Silver Palette)
// Responsive & Mobile-Optimized
// ==========================================
export default function CTA() {
  return (
    <section
      className="relative w-full bg-brand-bg flex flex-col items-center overflow-hidden pt-20 pb-20 md:pt-32 md:pb-[180px]"
    >
      {/* --- THE DIGITAL SILVER AURA (Responsive Blobs) --- */}
      {/* Reduced max-width and adjusted bottom positioning for mobile screens */}
      <div className="absolute bottom-[-10%] md:bottom-[-15%] left-1/2 -translate-x-1/2 w-[120%] md:w-full max-w-[900px] h-[300px] md:h-[350px] pointer-events-none blur-[40px] md:blur-[60px] opacity-70 flex justify-center items-end">

        {/* Left Blob: Deep Emerald */}
        <div className="absolute left-[5%] md:left-[10%] bottom-[-10%] w-[60%] md:w-[50%] h-[80%] bg-brand-emerald-dark rounded-full mix-blend-multiply opacity-80" />

        {/* Center Blob: Primary Emerald Glow */}
        <div className="absolute left-[20%] md:left-[25%] bottom-0 w-[65%] md:w-[55%] h-[95%] bg-brand-emerald rounded-full mix-blend-screen z-10 opacity-60" />

        {/* Right Blob: Metallic Silver */}
        <div className="absolute right-[5%] md:right-[10%] bottom-[-5%] w-[55%] md:w-[45%] h-[75%] bg-brand-silver rounded-full mix-blend-multiply opacity-70" />

        {/* Base: Obsidian Transition */}
        <div className="absolute bottom-[-20%] w-full h-[40%] bg-brand-black rounded-full opacity-95 blur-[60px] md:blur-[80px]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center w-full">

        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-brand-emerald mb-6 md:mb-8">
          <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
          The Invisible Habit
        </div>

        {/* Responsive Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[56px] text-brand-black lg:leading-[1.05] leading-[1.2] tracking-tight mb-10 max-w-2xl">
          Start building your vault. <br className="hidden sm:block" /> From just ₹10 a day.
        </h2>

        {/* Emerald CTA Button - Full width on very small screens, auto on larger */}
        <button className="w-full sm:w-auto bg-brand-emerald text-white px-9 py-4 rounded-[3px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all hover:shadow-[0_20px_40px_rgba(4,120,87,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer">
          Set Up Auto-Pay
        </button>

        {/* Subtle helper text for mobile conversion */}
        <p className="mt-6 text-[11px] font-sans text-brand-black/40 uppercase tracking-widest">
          Takes less than 60 seconds
        </p>
      </div>
    </section>
  );
}