"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface OrbitProps {
  images: string[];
  altPrefix?: string;
  // Single orbital radius — vertical axis is compressed by 0.45 for perspective tilt
  radius?: number;
  // Seconds for one complete revolution
  duration?: number;
  itemSize?: number;
  centerContent?: ReactNode;
  className?: string;
}

export default function Orbit({
  images = [],
  altPrefix = 'Orbiting logo',
  radius = 220,
  duration = 30,
  itemSize = 56,
  centerContent,
  className = '',
}: OrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Individual refs for each satellite — updated directly via DOM to avoid 60fps re-renders
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const count = images.length;
    if (count === 0) return;

    // Angular velocity: one full rotation per `duration` seconds
    const angularSpeed = (Math.PI * 2) / duration;

    const loop = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Advance the global orbit angle by elapsed time
      angleRef.current += angularSpeed * delta;

      for (let i = 0; i < count; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        // Each satellite is evenly spaced around the circle
        const angle = angleRef.current + (i / count) * Math.PI * 2;

        // Horizontal: full radius. Vertical: compressed 0.45x for perspective tilt.
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.45;

        const sinAngle = Math.sin(angle);

        // Normalize sinAngle [-1, 1] → t [0, 1] with smoothstep for S-curve easing
        const tLinear = (sinAngle + 1) / 2;
        const t = tLinear * tLinear * (3 - 2 * tLinear);

        // No scale variation — all logos stay the same size
        // Only opacity and z-index convey depth
        const opacity = 0.35 + t * 0.65;          // 0.35 (back) → 1.00 (front)
        const zIndex  = Math.round(10 + t * 20);  // 10  (back) → 30  (front)

        el.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0)`;
        el.style.zIndex    = String(zIndex);
        el.style.opacity   = opacity.toFixed(4);
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = null;
    };
  }, [images.length, radius, duration]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center w-full h-full ${className}`}
    >
      {/* Central Obsidia element — z-index 20 sits between back (10) and front (30) satellites */}
      {centerContent && (
        <div className="absolute" style={{ zIndex: 20 }}>
          {centerContent}
        </div>
      )}

      {images.map((src, i) => (
        <div
          key={src}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="absolute"
          style={{
            // Initial position: stacked at center until first rAF tick
            top: '50%',
            left: '50%',
            width: itemSize,
            height: itemSize,
            willChange: 'transform, opacity',
          }}
        >
          <img
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            draggable={false}
            className="w-full h-full object-contain select-none"
          />
        </div>
      ))}
    </div>
  );
}
