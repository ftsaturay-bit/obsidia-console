import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

const FooterColumn = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-[#b78a62] font-mono text-[11px] uppercase tracking-[0.2em] font-bold">{title}</h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link 
            href={link.href}
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-[#b78a62]/20">
      {/* Subtle radial glow from the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#b78a62]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo2.png" alt="Obsidia Logo" className="w-8 h-8 object-contain" />
                <span className="text-xl font-medium tracking-tight text-white">Obsidia</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mb-8">
                Engineered for system clarity. The unified control plane for modern edge architecture and real-time observability.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:border-zinc-700 hover:scale-105"
                  aria-label="X (Twitter)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:border-zinc-700 hover:scale-105"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:border-zinc-700 hover:scale-105"
                  aria-label="Discord"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Links Columns */}
            <FooterColumn 
              title="Product" 
              links={[
                { label: 'Features', href: '#features' },
                { label: 'Integrations', href: '#developer-experience' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Changelog', href: '#' },
              ]} 
            />
            <FooterColumn 
              title="Resources" 
              links={[
                { label: 'Documentation', href: '#' },
                { label: 'API Reference', href: '#' },
                { label: 'Community', href: '#' },
                { label: 'Guides', href: '#' },
              ]} 
            />
            <FooterColumn 
              title="Company" 
              links={[
                { label: 'About', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Contact', href: '#' },
              ]} 
            />
            <FooterColumn 
              title="Legal" 
              links={[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
              ]} 
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />
          <div className="flex justify-center">
            <p className="text-sm font-light text-zinc-500">
              © {new Date().getFullYear()} Obsidia Inc. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
