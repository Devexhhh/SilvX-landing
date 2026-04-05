"use client";

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508] selection:bg-orange-500/30">
      {/* Import Fonts Directly for the Component */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Light Rays (unchanged) */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[120%] opacity-60">
          <div
            className="absolute inset-0 blur-[100px] animate-pulse-slow"
            style={{
              background: 'conic-gradient(from 180deg at 50% 80%, transparent 40%, #c45c30 45%, #e87040 50%, #f0f0e8 52%, transparent 60%)',
              transform: 'rotate(-15deg) scale(1.2)',
            }}
          />
          <div
            className="absolute inset-0 blur-[120px] opacity-40"
            style={{
              background: 'conic-gradient(from 180deg at 50% 80%, transparent 20%, #1a4060 35%, #2a6090 45%, transparent 55%)',
              transform: 'rotate(20deg)',
            }}
          />
        </div>

        {/* --- THE POINTERS / FRAME (Now constrained to max-w-4xl) --- */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-full mx-6">

            {/* Full Height Vertical Guide Lines (Pinned to the max-width edges) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />

            {/* Horizontal Guide Lines (The Box Area) */}
            {/* Adjusted top/bottom to frame the text content perfectly */}
            <div className="absolute top-[22%] bottom-[22%] left-0 right-0">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

              {/* Corner Squares (4px Precision) */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
          </div>
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center gap-3">

        {/* Badge */}
        <div className="group inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-10 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer" style={{ padding: '4px 10px' }} >
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-white/50">
            SilvX · $20M Series A
          </span>
          <span className="text-white/30 group-hover:translate-x-0.5 transition-transform">›</span>
        </div>
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl text-white leading-[1.05] mb-8 tracking-tight font-light" style={{ fontFamily: 'var(--font-serif)' }}>
          Stronger Patents,
          <span className="italic font-normal opacity-90"> at Scale</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/45 text-base md:text-sm font-sans font-light leading-relaxed max-w-xl mb-12">
          Trusted by <span className="text-white/80">AmLaw100</span> and <span className="text-white/80">Fortune 500</span> firms for patent drafting, office actions, and infringement detection.
        </p>

        {/* --- THE BUTTON --- */}
        {/* --- THE BUTTON --- */}
        <button
          className="group relative bg-white text-black rounded overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center min-w-[180px] cursor-pointer"
          style={{ padding: '16px 40px' }} // Using inline styles to override any stubborn CSS resets
        >
          <span className="relative z-10 text-[14px] font-sans font-medium tracking-tight leading-none whitespace-nowrap">
            Book a demo
          </span>

          {/* Shine effect animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.08] to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </div>

      {/* Bottom Fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050508] to-transparent z-20 pointer-events-none" />

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: rotate(-15deg) scale(1.2); }
          50% { opacity: 0.8; transform: rotate(-12deg) scale(1.22); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}