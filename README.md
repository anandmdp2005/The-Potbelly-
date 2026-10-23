# The Potbelly – Patna | Official Restaurant Website

A modern, elegant, fully responsive website built for **The Potbelly – Patna**, situated inside the prestigious Bihar Museum campus on Bailey Road.

---

## 1. Verified Business Information

| Attribute | Details |
| :--- | :--- |
| **Business Name** | The Potbelly – Patna |
| **Category** | Restaurant |
| **Contact Number** | `+91 70919 10283` (`tel:+917091910283`) |
| **Address** | 3, Bailey Rd, inside to Bihar Museum, Officers Flat, Market, Patna, Bihar 800001 |
| **Google Maps Link** | [Open in Google Maps](https://maps.app.goo.gl/inzkjQSn6GqUMYod7?g_st=ac) |
| **Google Rating** | 4.5 / 5.0 (254 Reviews) |
| **Landmark** | Inside Bihar Museum campus, Bailey Road |

---

## 2. Key Features

- **Editorial Aesthetic:** Custom styling using warm cream (`#FAF8F5`), forest green (`#1F3A2B`), terracotta (`#C06038`), and muted gold accents.
- **Top Bar Contract & Navigation:** Sticky header with restaurant wordmark, location label, responsive mobile drawer, and quick action buttons.
- **Hero Showcase:** High-impact hero photography, clear value proposition, and quick trust markers.
- **Interactive Menu with Filters:** Filter by category (*Signature Dishes, Starters, Main Course, Breads & Rice, Desserts, Beverages*) and diet (*Veg / Non-Veg*).
- **Menu Transparency:** Clear sample item indicators so the restaurant owner can seamlessly substitute the finalized menu items before official rollout.
- **Google Reviews Integration:** Prominently displays the 4.5 rating and links visitors directly to Google Maps to read and post authentic reviews.
- **Photo Gallery & Lightbox:** High-resolution photography of dining interiors, artisanal dishes, and atmosphere with full-screen lightbox navigation.
- **Location & Map Module:** One-click address copy with visual toast feedback, live interactive map preview, and directions button.
- **Table Reservation Inquiry:** Real-time form with phone validation, past-date prevention, and WhatsApp inquiry pre-formatting (`https://wa.me/917091910283`) plus direct call fallback.
- **SEO & Schema.org Structured Data:** Standard `Restaurant` JSON-LD schema, OpenGraph tags, and meta descriptions optimized for local Patna searches.

---

## 3. How to Update the Menu

All dishes, prices, and categories are centralized in a single configuration file:
```
/src/data/restaurantData.ts
```

To update dishes, simply edit the `SAMPLE_MENU_ITEMS` array:
```typescript
{
  id: 'dish-1',
  category: 'Signature Dishes',
  name: 'Bihari Litti Chokha Platter',
  description: 'Roasted sattu dumplings with baingan chokha and pure desi ghee.',
  price: 360, // in INR
  image: littiDishImg,
  isVeg: true,
  isPopular: true,
  isSample: false // mark as false when verified
}
```

---

## 4. Local Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```

### Build for Production:
```bash
npm run build
```
This generates optimized static files in the `dist/` directory ready for deployment on any static hosting provider (Vercel, Netlify, Cloudflare Pages, Firebase Hosting, AWS S3).
