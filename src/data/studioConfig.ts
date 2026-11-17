export interface ArtistProfile {
  id: string;
  name: string;
  role: string;
  specialties: string;
  experience: string;
  bio: string;
  availability: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Realism' | 'Fine-Line' | 'Blackwork' | 'Colour Work' | 'Piercing';
  artist: string;
  placement: string;
  sessionTime: string;
  year: string;
  image: string;
  aspect: 'portrait' | 'landscape';
  notes: string;
}

export interface PricingItem {
  id: string;
  service: string;
  detail: string;
  price: string;
}

/**
 * STUDIO_CONFIG
 * Update contact details, studio hours, pricing, and map embed URL in this single file.
 */
export const STUDIO_CONFIG = {
  brand: {
    shortName: 'INKED TATTOOZ',
    fullName: 'INKED TATTOOZ & Piercing studio',
    tagline: 'Custom Skin Artistry. Medical-Grade Precision.',
    subtitle:
      'Bespoke black-and-grey realism, fine-line botanicals, bold blackwork, and curated titanium body piercing crafted in a sterile private atelier.',
    logoUrl: '/assets/aistudio/2076187a-8317-462c-b138-7ea51f81b9ca_4078a396.jpg',
    heroImage: '/src/assets/images/hero_tattoo_studio_1794810574376.jpg',
    craftImage: '/src/assets/images/studio_artist_craft_1794810575184.jpg',
  },
  contact: {
    whatsappNumber: '7356471493',
    whatsappDisplay: '+91 73564 71493',
    whatsappUrl: 'https://wa.me/917356471493',
    email: 'inkedtattooz8@gmail.com',
    instagramUrl: 'https://www.instagram.com/inked_tattooz?r=nametag',
    instagramHandle: '@inked_tattooz',
    facebookUrl:
      'https://www.facebook.com/inkedTatt?rdid=KUQaClrZVVJv8Hzt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A1TPQEJXj%2F#',
    facebookLabel: 'INKED TATTOOZ Studio',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.805033930485!2d76.3132689!3d9.755620999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087b1a5f8285e3%3A0x31c0fa27fa8f733c!2sINKED%20TATTOOZ!5e1!3m2!1sen!2sin!4v1794805639752!5m2!1sen!2sin',
    addressNote: 'Walk-in consultations welcome daily · Private appointments available',
  },
  hours: [
    {
      days: 'Monday – Saturday',
      time: '9:30 AM – 9:30 PM',
    },
    {
      days: 'Sunday',
      time: '10:30 AM – 9:30 PM',
    },
  ],
  /**
   * Easily editable studio pricing guide
   */
  pricing: [
    {
      id: 'min-session',
      service: 'Tattoos Starting Price',
      detail: 'Minimalist scripts, symbols, and starter tattoo pieces.',
      price: '₹1,000 onwards',
    },
    {
      id: 'custom-tattoo',
      service: 'Custom Tattoo Work',
      detail: 'Black & grey realism, portraits, sleeves, fine-line, neo-traditional, and blackwork.',
      price: 'Customized Pricing',
    },
    {
      id: 'coverup-rework',
      service: 'Cover-Ups & Rework Sessions',
      detail: 'Bespoke tattoo designs tailored to transform or refresh existing ink.',
      price: 'Customized Pricing',
    },
    {
      id: 'piercing',
      service: 'All Piercing Services',
      detail: 'Single-use sterile hollow needle precision with implant-grade jewelry.',
      price: 'Customized Pricing',
    },
  ] as PricingItem[],
  safetyStandards: [
    '100% single-use sterile cartridge needles unsealed in your presence',
    'Hospital-grade Class-B autoclave sterilization for all reusable tools',
    'REACH & EU-compliant vegan pigments and hypoallergenic barriers',
    'Implant-grade ASTM F-136 titanium & solid gold piercing jewelry',
  ],
  founderProfile: {
    id: 'varghese',
    name: 'Varghese',
    title: 'Certified Tattoo Artist & Founder',
    role: 'Lead Tattoo Artist & Founder',
    experienceHighlight: '8+ Years of Experience in Tattoo Artistry',
    specialties: 'Black & Grey Realism · Portrait · Custom Sleeves · Fine-Line · Piercing',
    photoUrl: '/assets/aistudio/0ddd1d13-ab49-4a83-bcf8-343bbe51e477_0dd4f42d.jpg',
    bio: 'Known for high-contrast chiaroscuro shading and anatomical flow, Varghese founded INKED TATTOOZ & Piercing studio to deliver custom skin artistry backed by uncompromising clinical hygiene.',
    availability: 'Mon – Sun by appointment',
    credentials: [
      {
        title: 'Certified Professional Tattoo Artist',
        detail: 'Accredited studio training in precision linework, grey-wash realism, and colour packing.',
      },
      {
        title: 'Bloodborne Pathogens & Hygiene Certified',
        detail: 'Hospital-grade cross-contamination prevention & Class-B autoclave sterilization.',
      },
      {
        title: 'REACH-Compliant Pigment & Needle Safety',
        detail: '100% single-use sealed sterile cartridges and vegan-certified ink protocols.',
      },
      {
        title: 'Custom Anatomical Consultation & Aftercare',
        detail: 'Tailored stencil engineering and guided healing support for long-term ink clarity.',
      },
    ],
  },
  artists: [
    {
      id: 'varghese',
      name: 'Varghese',
      role: 'Certified Tattoo Artist & Founder',
      specialties: 'Black & Grey Realism · Portrait · Custom Sleeves · Fine-Line',
      experience: '8+ Years of Experience in Tattoo Artistry',
      bio: 'Known for high-contrast chiaroscuro shading and anatomical flow, Varghese designs every composition directly around muscle contour.',
      availability: 'Mon – Sun by appointment',
    },
  ] as ArtistProfile[],
  portfolio: [
    {
      id: 'piece-1',
      title: 'Lord Krishna & Sudarshana Chakra',
      category: 'Realism',
      artist: 'Varghese',
      placement: 'Upper Arm / Deltoid',
      sessionTime: '6 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/f97dde25-9052-49e7-b6e1-d7ae41e0b8e5_edd203f3.jpg',
      aspect: 'portrait',
      notes:
        'Black-and-grey mythological realism featuring intricate crown filigree, peacock feather detail, soft grey-wash skin shading, and dynamic spinning chakra motion.',
    },
    {
      id: 'piece-2',
      title: 'Crowned Lion & Crimson Rose',
      category: 'Realism',
      artist: 'Varghese',
      placement: 'Upper Arm / Shoulder',
      sessionTime: '6.5 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/452f74b3-cf98-44c2-b588-57014cf1cdf9_341db198.jpg',
      aspect: 'portrait',
      notes:
        'Black-and-grey wildlife realism pairing a roaring crowned lion with vivid blue eyes and a richly saturated crimson rose beneath, built with layered fur texture.',
    },
    {
      id: 'piece-3',
      title: 'Guardian Archangel & Script Banner',
      category: 'Fine-Line',
      artist: 'Varghese',
      placement: 'Forearm',
      sessionTime: '4.5 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/a0278e3e-18ab-4e4f-b3dd-04b05426d678_6821e413.jpg',
      aspect: 'portrait',
      notes:
        'Fine-line classical engraving and micro-shaded black-and-grey artwork featuring a winged guardian angel with radiating halo lines above a custom "Dilan" scrollwork banner.',
    },
    {
      id: 'piece-4',
      title: 'World Champion Trophy Tribute',
      category: 'Realism',
      artist: 'Varghese',
      placement: 'Inner Forearm',
      sessionTime: '5.5 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/45c7e538-d5d5-4ea3-8e94-725e65163d0b_415db490.jpg',
      aspect: 'portrait',
      notes:
        'Black-and-grey micro-realism portrait capturing Lionel Messi kissing the World Cup trophy, rendered with fine tonal shading, #10 jersey detail, and soft atmospheric framing.',
    },
    {
      id: 'piece-5',
      title: 'Zero-Gravity Astronaut',
      category: 'Blackwork',
      artist: 'Varghese',
      placement: 'Inner Forearm',
      sessionTime: '4 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/018be7a3-a444-4712-926f-f04cbfc1a394_53b84b80.jpg',
      aspect: 'portrait',
      notes:
        'Illustrative blackwork piece depicting a floating astronaut over a tapered geometric beam, combining crisp fine linework, solid visor blackouts, and subtle dotwork depth.',
    },
    {
      id: 'piece-6',
      title: 'Life Is Better On A Bike',
      category: 'Colour Work',
      artist: 'Varghese',
      placement: 'Outer Upper Arm',
      sessionTime: '4 Hours · Single Session',
      year: '2026',
      image: '/assets/aistudio/e9d7d7a9-1916-4590-9ca0-ab3aec78a0bc_309535c6.jpg',
      aspect: 'portrait',
      notes:
        'Full-colour illustrative trail scene combining a bold black mountain biker silhouette, pine tree detail, warm sunset gradient shading, and custom typography.',
    },
    {
      id: 'piece-7',
      title: 'Curated Helix & Conch Stack',
      category: 'Piercing',
      artist: 'Varghese',
      placement: 'Multi-Point Ear Curation',
      sessionTime: '45 Minutes · Sterile Needle',
      year: '2026',
      image: '/src/assets/images/piercing_curated_ear_1794810577073.jpg',
      aspect: 'landscape',
      notes:
        'Anatomically spaced double helix, conch, tragus, and triple lobe with anodized gold & implant-grade titanium.',
    },
  ] as PortfolioItem[],
};
