import { ArrowUpRight, Calendar, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      {/* Background Studio Atmosphere */}
      <div className="relative min-h-[600px] lg:min-h-[680px] flex items-center">
        <div className="absolute inset-0">
          <ResilientImage
            src={STUDIO_CONFIG.brand.heroImage}
            alt="INKED TATTOOZ & Piercing studio interior workstation"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/88 to-[#070709]/45"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/50"
            aria-hidden="true"
          />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-zinc-300 tracking-wide">
              <span className="text-rose-500 font-semibold">Custom Tattooing</span>
              <span aria-hidden="true" className="text-zinc-600">
                ·
              </span>
              <span>Sterile Body Piercing</span>
              <span aria-hidden="true" className="text-zinc-600">
                ·
              </span>
              <span>Private Studio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance] max-w-3xl">
              {STUDIO_CONFIG.brand.fullName}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-rose-400 tracking-[0.01em] max-w-2xl">
              {STUDIO_CONFIG.brand.tagline}
            </p>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl tracking-[0.01em]">
              {STUDIO_CONFIG.brand.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book a Consultation</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm sm:text-base font-semibold text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width Studio Quick-Facts Strip below Hero */}
      <div className="bg-[#0b0b0e] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-zinc-400">Monday – Saturday</p>
              <p className="text-sm font-semibold text-zinc-100 font-mono-tabular mt-0.5">
                9:30 AM – 9:30 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-zinc-400">Sunday Hours</p>
              <p className="text-sm font-semibold text-zinc-100 font-mono-tabular mt-0.5">
                10:30 AM – 9:30 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-zinc-400">Sterilization Protocol</p>
              <p className="text-sm font-semibold text-zinc-100 mt-0.5">
                Single-Use Needles &amp; Autoclave
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ArrowUpRight className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-zinc-400">Direct WhatsApp Desk</p>
              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-zinc-100 hover:text-rose-400 transition-colors font-mono-tabular mt-0.5 inline-block"
              >
                {STUDIO_CONFIG.contact.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
