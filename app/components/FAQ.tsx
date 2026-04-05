"use client";

import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { faqs } from "../lib/data"; // Importing the data

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="relative w-full bg-brand-bg flex flex-col items-center pt-20 pb-32">
      {/* Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* --- LEFT COLUMN: HEADINGS --- */}
        <div className="lg:sticky lg:top-32 pr-0 md:pr-12">
          <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-brand-emerald mb-8">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-[52px] text-brand-black leading-[1.05] font-serif tracking-tight">
            Clearing the Air on Your Daily Legacy
          </h2>
        </div>

        {/* --- RIGHT COLUMN: ACCORDION --- */}
        <div className="flex flex-col w-full border-t border-brand-silver/20">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;

            return (
              <div key={i} className="border-b border-brand-silver/20 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between py-7 text-left group focus:outline-none cursor-pointer"
                >
                  <span
                    className={`font-sans text-[16px] font-medium tracking-tight transition-colors pr-8 ${isOpen ? "text-brand-emerald" : "text-brand-black/70 group-hover:text-brand-black"
                      }`}
                  >
                    {faq.q}
                  </span>

                  <span className={`${isOpen ? "text-brand-emerald" : "text-brand-silver/50"} flex-shrink-0 transition-colors`}>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pr-8 md:pr-12">
                      <p className="text-brand-silver font-sans font-light text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Contact Footer */}
          <div className="pt-10 flex items-center gap-2.5 text-[14px] text-brand-silver/60 font-sans font-light">
            <Mail size={16} strokeWidth={1.5} className="text-brand-emerald/60" />
            <span>Have any more questions?</span>
            <button className="text-brand-black font-medium underline underline-offset-4 decoration-brand-emerald/30 hover:decoration-brand-emerald transition-colors cursor-pointer">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}