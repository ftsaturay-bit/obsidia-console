import Navbar from "@/components/Navbar";
import Beams from "@/components/Beams";

export default function Page() {
  return (
    <main className="min-h-[200vh] bg-[#0C1213] text-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Beams Background */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={2}
            beamHeight={20}
            beamNumber={10}
            lightColor="#d6c7a3"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-40 pb-24 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 leading-[1.15]">
            Infrastructure tracking. Engineered for precision.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mt-6 leading-relaxed">
            A developer-first control plane for high-throughput system audit logging, metrics tracking, and secure API shielding.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <button className="bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 px-6 py-3 rounded-full font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-zinc-200/20">
              Start your project
            </button>
            <button className="px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-800 transition-colors text-white font-medium">
              Read the Docs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
