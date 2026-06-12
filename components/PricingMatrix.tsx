"use client";

import React from "react";
import ScrollReveal, { StaggerReveal, StaggerItem } from "./ScrollReveal";

const CheckDash = ({ highlight = false }: { highlight?: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 mt-[3px] ${highlight ? 'text-[#b78a62]' : 'text-zinc-600'}`}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PricingMatrix() {
  return (
    <section className="w-full bg-[#0d0c0b] py-24 md:py-36 relative z-20 overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b78a62]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal variant="slide" yOffset={20} className="flex flex-col items-center text-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#b78a62] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
            Simple and scalable.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl">
            Choose the plan that fits your needs. Scale infinitely on our edge infrastructure when you're ready.
          </p>
        </ScrollReveal>

        <StaggerReveal baseDelay={0.2} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
          
          {/* Card 1: Hobby */}
          <StaggerItem variant="slide">
            <div className="w-full rounded-[32px] border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between min-h-[500px] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700/50 hover:bg-zinc-900/50 group">
              <div>
                <h3 className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors">Hobby</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-light text-white tracking-tight">$0</span>
                  <span className="text-sm text-zinc-500 font-light">/ forever</span>
                </div>
                <p className="text-sm text-zinc-400 font-light mt-4 leading-relaxed">
                  For builders, hackathons, and local development side projects.
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent my-8" />
                <ul className="space-y-4 text-sm text-zinc-400 font-light">
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
              <button className="w-full py-3.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all mt-10 text-center">
                Start Building
              </button>
            </div>
          </StaggerItem>

          {/* Card 2: Pro */}
          <StaggerItem variant="slide">
            <div className="w-full rounded-[32px] border border-[#b78a62]/30 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden shadow-2xl group transition-all duration-500 hover:-translate-y-1 hover:border-[#b78a62]/60 hover:shadow-[#b78a62]/10">
              
              {/* Animated Gradient Glow Inside Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b78a62]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-white">Pro</h3>
                  <span className="px-3 py-1 rounded-full bg-[#b78a62]/10 border border-[#b78a62]/20 text-[#b78a62] text-[10px] font-mono uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-light text-white tracking-tight">$29</span>
                  <span className="text-sm text-zinc-500 font-light">/ month + usage</span>
                </div>
                <p className="text-sm text-zinc-400 font-light mt-4 leading-relaxed">
                  For live production applications scaling globally at the network edge.
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#b78a62]/20 to-transparent my-8" />
                <ul className="space-y-4 text-sm text-zinc-300 font-light">
                  <li className="flex items-start gap-3">
                    <CheckDash highlight />
                    <span>Unlimited edge routing capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash highlight />
                    <span>Advanced DDoS mitigation & rate limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash highlight />
                    <span>30-day cryptographic vault ledger storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckDash highlight />
                    <span>Priority 24/7 SLA infrastructure support</span>
                  </li>
                </ul>
              </div>
              <button className="relative z-10 w-full py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 mt-10 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Launch Console
              </button>
            </div>
          </StaggerItem>

        </StaggerReveal>
      </div>
    </section>
  );
}
