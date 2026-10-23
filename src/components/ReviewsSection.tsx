import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-800 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Guest Feedback
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            What Guests Say
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto">
            Honest feedback from patrons who have dined with us at the Bihar Museum campus in Patna.
          </p>
        </div>

        {/* Prominent Rating Card */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl border border-stone-200/90 shadow-md p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 uppercase tracking-widest mb-3">
            <span>Google Business Profile Rating</span>
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-3">
            <span className="font-serif text-5xl sm:text-6xl font-bold text-stone-900 font-mono tabular-nums">
              {RESTAURANT_INFO.googleRating}
            </span>
            <span className="text-xl sm:text-2xl text-stone-400 font-light">/ 5.0</span>
          </div>

          {/* Star Icons */}
          <div className="flex items-center justify-center gap-1 text-[#D4A359] mb-3">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
            {/* Half Star representation */}
            <div className="relative w-6 h-6">
              <Star className="w-6 h-6 text-stone-300 fill-stone-300" />
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="w-6 h-6 text-[#D4A359] fill-[#D4A359]" />
              </div>
            </div>
          </div>

          <div className="text-stone-700 font-medium text-sm sm:text-base mb-6">
            Based on <span className="font-semibold text-stone-900 font-mono tabular-nums">{RESTAURANT_INFO.reviewCount}</span> verified guest ratings
          </div>

          {/* Authentic Review Message */}
          <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">
            We value genuine customer impressions. Read unfiltered guest testimonials, dining experiences, and food reviews directly on Google.
          </p>

          {/* Prominent Button to Google Reviews */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-all shadow-sm hover:shadow-md"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Authenticity Transparency Disclosure */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-center gap-2 text-stone-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Rating and review count provided by business profile listing. We do not publish fabricated testimonials.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
