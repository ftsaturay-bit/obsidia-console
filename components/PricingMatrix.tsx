"use client";

import React from "react";
import ScrollReveal, { StaggerReveal, StaggerItem } from "./ScrollReveal";

const CheckDash = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-zinc-600 shrink-0 mt-[2px]"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function PricingMatrix() {
  return (
    <section className="w-full bg-[#0d0c0b] py-24 md:py-36 relative z-20">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal variant="slide" yOffset={20} className="flex flex-col items-center text-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
            Simple and scalable.
          </h2>
        </ScrollReveal>

        <StaggerReveal baseDelay={0.2} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
          
          {/* Card 1: Hobby */}
          <StaggerItem variant="slide">
            <div className="w-full rounded-[24px] border border-zinc-900 bg-zinc-950/20 p-8 flex flex-col justify-between min-h-[450px]">
              <div>
                <h3 className="text-sm font-medium text-zinc-400">Hobby</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-normal text-zinc-100 tracking-tight">$0</span>
                  <span className="text-xs text-zinc-600">/ forever</span>
                </div>
                <p className="text-xs text-zinc-500 font-light mt-4 leading-relaxed">
                  For builders, hackathons, and local development side projects.
                </p>
                <ul className="space-y-3 mt-8 text-xs text-zinc-400 font-light">
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>50,000 monthly request limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>Essential edge traffic shielding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>3-day immutable log retention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>Community support vectors</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-3 rounded-full border border-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-900/50 hover:border-zinc-700 transition-colors mt-8 text-center">
                Start Building
              </button>
            </div>
          </StaggerItem>

          {/* Card 2: Pro */}
          <StaggerItem variant="slide">
            <div className="w-full rounded-[24px] border border-zinc-900 bg-zinc-950/60 p-8 flex flex-col justify-between min-h-[450px] relative overflow-hidden shadow-2xl group transition-all duration-500 hover:border-[#b78a62]/30">
              {/* Subtle Bronze Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b78a62]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-sm font-medium text-zinc-200">Pro</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-normal text-zinc-100 tracking-tight">$29</span>
                  <span className="text-xs text-zinc-600">/ month + usage</span>
                </div>
                <p className="text-xs text-zinc-500 font-light mt-4 leading-relaxed">
                  For live production applications scaling globally at the network edge.
                </p>
                <ul className="space-y-3 mt-8 text-xs text-zinc-300 font-light">
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>Unlimited edge routing capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>Advanced DDoS mitigation & rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>30-day cryptographic vault ledger storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash />
                    <span>Priority 24/7 SLA infrastructure support</span>
                  </li>
                </ul>
              </div>
              <button className="relative z-10 w-full py-3 rounded-full bg-zinc-100 text-black text-xs font-medium hover:bg-zinc-200 transition-colors mt-8 text-center shadow-lg">
                Launch Console
              </button>
            </div>
          </StaggerItem>

        </StaggerReveal>
      </div>
    </section>
  );
}
