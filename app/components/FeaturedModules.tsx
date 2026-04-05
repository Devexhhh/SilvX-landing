"use client";

import React from 'react';
import { FileText, MessageSquare, Sparkles, Gavel, FileSignature, MessageCircle, ThumbsUp, Lightbulb, Target, Star } from 'lucide-react';

export default function FeaturedModules() {
  return (
    <section className="relative w-full bg-[#f5f4f1] pt-20 flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-black/30 w-1 h-1" />
              <div className="bg-black/10 w-1 h-1" />
              <div className="bg-black/10 w-1 h-1" />
              <div className="bg-black/30 w-1 h-1" />
            </div>
            The AI Operating System for Patents
          </div>
          <h2 className="text-5xl md:text-6xl text-black leading-[1.1] font-serif tracking-tight">
            Featured Modules
          </h2>
        </div>

        {/* =========================================
            THE BULLETPROOF GAP WRAPPER 
            Forces 8rem (128px) gap on mobile, 12rem (192px) on desktop
            ========================================= */}
        <div className="flex flex-col gap-12 lg:gap-12 w-full">

          {/* --- MODULE 1: PATENT DRAFTING (Text Left, Image Right) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 pr-0 lg:pr-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-black leading-tight mb-6">
                Patent Drafting
              </h3>
              <p className="text-black/50 text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Turn disclosures into claims and claims into full drafts, with configurable styles and strategies to adapt to your team's needs and citations to source documents.
              </p>
              <button className="bg-[#111111] text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-black transition-all hover:shadow-lg active:scale-95">
                Book a demo
              </button>
            </div>

            {/* UI Graphic Mockup */}
            {/* Converted to Tailwind bg-[radial-gradient(...)] */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-black/5 bg-[radial-gradient(circle_at_20%_50%,#d95c35_0%,#3a160a_50%,#111111_100%)]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Glass Card 1: Draft */}
              <div className="absolute top-[15%] left-[15%] w-48 bg-white/70 backdrop-blur-md border border-white/60 p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-[#1a1a1a] p-1.5 rounded-md"><FileText size={14} className="text-white" /></div>
                  <span className="text-[13px] font-semibold font-sans">Draft</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-black/10 rounded-full" />
                  <div className="h-2 w-4/5 bg-black/10 rounded-full" />
                  <div className="h-2 w-full bg-black/10 rounded-full" />
                </div>
              </div>
              {/* Glass Card 2: Chat */}
              <div className="absolute top-[35%] right-[10%] w-52 bg-white/80 backdrop-blur-md border border-white/80 p-4 rounded-xl shadow-2xl z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-[#1a1a1a] p-1.5 rounded-md"><MessageSquare size={14} className="text-white" /></div>
                  <span className="text-[13px] font-semibold font-sans">Chat</span>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2.5 w-full bg-[#f0f0f0] rounded-sm" />
                  <div className="h-2.5 w-3/4 bg-[#f0f0f0] rounded-sm" />
                  <div className="h-2.5 w-full bg-[#f0f0f0] rounded-sm" />
                </div>
              </div>
              {/* Glass Card 3: Prompt */}
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[80%] bg-white/95 backdrop-blur-xl border border-white shadow-2xl p-5 rounded-xl z-20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-[#1a1a1a] p-1.5 rounded-md"><Sparkles size={14} className="text-white" /></div>
                  <span className="text-[14px] font-semibold font-sans">Prompt</span>
                </div>
                <p className="text-[12px] font-sans text-black/60 leading-relaxed">
                  Provide a list of all numbered feature references used in this patent application draft
                </p>
              </div>
            </div>
          </div>

          {/* --- MODULE 2: OFFICE ACTIONS (Image Left, Text Right) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* UI Graphic Mockup */}
            {/* Converted to Tailwind bg-[radial-gradient(...)] */}
            <div className="order-1 lg:order-1 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-black/5 items-center bg-[radial-gradient(circle_at_30%_70%,#2563eb_0%,#1e3a8a_50%,#020617_100%)]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Glass Card 1: Objections */}
              <div className="absolute top-[20%] left-[10%] w-64 bg-white/80 backdrop-blur-md border border-white/60 p-4 rounded-xl shadow-xl z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#1a1a1a] p-1.5 rounded-md"><Gavel size={14} className="text-white" /></div>
                    <span className="text-[13px] font-semibold font-sans">Objections</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="bg-emerald-500 p-1 rounded-sm"><ThumbsUp size={12} className="text-white" /></div>
                    <div className="bg-orange-500 p-1 rounded-sm"><Lightbulb size={12} className="text-white" /></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-black/10 rounded-full" />
                  <div className="h-2 w-5/6 bg-black/10 rounded-full" />
                </div>
              </div>
              {/* Glass Card 2: Argument Suggestions */}
              <div className="absolute top-[40%] right-[10%] w-[65%] bg-white/90 backdrop-blur-xl border border-white/80 p-5 rounded-xl shadow-2xl z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#1a1a1a] p-1.5 rounded-md"><FileSignature size={14} className="text-white" /></div>
                  <span className="text-[14px] font-semibold font-sans">Argument Suggestions</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-full bg-[#f0f0f0] rounded-sm" />
                  <div className="h-4 w-full bg-[#f0f0f0] rounded-sm" />
                  <div className="h-4 w-3/4 bg-[#f0f0f0] rounded-sm" />
                </div>
              </div>
              {/* Glass Card 3: Discuss in chat */}
              <div className="absolute bottom-[10%] left-[15%] z-30">
                <button className="flex items-center gap-2 bg-blue-600/90 backdrop-blur-md text-white px-5 py-2.5 rounded-xl border border-blue-400/30 shadow-xl hover:bg-blue-600 transition-colors">
                  <MessageCircle size={14} />
                  <span className="text-[13px] font-semibold font-sans">Discuss in chat</span>
                </button>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-2 pl-0 lg:pl-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-black leading-tight mb-6">
                Office Actions
              </h3>
              <p className="text-black/50 text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Analyze rejections with suggested counterarguments and amendments, and turn your strategy into action with precise, well-supported responses.
              </p>
              <button className="bg-[#111111] text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-black transition-all hover:shadow-lg active:scale-95">
                Book a demo
              </button>
            </div>
          </div>

          {/* --- MODULE 3: INFRINGEMENT DETECTION (Text Left, Image Right) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 pr-0 lg:pr-8">
              <h3 className="text-3xl md:text-[38px] font-serif text-black leading-tight mb-6">
                Infringement Detection
              </h3>
              <p className="text-black/50 text-[15px] font-sans font-light leading-relaxed mb-10 max-w-md">
                Automatically analyze patents and products for alignment, gaps, and vulnerabilities, generating real-time alerts that support infringement theories, invalidity contentions, claim-construction strategy, and early case assessment.
              </p>
              <button className="bg-[#111111] text-white px-8 py-3.5 rounded-[4px] text-[13px] font-sans font-bold tracking-wide hover:bg-black transition-all hover:shadow-lg active:scale-95">
                Book a demo
              </button>
            </div>

            {/* UI Graphic Mockup */}
            {/* Converted to Tailwind bg-[radial-gradient(...)] */}
            <div className="order-1 lg:order-2 w-full aspect-[4/3] relative rounded-sm overflow-hidden flex justify-center shadow-2xl shadow-black/5 items-end bg-[radial-gradient(circle_at_50%_0%,#b91c1c_0%,#450a0a_50%,#0a0a0a_100%)]">
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <div className="w-[85%] h-[85%] bg-[#faf9f7] rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border border-white/20 p-6 relative z-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#222] p-1.5 rounded-lg"><Target size={16} className="text-white" /></div>
                  <span className="text-[15px] font-semibold font-sans">Infringement Detection</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-semibold text-black/80">Results</span>
                  <span className="bg-black/5 px-2 py-0.5 rounded text-[11px] font-mono text-black/60">10</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-mono text-blue-500 font-bold bg-blue-50 px-1.5 py-0.5 rounded">1</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-[10%] h-full bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-square bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 relative overflow-hidden shadow-sm">
                    <div className="absolute w-[60%] h-[1px] bg-black/20 rotate-45" />
                    <div className="absolute w-[60%] h-[1px] bg-black/20 -rotate-45" />
                    <div className="w-12 h-12 border-2 border-black/30 rounded-full" />
                  </div>
                  <div className="aspect-square bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 relative overflow-hidden shadow-sm">
                    <div className="w-full h-full border border-black/10 grid grid-cols-3 grid-rows-3 gap-1 p-1">
                      {[...Array(9)].map((_, i) => <div key={i} className="bg-black/5" />)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    <span className="bg-black/5 px-2.5 py-1 rounded text-[11px] font-sans text-black/60">Assignee</span>
                    <span className="bg-black/5 px-2.5 py-1 rounded text-[11px] font-sans text-black/60">US</span>
                  </div>
                  <Star size={16} className="text-orange-400 fill-orange-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* End of gap wrapper */}

      </div>
    </section>
  );
}