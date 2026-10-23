import { Utensils, MapPin, Phone, Star } from 'lucide-react';
import { RESTAURANT_INFO, ASSETS } from '../data/restaurantData';

export function Hero() {
  return (
    <section id="home" className="relative bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
      {/* Background Photography with Warm Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Culinary feast spread with traditional brass tableware at The Potbelly Patna"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.05]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 min-h-[640px] flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Unboxed Eyebrow Metadata (Zero-Pill discipline) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-[#D4A359] uppercase mb-3">
            <span>Bihar Museum Campus</span>
            <span aria-hidden="true">·</span>
            <span>Bailey Road, Patna</span>
          </div>

          {/* Main Restaurant Brand Headline (H1) */}
          <h1
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-3"
            style={{ textWrap: 'balance' }}
          >
            The Potbelly <span className="font-light text-stone-300">– Patna</span>
          </h1>

          {/* Slogan & Tagline */}
          <div className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D4A359] font-medium tracking-wide mb-6">
            Good Food. Great Moments.
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed mb-8 max-w-2xl">
            {RESTAURANT_INFO.heroSupportingText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#C06038] hover:bg-[#a94f2a] rounded-md shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Our Menu</span>
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm rounded-md transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-[#D4A359]" />
              <span>Find Us on Google Maps</span>
            </a>
          </div>

          {/* Social Proof & Quick Highlights Row */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-stone-300 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-white/10 text-[#D4A359] shrink-0">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">
                  {RESTAURANT_INFO.googleRating} / 5.0 Rating
                </div>
                <div className="text-stone-400 text-xs">
                  {RESTAURANT_INFO.reviewCount} Google Reviews
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-white/10 text-[#D4A359] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Bailey Road</div>
                <div className="text-stone-400 text-xs">Inside Bihar Museum</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-white/10 text-[#D4A359] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Reservations & Calls</div>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="text-stone-300 hover:text-white transition-colors text-xs"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
