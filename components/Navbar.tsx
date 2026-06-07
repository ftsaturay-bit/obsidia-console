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
    // Fixed wrapper — no horizontal padding here; the inner container handles gutters
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center w-full pointer-events-none pt-2">
      <motion.nav
        initial={false}
        animate={{
          y: isScrolled ? 16 : 0,
          width: "100%",
          maxWidth: isScrolled ? "64rem" : "100%", // 64rem = max-w-5xl when scrolled
          backgroundColor: isScrolled ? "rgba(17, 26, 27, 0.75)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(14px)" : "blur(0px)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0)",
          borderWidth: isScrolled ? "1px" : "0px",
          borderStyle: "solid",
          borderRadius: isScrolled ? "9999px" : "0px",
          boxShadow: isScrolled
            ? "0 20px 40px -8px rgba(0, 0, 0, 0.4)"
            : "none",
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="h-20 pointer-events-auto overflow-hidden"
      >
        {/* Inner container: constrains content to max-w-7xl on full-width, fills pill when scrolled */}
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-8 md:px-12">
          {/* Left: Logo + Brand Name */}
          <div className="flex items-center gap-2">
            <Image src="/logo1.png" alt="Obsidia Logo" width={24} height={32} className="w-auto h-7 object-contain drop-shadow-md" />
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
            <button className="bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-zinc-200/20 font-semibold tracking-wide">
              Start your project
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
