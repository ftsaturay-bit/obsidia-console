import Navbar from "@/components/Navbar";
import Beams from "@/components/Beams";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import Orbit from "@/components/Orbit";
import FadeIn from "@/components/FadeIn";
import ScrollReveal from "@/components/ScrollReveal";
import ReverseRevealCard from "@/components/ReverseRevealCard";
import DeveloperExperience from "@/components/DeveloperExperience";
import PricingMatrix from "@/components/PricingMatrix";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d0c0b] text-white relative">
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
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#0d0c0b] via-[#0d0c0b]/80 to-transparent pointer-events-none" />
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
            className="text-zinc-400 text-base max-w-xl mt-6 leading-relaxed"
            delay={30}
            animateBy="words"
            direction="bottom"
            initialDelay={3.2}
          />

          <FadeIn delay={3.6} className="flex items-center gap-4 mt-10">
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
          </FadeIn>
        </div>
      </section>

      {/* PERFECT REVEAL GRID */}
      <div className="grid w-full">

        {/* BACKGROUND REVEAL LAYER */}
        <div className="[grid-area:1/1] relative w-full z-0 flex flex-col justify-end">
          <div className="sticky bottom-0 w-full">
            <DeveloperExperience />
          </div>
        </div>

        {/* FOREGROUND COVER LAYER */}
        <div className="[grid-area:1/1] relative w-full z-10 flex flex-col pointer-events-none">
          {/* Opaque content that covers the background layer */}
          <div className="relative w-full bg-[#0d0c0b] pointer-events-auto">
            {/* Stack Section — Two-Column Grid */}
            <section className="relative bg-[#0d0c0b] sticky top-0 z-10 min-h-screen flex items-center">
              <div className="w-full max-w-7xl mx-auto px-8 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                {/* Left Content Column */}
                <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Minimal Eyebrow Label */}
                  <ScrollReveal variant="slide" delay={0.05} yOffset={14}>
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-400 uppercase mb-6 block">
                      Built for Modern Stack
                    </span>
                  </ScrollReveal>

                  {/* Striking Headline */}
                  <ScrollReveal variant="blur" delay={0.15} duration={0.9}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                      <span className="text-white">Plugs seamlessly into</span><br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500">your architecture.</span>
                    </h2>
                  </ScrollReveal>

                  {/* Editorial Body Copy with Glassmorphism Badges */}
                  <ScrollReveal variant="fade" delay={0.3}>
                    <p className="text-base text-zinc-400 leading-[1.7] max-w-lg mx-auto lg:mx-0">
                      Engineered to sit directly between your{" "}
                      <span className="text-zinc-200 font-medium px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 mx-0.5 whitespace-nowrap">client-side runtimes</span>
                      {" "}and backend{" "}
                      <span className="text-zinc-200 font-medium px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 mx-0.5 whitespace-nowrap">data layers</span>
                      . Obsidia acts as a unified{" "}
                      <span className="text-zinc-200 font-medium px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 mx-0.5 whitespace-nowrap">control plane</span>
                      , executing immediate{" "}
                      <span className="text-zinc-200 font-medium px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 mx-0.5 whitespace-nowrap">API shielding</span>
                      {" "}and continuous system tracking without touching your core business logic.
                    </p>
                  </ScrollReveal>
                </div>

                {/* Right Orbit Column */}
                <ScrollReveal variant="fade" delay={0.5} xOffset={40} yOffset={0} className="lg:col-span-6 flex items-center justify-center h-[340px] sm:h-[420px] md:h-[500px]">
                  <div className="scale-[0.65] sm:scale-75 md:scale-100 flex items-center justify-center w-full h-full">
                    <Orbit
                      items={[
                        { src: "https://cdn.simpleicons.org/nextdotjs/ffffff", name: "Next.js" },
                        { src: "https://cdn.simpleicons.org/typescript/ffffff", name: "TypeScript" },
                        { src: "https://cdn.simpleicons.org/supabase/ffffff", name: "Supabase" },
                        { src: "https://cdn.simpleicons.org/neon/ffffff", name: "Neon" },
                        { src: "https://cdn.simpleicons.org/upstash/ffffff", name: "Upstash" },
                        { src: "https://cdn.simpleicons.org/resend/ffffff", name: "Resend" },
                        { src: "https://cdn.simpleicons.org/vercel/ffffff", name: "Vercel" },
                        { src: "https://cdn.simpleicons.org/docker/ffffff", name: "Docker" },
                      ]}
                      radius={170}
                      duration={28}
                      itemSize={52}
                      className="w-full h-full"
                      centerContent={
                        <img
                          src="/logo2.png"
                          alt="Obsidia Logo"
                          className="w-64 h-64 md:w-80 md:h-80 object-contain select-none"
                          draggable={false}
                        />
                      }
                    />
                  </div>
                </ScrollReveal>

              </div>
            </section>

            {/* Expanding Card — Features Reveal */}
            <ReverseRevealCard />
          </div>

          {/* Transparent spacer matches DeveloperExperience's min-h-screen to allow it to be fully revealed */}
          <div id="reveal-spacer" className="w-full h-screen pointer-events-none" />
        </div>
      </div>

      {/* PRICING SECTION COMPONENT */}
      <PricingMatrix />
    </main>
  );
}
