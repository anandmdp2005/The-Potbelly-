import { Phone, MapPin, Star, ExternalLink, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-800 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Get in Touch
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            We Look Forward to Welcoming You
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto">
            Reach out directly for dining reservations, route navigation, or to share your dining experience.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1F3A2B]/10 text-[#1F3A2B] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Telephone Contact</h3>
              <p className="text-xs text-stone-500 mb-3">Call us directly for reservations & queries</p>
              <div className="font-mono text-base sm:text-lg font-semibold text-stone-900 mb-4">
                {RESTAURANT_INFO.phone}
              </div>
            </div>
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Location & Directions Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1F3A2B]/10 text-[#1F3A2B] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Restaurant Location</h3>
              <p className="text-xs text-stone-500 mb-3">Located inside the Bihar Museum campus</p>
              <p className="text-xs text-stone-700 leading-relaxed mb-4">
                {RESTAURANT_INFO.address}
              </p>
            </div>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open Google Maps</span>
            </a>
          </div>

          {/* Reviews Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1F3A2B]/10 text-[#1F3A2B] flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-[#D4A359] fill-[#D4A359]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Guest Ratings</h3>
              <p className="text-xs text-stone-500 mb-3">Verified Google Business Profile rating</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono text-xl font-bold text-stone-900">
                  {RESTAURANT_INFO.googleRating} / 5
                </span>
                <span className="text-xs text-stone-500">
                  ({RESTAURANT_INFO.reviewCount} Reviews)
                </span>
              </div>
            </div>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200/80 border border-stone-300 rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Read Google Reviews</span>
            </a>
          </div>
        </div>

        {/* Transparent Business Note */}
        <div className="mt-12 p-4 bg-stone-100/80 rounded-md border border-stone-200 max-w-3xl mx-auto text-xs text-stone-600 flex items-center gap-3">
          <Clock className="w-4 h-4 text-stone-400 shrink-0" />
          <p>
            Operating hours may vary during public holidays and museum schedule updates. Please call <a href={RESTAURANT_INFO.phoneTel} className="font-semibold text-stone-900 hover:underline">{RESTAURANT_INFO.phone}</a> in advance to verify exact table availability.
          </p>
        </div>
      </div>
    </section>
  );
}
