import {
  Award,
  BadgeCheck,
  Calendar,
  Check,
  Crown,
  Instagram,
  MessageCircle,
  Shield,
} from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  onSelectArtist: (artistName: string) => void;
}

const STUDIO_PILLARS = [
  {
    number: '01.',
    title: 'Anatomical Custom Design',
    description:
      'No recycled flash unless requested. Every design is illustrated to fit your muscle movement, skin tone, and long-term ink longevity.',
  },
  {
    number: '02.',
    title: 'Clinical Hygiene Discipline',
    description:
      'Medical-grade surface barriers, single-use cartridges opened in front of you, and Class-B autoclave sterilization across every station.',
  },
  {
    number: '03.',
    title: 'Precision Body Piercing',
    description:
      'Needle-only piercing (never piercing guns) paired with hypoallergenic ASTM F-136 implant-grade titanium and fine jewelry.',
  },
];

export function AboutSection({ onSelectArtist }: AboutSectionProps) {
  const { founderProfile } = STUDIO_CONFIG;

  const artistWhatsAppUrl = `${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
    `Hello ${founderProfile.name}, I saw your profile at ${STUDIO_CONFIG.brand.fullName} and would like to chat about a tattoo idea.`
  )}`;

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Philosophy & Craft Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-rose-500 tracking-wide">
                About Our Studio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
                Crafted for permanence in a calm, sterile environment.
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed tracking-[0.01em]">
                At {STUDIO_CONFIG.brand.fullName}, we treat tattooing and body piercing with the
                discipline of a fine-art atelier and the hygiene standards of a clinical suite.
                Whether it is your first minimal line piece or a multi-session realism sleeve, our
                artists guide you from concept sketch to healed skin.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {STUDIO_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4"
                >
                  <span className="sm:col-span-2 font-mono-tabular text-sm font-medium text-rose-400">
                    {pillar.number}
                  </span>
                  <div className="sm:col-span-10 space-y-1.5">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex-1 min-h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-[#121216]">
              <ResilientImage
                src={STUDIO_CONFIG.brand.craftImage}
                alt="Artist tattooing with black nitrile gloves under focused studio light"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Safety & Hygiene Standards */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0e12] neon-glow-card transition-shadow duration-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-rose-500 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white">
                  Safety &amp; Sterilization Standards
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STUDIO_CONFIG.safetyStandards.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check
                      className="w-4 h-4 text-rose-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Meet the Artist — Lead Tattoo Artist & Founder Spotlight */}
        <div id="artist" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-rose-500">Lead Tattoo Artist &amp; Founder</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Meet the Artist
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-md">
              Direct artistry, verified clinical certification, and one-on-one concept design from
              initial sketch to healed ink.
            </p>
          </div>

          {/* Primary Glowing Founder Profile Container */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0b0b0f] neon-glow-card transition-shadow duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Portrait with Continuous Glowing Neon Border in Logo Colors */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch space-y-4">
                <div className="w-full max-w-[380px] mx-auto neon-logo-frame rounded-2xl">
                  <div className="relative z-10 aspect-[4/5] w-full rounded-[13px] overflow-hidden bg-black">
                    <ResilientImage
                      src={founderProfile.photoUrl}
                      alt={`${founderProfile.name} — ${founderProfile.title} at ${STUDIO_CONFIG.brand.fullName}`}
                      fallbackTitle={founderProfile.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                      <span className="font-medium text-white">
                        {STUDIO_CONFIG.brand.shortName}
                      </span>
                      <span className="text-zinc-300">{founderProfile.availability}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Profile Details, Highlighted Experience, Credentials & Chat Actions */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        {founderProfile.name}
                      </h3>
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-rose-600/15 border border-rose-500/40 text-rose-400 shadow-[0_0_16px_rgba(225,29,72,0.35)]"
                        title="Founder & Lead Artist"
                      >
                        <Crown className="w-5 h-5" aria-hidden="true" />
                      </span>
                    </div>

                    <p className="text-base sm:text-lg font-semibold text-rose-400">
                      {founderProfile.title}
                    </p>
                  </div>

                  {/* Highlighted Experience Line */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-rose-600/10 border border-rose-500/35 shadow-[0_0_24px_-6px_rgba(225,29,72,0.4)]">
                    <Award className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
                      {founderProfile.experienceHighlight}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400">
                    {founderProfile.specialties}
                  </p>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {founderProfile.bio}
                  </p>
                </div>

                {/* Verified Credentials & Certifications Block */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#070709] border border-rose-500/25 shadow-[0_0_28px_-12px_rgba(225,29,72,0.3)] space-y-4">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <BadgeCheck
                        className="w-5 h-5 text-rose-500 shrink-0"
                        aria-hidden="true"
                      />
                      <h4 className="font-display text-base sm:text-lg font-semibold text-white">
                        Verified Credentials &amp; Certifications
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {founderProfile.credentials.map((cred) => (
                      <div key={cred.title} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-rose-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold text-zinc-100 leading-snug">
                            {cred.title}
                          </p>
                          <p className="text-xs text-zinc-400 leading-relaxed">{cred.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat with Tattoo Artist Action Block */}
                <div className="pt-2 space-y-3">
                  <p className="text-sm font-semibold text-zinc-200">
                    Chat with Tattoo Artist
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={artistWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-lg shadow-[0_0_22px_-4px_rgba(225,29,72,0.65)] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>WhatsApp {founderProfile.name}</span>
                    </a>

                    <a
                      href={STUDIO_CONFIG.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-rose-500/35 hover:border-rose-400 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    >
                      <Instagram className="w-4 h-4 text-rose-400" aria-hidden="true" />
                      <span>Instagram DM</span>
                    </a>

                    <a
                      href="#book"
                      onClick={() => onSelectArtist(founderProfile.name)}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <Calendar className="w-4 h-4 text-rose-400" aria-hidden="true" />
                      <span>Book Consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Studio Hours & Transparent Pricing Guide */}
        <div id="rates" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0e0e12] neon-glow-card transition-shadow duration-200 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-rose-500">Opening Schedule</p>
              <h3 className="font-display text-2xl font-bold text-white">Studio Hours</h3>
              <p className="text-sm text-zinc-400">
                Open 7 days a week for scheduled sessions, piercing appointments, and walk-in
                consultations.
              </p>
            </div>

            <div className="divide-y divide-white/10">
              {STUDIO_CONFIG.hours.map((row) => (
                <div key={row.days} className="py-4 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-zinc-200">{row.days}</span>
                  <span className="text-sm font-semibold text-white font-mono-tabular">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e0e12] neon-glow-card transition-shadow duration-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-rose-500">Transparent Estimates</p>
                <h3 className="font-display text-2xl font-bold text-white">
                  Studio Pricing Guide
                </h3>
              </div>
              <span className="text-xs text-zinc-400">
                Final quote confirmed after design review
              </span>
            </div>

            <div className="divide-y divide-white/10">
              {STUDIO_CONFIG.pricing.map((tier) => (
                <div
                  key={tier.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5 pr-4">
                    <h4 className="text-sm font-semibold text-white">{tier.service}</h4>
                    <p className="text-xs text-zinc-400">{tier.detail}</p>
                  </div>
                  <span className="text-sm font-semibold text-rose-400 font-mono-tabular whitespace-nowrap shrink-0">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
