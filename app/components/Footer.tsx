"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-black flex flex-col items-center pt-24 pb-12 border-t border-brand-silver/5">
      <div className="w-full max-w-6xl mx-auto px-6">

        {/* Top Section: Split Left (Brand) and Right (Links) */}
        <div className="flex flex-col lg:flex-row justify-between mb-32 gap-16">

          {/* --- LEFT: Brand & Copyright --- */}
          <div className="flex flex-col max-w-[240px]">
            <div className="flex items-center gap-2.5 mb-6">
              {/* Custom CSS SilvX Logo (Silver Bar & Emerald Accent) */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                <div className="absolute w-full h-[3px] bg-brand-silver rounded-sm transform rotate-45" />
                <div className="absolute w-full h-[3px] bg-brand-emerald rounded-sm transform -rotate-45 mix-blend-screen" />
              </div>
              <span className="text-white font-bold text-[18px] tracking-[0.2em] leading-none">
                SILVX
              </span>
            </div>

            <p className="text-brand-silver/40 text-[13px] font-sans font-light leading-relaxed pr-4">
              © 2026 SilvX Technologies. <br />
              The God's Metal, accessible to everyone.
            </p>
          </div>

          {/* --- RIGHT: Link Columns --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 lg:gap-28">

            {/* Product */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-brand-emerald uppercase mb-6">
                Ecosystem
              </h4>
              <ul className="space-y-4">
                {["Daily Auto-Pay", "Silver-Backed Loans", "The Craftshop", "Physical Delivery"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-brand-silver/80 hover:text-brand-emerald transition-colors cursor-pointer">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-brand-emerald uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {["About us", "Vault & Security", "Partner Network", "Careers"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-brand-silver/80 hover:text-brand-emerald transition-colors cursor-pointer">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.15em] text-brand-emerald uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {["Live Silver Prices", "Wealth Calculator", "Financial Blog", "Help & FAQs"].map((item) => (
                  <li key={item}>
                    <button className="text-[14px] font-sans font-medium text-brand-silver/80 hover:text-brand-emerald transition-colors cursor-pointer">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- BOTTOM: Legal Bar --- */}
        <div className="border-t border-brand-silver/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <button className="text-[14px] font-sans font-medium text-white hover:text-brand-emerald transition-colors cursor-pointer">
            Contact Support
          </button>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 lg:gap-8">
            {/* Updated Legal Links for Fintech Compliance */}
            {["Terms of Service", "Privacy Policy", "KYC & AML Policy", "Grievance Redressal"].map((item) => (
              <button key={item} className="text-[13px] font-sans font-light text-brand-silver/40 hover:text-brand-silver/80 transition-colors cursor-pointer">
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}