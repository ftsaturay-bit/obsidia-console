"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

// Matches preloader duration (2200ms delay + 800ms exit) + small buffer
const PRELOADER_DURATION_MS = 3200;

type RevealVariant = "slide" | "fade" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  className?: string;
  once?: boolean;
  variant?: RevealVariant;
}

const buildVariants = (
  variant: RevealVariant,
  yOffset: number,
  xOffset: number
): Variants => {
  const base = { opacity: 0 };
  const shown = { opacity: 1 };

  switch (variant) {
    case "fade":
      return {
        hidden: { ...base },
        visible: { ...shown },
      };
    case "scale":
      return {
        hidden: { ...base, scale: 0.92, y: yOffset * 0.5 },
        visible: { ...shown, scale: 1, y: 0 },
      };
    case "blur":
      return {
        hidden: { ...base, filter: "blur(12px)", y: yOffset * 0.6 },
        visible: { ...shown, filter: "blur(0px)", y: 0 },
      };
    case "slide":
    default:
      return {
        hidden: { ...base, y: yOffset, x: xOffset },
        visible: { ...shown, y: 0, x: 0 },
      };
  }
};

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 28,
  xOffset = 0,
  className = "",
  once = true,
  variant = "slide",
}: ScrollRevealProps) {
  // Don't enable viewport tracking until after the preloader has fully exited
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), PRELOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  const variants = buildVariants(variant, yOffset, xOffset);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      // While not ready, stay hidden; once ready, whileInView takes over
      animate={ready ? undefined : "hidden"}
      whileInView={ready ? "visible" : undefined}
      viewport={ready ? { once, margin: "-8%" } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out — premium spring feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger Container ─────────────────────────────────────────── */

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  baseDelay = 0,
}: StaggerRevealProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), PRELOADER_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={ready ? undefined : "hidden"}
      whileInView={ready ? "visible" : undefined}
      viewport={ready ? { once: true, margin: "-8%" } : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: baseDelay,
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger Item ──────────────────────────────────────────────── */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  yOffset?: number;
}

export function StaggerItem({
  children,
  className = "",
  variant = "slide",
  yOffset = 24,
}: StaggerItemProps) {
  const variants = buildVariants(variant, yOffset, 0);

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
