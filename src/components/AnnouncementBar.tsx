import { RESTAURANT_INFO } from '../data/restaurantData';

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#1F3A2B] text-[#FAF8F5] text-xs sm:text-sm font-medium py-2 px-4 text-center tracking-wide border-b border-[#2B4E3B] transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span>{RESTAURANT_INFO.announcementText}</span>
        <span aria-hidden="true" className="text-[#D4A359]">·</span>
        <span className="text-stone-300 hidden sm:inline">Inside Bihar Museum, Bailey Road</span>
      </div>
    </aside>
  );
}
