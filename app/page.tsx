import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-[200vh] bg-[#0C1213] text-white">
      <Navbar />
      <div className="pt-32 px-8">
        <h1 className="text-5xl font-bold tracking-tight">Landing/Marketing Page</h1>
        <p className="mt-4 text-zinc-400">Scroll down to see the Navbar transition.</p>
      </div>
    </main>
  );
}
