import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5'
          : 'bg-[#FAF8F5] border-b border-stone-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-2 shrink-0 text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A2B] rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3A2B] group-hover:text-[#16291e] transition-colors whitespace-nowrap">
              {RESTAURANT_INFO.brandWordmark}
            </span>
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-stone-500 whitespace-nowrap">
              {RESTAURANT_INFO.locationTag}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600 shrink-0"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1F3A2B] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1F3A2B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Two Prominent Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#menu"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1F3A2B] bg-stone-100/90 hover:bg-stone-200/90 border border-stone-300/80 rounded-md transition-colors whitespace-nowrap"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>View Menu</span>
            </a>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-[#1F3A2B] rounded-md"
              aria-label="Directions"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A2B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-stone-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-base font-medium text-stone-700 hover:text-[#1F3A2B] hover:bg-stone-100 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-stone-200 grid grid-cols-2 gap-2">
                <a
                  href="#menu"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-[#1F3A2B] bg-stone-100 border border-stone-300 rounded-md text-center"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>View Menu</span>
                </a>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-[#1F3A2B] rounded-md text-center"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
