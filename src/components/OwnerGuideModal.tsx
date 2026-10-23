import { useState, useEffect } from 'react';
import { X, FileCode, CheckCircle, HelpCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OwnerGuideModal({ isOpen, onClose }: OwnerGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'menu' | 'maps' | 'deploy'>('menu');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-stone-200 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-md bg-[#1F3A2B] text-white">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 id="guide-title" className="font-serif text-xl font-bold text-stone-900">
                Restaurant Owner Handoff & Maintenance Guide
              </h2>
              <p className="text-xs text-stone-500 font-light">
                Project delivery instructions for {RESTAURANT_INFO.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-6 gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('menu')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'menu'
                ? 'border-[#1F3A2B] text-[#1F3A2B]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            1. Updating Menu & Pricing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('maps')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'maps'
                ? 'border-[#1F3A2B] text-[#1F3A2B]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            2. Google Maps & Contacts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deploy')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'deploy'
                ? 'border-[#1F3A2B] text-[#1F3A2B]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            3. Custom Domain & Deployment
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-stone-700 space-y-4">
          {activeTab === 'menu' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                How to Replace Sample Items with Verified Restaurant Dishes
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                All dishes are centralized in a single clean TypeScript file at{' '}
                <code className="bg-stone-100 text-[#1F3A2B] px-1.5 py-0.5 rounded font-mono text-xs">
                  /src/data/restaurantData.ts
                </code>
                . You do not need to touch any UI components to update prices or dishes.
              </p>

              <div className="bg-[#1C1917] text-stone-200 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                <pre>{`// In /src/data/restaurantData.ts:
{
  id: 'm-01',
  category: 'Signature Dishes',
  name: 'Your Real Dish Name',
  description: 'Authentic preparation with freshly sourced spices...',
  price: 420, // Price in INR
  image: littiDishImg, // or any image uploaded to /src/assets/images
  isVeg: true,
  isPopular: true,
  isSample: false, // Set to false once verified!
}`}</pre>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-800">
                  <strong>Zero Template Breaking:</strong> The menu grid automatically handles veg/non-veg tags, popular highlights, and responsive filtering across desktop, tablet, and mobile.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maps' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Configuring Google Business Profile & Maps
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                The website is configured with the verified Google Maps URL:
                <br />
                <code className="bg-stone-100 text-stone-800 px-1 py-0.5 rounded text-xs">
                  {RESTAURANT_INFO.googleMapsUrl}
                </code>
              </p>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-md space-y-2 text-xs">
                <div className="font-semibold text-stone-900">To replace the map embed:</div>
                <ol className="list-decimal pl-4 space-y-1 text-stone-600">
                  <li>Open Google Maps and search for your restaurant listing in Patna.</li>
                  <li>Click <strong>Share</strong> &rarr; <strong>Embed a map</strong>.</li>
                  <li>Copy the <code className="bg-stone-200 px-1 rounded">&lt;iframe src="..."&gt;</code> URL.</li>
                  <li>Paste the URL into <code className="bg-stone-200 px-1 rounded">/src/components/LocationSection.tsx</code>.</li>
                </ol>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-md flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <strong>Google Reviews:</strong> Clicking "Read Google Reviews" opens your official Google Maps business profile directly in a new tab, guaranteeing guests always see 100% authentic live reviews.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'deploy' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Deploying to Production & Connecting a Domain
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                This project is built using standard modern React + Vite + Tailwind CSS with zero runtime vendor lock-in. It can be deployed in minutes on any static hosting platform.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-stone-100 rounded-md">
                  <div className="font-semibold text-xs text-stone-900 mb-1">Step 1: Build Production Bundle</div>
                  <div className="bg-stone-900 text-stone-100 p-2 rounded text-xs font-mono">
                    npm run build
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    Outputs optimized static HTML, CSS, and JS to the <code className="text-stone-700">dist/</code> directory.
                  </div>
                </div>

                <div className="p-3.5 bg-stone-100 rounded-md">
                  <div className="font-semibold text-xs text-stone-900 mb-1">Step 2: Hosting Options</div>
                  <div className="text-xs text-stone-600">
                    Host on Vercel, Netlify, Cloudflare Pages, Firebase Hosting, or AWS S3. Simply point the root publish directory to <code className="font-mono bg-stone-200 px-1 rounded">dist</code>.
                  </div>
                </div>

                <div className="p-3.5 bg-stone-100 rounded-md">
                  <div className="font-semibold text-xs text-stone-900 mb-1">Step 3: Connect Custom Domain (e.g. thepotbellypatna.in)</div>
                  <div className="text-xs text-stone-600">
                    Add standard CNAME or ALIAS records in your domain registrar (GoDaddy, Namecheap, Google Domains) pointing to your hosting provider.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1F3A2B] hover:bg-[#16291e] rounded-md transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
