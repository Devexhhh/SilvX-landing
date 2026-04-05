"use client";

import React from 'react';
import { Lightbulb, PenLine, Gavel, ShieldCheck } from 'lucide-react';

const modules = [
  {
    title: "Idea generation",
    desc: "Uncover whitespace, evolve ideas toward novelty, and assess patentability with certainty.",
    gradient: "radial-gradient(circle at 50% 50%, #c45c30 0%, #450a0a 60%, #000 100%)",
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
  },
  {
    title: "Drafting",
    desc: "Draft invention disclosures and full patent applications with precision and structure.",
    gradient: "radial-gradient(circle at 50% 50%, #1e40af 0%, #1e293b 70%, #0f172a 100%)",
    icon: <PenLine size={24} strokeWidth={1.5} />,
  },
  {
    title: "Prosecution",
    desc: "Guide responses, amendments, and litigation-related strategy with evidence-backed reasoning.",
    gradient: "radial-gradient(circle at 50% 50%, #991b1b 0%, #450a0a 70%, #0a0a0a 100%)",
    icon: <Gavel size={24} strokeWidth={1.5} />,
  },
  {
    title: "Protection",
    desc: "Monitor products, detect infringement signals, and surface competitive patent insights.",
    gradient: "radial-gradient(circle at 50% 50%, #1d4ed8 0%, #0f172a 70%, #000 100%)",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
  },
];

export default function Platform() {
  return (
    // Removed top-20. Adjusted to pt-16 and pb-32 to stack perfectly under TrustedBy
    <section className="relative w-full bg-[#f5f4f1] pt-16 pb-32 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-black/30 w-1 h-1" />
              <div className="bg-black/10 w-1 h-1" />
              <div className="bg-black/10 w-1 h-1" />
              <div className="bg-black/30 w-1 h-1" />
            </div>
            Our Platform
          </div>

          <h2 className="text-4xl md:text-[52px] text-black leading-[1.1] mb-8 font-serif tracking-tight max-w-2xl">
            The AI Operating System for <br />
            Patent Professionals
          </h2>

          <p className="text-black/50 font-sans font-light text-lg max-w-2xl leading-relaxed">
            We partner with you to design and deploy the right tools for your team across the entire patent lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="group cursor-pointer">
              <div className="h-44 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10"
                style={{ background: m.gradient }}>
                <div className="absolute inset-0 bg-white/5 opacity-40 mix-blend-overlay" />
                <div className="text-white relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                  {m.icon}
                </div>
              </div>
              <h3 className="font-sans font-bold text-[15px] text-black mb-2 tracking-tight">
                {m.title}
              </h3>
              <p className="text-black/45 text-[14px] font-sans font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}