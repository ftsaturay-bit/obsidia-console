"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  {
    id: 'nextjs',
    label: 'Next.js',
    code: `// middleware.ts
import { withObsidia } from '@obsidia/sdk/next';

export default withObsidia({
  projectId: process.env.OBSIDIA_PROJECT_ID,
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};`
  },
  {
    id: 'express',
    label: 'Express',
    code: `import express from 'express';
import { obsidia } from '@obsidia/sdk/express';

const app = express();

app.use(obsidia({ 
  projectId: process.env.OBSIDIA_PROJECT_ID 
}));

app.listen(3000);`
  },
  {
    id: 'hono',
    label: 'Hono',
    code: `import { Hono } from 'hono';
import { obsidia } from '@obsidia/sdk/hono';

const app = new Hono();

app.use('*', obsidia({ 
  projectId: process.env.OBSIDIA_PROJECT_ID 
}));

export default app;`
  }
];

export default function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeContent = TABS.find((t) => t.id === activeTab)?.code || "";

  return (
    <section className="w-full min-h-screen flex flex-col justify-center border-t border-zinc-900/60 bg-gradient-to-b from-zinc-950/20 to-black py-24 md:py-36 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* THE NEW DISTINCT CATEGORY HEADER */}
        <div className="mb-12 text-left">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase">
            Developer Experience
          </span>
        </div>

        {/* THE SPLIT TERMINAL INTERFACE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT: THE NARRATIVE */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-normal text-zinc-100 tracking-tight leading-tight mb-4">
              Up in seconds. Lives at the edge.
            </h3>
            <p className="font-light text-sm text-zinc-500 leading-relaxed max-w-md">
              Obsidia injects directly into your application runtime middleware. No databases to provision, no heavy daemons to install. Drop our lightweight wrapper into your edge routes and gain instant structural authority.
            </p>
          </div>

          {/* RIGHT: THE TERMINAL COMPONENT */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 overflow-hidden shadow-2xl flex flex-col">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-4">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs font-mono transition-colors duration-200 ${
                      activeTab === tab.id ? 'text-zinc-200' : 'text-zinc-600 hover:text-zinc-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 relative bg-[#0d0c0a] min-h-[260px] overflow-x-auto flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="font-mono text-sm leading-relaxed whitespace-pre text-zinc-300"
                >
                  <CodeHighlight code={activeContent} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CodeHighlight({ code }: { code: string }) {
  const styledCode = code.split('\n').map((line, i) => {
    const keywords = ['import', 'export', 'default', 'const', 'from', 'new'];
    let highlightedLine = line;

    if (highlightedLine.trim().startsWith('//')) {
      return <div key={i} className="text-zinc-600">{highlightedLine || ' '}</div>;
    }

    const parts = highlightedLine.split(/(\s+|[{}()',;])/g);
    
    return (
      <div key={i}>
        {parts.map((part, j) => {
          if (keywords.includes(part)) {
            return <span key={j} className="text-[#c6a0f6]">{part}</span>;
          } else if (part.startsWith("'") || part.startsWith('"') || part === "'") {
             return <span key={j} className="text-[#a6da95]">{part}</span>;
          } else if (part === 'withObsidia' || part === 'obsidia' || part === 'Hono' || part === 'express') {
            return <span key={j} className="text-[#8aadf4]">{part}</span>;
          } else {
            return <span key={j}>{part}</span>;
          }
        })}
      </div>
    );
  });

  return <>{styledCode}</>;
}
