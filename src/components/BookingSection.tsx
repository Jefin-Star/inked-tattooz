import { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ImagePlus,
  Mail,
  MessageCircle,
  Trash2,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

interface BookingSectionProps {
  preselectedArtist?: string;
  preselectedIdea?: string;
}

interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  tattooIdeaAndSize: string;
  placement: string;
  preferredArtist: string;
}

const PLACEMENT_OPTIONS = [
  'Forearm',
  'Upper Arm / Shoulder',
  'Full Sleeve / Half Sleeve',
  'Chest / Collarbone',
  'Back / Spine',
  'Ribs / Torso',
  'Leg / Thigh / Calf',
  'Wrist / Ankle / Hand',
  'Ear / Facial / Body Piercing',
  'Other / Custom',
];

export function BookingSection({
  preselectedArtist = '',
  preselectedIdea = '',
}: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    tattooIdeaAndSize: preselectedIdea,
    placement: 'Forearm',
    preferredArtist: preselectedArtist || STUDIO_CONFIG.founderProfile.name,
  });

  const [referenceFile, setReferenceFile] = useState<{
    name: string;
    sizeLabel: string;
    previewUrl: string;
  } | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [submittedSummary, setSubmittedSummary] = useState<BookingFormData | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (preselectedArtist || preselectedIdea) {
      setFormData((prev) => ({
        ...prev,
        preferredArtist: preselectedArtist || prev.preferredArtist,
        tattooIdeaAndSize: preselectedIdea || prev.tattooIdeaAndSize,
      }));
      setSubmittedSummary(null);
    }
  }, [preselectedArtist, preselectedIdea]);

  useEffect(() => {
    return () => {
      if (referenceFile?.previewUrl) {
        URL.revokeObjectURL(referenceFile.previewUrl);
      }
    };
  }, [referenceFile]);

  const handleFileChange = (file: File | undefined) => {
    setFileError('');
    if (!file) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setFileError('Please upload a JPG, PNG, or WebP reference image.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError('Reference image must be under 10 MB.');
      return;
    }

    if (referenceFile?.previewUrl) {
      URL.revokeObjectURL(referenceFile.previewUrl);
    }

    const previewUrl = URL.createObjectURL(file);
    const sizeKb = file.size / 1024;
    const sizeLabel =
      sizeKb >= 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${Math.round(sizeKb)} KB`;

    setReferenceFile({
      name: file.name,
      sizeLabel,
      previewUrl,
    });
  };

  const clearFile = () => {
    if (referenceFile?.previewUrl) {
      URL.revokeObjectURL(referenceFile.previewUrl);
    }
    setReferenceFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8 || !/^\+?\d+$/.test(cleanedPhone)) {
      nextErrors.phone = 'Enter a valid phone or WhatsApp number.';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.tattooIdeaAndSize.trim() || formData.tattooIdeaAndSize.trim().length < 6) {
      nextErrors.tattooIdeaAndSize =
        'Please describe your tattoo or piercing idea and approximate size.';
    }

    if (!formData.placement.trim()) {
      nextErrors.placement = 'Please select or enter a placement.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmittedSummary({ ...formData });
  };

  const buildInquiryMessage = (data: BookingFormData) => {
    const lines = [
      `Hello ${STUDIO_CONFIG.brand.fullName}, I would like to book a consultation:`,
      `Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Idea & Size: ${data.tattooIdeaAndSize}`,
      `Placement: ${data.placement}`,
      `Preferred Artist: ${data.preferredArtist}`,
      referenceFile ? `Reference Image Attached: ${referenceFile.name}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  return (
    <section id="book" className="py-20 lg:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Consultation Guide Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-rose-500 tracking-wide">
                Booking &amp; Consultation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
                Reserve your consultation or studio session.
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                Share your concept, approximate size, placement, and any visual references. Our
                studio team will review your request and reply with artist availability and an
                accurate quote.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-5">
              <h3 className="font-display text-lg font-semibold text-white">
                How Consultations Work
              </h3>
              <ol className="space-y-4 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="font-mono-tabular text-rose-400 font-semibold">01.</span>
                  <span>
                    Submit your concept, placement, and reference photos using the consultation
                    form.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono-tabular text-rose-400 font-semibold">02.</span>
                  <span>
                    We match your piece with the right specialist and provide a transparent price
                    and time estimate.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono-tabular text-rose-400 font-semibold">03.</span>
                  <span>
                    Lock in your appointment date during studio hours (Mon–Sat 9:30 AM – 9:30 PM,
                    Sun 10:30 AM – 9:30 PM).
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Interactive Booking Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0e0e12] border border-white/10">
            {submittedSummary ? (
              <div className="space-y-6 py-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Consultation Request Prepared
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Thank you, {submittedSummary.fullName}. Your details are validated and ready
                      — send directly via WhatsApp or Email below for immediate studio confirmation.
                    </p>
                  </div>
                </div>

                <dl className="p-5 rounded-xl bg-[#08080b] border border-white/10 space-y-2.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Client</dt>
                    <dd className="text-white font-medium text-right">
                      {submittedSummary.fullName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Phone</dt>
                    <dd className="text-white font-mono-tabular text-right">
                      {submittedSummary.phone}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Email</dt>
                    <dd className="text-white text-right">{submittedSummary.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Placement</dt>
                    <dd className="text-white text-right">{submittedSummary.placement}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Preferred Artist</dt>
                    <dd className="text-white text-right">{submittedSummary.preferredArtist}</dd>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <dt className="text-zinc-400 mb-1">Idea &amp; Size</dt>
                    <dd className="text-zinc-200">{submittedSummary.tattooIdeaAndSize}</dd>
                  </div>
                </dl>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`${STUDIO_CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(
                      buildInquiryMessage(submittedSummary)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${STUDIO_CONFIG.contact.email}?subject=${encodeURIComponent(
                      `Tattoo Consultation Request - ${submittedSummary.fullName}`
                    )}&body=${encodeURIComponent(buildInquiryMessage(submittedSummary))}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 text-sm font-semibold text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedSummary(null)}
                  className="text-xs font-medium text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  Edit or submit another consultation request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-full-name"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="booking-full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Your full name"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="booking-email"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="you@example.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Placement & Preferred Artist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-placement"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      Placement <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="booking-placement"
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    >
                      {PLACEMENT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="booking-artist"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      Preferred Artist
                    </label>
                    <select
                      id="booking-artist"
                      value={formData.preferredArtist}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredArtist: e.target.value })
                      }
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    >
                      {STUDIO_CONFIG.artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>
                          {artist.name} — {artist.role}
                        </option>
                      ))}
                      <option value="Any Available Artist">Any Available Artist</option>
                    </select>
                  </div>
                </div>

                {/* Tattoo Idea & Size */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="booking-idea"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    Tattoo Idea &amp; Approximate Size <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="booking-idea"
                    rows={4}
                    required
                    value={formData.tattooIdeaAndSize}
                    onChange={(e) => {
                      setFormData({ ...formData, tattooIdeaAndSize: e.target.value });
                      if (errors.tattooIdeaAndSize) {
                        setErrors({ ...errors, tattooIdeaAndSize: undefined });
                      }
                    }}
                    placeholder="Describe your tattoo or piercing concept, style (e.g., black & grey realism, fine-line, mandala), and approximate size in inches or cm..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08080b] border border-white/15 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 resize-y"
                  />
                  {errors.tattooIdeaAndSize && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.tattooIdeaAndSize}</span>
                    </p>
                  )}
                </div>

                {/* Reference Image Upload */}
                <div className="space-y-2">
                  <label
                    htmlFor="booking-reference-upload"
                    className="block text-sm font-medium text-zinc-200"
                  >
                    Reference Image Upload{' '}
                    <span className="text-xs font-normal text-zinc-400">(Optional)</span>
                  </label>

                  {referenceFile ? (
                    <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#08080b] border border-white/15">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={referenceFile.previewUrl}
                          alt="Uploaded tattoo reference preview"
                          className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {referenceFile.name}
                          </p>
                          <p className="text-xs text-zinc-400 font-mono-tabular">
                            {referenceFile.sizeLabel}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={clearFile}
                        aria-label="Remove uploaded reference image"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-white/5 transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="booking-reference-upload"
                      className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border border-dashed border-white/20 hover:border-rose-500/60 bg-[#08080b] cursor-pointer transition-colors text-center"
                    >
                      <ImagePlus className="w-6 h-6 text-rose-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-zinc-200">
                        Click to upload a reference sketch or inspiration photo
                      </span>
                      <span className="text-xs text-zinc-500">
                        JPG, PNG, or WebP · Max 10 MB
                      </span>
                    </label>
                  )}

                  <input
                    ref={fileInputRef}
                    id="booking-reference-upload"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) => handleFileChange(e.target.files?.[0])}
                    className="sr-only"
                  />

                  {fileError && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{fileError}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e12]"
                  >
                    Request Studio Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
