"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { dropdownData } from "../lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to invert colors
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Ecosystem", "Vault Security", "Micro-loans", "The Craftshop", "Resources"];
  const dropdownItems = Object.keys(dropdownData);

  // Smooth hover handlers
  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (dropdownItems.includes(item)) setActiveDropdown(item);
    else setActiveDropdown(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // slight delay prevents flickering when moving mouse
  };

  return (
    <nav
      className={`fixed top-3 left-4 right-4 md:left-12 md:right-12 z-50 flex items-center justify-between transition-all duration-500 ${isScrolled
        ? "px-6 md:px-8 py-2 bg-brand-bg/95 backdrop-blur-md shadow-sm border border-brand-silver/10 rounded-sm"
        : "px-6 md:px-12 py-2 bg-transparent"
        }`}
    >
      {/* --- LOGO SECTION --- */}
      <div className="flex items-center gap-2.5 group cursor-pointer z-50">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className={`absolute w-full h-[2.5px] rounded-sm transform rotate-45 transition-colors duration-500 ${isScrolled ? "bg-brand-black" : "bg-brand-silver"}`} />
          <div className={`absolute w-full h-[2.5px] rounded-sm transform -rotate-45 mix-blend-screen transition-colors duration-500 ${isScrolled ? "bg-brand-emerald" : "bg-brand-emerald/80"}`} />
        </div>
        <span className={`font-bold text-xl tracking-[0.2em] leading-none transition-colors duration-500 ${isScrolled ? "text-brand-black" : "text-white"}`}>
          SILVX
        </span>
      </div>

      {/* --- DESKTOP NAV --- */}
      <div className="hidden md:flex items-center h-full">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const hasDropdown = dropdownItems.includes(item);
            const isActive = activeDropdown === item;

            return (
              <li
                key={item}
                className="relative h-full px-3 py-4"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 text-[14px] font-sans transition-all tracking-tight cursor-pointer ${isScrolled
                    ? isActive ? "text-brand-emerald" : "text-brand-black/70 hover:text-brand-emerald"
                    : isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                >
                  {item}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-all duration-300 ${isActive
                        ? "rotate-180 opacity-100"
                        : isScrolled ? "opacity-30" : "opacity-40"
                        }`}
                    />
                  )}
                </button>

                {/* --- MEGA MENU DROPDOWN --- */}
                {hasDropdown && (
                  <div
                    className={`
      absolute top-full left-1/2 -translate-x-1/2 w-[720px] 
      bg-white rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
      border border-slate-100 flex overflow-hidden z-50 cursor-default
      transition-all duration-300 ease-out
      ${isActive
                        ? "opacity-100 translate-y-4 visible"
                        : "opacity-0 translate-y-0 invisible pointer-events-none"}
    `}
                  >
                    {/* Left Column: Links */}
                    <div className="w-[45%] p-6 flex flex-col gap-2 bg-white">
                      {dropdownData[item as keyof typeof dropdownData].links.map((link, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-md hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                          <div className="mt-0.5 text-slate-400 group-hover:text-brand-emerald transition-colors">
                            <link.icon size={20} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-slate-900 text-[14px] font-semibold font-sans mb-0.5">
                              {link.title}
                            </h4>
                            <p className="text-slate-500 text-[13px] font-sans font-light leading-snug">
                              {link.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Column: Featured Card */}
                    <div className="w-[55%] bg-slate-50 p-8 flex flex-col justify-between border-l border-slate-100">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-slate-500 uppercase">
                            {dropdownData[item as keyof typeof dropdownData].card.eyebrow}
                          </span>
                          <ArrowUpRight size={16} className="text-slate-400" />
                        </div>
                        <h3 className="text-[22px] font-serif text-slate-900 leading-tight mb-8">
                          {dropdownData[item as keyof typeof dropdownData].card.title}
                        </h3>
                      </div>

                      {/* Profiles */}
                      <div className="flex items-center gap-6">
                        {dropdownData[item as keyof typeof dropdownData].card.profiles.map(
                          (profile, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <img
                                src={profile.img}
                                alt={profile.name}
                                className="w-10 h-10 rounded-full border border-slate-200 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                              />
                              <div className="flex flex-col">
                                <span className="text-slate-900 text-[13px] font-semibold font-sans">
                                  {profile.name}
                                </span>
                                <span className="text-slate-500 text-[10px] font-sans tracking-wide uppercase">
                                  {profile.role}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* --- CTA BUTTON --- */}
      <div className="hidden md:block z-50">
        <button
          className={`group relative rounded-xs overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center cursor-pointer px-5 py-3 ${isScrolled
            ? "bg-brand-emerald text-white hover:bg-brand-emerald-dark"
            : "bg-white text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            }`}
        >
          <span className="relative z-10 text-[13px] font-sans font-bold tracking-wide leading-none whitespace-nowrap">
            Start with ₹10
          </span>
          {/* Shine effect animation */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-shimmer ${isScrolled ? "via-white/[0.15]" : "via-black/[0.08]"
            }`} />
        </button>
      </div>

      {/* --- MOBILE TOGGLE --- */}
      <button
        className={`md:hidden p-2 rounded-full transition-colors duration-500 cursor-pointer z-50 ${isScrolled ? "text-brand-black hover:bg-brand-black/5" : "text-white hover:bg-white/10"
          }`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileOpen && (
        <div className="absolute top-[110%] left-0 right-0 mt-2 rounded-2xl bg-brand-black/95 backdrop-blur-xl border border-white/10 p-8 flex flex-col gap-6 text-white shadow-2xl animate-in fade-in slide-in-from-top-4 z-40">
          {navItems.map((item) => (
            <button key={item} className="text-left text-lg font-medium border-b border-white/5 pb-2 hover:text-brand-emerald transition-colors cursor-pointer">
              {item}
            </button>
          ))}
          <button className="bg-brand-emerald text-white py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform cursor-pointer">
            Start with ₹10
          </button>
        </div>
      )}
    </nav>
  );
}