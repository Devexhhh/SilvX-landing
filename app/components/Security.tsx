"use client";

import React from 'react';

export default function Security() {
  return (
    // Background remains Rich Black (slate-900) with emerald top border
    <section className="relative w-full bg-brand-black flex flex-col items-center border-t border-brand-emerald/10 py-[60px] mt-12">

      {/* Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* --- LEFT COLUMN: TEXT CONTENT --- */}
        <div className="pr-0 md:pr-8">
          <div className="flex items-center gap-2 text-[12px] font-sans font-bold tracking-[0.2em] uppercase text-brand-emerald mb-8">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-brand-emerald w-1 h-1" />
              <div className="bg-brand-emerald/20 w-1 h-1" />
              <div className="bg-brand-emerald/20 w-1 h-1" />
              <div className="bg-brand-emerald w-1 h-1" />
            </div>
            Vault Security
          </div>

          <h2 className="font-serif text-4xl md:text-[44px] text-white leading-[1.15] tracking-tight mb-6">
            Physically backed. Digitally fortified. 100% yours.
          </h2>

          <p className="text-brand-silver font-sans font-light text-[15px] leading-relaxed mb-10 max-w-md">
            Every digital gram you accumulate is matched by 99.9% pure physical silver stored in world-class Brink's vaults by our partner, Augmont. We treat your ₹10 with the exact same security as a millionaire's portfolio.
          </p>

          {/* Updated button to brand Emerald */}
          <button className="bg-brand-emerald text-white px-7 py-3.5 rounded-[3px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all hover:shadow-lg hover:shadow-brand-emerald/20 active:scale-95 cursor-pointer">
            View Vault Certifications
          </button>
        </div>

        {/* --- RIGHT COLUMN: BADGE GRID --- */}
        <div className="flex justify-center lg:justify-end w-full">
          {/* Card grid container with silver border */}
          <div className="w-full max-w-[460px] grid grid-cols-2 gap-[1px] bg-brand-silver/10 rounded-sm overflow-hidden border border-brand-silver/5 shadow-2xl shadow-black/50">

            {/* Card 1: Brink's Vaulted */}
            <div className="bg-brand-black/40 h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-brand-emerald/[0.03] transition-colors group">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-brand-silver/50 group-hover:stroke-brand-emerald transition-colors fill-none" strokeWidth="1.5">
                  {/* Vault Door SVG */}
                  <rect x="10" y="10" width="28" height="28" rx="3" />
                  <circle cx="24" cy="24" r="6" />
                  <path d="M24 16 v2 M24 30 v2 M16 24 h2 M30 24 h2" />
                  <circle cx="14" cy="14" r="0.5" className="fill-brand-emerald/50" />
                  <circle cx="34" cy="34" r="0.5" className="fill-brand-emerald/50" />
                </svg>
              </div>
              <span className="text-brand-silver/80 text-[13px] font-sans font-medium tracking-wide group-hover:text-white transition-colors">Brink's Vaulted</span>
            </div>

            {/* Card 2: 99.9% Purity */}
            <div className="bg-brand-black/40 h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-brand-emerald/[0.03] transition-colors group">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-brand-silver/50 group-hover:stroke-brand-emerald transition-colors fill-none" strokeWidth="1.5">
                  {/* Coin / Purity SVG */}
                  <circle cx="24" cy="24" r="16" />
                  <path d="M18 16 A 8 8 0 0 1 28 12" strokeLinecap="round" />
                  <text x="24" y="28" textAnchor="middle" className="text-[10px] font-sans fill-brand-silver/50 group-hover:fill-brand-emerald font-bold tracking-wider transition-colors" stroke="none">99.9</text>
                </svg>
              </div>
              <span className="text-brand-silver/80 text-[13px] font-sans font-medium tracking-wide group-hover:text-white transition-colors">99.9% Purity</span>
            </div>

            {/* Card 3: 100% Insured */}
            <div className="bg-brand-black/40 h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-brand-emerald/[0.03] transition-colors group">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-brand-silver/50 group-hover:stroke-brand-emerald transition-colors fill-none" strokeWidth="1.5" strokeLinejoin="round">
                  {/* Shield with Check SVG */}
                  <path d="M24 8 L10 14 V24 C10 34 24 42 24 42 C24 42 38 34 38 24 V14 Z" />
                  <path d="M17 24 L22 29 L31 18" />
                </svg>
              </div>
              <span className="text-brand-silver/80 text-[13px] font-sans font-medium tracking-wide group-hover:text-white transition-colors">100% Insured</span>
            </div>

            {/* Card 4: Bank-Level Security (Kept original padlock, fits perfectly) */}
            <div className="bg-brand-black/40 h-48 md:h-52 flex flex-col items-center justify-center p-6 hover:bg-brand-emerald/[0.03] transition-colors group">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-full h-full stroke-brand-silver/50 group-hover:stroke-brand-emerald transition-colors fill-none" strokeWidth="1.5">
                  {/* Padlock SVG */}
                  <rect x="14" y="22" width="20" height="16" rx="2" />
                  <path d="M18 22 V16 A6 6 0 0 1 30 16 V22" />
                  <circle cx="24" cy="30" r="1.5" className="fill-brand-emerald/50" />
                </svg>
              </div>
              <span className="text-brand-silver/80 text-[13px] font-sans font-medium tracking-wide text-center group-hover:text-white transition-colors">Bank-Grade Digital</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}