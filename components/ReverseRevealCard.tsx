"use client";

import Grainient from "@/components/Grainient";
import ScrollReveal, { StaggerReveal, StaggerItem } from "@/components/ScrollReveal";

/* ─── Inner Visualizers ─────────────────────────────────────────── */

function ShieldVisual() {
  const spikePath = "M0 50 L30 50 L45 15 L60 10 L80 15 L100 40 L120 45 L160 45";
  const shieldLine = "M0 28 L160 28";

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col">
        <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold mb-2">LIVE TRAFFIC SPAN</span>
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
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
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
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] font-mono text-[11px] leading-[2.2] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-center">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-3 hover:bg-white/[0.05] transition-colors rounded px-2 -mx-2">
            <span className="text-zinc-200 font-bold tracking-wider">{l.type}</span>
            <span className="text-zinc-400 font-semibold">{l.msg}</span>
          </div>
        ))}
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        CRYPTOGRAPHIC LEDGER SECURE
      </span>
    </div>
  );
}

function MetricsVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-center gap-8 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500">
        <div className="flex flex-col">
          <span className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none mb-1">0.4ms</span>
          <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold">Latency p99</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl lg:text-4xl font-medium text-white tracking-tight leading-none mb-1">99.999%</span>
          <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-bold">Uptime Reliability</span>
        </div>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        RUNTIME OVERHEAD: EXTREMELY LOW
      </span>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-center">
        <div className="font-mono text-[10px] sm:text-[11px] leading-[1.8] text-zinc-400">
          <span className="text-[#b78a62]">import</span> {"{ "}Obsidia{" }"} <span className="text-[#b78a62]">from</span> <span className="text-zinc-200">"@obsidia/core"</span>;
          <br /><br />
          <span className="text-zinc-500">// Initialize edge protection</span><br />
          <span className="text-[#b78a62]">const</span> shield = <span className="text-[#b78a62]">new</span> <span className="text-white">Obsidia</span>({"{"}<br />
          &nbsp;&nbsp;env: <span className="text-zinc-200">"production"</span>,<br />
          &nbsp;&nbsp;strictMode: <span className="text-[#b78a62]">true</span>,<br />
          &nbsp;&nbsp;region: <span className="text-zinc-200">"global-edge"</span><br />
          {"}"});
        </div>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        DECLARATIVE CONFIGURATION
      </span>
    </div>
  );
}

function NodesVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex items-center justify-center">
        <svg viewBox="0 0 160 100" className="w-full h-full opacity-70">
          <path d="M20 50 L80 20 L140 50 L80 80 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M80 20 L80 80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="20" cy="50" r="4" fill="#b78a62" />
          <circle cx="80" cy="20" r="4" fill="#fff" />
          <circle cx="140" cy="50" r="4" fill="#b78a62" />
          <circle cx="80" cy="80" r="4" fill="#fff" />

          <circle cx="80" cy="50" r="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="80" cy="50" r="6" fill="#fff" />
        </svg>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        CROSS-ENVIRONMENT SYNCHRONIZATION
      </span>
    </div>
  );
}

function VaultVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col items-center justify-center gap-4">

        <div className="flex items-center gap-3 w-full bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          <div className="flex flex-col">
            <span className="text-[9px] text-zinc-500 uppercase font-mono">Primary Key</span>
            <span className="text-xs font-mono text-zinc-200">sk_live_...9f2a</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full bg-white/[0.02] rounded-xl p-4 border border-white/[0.02] opacity-50">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <div className="flex flex-col">
            <span className="text-[9px] text-zinc-500 uppercase font-mono">Rotating</span>
            <span className="text-xs font-mono text-zinc-400">sk_next_...4e1b</span>
          </div>
        </div>

      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        ZERO-TRUST KEY PROVISIONING
      </span>
    </div>
  );
}

function MapVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex items-center justify-center">
        <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
          <path d="M40 30 L80 20 L120 40 L160 30 L180 60 L140 80 L90 70 L50 80 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M80 20 L90 70 M120 40 L90 70 M40 30 L90 70 M160 30 L90 70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Nodes */}
          <circle cx="40" cy="30" r="3" fill="#fff" />
          <circle cx="80" cy="20" r="4" fill="#b78a62" />
          <circle cx="120" cy="40" r="3" fill="#fff" />
          <circle cx="160" cy="30" r="4" fill="#b78a62" />
          <circle cx="180" cy="60" r="3" fill="#fff" />
          <circle cx="140" cy="80" r="3" fill="#fff" />
          <circle cx="90" cy="70" r="5" fill="#fff" />
          <circle cx="50" cy="80" r="3" fill="#fff" />

          {/* Active Ping on main node */}
          <circle cx="90" cy="70" r="12" fill="none" stroke="#b78a62" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        EDGE RUNTIME DEPLOYMENT
      </span>
    </div>
  );
}

function SyncVisual() {
  const syncLines = [
    { region: "us-east-1", latency: "12ms", status: "SYNCED" },
    { region: "eu-west-2", latency: "24ms", status: "SYNCED" },
    { region: "ap-northeast-1", latency: "45ms", status: "SYNCED" },
    { region: "sa-east-1", latency: "38ms", status: "SYNCED" },
  ];
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] font-mono text-[11px] leading-[2.2] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-center">
        {syncLines.map((l, i) => (
          <div key={i} className="flex justify-between items-center hover:bg-white/[0.05] transition-colors rounded px-2 -mx-2">
            <span className="text-zinc-200 tracking-wider flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {l.region}
            </span>
            <div className="flex gap-4">
              <span className="text-zinc-500">{l.latency}</span>
              <span className="text-zinc-400 font-semibold">{l.status}</span>
            </div>
          </div>
        ))}
      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        GLOBAL STATE SYNCHRONIZATION
      </span>
    </div>
  );
}

