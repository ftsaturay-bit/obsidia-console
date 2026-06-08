"use client";

import Grainient from "@/components/Grainient";

/* ─── Inner Visualizers ─────────────────────────────────────────── */

function ShieldVisual() {
  const spikePath = "M0 50 L30 50 L45 15 L60 10 L80 15 L100 40 L120 45 L160 45";
  const shieldLine = "M0 28 L160 28";

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden min-h-[180px] group-hover:bg-white/[0.05] transition-colors duration-500">
        <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">LIVE TRAFFIC SPAN</span>
        <svg viewBox="0 0 160 60" className="w-full h-full mt-4" preserveAspectRatio="none">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${shieldLine} L160 60 L0 60 Z`} fill="url(#shieldGrad)" />
          <path d={spikePath} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <path d={shieldLine} fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
          <text x="156" y="22" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace" textAnchor="end" letterSpacing="0.05em" fontWeight="bold">SHIELD ACTIVE</text>
        </svg>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block mt-4 uppercase font-bold">
        INCOMING ATTACKS BLOCKING: 100%
      </span>
    </div>
  );
}

function LogVisual() {
  const lines = [
    { type: "[MUTATION]", msg: "DB_ROUTE_BYPASS" },
    { type: "[SHIELD]", msg: "REQ_THROTTLE_429" },
    { type: "[SYSTEM]", msg: "MEM_ALLOC_OPT" },
    { type: "[MUTATION]", msg: "AUTH_TOKEN_REVOKE" },
    { type: "[SHIELD]", msg: "IP_BLOCK_192.168.1.1" },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden min-h-[180px] font-mono text-[11px] leading-[2.2]">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-3 hover:bg-white/[0.05] transition-colors rounded px-2 -mx-2">
            <span className="text-zinc-200 font-bold tracking-wider">{l.type}</span>
            <span className="text-zinc-400 font-semibold">{l.msg}</span>
          </div>
        ))}
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block mt-4 uppercase font-bold">
        CRYPTOGRAPHIC LEDGER SECURE
      </span>
    </div>
  );
}

function MetricsVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden min-h-[180px] flex flex-col justify-center gap-6">
        <div className="flex flex-col">
          <span className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none mb-1">0.4ms</span>
          <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold">Latency p99</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none mb-1">99.999%</span>
          <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold">Uptime Reliability</span>
        </div>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block mt-4 uppercase font-bold">
        RUNTIME OVERHEAD: EXTREMELY LOW
      </span>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export default function ReverseRevealCard() {
  return (
    <section className="sticky top-0 z-30 w-full">
      <div className="relative w-full min-h-screen bg-[#0A0604] border-t border-[#2A2420] rounded-t-[32px] overflow-hidden group shadow-[0_-24px_60px_rgba(0,0,0,0.7)] flex flex-col justify-center p-8 md:p-14">

        {/* WebGL Animated Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#866d40ff"
            color2="#5f5340ff"
            color3="#34240bff"
            timeSpeed={0.15}
            warpStrength={1.5}
            warpFrequency={4.0}
            warpAmplitude={60.0}
            grainAmount={0.06}
          />
        </div>

        {/* Bronze ambient hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b78a62]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col flex-1 py-12 px-4 md:px-0">

          {/* Top Level Section Header - Fabrica Style */}
          <div className="relative flex items-center justify-center border-b border-white/[0.1] pb-16 mb-16 lg:mb-24 pt-8">

            {/* Massive Centered Title */}
            <div className="flex items-start">
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-medium text-white tracking-tighter leading-none">
                Capabilities.
              </h2>
              <span className="text-2xl md:text-4xl font-medium text-zinc-400 ml-4 mt-2 md:mt-6 tracking-tight">
                (3)
              </span>
            </div>

          </div>

          {/* 01 Feature Block */}
          <div className="flex flex-col flex-1 justify-between">
            {/* Editorial Typography Layer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-5 block">
                  01 / SYSTEM VISIBILITY
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                  Telemetry at the speed of the edge.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-11">
                <p className="font-medium text-zinc-300 text-lg md:text-xl leading-[1.7]">
                  Obsidia synthesizes immediate API shielding, immutable log streams, and ultra-low latency runtime metrics into a singular, high-fidelity control plane.
                </p>
              </div>
            </div>

            {/* Interactive Control Panel Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24">
              <ShieldVisual />
              <LogVisual />
              <MetricsVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
