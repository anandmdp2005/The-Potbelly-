import { useState } from 'react';
import { MapPin, Navigation, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(RESTAURANT_INFO.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-800 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Location & Directions
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            Find Us in Patna
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto">
            Conveniently situated right inside the Bihar Museum premises along Bailey Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details & Action Card */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200/90 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3A2B] uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4 text-[#C06038]" />
                <span>Prime Museum Address</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                {RESTAURANT_INFO.name}
              </h3>

              <div className="p-4 rounded-md bg-[#FAF8F5] border border-stone-200/70 mb-6 text-sm text-stone-700 leading-relaxed font-light">
                <p className="font-medium text-stone-900 mb-1">Full Postal Address:</p>
                <p>{RESTAURANT_INFO.address}</p>
                <p className="mt-2 text-xs text-stone-500 italic">
                  Landmark: Inside Bihar Museum campus, Bailey Road
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Address Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-500" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>

                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#1F3A2B] bg-[#1F3A2B]/10 hover:bg-[#1F3A2B]/15 border border-[#1F3A2B]/20 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Restaurant ({RESTAURANT_INFO.phone})</span>
                </a>
              </div>
            </div>

            {/* Practical Notes */}
            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 leading-normal">
              Visiting the museum? The restaurant is located directly on campus with convenient walking access from both the museum courtyard and Bailey Road entry gates.
            </div>
          </div>

          {/* Right Column: Interactive Map Interface & Branded Map Preview */}
          <div className="lg:col-span-7 bg-[#EFECE6] rounded-xl overflow-hidden border border-stone-300 shadow-sm relative min-h-[420px] flex flex-col">
            {/* Interactive Embedded Map View using reliable OpenStreetMap tile layer iframe centered on Bihar Museum Patna */}
            <div className="relative w-full flex-grow min-h-[360px]">
              <iframe
                title="Google Maps Location for The Potbelly Patna"
                className="w-full h-full border-0 absolute inset-0 filter saturate-90 contrast-95"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.1090%2C25.6020%2C85.1250%2C25.6120&amp;layer=mapnik&amp;marker=25.6065%2C85.1172"
                loading="lazy"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-lg shadow-md border border-stone-200/90 max-w-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F3A2B]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C06038] animate-ping" />
                  <span>The Potbelly – Patna</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Inside Bihar Museum, Bailey Road, Patna
                </p>
                <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="text-stone-400">Rating: 4.5 ★</span>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1F3A2B] hover:underline flex items-center gap-0.5"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Quick Directions Floating Strip on Bottom */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md shadow-lg transition-transform hover:scale-102"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>Open Live Navigation</span>
                </a>
              </div>
            </div>

            {/* Note on embed config for owner */}
            <div className="p-3 bg-[#FAF8F5] border-t border-stone-200 text-center text-xs text-stone-500">
              <span>Interactive location map preview. Direct routing available via Google Maps application.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
