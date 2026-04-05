"use client";

import React from 'react';

// ==========================================
// 1. THE CALL TO ACTION COMPONENT
// ==========================================
export default function CTA() {
  return (
    <section
      className="relative w-full bg-[#f5f4f1] flex flex-col items-center overflow-hidden pt-32 pb-[160px]"
    >
      {/* The Glowing Aura (Mesh Gradient)
        Uses three overlapping divs with extreme blur to create the 
        multi-colored spread (Orange -> Rose -> Purple) seen in the image.
      */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[350px] pointer-events-none blur-[100px] opacity-80 flex justify-center items-end">
        {/* Left: Warm Peach/Orange */}
        <div className="absolute left-[15%] bottom-0 w-[40%] h-[70%] bg-orange-400 rounded-full mix-blend-multiply" />
        {/* Center: Fiery Rose/Pink */}
        <div className="absolute left-[25%] bottom-0 w-[50%] h-[90%] bg-rose-500 rounded-full mix-blend-multiply z-10" />
        {/* Right: Fuchsia/Purple */}
        <div className="absolute right-[15%] bottom-0 w-[40%] h-[70%] bg-fuchsia-500 rounded-full mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-[56px] text-black leading-[1.05] tracking-tight mb-10 max-w-2xl">
          Get your Digital Silver for Patents today
        </h2>

        <button className="bg-[#111111] text-white px-9 py-4 rounded-[3px] text-[13px] font-sans font-bold tracking-wide hover:bg-black transition-all hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer">
          Book a demo
        </button>
      </div>
    </section>
  );
}