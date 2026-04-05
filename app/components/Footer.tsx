"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#161616] flex flex-col items-center pt-24 pb-12">
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Top Section: Split Left (Brand) and Right (Links) */}
        <div className="flex flex-col lg:flex-row justify-between mb-32 gap-16">

          {/* --- LEFT: Brand & Copyright --- */}
          <div className="flex flex-col max-w-[240px]">
            <div className="flex items-center gap-2.5 mb-6">
              {/* Custom CSS Ankar "Plus" Logo matching the Navbar */}
              <div className="relative w-4 h-4">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
                <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white -translate-x-1/2" />
                {/* The cutout box matches the footer background to create the shape */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#161616] -translate-x-[2px] -translate-y-[2px]" />
              </div>
              <span className="text-white font-bold text-[18px] tracking-[0.2em] leading-none">
                ANKAR
              </span>
            </div>

            {/* Forced narrow width to match the specific text wrap in the image */}
            <p className="text-white/40 text-[13px] font-sans font-light leading-relaxed pr-4">
              © 2026 Ankar AI - AI Operating System for Patents
            </p>
          </div>

          {/* --- RIGHT: Link Columns --- */}
          {/* A generous gap-20 to space the columns out luxuriously */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 lg:gap-28">

            {/* Product */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-white/40 uppercase mb-6">
                Product
              </h4>
              <ul className="space-y-4">
                {["Patent Drafting", "Office Actions", "Infringement Detection"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-white/80 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-white/40 uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {["Security", "About us", "Careers"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-white/80 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-white/40 uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {["Case studies", "Newsroom", "Blog", "Community"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-white/80 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- BOTTOM: Legal Bar --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <button className="text-[14px] font-sans font-medium text-white hover:text-white/80 transition-colors">
            Contact us
          </button>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 lg:gap-8">
            {["Terms of Service", "Acceptable Use Policy", "Data Processing Addendum", "Trust Center"].map((item) => (
              <button key={item} className="text-[13px] font-sans font-light text-white/40 hover:text-white/80 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}