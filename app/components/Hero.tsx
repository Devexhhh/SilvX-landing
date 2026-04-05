"use client";

import React from 'react';

export default function Hero() {
  return (
    // Updated background to Obsidian Black and selection to Emerald
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] selection:bg-emerald-500/30">
      {/* Import Fonts Directly for the Component */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

      {/* Font Definitions for Global Use */}
      <style jsx global>{`
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        {/*
          --- REVAMPED GRADIENT PRISM GLASS EFFECT ---
          We are restoring the original sharp-fanned, cinematic conic-gradient structure radiating
          from a point just below center (at 50% 80%). This recreates the iconic dynamic energy
          seen in the reference images (image_0, image_1, image_3).

          The color stops are translated directly from the original warm (orange) reference,
          replacing them with the specified Emerald Green and Silver/Slate palette, using
          sharper stops for definition.
        */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[120%] opacity-60">

          {/*
            Layer 1: Sharp Emerald Fan (Translating warm oranges to greens)
            Recreates sharp fanning rays radiating with high contrast.
            Palette: Deep Emerald (#064e3b) -> Primary Emerald (#047857) -> Bright Emerald (#10b981)
          */}
          <div
            className="absolute inset-0 blur-[100px] animate-pulse-fast"
            style={{
              // Original sharp conic radiating structure
              background: 'conic-gradient(from 180deg at 50% 80%, transparent 40%, #064e3b 45%, #047857 50%, #10b981 52%, #047857 54%, transparent 60%)',
              transform: 'rotate(-15deg) scale(1.2)',
            }}
          />

          {/*
            Layer 2: Intersecting Silver and Slate Fan (Translating cool blues to silvers)
            Adds cool, metallic refractions, intersecting the main fan.
            Palette: Slate Gray (#334155) -> Metallic Slate (#64748b)
          */}
          <div
            className="absolute inset-0 blur-[120px] opacity-40"
            style={{
              background: 'conic-gradient(from 180deg at 50% 80%, transparent 20%, #334155 35%, #64748b 45%, #334155 50%, transparent 55%)',
              transform: 'rotate(20deg)',
            }}
          />
        </div>

        {/* --- THE POINTERS / FRAME --- */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-full mx-6">

            {/* Full Height Vertical Guide Lines */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />

            {/* Horizontal Guide Lines (The Box Area) */}
            <div className="absolute top-[22%] bottom-[22%] left-0 right-0">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

              {/* Corner Squares */}
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
      <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center gap-2">

        {/* Badge */}
        <div className="group inline-flex items-center gap-2 border border-white/10 rounded-full px-2.5 py-1 mb-5 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer">
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-white/50">
            SilvX · The Invisible Habit
          </span>
          <span className="text-white/30 group-hover:translate-x-0.5 transition-transform">›</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl text-white leading-[1.05] mb-5 tracking-tight font-light" style={{ fontFamily: 'var(--font-serif)' }}>
          Own the God's Metal,
          <br className="md:hidden" />
          <span className="italic font-normal opacity-90"> for the Price of a Chai</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/45 text-base md:text-sm font-sans font-light leading-relaxed max-w-xl mb-5">
          Automate your daily accumulation with just <span className="text-white/80 font-medium">₹10</span>. Build a secure emergency fund and a lasting legacy, gram by gram, without even feeling it.
        </p>

        {/* --- THE BUTTON --- */}
        {/* The Emerald Green button with a subtle matching glow */}
        <button
          className="group relative bg-[#047857] text-white rounded overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(4,120,87,0.4)] flex items-center justify-center min-w-[180px] px-10 py-4 cursor-pointer"
        >
          <span className="relative z-10 text-[14px] font-sans font-medium tracking-tight leading-none whitespace-nowrap">
            Start Accumulating
          </span>

          {/* Shine effect animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </div>

      {/* Bottom Fade out (Matches Obsidian background) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />

      {/* Custom Keyframes and Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.6; transform: rotate(-15deg) scale(1.2); }
          50% { opacity: 0.9; transform: rotate(-12deg) scale(1.22); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 8s ease-in-out infinite;
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}