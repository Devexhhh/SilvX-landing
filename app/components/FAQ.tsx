"use client";

import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    q: "What is Ankar AI and who is it for?",
    a: "Ankar is a platform designed for patent professionals. Our suite of tools supports the entire patent lifecycle - from drafting and prosecution, to intelligence and infringement detection. Some customers use a single tool, while others integrate multiple modules to streamline their entire workflow.",
  },
  {
    q: "I am a patent law firm, does Ankar work for me?",
    a: "Yes. Ankar is built to adapt to the specific workflows and formatting requirements of outside counsel, helping you draft higher quality patents faster while maintaining your firm's unique style and standards.",
  },
  {
    q: "I am an in-house IP team, does Ankar work for me?",
    a: "Absolutely. In-house teams use Ankar to manage their portfolio, rapidly assess external disclosures, and collaborate seamlessly with outside counsel while reducing overall legal spend.",
  },
  {
    q: "Is my data secure?",
    a: "Security is foundational to our platform. We are SOC 2 and ISO 27001 certified. We employ end-to-end encryption and strictly ensure that your data is never used to train generalized models.",
  },
  {
    q: "How can I get started?",
    a: "You can book a demo with our team to discuss your specific needs. We'll set up a tailored pilot program so you can see the impact of our AI on your actual daily workflows.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section
      className="relative w-full bg-[#f5f4f1] flex flex-col items-center pt-20 pb-20"
    >
      {/* Centered Content Wrapper */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* --- LEFT COLUMN: HEADINGS --- */}
        <div className="lg:sticky lg:top-32 pr-0 md:pr-12">
          <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-black/30 mb-8">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-[52px] text-black leading-[1.05] font-serif tracking-tight">
            We've Got the Answers You're Looking For
          </h2>
        </div>

        {/* --- RIGHT COLUMN: ACCORDION --- */}
        <div className="flex flex-col w-full border-t border-black/[0.06]">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;

            return (
              <div key={i} className="border-b border-black/[0.06] overflow-hidden">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between py-7 text-left group focus:outline-none"
                >
                  <span
                    className={`font-sans text-[16px] font-medium tracking-tight transition-colors pr-8 ${isOpen ? 'text-black' : 'text-black/70 group-hover:text-black'
                      }`}
                  >
                    {faq.q}
                  </span>

                  {/* Rotating Icon */}
                  <span className="text-black/30 flex-shrink-0">
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </span>
                </button>

                {/* Smooth Height Transition Wrapper */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pr-8 md:pr-12">
                      <p className="text-black/50 font-sans font-light text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Contact Footer */}
          <div className="pt-10 flex items-center gap-2.5 text-[14px] text-black/50 font-sans font-light">
            <Mail size={16} strokeWidth={1.5} className="text-black/40" />
            <span>Have any more questions?</span>
            <button className="text-black/80 font-medium underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors">
              Contact us
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}