import { useState } from 'react';
import { MapPin, Phone, ExternalLink, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { OwnerGuideModal } from './OwnerGuideModal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Introduction */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5]">
                {RESTAURANT_INFO.brandWordmark}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D4A359]">
                {RESTAURANT_INFO.locationTag}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              A distinctive dining destination inside the Bihar Museum campus on Bailey Road, offering a memorable ambiance, heartwarming hospitality, and regional culinary traditions.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-400">
              <span className="font-semibold text-white">{RESTAURANT_INFO.googleRating} ★</span>
              <span aria-hidden="true">·</span>
              <span>{RESTAURANT_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4A359]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Restaurant
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Explore Menu Preview
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Ambiance Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-white transition-colors">
                  Plan Your Visit
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4A359]">
              Restaurant Information
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A359] shrink-0" />
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="hover:text-white transition-colors font-mono"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A359] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setGuideOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-[#D4A359] transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Owner Setup & Customization Guide</span>
            </button>
          </div>
        </div>
      </div>

      <OwnerGuideModal isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </footer>
  );
}
