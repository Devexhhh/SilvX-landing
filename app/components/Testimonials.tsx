"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "VORYS",
    quote: "Whilst Vorys views AI as a powerful accelerator of quality, its use is always governed by one principle: client discretion. Some clients fully embrace AI-enhanced patent practice; others prefer traditional workflows. Vorys ensures that every engagement follows client instructions, outside-counsel guidelines, and the sensitivities of the matter.",
    name: "Carey Jordan",
    title: "CHAIR, VORYS IP GROUP",
    bg: "bg-gray-800",
  },
  {
    company: "L'ORÉAL",
    quote: "Ankar has fundamentally transformed how our IP team operates. The quality of our patent drafts has improved dramatically while cutting the time spent on routine tasks in half. We can now focus on strategic innovation rather than paperwork.",
    name: "Marie Dupont",
    title: "HEAD OF IP, L'ORÉAL",
    bg: "bg-gray-700",
  },
  {
    company: "DENNEMEYER",
    quote: "My work will soon be supported by AI that will allow me to draft more efficiently. This is where attorneys create the greatest value for clients.",
    name: "Jochen Sties",
    title: "PARTNER, PRINZ & PARTNER",
    bg: "bg-gray-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="bg-[#f5f4f0] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image card */}
          <div className={`relative h-96 rounded-xl overflow-hidden ${t.bg} flex items-end`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gray-500 flex items-center justify-center text-4xl">
                👤
              </div>
            </div>
            <div className="relative z-10 p-8 w-full">
              <span className="text-white text-2xl font-bold tracking-widest font-body">{t.company}</span>
            </div>
          </div>

          {/* Quote */}
          <div>
            <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                👤
              </div>
              <div>
                <p className="font-semibold text-gray-900 font-body text-sm">{t.name}</p>
                <p className="text-gray-400 font-body text-xs tracking-wider">{t.title}</p>
              </div>
            </div>
            <button className="mt-6 border border-gray-900 text-gray-900 px-5 py-2 text-sm font-body rounded hover:bg-gray-900 hover:text-white transition-colors">
              Learn more
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-12">
          <button onClick={prev} className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
