"use client";

/* ─── Inner Visualizers ─────────────────────────────────────────── */

function MetricsStat({
  label,
  value,
  delta,
  up,
}: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] text-zinc-500 tracking-widest uppercase">{label}</span>
      <span className="text-lg font-semibold text-zinc-100">{value}</span>
      <span className={`text-[10px] ${up ? "text-emerald-400" : "text-red-400"}`}>{delta}</span>
    </div>
  );
}

function SparklineChart() {
  const pathA = "M0 38 C18 32,28 18,46 20 S78 28,98 16 S128 8,158 12";
  const pathB = "M0 28 C22 38,40 33,58 26 S88 18,118 23 S148 13,158 9";
  const pathC = "M0 48 C18 43,38 28,68 33 S108 26,138 18 S153 20,158 16";
  return (
    <svg viewBox="0 0 158 60" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[14, 28, 42].map((y) => (
        <line key={y} x1="0" y1={y} x2="158" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <path d={`${pathA} L158 60 L0 60 Z`} fill="url(#sparkFill)" />
      <path d={pathC} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <path d={pathB} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <path d={pathA} fill="none" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="128" cy="8" r="3" fill="#38bdf8" opacity="0.9" filter="url(#dotGlow)" />
    </svg>
  );
}

function ShieldGraph() {
  const total   = "M0 42 C14 38,24 32,40 28 S62 18,82 22 S112 16,140 10 S154 8,160 6";
  const blocked = "M0 52 C14 50,28 48,50 45 S82 46,102 42 S132 38,160 35";
  return (
    <svg viewBox="0 0 160 60" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="blockedFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b78a62" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#b78a62" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[15, 30, 45].map((y) => (
        <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      <path d={`${blocked} L160 60 L0 60 Z`} fill="url(#blockedFill)" />
      <path d={total}   fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <path d={blocked} fill="none" stroke="#b78a62" strokeWidth="1.5" />
    </svg>
  );
}

function LogStream() {
  const lines = [
    { ts: "03:22:41", level: "INFO",  msg: "Rate limit policy updated — /api/v1/ingest" },
    { ts: "03:22:38", level: "WARN",  msg: "API key rotated — key_prod_7x2k" },
    { ts: "03:22:35", level: "INFO",  msg: "Deployment hook received — sha:4a3f9c1" },
    { ts: "03:22:31", level: "ERROR", msg: "Upstream timeout — svc:neon-db — 504" },
    { ts: "03:22:27", level: "INFO",  msg: "Webhook delivered — target:slack — 200 OK" },
  ];
  const col: Record<string, string> = {
    INFO: "text-sky-400",
    WARN: "text-amber-400",
    ERROR: "text-red-400",
  };
  return (
    <div className="font-mono text-[10px] leading-relaxed space-y-1.5">
      {lines.map((l, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <span className="text-zinc-600 shrink-0">{l.ts}</span>
          <span className={`font-bold shrink-0 w-9 ${col[l.level]}`}>{l.level}</span>
          <span className="text-zinc-400 truncate">{l.msg}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */

export default function ReverseRevealCard() {
  return (
    /*
     * sticky top-0 + z-30: as the user scrolls, this section naturally
     * slides up from below and sits ON TOP of the integration section above,
     * covering it — no JavaScript or animation needed.
     */
    <section className="sticky top-0 z-30 w-full">
      <div className="w-full min-h-screen bg-zinc-950 border-t border-zinc-900 rounded-t-[32px] overflow-hidden group shadow-[0_-24px_60px_rgba(0,0,0,0.7)]">

        {/* Bronze ambient hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b78a62]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-14 min-h-screen">

          {/* Header */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500 uppercase mb-4 block">
              01 / Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-normal text-zinc-100 tracking-tight leading-tight max-w-xl">
              Complete structural authority over your system data.
            </h2>
          </div>

          {/* Visualizer Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

            {/* Left — Telemetry + Health */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 space-y-5">
                <div className="text-[10px] text-zinc-500 tracking-widest uppercase">Performance Telemetry</div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <MetricsStat label="Avg Latency" value="18ms"   delta="↓ 4ms"   up={true} />
                  <MetricsStat label="Req / sec"   value="4,821"  delta="↑ 12%"   up={true} />
                  <MetricsStat label="Error Rate"  value="0.04%"  delta="↓ 0.01%" up={true} />
                  <MetricsStat label="Uptime"      value="99.99%" delta="30d avg"  up={true} />
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 space-y-2">
                <div className="text-[10px] text-zinc-500 tracking-widest uppercase mb-3">Service Health</div>
                {["API Gateway", "Neon DB", "Upstash", "Vercel Edge"].map((name) => (
                  <div key={name} className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">{name}</span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Healthy
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Charts */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex flex-col min-h-[130px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-zinc-500 tracking-widest uppercase">Request Volume — 24h</span>
                  <span className="text-[10px] text-sky-400 font-mono">4,821 req/s</span>
                </div>
                <div className="flex-1 min-h-[70px]"><SparklineChart /></div>
              </div>
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex flex-col min-h-[130px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-zinc-500 tracking-widest uppercase">API Shield Activity</span>
                  <div className="flex items-center gap-3 text-[10px] text-zinc-600">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-0.5 bg-white/20 inline-block rounded" />Total
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-0.5 bg-[#b78a62] inline-block rounded" />Blocked
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-h-[70px]"><ShieldGraph /></div>
              </div>
            </div>

            {/* Right — Audit Log */}
            <div className="md:col-span-3">
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden flex flex-col min-h-[290px]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02] shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-[10px] text-zinc-600 font-mono tracking-wider">audit.log</span>
                  <span className="ml-auto flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />live
                  </span>
                </div>
                <div className="flex-1 p-4 overflow-hidden">
                  <LogStream />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
