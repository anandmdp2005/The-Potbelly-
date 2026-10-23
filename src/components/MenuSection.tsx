import { useState, useMemo } from 'react';
import { Phone, Info, Sparkles } from 'lucide-react';
import {
  RESTAURANT_INFO,
  MENU_CATEGORIES,
  MenuCategoryType,
  SAMPLE_MENU_ITEMS,
  MenuItem,
} from '../data/restaurantData';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('All');
  const [selectedVegFilter, setSelectedVegFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesVeg =
        selectedVegFilter === 'all'
          ? true
          : selectedVegFilter === 'veg'
          ? item.isVeg
          : !item.isVeg;
      return matchesCategory && matchesVeg;
    });
  }, [activeCategory, selectedVegFilter]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F5F1EB] text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C06038] mb-2">
            Culinary Selection
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ textWrap: 'balance' }}
          >
            Explore Our Menu
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto leading-relaxed">
            Browse our curated preview of regional delicacies, slow-cooked clay pot specialties, and refreshing accompaniments.
          </p>

          {/* Transparent Notice Banner */}
          <div className="mt-6 p-3.5 bg-amber-50/90 border border-amber-200/90 rounded-md text-amber-900 text-xs sm:text-sm flex items-start sm:items-center justify-center gap-2.5 text-left sm:text-center max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong>Menu Notice:</strong> The dishes and prices below are illustrative preview samples prepared for the restaurant owner. Please call the restaurant directly to check today’s live specials and seasonal menu.
            </p>
          </div>
        </div>

        {/* Category Controls & Diet Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-300/70">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#1F3A2B] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Diet Preferences: All / Veg / Non-Veg */}
          <div className="flex items-center gap-1 bg-stone-200/80 p-1 rounded-md self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSelectedVegFilter('all')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                selectedVegFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Diets
            </button>
            <button
              type="button"
              onClick={() => setSelectedVegFilter('veg')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                selectedVegFilter === 'veg'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-stone-600 hover:text-emerald-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Veg Only</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedVegFilter('non-veg')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                selectedVegFilter === 'non-veg'
                  ? 'bg-white text-rose-800 shadow-xs'
                  : 'text-stone-600 hover:text-rose-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Non-Veg Only</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dish) => (
            <MenuItemCard key={dish.id} item={dish} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-stone-200">
            <p className="text-stone-500 text-sm">No items match the selected dietary filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSelectedVegFilter('all');
              }}
              className="mt-3 text-xs font-semibold text-[#1F3A2B] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Ask About Menu CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-lg border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-1">
              Have Dietary Preferences or Want Today’s Specials?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light">
              Connect directly with our service team in Patna for current offerings, portion sizes, or allergen information.
            </p>
          </div>
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors whitespace-nowrap shadow-xs shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Ask About the Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col h-full">
      {/* Food Photo Container */}
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {!imageFailed ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 text-stone-500 p-4 text-center">
            <span className="font-serif text-sm font-semibold">{item.name}</span>
            <span className="text-xs text-stone-400 mt-1">Photo Preview</span>
          </div>
        )}

        {/* Clean Top Tags */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Veg / Non-Veg Indicator */}
          <div
            className={`w-5 h-5 rounded-sm bg-white/95 backdrop-blur-xs border flex items-center justify-center shadow-xs ${
              item.isVeg ? 'border-emerald-600' : 'border-rose-600'
            }`}
            title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            />
          </div>

          {/* Popular Tag */}
          {item.isPopular && (
            <div className="flex items-center gap-1 bg-[#1F3A2B]/90 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded shadow-xs">
              <Sparkles className="w-3 h-3 text-[#D4A359]" />
              <span>Popular</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Sample Label (Clean text metadata with separator) */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
            <span className="font-medium text-[#C06038]">{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="italic text-[11px]">Sample Item</span>
          </div>

          {/* Title */}
          <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#1F3A2B] transition-colors leading-snug mb-2">
            {item.name}
          </h4>

          {/* Description */}
          <p className="text-xs text-stone-600 leading-relaxed font-light mb-4 line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-medium text-stone-500">₹</span>
            <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
              {item.price}
            </span>
          </div>
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="text-xs font-semibold text-[#1F3A2B] hover:text-[#C06038] transition-colors"
          >
            Inquire Price & Availability &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
