import { ArrowRight, MapPin, Compass } from 'lucide-react';
import { RESTAURANT_INFO, ASSETS } from '../data/restaurantData';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Subtle Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-stone-200 aspect-[16/10]">
              <img
                src={ASSETS.about}
                alt="Dining hall with high ceilings, contemporary architecture, and wooden seating at The Potbelly Patna inside Bihar Museum"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            </div>

            {/* Subtle inset highlight card */}
            <div className="mt-4 p-4 bg-white rounded-md border border-stone-200/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-md bg-[#1F3A2B]/10 text-[#1F3A2B]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                    Location Milestone
                  </div>
                  <div className="text-xs text-stone-600">
                    Adjacent to Bihar Museum galleries
                  </div>
                </div>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1F3A2B] hover:text-[#C06038] transition-colors flex items-center gap-1"
              >
                <span>Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Section Tag */}
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-3">
              About The Restaurant
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-6 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {RESTAURANT_INFO.aboutHeading}
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed font-light">
              <p>
                {RESTAURANT_INFO.aboutDescription}
              </p>
              <p className="text-stone-600 text-sm sm:text-base">
                Whether you are wrapping up an afternoon exploring the museum’s exhibits or planning a gathering with close friends, our doors on Bailey Road welcome you to savor flavorful preparations in an inviting dining setting.
              </p>
            </div>

            {/* Practical highlights */}
            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-[#F5F1EB] border border-stone-200/60">
                <div className="font-serif text-lg font-semibold text-stone-900 mb-1">
                  Central Patna Landmark
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Located within the Officers Flat, Market area at 3, Bailey Road inside the Bihar Museum complex.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#F5F1EB] border border-stone-200/60">
                <div className="font-serif text-lg font-semibold text-stone-900 mb-1">
                  Table & Group Inquiries
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Inquire ahead for family lunches, celebratory dinners, or seasonal menu specials.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors"
              >
                <span>View Menu Preview</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              >
                <MapPin className="w-4 h-4 text-stone-500" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
