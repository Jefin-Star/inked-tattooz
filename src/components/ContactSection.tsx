import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-white/10 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <p className="text-sm font-semibold text-rose-500 tracking-wide">Contact Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Visit {STUDIO_CONFIG.brand.fullName} or reach us directly.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            {STUDIO_CONFIG.contact.addressNote}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Channels & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* WhatsApp */}
              <a
                href={STUDIO_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-rose-500/60 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-rose-600/15 text-rose-400 shrink-0">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-400">WhatsApp Consultation</p>
                    <p className="text-base font-semibold text-white font-mono-tabular truncate">
                      {STUDIO_CONFIG.contact.whatsappNumber}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>

              {/* Email */}
              <a
                href={`mailto:${STUDIO_CONFIG.contact.email}`}
                className="group p-5 rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-rose-500/60 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-rose-400 shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-400">Studio Email</p>
                    <p className="text-sm sm:text-base font-semibold text-white truncate">
                      {STUDIO_CONFIG.contact.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>

              {/* Instagram */}
              <a
                href={STUDIO_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-rose-500/60 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-rose-400 shrink-0">
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-400">Instagram</p>
                    <p className="text-base font-semibold text-white truncate">
                      {STUDIO_CONFIG.contact.instagramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>

              {/* Facebook */}
              <a
                href={STUDIO_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0e0e12] border border-white/10 hover:border-rose-500/60 transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-rose-400 shrink-0">
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-zinc-400">Facebook</p>
                    <p className="text-base font-semibold text-white truncate">
                      {STUDIO_CONFIG.contact.facebookLabel}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Hours Summary */}
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock className="w-4 h-4 text-rose-500" aria-hidden="true" />
                <span>Studio Opening Hours</span>
              </div>
              <div className="space-y-1.5 text-sm">
                {STUDIO_CONFIG.hours.map((entry) => (
                  <div key={entry.days} className="flex items-center justify-between gap-4">
                    <span className="text-zinc-400">{entry.days}</span>
                    <span className="font-mono-tabular text-zinc-100">{entry.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Embedded Google Maps Location */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e12]">
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">
                  Studio Address &amp; Directions
                </span>
              </div>
              <span className="text-xs text-zinc-400">INKED TATTOOZ</span>
            </div>

            <div className="relative flex-1 min-h-[380px] sm:min-h-[450px] bg-[#121216]">
              <iframe
                title="INKED TATTOOZ & Piercing studio Google Maps location"
                src={STUDIO_CONFIG.contact.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
