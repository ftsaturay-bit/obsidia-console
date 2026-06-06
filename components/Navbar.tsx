"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Actively listen to the window's scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    // Fixed wrapper to anchor the nav safely while allowing pointer events to pass through empty space
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center w-full pointer-events-none px-4">
      <motion.nav
        initial={false}
        animate={{
          // y: 16 equates to top-4 (1rem)
          y: isScrolled ? 16 : 0,
          width: "100%",
          maxWidth: isScrolled ? "56rem" : "100%", // 56rem is Tailwind's max-w-4xl
          backgroundColor: isScrolled ? "rgba(17, 26, 27, 0.7)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderColor: isScrolled ? "rgba(182, 139, 122, 0.3)" : "rgba(0, 0, 0, 0)",
          borderWidth: isScrolled ? "1px" : "0px",
          borderStyle: "solid",
          borderRadius: isScrolled ? "9999px" : "0px",
          boxShadow: isScrolled 
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" // shadow-xl
            : "none",
        }}
        // Use an elegant organic transition matching the Dreelio morph feel
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} 
        className="flex items-center justify-between px-6 md:px-8 h-16 pointer-events-auto"
      >
        {/* Left: Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Obsidia Logo" width={24} height={32} className="w-auto h-7 object-contain drop-shadow-md" />
          <span className="font-semibold text-white tracking-tight text-lg">obsidia</span>
        </div>

        {/* Center: Horizontal Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/signin" className="hidden sm:block text-zinc-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <button className="bg-gradient-to-b from-[#C69A89] to-[#A66E5B] text-zinc-950 px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#C69A89]/20 font-semibold tracking-wide">
            Start your project
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
