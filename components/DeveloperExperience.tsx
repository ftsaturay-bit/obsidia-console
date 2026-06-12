"use client";

import React, { useState, useEffect } from 'react';
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
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById('devexp-trigger');
    if (!trigger) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
      }
    }, { threshold: 0.15 });

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate={isRevealed ? "visible" : "hidden"}
      className="w-full flex flex-col justify-center border-t border-zinc-900/60 bg-transparent py-24 md:py-36 relative z-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* THE SPLIT TERMINAL INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: THE NARRATIVE */}
          <motion.div 
            variants={slideVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-left flex flex-col justify-center"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-400 uppercase mb-4 block">
              Developer Experience
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Up in seconds.</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500">Lives at the edge.</span>
            </h3>
            <p className="font-medium text-base md:text-lg text-zinc-400 leading-[1.7] max-w-lg">
              Obsidia injects directly into your application runtime middleware. No databases to provision, no heavy daemons to install. Drop our lightweight wrapper into your edge routes and gain instant structural authority.
            </p>
          </motion.div>

          {/* RIGHT: THE TERMINAL COMPONENT */}
          <motion.div 
            variants={fadeVariants}
            initial="hidden"
            animate={isRevealed ? "visible" : "hidden"}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#b78a62]/20 via-amber-500/10 to-transparent rounded-[24px] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />
            
            <div className="relative rounded-2xl border border-zinc-800/60 bg-[#0A0908]/90 backdrop-blur-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)] flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_4px_rgba(239,68,68,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_4px_rgba(234,179,8,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
                </div>
                <div className="flex items-center gap-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-3 py-1.5 text-[11px] font-mono transition-all duration-200 rounded-md tracking-wide ${activeTab === tab.id
                        ? 'text-zinc-100 bg-white/10 font-medium'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 relative bg-[#050505] min-h-[320px] overflow-x-auto flex items-start hide-scrollbar">
                <style dangerouslySetInnerHTML={{
                  __html: `
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                  .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}} />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, filter: 'blur(4px)', y: 5 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    exit={{ opacity: 0, filter: 'blur(4px)', y: -5 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="font-mono text-[13px] w-full"
                  >
                    <CodeHighlight code={activeContent} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

function CodeHighlight({ code }: { code: string }) {
  const lines = code.split('\n');

  return (
    <div className="flex flex-col w-full">
      {lines.map((line, i) => {
        const keywords = ['import', 'export', 'default', 'const', 'from', 'new'];
        let content;

        if (line.trim().startsWith('//')) {
          content = <span className="text-zinc-500/80 italic">{line || ' '}</span>;
        } else {
          const parts = line.split(/(\s+|[{}()',;])/g);
          content = parts.map((part, j) => {
            if (keywords.includes(part)) {
              return <span key={j} className="text-[#c6a0f6]">{part}</span>;
            } else if (part.startsWith("'") || part.startsWith('"') || part === "'") {
              return <span key={j} className="text-[#a6da95]">{part}</span>;
            } else if (part === 'withObsidia' || part === 'obsidia' || part === 'Hono' || part === 'express') {
              return <span key={j} className="text-[#8aadf4] font-medium">{part}</span>;
            } else {
              return <span key={j} className="text-zinc-300">{part}</span>;
            }
          });
        }

        return (
          <div key={i} className="flex leading-[1.8] group/line hover:bg-white/[0.03] -mx-6 px-6 transition-colors duration-150">
            <span className="w-8 shrink-0 text-zinc-700/50 select-none text-right pr-4 border-r border-zinc-800/60 mr-4 tabular-nums group-hover/line:text-zinc-500 transition-colors duration-150">
              {i + 1}
            </span>
            <span className="flex-1 whitespace-pre">
              {content}
            </span>
          </div>
        );
      })}
    </div>
  );
}
