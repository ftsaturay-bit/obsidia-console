import Navbar from "@/components/Navbar";
import Beams from "@/components/Beams";

export default function Page() {
  return (
    <main className="min-h-[200vh] bg-[#0C1213] text-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden">
        {/* Beams Background */}
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#0c151a"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Landing/Marketing Page
          </h1>
          <p className="mt-4 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Scroll down to see the Navbar transition.
          </p>
        </div>
      </section>
    </main>
  );
}
