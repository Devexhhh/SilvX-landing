"use client";

import React from 'react';
// Updated icons to match the fintech, wealth, and delivery narrative
import { Coins, TrendingUp, ShieldCheck, Banknote, ThumbsUp, Gem } from 'lucide-react';

export default function FeaturedModules() {
  return (
    <section className="relative w-full bg-brand-bg py-32 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-brand-silver mb-6">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-brand-emerald w-1 h-1" />
              <div className="bg-brand-silver/20 w-1 h-1" />
              <div className="bg-brand-silver/20 w-1 h-1" />
              <div className="bg-brand-emerald w-1 h-1" />
            </div>
            The Invisible Habit
          </div>
          <h2 className="text-5xl md:text-6xl text-brand-black leading-[1.1] font-serif tracking-tight">
            The Silver Ecosystem
          </h2>
        </div>

        {/* Module Wrapper */}
        <div className="flex flex-col gap-12 w-full">

          {/* --- MODULE 1: AUTO-PAY ACCUMULATION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 pr-0 lg:pr-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                Invisible Accumulation
              </h3>
              <p className="text-brand-silver text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Set your daily mandate from just ₹10 to ₹500. Our UPI AutoPay system seamlessly converts your pocket change into 99.9% pure digital silver. Build wealth without ever feeling the pinch.
              </p>
              <button className="bg-brand-emerald text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all hover:shadow-lg hover:shadow-brand-emerald/20 active:scale-95 cursor-pointer">
                Start Auto-Pay
              </button>
            </div>

            {/* Replaced radial with sleek bottom-right Linear Gradient */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-brand-black/5 bg-gradient-to-br from-[#10B981] via-[#064E3B] to-[#020617]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* UI Mockup 1: Daily Deduction */}
              <div className="absolute top-[15%] left-[15%] w-48 bg-white/70 backdrop-blur-md border border-white/60 p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-brand-black p-1.5 rounded-md"><Coins size={14} className="text-white" /></div>
                  <span className="text-[13px] font-semibold font-sans text-brand-black">Daily ₹10</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-brand-emerald/20 rounded-full" />
                  <div className="h-2 w-4/5 bg-brand-emerald/10 rounded-full" />
                  <div className="h-2 w-full bg-brand-emerald/20 rounded-full" />
                </div>
              </div>

              {/* UI Mockup 2: Growth Tracker */}
              <div className="absolute top-[35%] right-[10%] w-52 bg-white/80 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-2xl z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-brand-emerald-dark p-1.5 rounded-md"><TrendingUp size={14} className="text-white" /></div>
                  <span className="text-[13px] font-semibold font-sans text-brand-black">Vault Growth</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2.5 w-full bg-slate-100 rounded-sm" />
                  <div className="h-2.5 w-3/4 bg-slate-100 rounded-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* --- MODULE 2: MICRO-LOANS --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Replaced radial with sleek bottom-left Silver to Slate Linear Gradient */}
            <div className="order-1 lg:order-1 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-brand-black/5 items-center bg-gradient-to-bl from-[#64748B] via-[#334155] to-[#0F172A]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* UI Mockup 1: Collateral Status */}
              <div className="absolute top-[20%] left-[10%] w-64 bg-white/80 backdrop-blur-md border border-white/60 p-4 rounded-xl shadow-xl z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-black p-1.5 rounded-md"><ShieldCheck size={14} className="text-white" /></div>
                    <span className="text-[13px] font-semibold font-sans text-brand-black">Vault Collateral</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="bg-brand-emerald p-1 rounded-sm"><ThumbsUp size={12} className="text-white" /></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-200 rounded-full" />
                </div>
              </div>

              {/* UI Mockup 2: Instant Cash */}
              <div className="absolute top-[40%] right-[10%] w-[65%] bg-white/90 backdrop-blur-xl border border-white/80 p-5 rounded-xl shadow-2xl z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-brand-emerald p-1.5 rounded-md"><Banknote size={14} className="text-white" /></div>
                  <span className="text-[14px] font-semibold font-sans text-brand-black">Instant Liquidity Approved</span>
                </div>
                <div className="space-y-3 text-brand-emerald">
                  <div className="h-4 w-full bg-brand-emerald/5 rounded-sm" />
                  <div className="h-4 w-3/4 bg-brand-emerald/5 rounded-sm" />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2 pl-0 lg:pl-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                The Emergency Shield
              </h3>
              <p className="text-brand-silver text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Life happens. Use your accumulated silver as collateral for instant, low-interest microloans. Keep your assets appreciating safely in the vault while accessing the cash you need today.
              </p>
              <button className="bg-brand-emerald text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all active:scale-95 cursor-pointer">
                Explore Micro-loans
              </button>
            </div>
          </div>

          {/* --- MODULE 3: PHYSICAL DELIVERY / CRAFTSHOP --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 pr-0 lg:pr-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-brand-black leading-tight mb-6">
                The Craftshop
              </h3>
              <p className="text-brand-silver text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Don't just hold numbers on a screen. Convert your digital vault into physical coins, stunning jewelry, or custom artifacts. Maximize your profits and get the God's Metal delivered right to your doorstep.
              </p>
              <button className="bg-brand-emerald text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-brand-emerald-dark transition-all active:scale-95 cursor-pointer">
                View Catalog
              </button>
            </div>

            {/* Replaced radial with sleek top-right deep Emerald to Black Linear Gradient */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-brand-black/5 items-end bg-gradient-to-tr from-[#047857] via-[#020617] to-black">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* UI Mockup: Minting Engine & Tracker */}
              <div className="w-[85%] h-[85%] bg-white rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border border-white/20 p-6 relative z-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-brand-emerald p-1.5 rounded-lg"><Gem size={16} className="text-white" /></div>
                  <span className="text-[15px] font-semibold font-sans text-brand-black">Minting Engine</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-brand-emerald rounded-full" />
                  </div>
                  <span className="text-[11px] font-mono text-brand-emerald font-bold">Out for Delivery</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
                    {/* Abstract representation of a physical coin/jewelry being minted */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-[3px] border-slate-300 flex items-center justify-center shadow-inner">
                      <div className="w-10 h-10 rounded-full border border-slate-300 opacity-50"></div>
                    </div>
                  </div>
                  <div className="aspect-square bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-4">
                    <div className="w-full h-full border border-slate-200 grid grid-cols-3 gap-1 p-1">
                      {[...Array(9)].map((_, i) => <div key={i} className="bg-brand-emerald/10" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}