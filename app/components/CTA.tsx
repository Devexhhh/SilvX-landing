"use client";

import React from 'react';

// ==========================================
// THE CALL TO ACTION COMPONENT (Emerald & Silver Palette)
// ==========================================
export default function CTA() {
  return (
    <section
      className="relative w-full bg-brand-bg flex flex-col items-center overflow-hidden pt-32 pb-[180px]"
    >
      {/* The Digital Silver Aura
        Refined with Emerald and Metallic Silver tones to match the new palette.
      */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[350px] pointer-events-none blur-[60px] opacity-70 flex justify-center items-end">

        {/* Left: Deep Emerald Shadow (Jewel Tone) */}
        <div className="absolute left-[10%] bottom-[-10%] w-[50%] h-[80%] bg-brand-emerald-dark rounded-full mix-blend-multiply opacity-80" />

        {/* Center: Primary Emerald (The Heart of the Glow) */}
        <div className="absolute left-[25%] bottom-0 w-[55%] h-[95%] bg-brand-emerald rounded-full mix-blend-screen z-10 opacity-60" />

        {/* Right: Metallic Silver (Slate Gray) */}
        <div className="absolute right-[10%] bottom-[-5%] w-[45%] h-[75%] bg-brand-silver rounded-full mix-blend-multiply opacity-70" />

        {/* Extreme Bottom: Obsidian Deepening (Smooth Transition to Footer) */}
        <div className="absolute bottom-[-20%] w-full h-[40%] bg-brand-black rounded-full opacity-90 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-brand-emerald mb-8">
          <div className="w-1 h-1 bg-brand-emerald rounded-full animate-pulse" />
          The Invisible Habit
        </div>

        {/* Updated Headline focusing on the low barrier to entry and wealth building */}
        <h2 className="font-serif text-4xl md:text-[56px] text-brand-black leading-[1.05] tracking-tight mb-10 max-w-2xl">
          Start building your vault. <br className="hidden md:block" /> From just ₹10 a day.
        </h2>

        {/* Emerald CTA Button updated for app conversion */}
        <button className="bg-brand-emerald text-white px-9 py-4 rounded-[3px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all hover:shadow-[0_20px_40px_rgba(4,120,87,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer">
          Set Up Auto-Pay
        </button>
      </div>
    </section>
  );
}