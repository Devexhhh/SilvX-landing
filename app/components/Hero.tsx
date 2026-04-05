"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] selection:bg-emerald-500/30">

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        :root {
          --font-serif: "Playfair Display", serif;
          --font-sans: "Inter", sans-serif;
        }
      `}</style>

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* ===== MAIN EMERALD LIGHT BEAM ===== */}
        <div
          className="absolute left-1/2 top-[78%] w-[150%] h-[150%] -translate-x-1/2"
          style={{
            background: `
              conic-gradient(
                from 210deg at 50% 100%,
                transparent 0deg,
                transparent 120deg,
                rgba(16,185,129,0.9) 138deg,
                rgba(52,211,153,1) 150deg,
                rgba(16,185,129,0.9) 162deg,
                transparent 180deg,
                transparent 360deg
              )
            `,
            filter: "blur(35px)",
            transform: "rotate(-18deg)",
          }}
        />

        {/* ===== SILVER CORE (BRIGHT CENTER HIT) ===== */}
        <div
          className="absolute left-1/2 top-[80%] w-[130%] h-[130%] -translate-x-1/2"
          style={{
            background: `
              conic-gradient(
                from 210deg at 50% 100%,
                transparent 135deg,
                rgba(255,255,255,0.95) 150deg,
                rgba(226,232,240,1) 154deg,
                rgba(148,163,184,0.9) 158deg,
                transparent 172deg
              )
            `,
            filter: "blur(18px)",
            transform: "rotate(-18deg)",
          }}
        />

        {/* ===== SECONDARY SILVER REFLECTION ===== */}
        <div
          className="absolute left-1/2 top-[70%] w-[150%] h-[150%] -translate-x-1/2"
          style={{
            background: `
              conic-gradient(
                from 250deg at 50% 100%,
                transparent 0deg,
                rgba(148,163,184,0.35) 110deg,
                rgba(203,213,225,0.7) 125deg,
                rgba(148,163,184,0.35) 140deg,
                transparent 165deg
              )
            `,
            filter: "blur(55px)",
            transform: "rotate(25deg)",
          }}
        />

        {/* ===== SUBTLE GREEN AMBIENT GLOW ===== */}
        <div
          className="absolute left-1/2 top-[85%] w-[120%] h-[120%] -translate-x-1/2"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(16,185,129,0.25),
                transparent 70%
              )
            `,
            filter: "blur(60px)",
          }}
        />

        {/* ===== DEPTH VIGNETTE (CRITICAL) ===== */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 80%,
                transparent 0%,
                rgba(2,6,23,0.4) 50%,
                #020617 100%
              )
            `,
          }}
        />

        {/* ================= FRAME ================= */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          <div className="relative w-full max-w-5xl h-full mx-6">

            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/[0.04]" />

            <div className="absolute top-[22%] bottom-[22%] left-0 right-0">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.04]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.04]" />

              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
          </div>
        </div>

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center gap-2">

        <div className="group inline-flex items-center gap-2 border border-white/10 rounded-full px-2.5 py-1 mb-5 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer">
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-white/50">
            SilvX · The Invisible Habit
          </span>
          <span className="text-white/30 group-hover:translate-x-0.5 transition-transform">›</span>
        </div>

        <h1
          className="text-5xl md:text-6xl text-white leading-[1.05] mb-5 tracking-tight font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Own the God's Metal,
          <br className="md:hidden" />
          <span className="italic font-normal opacity-90">
            {" "}
            for the Price of a Chai
          </span>
        </h1>

        <p className="text-white/45 text-base md:text-sm font-sans font-light leading-relaxed max-w-xl mb-5">
          Automate your daily accumulation with just{" "}
          <span className="text-white/80 font-medium">₹10</span>. Build a secure
          emergency fund and a lasting legacy, gram by gram, without even feeling
          it.
        </p>

        <button className="group relative bg-[#047857] text-white rounded overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(4,120,87,0.4)] flex items-center justify-center min-w-[180px] px-10 py-4 cursor-pointer">
          <span className="relative z-10 text-[14px] font-sans font-medium tracking-tight leading-none whitespace-nowrap">
            Start Accumulating
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}