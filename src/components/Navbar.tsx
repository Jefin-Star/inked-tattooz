import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { ResilientImage } from './ResilientImage';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Hours & Rates', href: '#rates' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#070709]/90 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Far-left studio logo & single-line brand wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg pr-1"
        >
          <span className="w-11 h-11 rounded-full overflow-hidden border border-rose-500/45 bg-black shadow-[0_0_14px_rgba(225,29,72,0.35)] shrink-0">
            <ResilientImage
              src={STUDIO_CONFIG.brand.logoUrl}
              alt="INKED TATTOOZ studio logo"
              loading="eager"
              className="w-full h-full object-cover bg-black"
            />
          </span>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
            {STUDIO_CONFIG.brand.shortName}
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]"
          >
            Book Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/10 text-zinc-200 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-white/10 bg-[#0b0b0e] px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
