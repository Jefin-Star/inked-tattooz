import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { ResilientImage } from './ResilientImage';

const QUICK_LINKS = [
  { label: 'About Studio', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Hours & Rates', href: '#rates' },
  { label: 'Book Consultation', href: '#book' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Studio Identity */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0">
                <ResilientImage
                  src={STUDIO_CONFIG.brand.logoUrl}
                  alt="INKED TATTOOZ logo"
                  className="w-full h-full object-contain bg-black"
                />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white group-hover:text-rose-400 transition-colors">
                  {STUDIO_CONFIG.brand.fullName}
                </span>
                <span className="block text-xs text-zinc-400">
                  Custom Tattooing &amp; Sterile Body Piercing
                </span>
              </div>
            </a>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Open Monday – Saturday (9:30 AM – 9:30 PM) and Sunday (10:30 AM – 9:30 PM).
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-rose-600 text-zinc-300 hover:text-white border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${STUDIO_CONFIG.contact.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-rose-600 text-zinc-300 hover:text-white border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-rose-600 text-zinc-300 hover:text-white border border-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-rose-600 text-zinc-300 hover:text-white border border-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {year} {STUDIO_CONFIG.brand.fullName}. All rights reserved.
          </p>
          <p>18+ Valid Government ID Required for All Tattoo &amp; Piercing Procedures.</p>
        </div>
      </div>
    </footer>
  );
}
