"use client";

import React from "react";

interface RevealFooterProps {
  children: React.ReactNode;
}

export default function RevealFooter({ children }: RevealFooterProps) {
  return (
    <div className="relative z-20 w-full" style={{ marginTop: "-100vh" }}>
      <div className="sticky bottom-0 w-full">
        {children}
      </div>
      {/* Spacer equal to the negative margin to maintain scroll length */}
      <div className="w-full h-[100vh]" />
    </div>
  );
}
