"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to invert colors
  useEffect(() => {
    const handleScroll = () => {
      // Toggle state when scrolled past 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-4 right-4 md:left-12 md:right-12 z-50 flex items-center justify-between transition-all duration-500 ${isScrolled
          ? "px-6 md:px-8 py-4 bg-white/90 backdrop-blur-md shadow-sm border border-black/5 rounded-2xl"
          : "px-6 md:px-12 py-6 bg-transparent"
        }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2.5 group cursor-pointer">
        <div className="relative w-5 h-5">
          {/* The "plus/cross" logo mark */}
          <div className={`absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 transition-colors duration-500 ${isScrolled ? "bg-black" : "bg-white"}`} />
          <div className={`absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 transition-colors duration-500 ${isScrolled ? "bg-black" : "bg-white"}`} />

          {/* The cutout box matches the background to create the shape */}
          <div className={`absolute top-0 left-0 w-1.5 h-1.5 -translate-x-1 -translate-y-1 transition-colors duration-500 ${isScrolled ? "bg-white" : "bg-[#050508]"}`} />
        </div>
        <span className={`font-bold text-xl tracking-[0.2em] leading-none transition-colors duration-500 ${isScrolled ? "text-black" : "text-white"}`}>
          DEVEX
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-7">
        {["Product", "Company", "Customers", "Security", "Resources", "Community"].map((item) => (
          <button
            key={item}
            className={`flex items-center gap-1 text-[14px] font-sans transition-all tracking-tight group ${isScrolled ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"
              }`}
          >
            {item}
            {["Product", "Company", "Resources"].includes(item) && (
              <ChevronDown size={14} className={`transition-all ${isScrolled ? "opacity-30 group-hover:opacity-100" : "opacity-40 group-hover:opacity-100"} group-hover:translate-y-0.5`} />
            )}
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className={`hidden md:flex group relative rounded overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] items-center justify-center cursor-pointer px-5 py-3 ${isScrolled
            ? "bg-[#111111] text-white hover:shadow-lg"
            : "bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          }`}
      >
        <span className="relative z-10 text-[13px] font-sans font-bold tracking-wide leading-none whitespace-nowrap">
          Book a demo
        </span>

        {/* Shine effect animation */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-shimmer ${isScrolled ? "via-white/[0.15]" : "via-black/[0.08]"
          }`} />
      </button>

      {/* Mobile Toggle */}
      <button
        className={`md:hidden p-2 rounded-full transition-colors duration-500 ${isScrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
          }`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-[110%] left-0 right-0 mt-2 rounded-2xl bg-[#0d0d14]/95 backdrop-blur-xl border border-white/10 p-8 flex flex-col gap-6 text-white shadow-2xl animate-in fade-in slide-in-from-top-4">
          {["Product", "Company", "Customers", "Security", "Resources", "Community"].map((item) => (
            <button key={item} className="text-left text-lg font-medium border-b border-white/5 pb-2 hover:text-orange-400 transition-colors">
              {item}
            </button>
          ))}
          <button className="bg-white text-black py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform">
            Book a demo
          </button>
        </div>
      )}
    </nav>
  );
}