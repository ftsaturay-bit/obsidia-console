import Navbar from "@/components/Navbar";
import Beams from "@/components/Beams";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

export default function Page() {
  return (
    <main className="min-h-[200vh] bg-[#0A0908] text-white relative">
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
          {/* Bottom fade gradient to seamlessly transition into the rest of the page */}
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/80 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto pt-40 pb-24 px-6">
          {/* Sequence typography animations to follow ambient background load */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] flex flex-col items-center gap-1 md:gap-2">
            <SplitText
              text="Engineered for system clarity."
              className="text-zinc-100"
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0, delay: 2.4 }}
              tag="span"
              textAlign="center"
            />
            <SplitText
              text="Observed in real time."
              className="[&_.split-char]:bg-clip-text [&_.split-char]:text-transparent [&_.split-char]:bg-gradient-to-b [&_.split-char]:from-zinc-100 [&_.split-char]:via-zinc-300 [&_.split-char]:to-zinc-500"
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="words, chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0, delay: 2.8 }}
              tag="span"
              textAlign="center"
            />
          </h1>
          <BlurText
            text="Obsidia streamlines your infrastructure tracking. Monitor system metrics, stream audit logs, and shield your core APIs in a beautifully integrated control plane designed for modern development teams."
            className="text-zinc-400 text-sm md:text-base max-w-xl mt-6 leading-relaxed"
            delay={30}
            animateBy="words"
            direction="bottom"
            initialDelay={3.2}
          />

          <div className="flex items-center gap-4 mt-10">
            <button className="relative overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg shadow-zinc-200/20 group">
              {/* Implement sliding text reveal effect using absolute positioning and hover state translations */}
              <span className="relative block overflow-hidden">
                <span className="block transition-all duration-300 transform ease-out group-hover:-translate-y-full group-hover:opacity-0">
                  Launch Console
                </span>
                <span className="absolute inset-0 block transition-all duration-300 transform ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Launch Console
                </span>
              </span>
            </button>
            <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-white font-medium">
              Read the Docs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
