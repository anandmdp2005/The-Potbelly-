import { HeartHandshake, Utensils, MapPin } from 'lucide-react';
import { WHY_VISIT_REASONS } from '../data/restaurantData';

export function WhyVisitSection() {
  const icons = [HeartHandshake, Utensils, MapPin];

  return (
    <section className="py-20 bg-[#FAF8F5] text-stone-800 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Why Visit Us
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900"
            style={{ textWrap: 'balance' }}
          >
            A Distinctive Dining Destination in Patna
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_VISIT_REASONS.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={reason.id}
                className="bg-white p-8 rounded-lg border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-[#1F3A2B]/10 text-[#1F3A2B] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-400">
                  <span>0{index + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase tracking-wider">The Potbelly Patna</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
