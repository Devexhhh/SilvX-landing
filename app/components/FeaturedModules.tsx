"use client";

import React from 'react';
import { Coins, TrendingUp, ShieldCheck, Banknote, ThumbsUp, Gem } from 'lucide-react';

export default function FeaturedModules() {
  return (
    <section className="relative w-full bg-brand-bg py-12 md:py-16 flex flex-col items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Section Header - Centered for mobile, left-aligned for desktop */}
        <div className="mb-5 md:mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-brand-silver mb-6">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-brand-emerald w-1 h-1" />
              <div className="bg-brand-silver/20 w-1 h-1" />
              <div className="bg-brand-silver/20 w-1 h-1" />
              <div className="bg-brand-emerald w-1 h-1" />
            </div>
            The Invisible Habit
          </div>
          <h2 className="text-4xl md:text-6xl text-brand-black leading-[1.1] font-serif tracking-tight">
            The Silver Ecosystem
          </h2>
        </div>

        {/* Module Wrapper - Adjusted gap for mobile */}
        <div className="flex flex-col gap-15 md:gap-12 w-full">

          {/* --- MODULE 1: AUTO-PAY ACCUMULATION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Graphic - Appears first on mobile */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-brand-black/5 bg-gradient-to-br from-[#10B981] via-[#064E3B] to-[#020617]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Responsive Cards: Scaled for mobile */}
              <div className="absolute top-[10%] left-[10%] w-40 md:w-48 bg-white/70 backdrop-blur-md border border-white/60 p-3 md:p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-brand-black p-1.5 rounded-md"><Coins size={12} className="text-white" /></div>
                  <span className="text-[11px] md:text-[13px] font-semibold font-sans text-brand-black">Daily ₹10</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-brand-emerald/20 rounded-full" />
                  <div className="h-1.5 w-4/5 bg-brand-emerald/10 rounded-full" />
                </div>
              </div>

              <div className="absolute top-[30%] right-[5%] w-44 md:w-52 bg-white/80 backdrop-blur-md border border-white/80 p-3 md:p-4 rounded-xl shadow-2xl z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-brand-emerald-dark p-1.5 rounded-md"><TrendingUp size={12} className="text-white" /></div>
                  <span className="text-[11px] md:text-[13px] font-semibold font-sans text-brand-black">Vault Growth</span>
                </div>
                <div className="h-10 md:h-12 w-full bg-slate-100 rounded-sm overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-brand-emerald/10 origin-bottom scale-y-75" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-1 pr-0 lg:pr-8 text-center md:text-left">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                Invisible Accumulation
              </h3>
              <p className="text-brand-silver text-[14px] md:text-[15px] font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
                Set your daily mandate from just ₹10 to ₹500. Our UPI AutoPay system seamlessly converts your pocket change into 99.9% pure digital silver.
              </p>
              <button className="w-full sm:w-auto bg-brand-emerald text-white px-8 py-4 md:py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all hover:shadow-lg hover:shadow-brand-emerald/20 active:scale-95 cursor-pointer">
                Start Auto-Pay
              </button>
            </div>
          </div>

          {/* --- MODULE 2: MICRO-LOANS --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Graphic */}
            <div className="order-1 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-brand-black/5 items-center bg-gradient-to-bl from-[#64748B] via-[#334155] to-[#0F172A]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <div className="absolute top-[15%] left-[8%] w-[60%] md:w-64 bg-white/80 backdrop-blur-md border border-white/60 p-3 md:p-4 rounded-xl shadow-xl z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-black p-1.5 rounded-md"><ShieldCheck size={12} className="text-white" /></div>
                    <span className="text-[11px] md:text-[13px] font-semibold font-sans text-brand-black">Collateral</span>
                  </div>
                  <ThumbsUp size={12} className="text-brand-emerald" />
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full" />
              </div>

              <div className="absolute top-[45%] right-[5%] w-[70%] md:w-[65%] bg-white/90 backdrop-blur-xl border border-white/80 p-4 md:p-5 rounded-xl shadow-2xl z-20">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="bg-brand-emerald p-1.5 rounded-md"><Banknote size={12} className="text-white" /></div>
                  <span className="text-[12px] md:text-[14px] font-semibold font-sans text-brand-black">Instant Liquidity</span>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div className="h-3 md:h-4 w-full bg-brand-emerald/5 rounded-sm" />
                  <div className="h-3 md:h-4 w-3/4 bg-brand-emerald/5 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 pl-0 lg:pl-8 text-center md:text-left">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                The Emergency Shield
              </h3>
              <p className="text-brand-silver text-[14px] md:text-[15px] font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
                Life happens. Use your accumulated silver as collateral for instant, low-interest microloans. Keep your assets appreciating while accessing cash.
              </p>
              <button className="w-full sm:w-auto bg-brand-emerald text-white px-8 py-4 md:py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all active:scale-95 cursor-pointer">
                Explore Micro-loans
              </button>
            </div>
          </div>

          {/* --- MODULE 3: PHYSICAL DELIVERY --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Graphic */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-brand-black/5 items-end bg-gradient-to-tr from-[#047857] via-[#020617] to-black">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <div className="w-[90%] md:w-[85%] h-[80%] md:h-[85%] bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border border-white/20 p-4 md:p-6 relative z-10 flex flex-col">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="bg-brand-emerald p-1.5 rounded-lg"><Gem size={14} className="text-white" /></div>
                  <span className="text-[13px] md:text-[15px] font-semibold font-sans text-brand-black">Minting Engine</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mb-6">
                  <div className="flex-1 h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-brand-emerald rounded-full" />
                  </div>
                  <span className="text-[9px] md:text-[11px] font-mono text-brand-emerald font-bold whitespace-nowrap">Shipping...</span>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-2 md:p-4">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-[2px] border-slate-300 shadow-inner" />
                  </div>
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-2 md:p-4">
                    <div className="w-full h-full border border-slate-200 grid grid-cols-3 gap-1 p-0.5">
                      {[...Array(9)].map((_, i) => <div key={i} className="bg-brand-emerald/10" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-1 pr-0 lg:pr-8 text-center md:text-left">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                The Craftshop
              </h3>
              <p className="text-brand-silver text-[14px] md:text-[15px] font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
                Convert your digital vault into physical coins or jewelry. Get the God's Metal delivered right to your doorstep.
              </p>
              <button className="w-full sm:w-auto bg-brand-emerald text-white px-8 py-4 md:py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all active:scale-95 cursor-pointer">
                View Catalog
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}