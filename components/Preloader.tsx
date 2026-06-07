"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.2 seconds total delay before triggering the exit animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const brandName = "obsidia®";
  const characters = brandName.split("");

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0908]"
        >
          <div className="flex overflow-hidden font-sans text-3xl md:text-5xl font-medium tracking-tight text-white">
            {characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: index * 0.06,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
