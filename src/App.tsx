/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { WhyVisitSection } from './components/WhyVisitSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans selection:bg-[#C06038]/20 selection:text-[#842C12]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header and Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. About the Restaurant */}
        <AboutSection />

        {/* 5. Featured Menu Section */}
        <MenuSection />

        {/* 6. Why Visit Us Section */}
        <WhyVisitSection />

        {/* 7. Customer Reviews and Rating Section */}
        <ReviewsSection />

        {/* 8. Restaurant Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Table Reservation / Inquiry Section */}
        <ReservationSection />

        {/* 10. Google Maps and Location Section */}
        <LocationSection />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
