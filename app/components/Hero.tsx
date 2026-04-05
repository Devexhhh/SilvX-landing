"use client";

import React, { useEffect, useRef } from "react";

export default function Hero() {
  const beam1Ref = useRef<HTMLDivElement>(null);
  const beam2Ref = useRef<HTMLDivElement>(null);
  const beam3Ref = useRef<HTMLDivElement>(null);
  const silverRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf: number;
    let t = 0;

    // ── Staggered content entrance ──
    const items = [
      { el: badgeRef.current, delay: 100, dy: 24 },
      { el: headlineRef.current, delay: 280, dy: 32 },
      { el: subtextRef.current, delay: 440, dy: 24 },
      { el: btnRef.current, delay: 580, dy: 20 },
    ];
    items.forEach(({ el, delay, dy }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateY(${dy}px)`;
      el.style.transition = "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });

    // ── Floating particles canvas ──
    const canvas = particlesRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.4 + 0.05,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -(Math.random() * 0.35 + 0.08),
        flicker: Math.random() * Math.PI * 2,
        flickerSpeed: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.5 ? "16,185,129" : "226,232,240",
      }));

      const drawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;
          p.flicker += p.flickerSpeed;
          if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }

          const alpha = p.opacity * (0.6 + Math.sin(p.flicker) * 0.4);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${alpha})`;
          ctx.fill();
        });
      };

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      // ── Main animation loop ──
      const animate = () => {
        t += 0.006;

        // Beam 1 — wide sweeping rotation + scale breathe
        const swing = Math.sin(t * 0.5) * 6;
        const breathe = 1 + Math.sin(t * 0.38) * 0.06;
        const pulse = 0.88 + Math.sin(t * 0.55) * 0.1;
        if (beam1Ref.current) {
          beam1Ref.current.style.transform = `rotate(${-16 + swing}deg) scale(${breathe})`;
          beam1Ref.current.style.opacity = String(pulse);
        }

        // Beam 2 — follows beam1 with lag + own pulse
        const swing2 = Math.sin(t * 0.5 - 0.4) * 4.5;
        const pulse2 = 0.82 + Math.sin(t * 0.48 + 0.5) * 0.16;
        if (beam2Ref.current) {
          beam2Ref.current.style.transform = `rotate(${-16 + swing2}deg)`;
          beam2Ref.current.style.opacity = String(pulse2);
        }

        // Beam 3 — micro streak, faster flicker
        const swing3 = Math.sin(t * 0.5 - 0.7) * 3.5;
        const pulse3 = 0.7 + Math.sin(t * 0.9 + 1) * 0.28;
        if (beam3Ref.current) {
          beam3Ref.current.style.transform = `rotate(${-16 + swing3}deg)`;
          beam3Ref.current.style.opacity = String(Math.max(0.3, pulse3));
        }

        // Silver — counter-swings for crossing light feel
        const silverSwing = Math.sin(t * 0.42 + 2) * 7;
        const silverPulse = 0.7 + Math.sin(t * 0.38 + 1.2) * 0.28;
        if (silverRef.current) {
          silverRef.current.style.transform = `rotate(${24 + silverSwing}deg)`;
          silverRef.current.style.opacity = String(silverPulse);
        }

        // Ambient — slow deep breathe
        const ambientPulse = 0.55 + Math.sin(t * 0.22) * 0.42;
        if (ambientRef.current) {
          ambientRef.current.style.opacity = String(ambientPulse);
          // Also shift position slightly
          const ambientY = 88 + Math.sin(t * 0.3) * 1.5;
          ambientRef.current.style.top = `${ambientY}%`;
        }

        drawParticles();
        raf = requestAnimationFrame(animate);
      };

      animate();
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] selection:bg-emerald-500/30">

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
        <div className="absolute inset-0 bg-[#020617]" />

        {/* PRIMARY LIGHT BEAM */}
        <div
          ref={beam1Ref}
          className="absolute left-1/2 top-[82%] w-[160%] h-[160%] -translate-x-1/2"
          style={{
            background: `conic-gradient(
              from 212deg at 50% 100%,
              transparent 0deg, transparent 125deg,
              rgba(16,185,129,0.95) 142deg,
              rgba(110,231,183,1) 150deg,
              rgba(16,185,129,0.95) 158deg,
              transparent 175deg, transparent 360deg
            )`,
            filter: "blur(28px)",
            transform: "rotate(-16deg)",
            willChange: "transform, opacity",
          }}
        />

        {/* CORE HIGHLIGHT */}
        <div
          ref={beam2Ref}
          className="absolute left-1/2 top-[83%] w-[140%] h-[140%] -translate-x-1/2"
          style={{
            background: `conic-gradient(
              from 212deg at 50% 100%,
              transparent 138deg,
              rgba(255,255,255,1) 150deg,
              rgba(226,232,240,1) 153deg,
              rgba(148,163,184,0.95) 156deg,
              transparent 168deg
            )`,
            filter: "blur(10px)",
            transform: "rotate(-16deg)",
            willChange: "transform, opacity",
          }}
        />

        {/* MICRO STREAK */}
        <div
          ref={beam3Ref}
          className="absolute left-1/2 top-[84%] w-[120%] h-[120%] -translate-x-1/2"
          style={{
            background: `conic-gradient(
              from 212deg at 50% 100%,
              transparent 145deg,
              rgba(255,255,255,0.9) 150deg,
              transparent 155deg
            )`,
            filter: "blur(4px)",
            transform: "rotate(-16deg)",
            willChange: "transform, opacity",
          }}
        />

        {/* SILVER REFLECTION */}
        <div
          ref={silverRef}
          className="absolute left-1/2 top-[72%] w-[150%] h-[150%] -translate-x-1/2"
          style={{
            background: `conic-gradient(
              from 250deg at 50% 100%,
              transparent 0deg,
              rgba(148,163,184,0.25) 110deg,
              rgba(226,232,240,0.75) 125deg,
              rgba(148,163,184,0.25) 140deg,
              transparent 165deg
            )`,
            filter: "blur(50px)",
            transform: "rotate(24deg)",
            willChange: "transform, opacity",
          }}
        />

        {/* AMBIENT GLOW */}
        <div
          ref={ambientRef}
          className="absolute left-1/2 w-[120%] h-[120%] -translate-x-1/2"
          style={{
            top: "88%",
            background: `radial-gradient(circle at center, rgba(16,185,129,0.18), transparent 75%)`,
            filter: "blur(70px)",
            willChange: "opacity, top",
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 82%, transparent 0%, rgba(2,6,23,0.5) 45%, #020617 100%)`,
          }}
        />

        {/* FRAME */}
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
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* FLOATING PARTICLES */}
        <canvas
          ref={particlesRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        ref={contentRef}
        className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center gap-2"
      >
        <div
          ref={badgeRef}
          className="group inline-flex items-center gap-2 border border-white/10 rounded-full px-2.5 py-1 mb-5 backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer"
        >
          <span className="text-[8px] md:text-[10px] font-sans tracking-[0.15em] uppercase text-white/50">
            SilvX · The Invisible Habit
          </span>
          <span className="text-white/30 group-hover:translate-x-0.5 transition-transform">›</span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl text-white leading-[1.05] mb-5 tracking-tight font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Own the God's Metal,
          <br className="md:hidden" />
          <span className="italic font-normal opacity-90"> for the Price of a Chai</span>
        </h1>

        <p
          ref={subtextRef}
          className="text-white/45 text-base px-4 text-[13px] md:text-sm font-sans font-light leading-relaxed max-w-xl mb-5"
        >
          Automate your daily accumulation with just{" "}
          <span className="text-white/80 font-medium">₹10</span>. Build a secure
          emergency fund and a lasting legacy, gram by gram, without even feeling it.
        </p>

        <button
          ref={btnRef}
          className="group relative bg-[#047857] text-white rounded overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(4,120,87,0.4)] flex items-center justify-center min-w-[180px] px-10 py-4 cursor-pointer"
        >
          <span className="relative z-10 text-[14px] font-sans font-medium tracking-tight leading-none whitespace-nowrap">
            Book a Demo
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />

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