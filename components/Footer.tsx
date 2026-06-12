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
                {/* Social Icons Placeholder */}
                {['Twitter', 'GitHub', 'Discord'].map((platform) => (
                  <Link 
                    key={platform} 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300 hover:border-zinc-700 hover:scale-105"
                    aria-label={platform}
                  >
                    <span className="text-xs font-mono">{platform[0]}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <FooterColumn 
              title="Product" 
              links={[
                { label: 'Features', href: '#' },
                { label: 'Integrations', href: '#' },
                { label: 'Pricing', href: '#' },
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-light text-zinc-500">
              © {new Date().getFullYear()} Obsidia Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400">All systems operational</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
