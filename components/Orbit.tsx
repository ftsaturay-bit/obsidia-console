"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface OrbitItemData {
  src: string;
  name: string;
}

interface OrbitProps {
  items: OrbitItemData[];
  // Single orbital radius — vertical axis is compressed by 0.45 for perspective tilt
  radius?: number;
  // Seconds for one complete revolution
  duration?: number;
  itemSize?: number;
  centerContent?: ReactNode;
  className?: string;
}

export default function Orbit({
  items = [],
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

  // Use a ref to pause the loop immediately without waiting for a React re-render
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const count = items.length;
    if (count === 0) return;

    // Angular velocity: one full rotation per `duration` seconds
    const angularSpeed = (Math.PI * 2) / duration;

    const loop = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      // Only advance the orbit angle if we are not hovering over any logo
      if (!isHoveredRef.current) {
        angleRef.current += angularSpeed * delta;
      }

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

        // No scale variation — all logos stay the same base size.
        // Hover enlargement is handled purely by CSS on the inner wrapper.
        const opacity = 0.35 + t * 0.65;          // 0.35 (back) → 1.00 (front)

        // When hovered, the CSS `z-index` takes over via Tailwind classes.
        // We set the baseline `z-index` here so it correctly layers during orbit.
        const zIndex = Math.round(10 + t * 20);  // 10  (back) → 30  (front)

        el.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0)`;
        el.style.zIndex = String(zIndex);
        el.style.opacity = opacity.toFixed(4);
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = null;
    };
  }, [items.length, radius, duration]);

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

      {items.map((item, i) => (
        <div
          key={item.name}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="absolute group hover:!z-[50] hover:!opacity-100 cursor-pointer"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          style={{
            // Initial position: stacked at center until first rAF tick
            top: '50%',
            left: '50%',
            width: itemSize,
            height: itemSize,
            willChange: 'transform, opacity, z-index',
          }}
        >
          {/* Tooltip Popup */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none px-2.5 py-1 bg-zinc-800 text-white text-[11px] font-medium rounded-md shadow-xl whitespace-nowrap z-50">
            {item.name}
            {/* Tooltip triangle indicator */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-zinc-800" />
          </div>

          {/* Logo container handles the hover scale so the rAF transform isn't interrupted */}
          <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-120">
            <img
              src={item.src}
              alt={item.name}
              draggable={false}
              className="w-full h-full object-contain select-none"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
