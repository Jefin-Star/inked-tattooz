import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioItem, STUDIO_CONFIG } from '../data/studioConfig';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  onBookStyle: (artist: string, styleNote: string) => void;
}

const CATEGORIES = [
  'All',
  'Realism',
  'Fine-Line',
  'Blackwork',
  'Colour Work',
  'Piercing',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export function PortfolioSection({ onBookStyle }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedPiece, setSelectedPiece] = useState<PortfolioItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  const filteredItems =
    activeCategory === 'All'
      ? STUDIO_CONFIG.portfolio
      : STUDIO_CONFIG.portfolio.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedPiece) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPiece(null);
        setIsZoomed(false);
      } else if (event.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === selectedPiece.id);
        if (currentIndex !== -1) {
          const next = filteredItems[(currentIndex + 1) % filteredItems.length];
          setSelectedPiece(next);
          setIsZoomed(false);
        }
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === selectedPiece.id);
        if (currentIndex !== -1) {
          const prev =
            filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length];
          setSelectedPiece(prev);
          setIsZoomed(false);
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPiece, filteredItems]);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedPiece || filteredItems.length === 0) return;
    const index = filteredItems.findIndex((item) => item.id === selectedPiece.id);
    if (index === -1) return;
    const nextIndex =
      direction === 'next'
        ? (index + 1) % filteredItems.length
        : (index - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPiece(filteredItems[nextIndex]);
    setIsZoomed(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 border-b border-white/10 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Category Segmented Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold text-rose-500 tracking-wide">
              Artist Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Selected Tattoos &amp; Curated Piercings
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              Click any piece to inspect healed linework, shading, and jewelry placement in
              high-resolution zoom view.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter portfolio by style"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#121216] border border-white/10 rounded-xl"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                    active
                      ? 'bg-rose-600 text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                setSelectedPiece(item);
                setIsZoomed(false);
              }}
              aria-label={`Inspect ${item.title} by ${item.artist}`}
              className="group relative text-left rounded-2xl overflow-hidden bg-[#101014] border border-white/10 hover:border-rose-500/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#141418]">
                <ResilientImage
                  src={item.image}
                  alt={`${item.title} — ${item.category} tattoo on ${item.placement} by ${item.artist}`}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Subtle Bottom Scrim & Unboxed Editorial Caption */}
              <div
                className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/65 to-transparent"
              >
                <div className="flex items-end justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="text-rose-400 font-medium">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.placement}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Artist: {item.artist} · {item.sessionTime}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white group-hover:bg-rose-600 transition-colors shrink-0"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal Zoom Lightbox */}
      {selectedPiece && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => {
            setSelectedPiece(null);
            setIsZoomed(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0e0e12] border border-white/15 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
          >
            {/* Close & Zoom Toolbar */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed((z) => !z)}
                aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3 rounded-lg bg-black/75 hover:bg-black text-white border border-white/15 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                {isZoomed ? (
                  <>
                    <ZoomOut className="w-4 h-4" aria-hidden="true" />
                    <span>Reset Zoom</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-4 h-4" aria-hidden="true" />
                    <span>Inspect Detail</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedPiece(null);
                  setIsZoomed(false);
                }}
                aria-label="Close modal"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/75 hover:bg-rose-600 text-white border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Zoom Image Frame */}
            <div
              onClick={() => setIsZoomed((z) => !z)}
              onMouseMove={handleMouseMove}
              className={`lg:col-span-7 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[65vh] lg:max-h-[88vh] ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            >
              <img
                src={selectedPiece.image}
                alt={selectedPiece.title}
                referrerPolicy="no-referrer"
                style={{
                  transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                  transform: isZoomed ? 'scale(1.85)' : 'scale(1)',
                }}
                className="w-full h-full object-contain transition-transform duration-200 ease-out select-none"
              />

              {/* Prev / Next Controls */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate('prev');
                    }}
                    aria-label="Previous piece"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate('next');
                    }}
                    aria-label="Next piece"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Artwork Details Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="space-y-5 pt-2 lg:pt-8">
                <div className="text-xs font-medium text-rose-400">
                  {selectedPiece.category} · {selectedPiece.year}
                </div>
                <h3 id="lightbox-title" className="font-display text-2xl font-bold text-white">
                  {selectedPiece.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{selectedPiece.notes}</p>

                <dl className="pt-4 border-t border-white/10 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Artist</dt>
                    <dd className="font-medium text-white">{selectedPiece.artist}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Placement</dt>
                    <dd className="font-medium text-white">{selectedPiece.placement}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-zinc-400">Session</dt>
                    <dd className="font-medium text-white">{selectedPiece.sessionTime}</dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const piece = selectedPiece;
                    setSelectedPiece(null);
                    setIsZoomed(false);
                    onBookStyle(
                      piece.artist,
                      `Interested in a ${piece.category} piece inspired by "${piece.title}" (${piece.placement}).`
                    );
                  }}
                  className="w-full min-h-[46px] px-5 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  Book Consultation for Similar Style
                </button>
                <p className="text-xs text-zinc-500 text-center">
                  Click image or press Inspect Detail to zoom 1.85x · ESC to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
