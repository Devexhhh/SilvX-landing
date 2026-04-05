"use client";

import React from 'react';
import { Coins, ShieldCheck, Banknote, Gem } from 'lucide-react';

const modules = [
  {
    title: "Daily Auto-Pay",
    desc: "Set it and forget it. Micro-invest as little as ₹10 a day and watch your digital silver vault compound effortlessly.",
    // Sleek Bottom-Right Emerald Linear Gradient
    gradient: "bg-gradient-to-br from-[#10B981] via-[#064E3B] to-[#020617]",
    icon: <Coins size={24} strokeWidth={1.5} />,
  },
  {
    title: "Brinks Vaulting",
    desc: "100% physically backed. Every digital gram you buy is secured as 99.9% pure silver in world-class vaults.",
    // Top-Right Silver Metallic Linear Gradient
    gradient: "bg-gradient-to-tr from-[#94A3B8] via-[#64748B] to-[#0F172A]",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
  },
  {
    title: "Silver-Backed Loans",
    desc: "Your vault is your credit score. Access instant cash loans against your balance without ever selling your assets.",
    // Bottom-Left Primary Emerald Linear Gradient
    gradient: "bg-gradient-to-bl from-[#047857] via-[#0F172A] to-[#020617]",
    icon: <Banknote size={24} strokeWidth={1.5} />,
  },
  {
    title: "Physical Conversion",
    desc: "From app to heirloom. Liquidate instantly or convert your digital balance into doorstep-delivered jewelry and coins.",
    // Top-Left Mixed Silver-Emerald Linear Gradient
    gradient: "bg-gradient-to-tl from-[#64748B] via-[#064E3B] to-[#020617]",
    icon: <Gem size={24} strokeWidth={1.5} />,
  },
];

export default function Platform() {
  return (
    <section className="relative w-full bg-brand-bg pt-12 flex flex-col items-center selection:bg-emerald-500/50">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="mb-20">
          {/* Eyebrow text */}
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-brand-silver mb-6">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-brand-silver w-1 h-1" />
              <div className="bg-brand-silver/40 w-1 h-1" />
              <div className="bg-brand-silver/40 w-1 h-1" />
              <div className="bg-brand-silver w-1 h-1" />
            </div>
            The Ecosystem
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-[52px] text-brand-black leading-[1.1] mb-8 font-serif tracking-tight max-w-2xl">
            Your Daily Path to an <br />
            Unshakable Silver Legacy
          </h2>

          {/* Subtext */}
          <p className="text-brand-silver font-sans font-light text-lg max-w-2xl leading-relaxed">
            Automate your savings, secure your wealth, and unlock the true utility of the God's Metal with our integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="group cursor-pointer">
              <div
                className={`h-32 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-black/10 ${m.gradient}`}
              >
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-white/5 opacity-40 mix-blend-overlay" />

                {/* Icon wrapper */}
                <div className="text-white relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                  {m.icon}
                </div>
              </div>

              {/* Module titles */}
              <h3 className="font-sans font-bold text-[15px] text-brand-black mb-2 tracking-tight">
                {m.title}
              </h3>

              {/* Module descriptions */}
              <p className="text-brand-silver text-[14px] font-sans font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}