function FaultVisual() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-1 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md rounded-3xl p-8 relative overflow-hidden min-h-[200px] hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-center gap-4">

        <div className="flex items-stretch gap-2 w-full h-12">
          <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5" />
            <span className="text-[10px] text-emerald-500 font-mono font-bold">NODE A</span>
          </div>
          <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
            <span className="text-[10px] text-emerald-500 font-mono font-bold">NODE B</span>
          </div>
        </div>

        <div className="flex items-stretch gap-2 w-full h-12">
          <div className="flex-1 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #f43f5e 4px, #f43f5e 8px)' }} />
            <span className="text-[10px] text-rose-500 font-mono font-bold relative z-10">FAULT C</span>
          </div>
          <div className="w-8 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center">
            <span className="text-[10px] text-emerald-500 font-mono font-bold">NODE D</span>
          </div>
        </div>

      </div>
      <span className="text-[10px] font-mono tracking-widest text-zinc-300 block text-center mt-4 uppercase font-bold">
        ISOLATED FAULT TOLERANCE
      </span>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export default function ReverseRevealCard() {
  return (
    <section className="relative z-30 w-full">
      <div className="relative w-full min-h-screen bg-[#0A0604] border border-[#2A2420] rounded-[32px] overflow-hidden group shadow-[0_-24px_60px_rgba(0,0,0,0.7)] flex flex-col justify-center p-8 md:p-14">

        {/* WebGL Animated Grainient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#675533ff"
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
            <ScrollReveal variant="scale" delay={0.05} duration={1.0}>
              <div className="flex items-start">
                <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-medium text-white tracking-tighter leading-none">
                  Capabilities.
                </h2>
                <ScrollReveal variant="fade" delay={0.3} duration={0.9}>
                  <span className="text-2xl md:text-4xl font-medium text-zinc-400 ml-4 mt-2 md:mt-6 tracking-tight">
                    (3)
                  </span>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* 01 Feature Block */}
          <div className="flex flex-col flex-1 justify-between">
            {/* Editorial Typography Layer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <ScrollReveal variant="slide" delay={0.05} yOffset={16}>
                  <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-5 block">
                    01 | SYSTEM VISIBILITY
                  </span>
                </ScrollReveal>
                <ScrollReveal variant="blur" delay={0.15} duration={0.9}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Telemetry at the speed of the edge.
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal variant="fade" delay={0.3} className="lg:col-span-5 lg:pt-11">
                <p className="font-medium text-zinc-300 text-lg md:text-xl leading-[1.7]">
                  Obsidia synthesizes immediate API shielding, immutable log streams, and ultra-low latency runtime metrics into a singular, high-fidelity control plane.
                </p>
              </ScrollReveal>
            </div>

            {/* Interactive Control Panel Layout */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24" baseDelay={0.35} staggerDelay={0.12}>
              <StaggerItem variant="scale"><ShieldVisual /></StaggerItem>
              <StaggerItem variant="scale"><LogVisual /></StaggerItem>
              <StaggerItem variant="scale"><MetricsVisual /></StaggerItem>
            </StaggerReveal>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/[0.05] my-24 lg:my-32" />

          {/* 02 Feature Block */}
          <div className="flex flex-col flex-1 justify-between pb-24">
            {/* Editorial Typography Layer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <ScrollReveal variant="slide" delay={0.05} yOffset={16}>
                  <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-5 block">
                    02 | DEVELOPER ENGINE
                  </span>
                </ScrollReveal>
                <ScrollReveal variant="blur" delay={0.15} duration={0.9}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Programmable infrastructure. From l ocal to edge.
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal variant="fade" delay={0.3} className="lg:col-span-5 lg:pt-11">
                <p className="font-medium text-zinc-300 text-lg md:text-xl leading-[1.7]">
                  Manage environments, provision encryption keys, and deploy automated edge policies directly from your terminal or unified schema manifests without workflow context switching.
                </p>
              </ScrollReveal>
            </div>

            {/* Interactive Control Panel Layout */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24" baseDelay={0.35} staggerDelay={0.12}>
              <StaggerItem variant="scale"><CodeVisual /></StaggerItem>
              <StaggerItem variant="scale"><NodesVisual /></StaggerItem>
              <StaggerItem variant="scale"><VaultVisual /></StaggerItem>
            </StaggerReveal>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/[0.05] my-24 lg:my-32" />

          {/* 03 Feature Block */}
          <div className="flex flex-col flex-1 justify-between pb-24">
            {/* Editorial Typography Layer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <ScrollReveal variant="slide" delay={0.05} yOffset={16}>
                  <span className="text-[11px] font-bold tracking-[0.3em] text-zinc-400 uppercase mb-5 block">
                    03 | GLOBAL EDGE
                  </span>
                </ScrollReveal>
                <ScrollReveal variant="blur" delay={0.15} duration={0.9}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                    Distributed execution. Zero cold starts.
                  </h2>
                </ScrollReveal>
              </div>
              <ScrollReveal variant="fade" delay={0.3} className="lg:col-span-5 lg:pt-11">
                <p className="font-medium text-zinc-300 text-lg md:text-xl leading-[1.7]">
                  Deploy routing logic and security rules across a multi-region substrate. Your system configurations are replicated globally in milliseconds, keeping compute physically close to your users.
                </p>
              </ScrollReveal>
            </div>

            {/* Interactive Control Panel Layout */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24" baseDelay={0.35} staggerDelay={0.12}>
              <StaggerItem variant="scale"><MapVisual /></StaggerItem>
              <StaggerItem variant="scale"><SyncVisual /></StaggerItem>
              <StaggerItem variant="scale"><FaultVisual /></StaggerItem>
            </StaggerReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
