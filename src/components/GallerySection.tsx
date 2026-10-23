import { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { LightboxModal } from './LightboxModal';

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F5F1EB] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Visual Ambiance
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            A Taste of the Experience
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
            Step inside our dining room, admire traditional clay craftsmanship, and explore the warm spirit of hospitality.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-lg overflow-hidden bg-stone-200 cursor-pointer aspect-[4/3] shadow-xs hover:shadow-lg transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#D4A359]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug">{item.title}</h3>
                    <p className="text-xs text-stone-300 font-light line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs shrink-0 ml-2">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Subtext */}
        <div className="mt-8 text-center text-xs text-stone-500 font-light flex items-center justify-center gap-2">
          <Camera className="w-3.5 h-3.5 text-stone-400" />
          <span>Click on any photograph to expand in high-definition viewer.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
