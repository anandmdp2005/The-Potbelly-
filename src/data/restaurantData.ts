/**
 * Centralized business data and configuration for The Potbelly – Patna.
 * All verified business constants are maintained here.
 * Sample menu items are marked explicitly with isSample: true for transparency.
 */

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
  isSample: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Food' | 'Interior' | 'Atmosphere' | 'Beverages';
  image: string;
}

export const RESTAURANT_INFO = {
  name: 'The Potbelly – Patna',
  brandWordmark: 'The Potbelly',
  locationTag: 'Patna',
  category: 'Restaurant',
  phone: '+91 70919 10283',
  phoneTel: 'tel:+917091910283',
  whatsappNumber: '917091910283',
  address: '3, Bailey Rd, inside to Bihar Museum, Officers Flat, Market, Patna, Bihar 800001',
  googleMapsUrl: 'https://maps.app.goo.gl/inzkjQSn6GqUMYod7?g_st=ac',
  googleRating: 4.5,
  reviewCount: 254,
  announcementText: 'Discover Great Food at The Potbelly – Patna',
  heroHeadline: 'Good Food. Great Moments.',
  heroSupportingText: 'Discover a memorable dining experience at The Potbelly – Patna.',
  aboutHeading: 'Welcome to The Potbelly – Patna',
  aboutDescription:
    'Discover The Potbelly in Patna, a place to explore food, share conversations, and enjoy time together. Visit us near the Bihar Museum on Bailey Road.',
  landmark: 'Inside Bihar Museum campus, Bailey Road',
} as const;

export const MENU_CATEGORIES = [
  'All',
  'Signature Dishes',
  'Starters',
  'Main Course',
  'Breads & Rice',
  'Desserts',
  'Beverages',
] as const;

export type MenuCategoryType = typeof MENU_CATEGORIES[number];

// High quality assets generated for the applet
import heroImg from '../assets/images/hero_dining_potbelly_1792731565224.jpg';
import aboutImg from '../assets/images/about_potbelly_patna_1792731565568.jpg';
import littiDishImg from '../assets/images/dish_potbelly_special_1792731566804.jpg';
import interiorImg from '../assets/images/interior_potbelly_patna_1792731568332.jpg';
import exteriorImg from '../assets/images/exterior_potbelly_patna_1792731568320.jpg';
import beverageImg from '../assets/images/beverage_potbelly_patna_1792731585294.jpg';
import curryImg from '../assets/images/curry_potbelly_patna_1792731585527.jpg';
import userPotbellyLittiImg from '../assets/images/user_potbelly_litti.png';
import userPotbellyHallImg from '../assets/images/user_potbelly_hall.png';
import userPotbellyRollImg from '../assets/images/user_potbelly_roll.png';
import userPotbellyThaliImg from '../assets/images/user_potbelly_thali.png';

export const ASSETS = {
  hero: heroImg,
  about: userPotbellyHallImg,
  signatureDish: userPotbellyLittiImg,
  rollDish: userPotbellyRollImg,
  thaliDish: userPotbellyThaliImg,
  interior: interiorImg,
  exterior: exteriorImg,
  beverage: beverageImg,
  curry: curryImg,
};

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  {
    id: 'm-1',
    category: 'Signature Dishes',
    name: 'Bihari Litti Chokha Platter',
    description:
      'Verified Dish: Wood-roasted whole wheat dumplings packed with spiced sattu stuffing, served with baingan chokha, aloo bharta, and pure desi ghee.',
    price: 360,
    image: userPotbellyLittiImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-2',
    category: 'Signature Dishes',
    name: 'Potbelly Paneer Kathi Roll',
    description:
      'Verified Dish: Warm griddled flatbread wraps stuffed with spiced cottage cheese, crisp peppers, and onions, paired with fresh mint chutney.',
    price: 280,
    image: userPotbellyRollImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-3',
    category: 'Signature Dishes',
    name: 'Potbelly Paratha Thali Platter',
    description:
      'Verified Dish: Flaky layered ajwain paratha served with rich creamy regional curry, baingan chokha, spiced pickled onions, and crispy fritters.',
    price: 380,
    image: userPotbellyThaliImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-4',
    category: 'Starters',
    name: 'Crispy Sattu & Onion Kachoris',
    description:
      'Sample Preview: Flaky deep-golden pockets stuffed with seasoned gram flour and kalonji, served with tangy tamarind chutney.',
    price: 240,
    image: littiDishImg,
    isVeg: true,
    isSample: true,
  },
  {
    id: 'm-5',
    category: 'Main Course',
    name: 'Earthen Clay Handi Paneer',
    description:
      'Sample Preview: Fresh cottage cheese cubes slow-simmered in roasted tomato and whole spice reduction in traditional pottery.',
    price: 390,
    image: curryImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-6',
    category: 'Main Course',
    name: 'Dehati Chicken Curry',
    description:
      'Sample Preview: Traditional countryside preparation with crushed whole spices, dry red chillies, and caramelized shallots.',
    price: 460,
    image: heroImg,
    isVeg: false,
    isSample: true,
  },
  {
    id: 'm-7',
    category: 'Breads & Rice',
    name: 'Layered Ajwain Paratha Basket',
    description:
      'Sample Preview: Hand-rolled, crisp layered flatbreads infused with carom seeds and brushed with pure desi ghee.',
    price: 120,
    image: userPotbellyThaliImg,
    isVeg: true,
    isSample: true,
  },
  {
    id: 'm-8',
    category: 'Breads & Rice',
    name: 'Scented Jeera Steamed Rice',
    description:
      'Sample Preview: Fragrant long-grain rice tempered with cracked cumin and bay leaf.',
    price: 180,
    image: heroImg,
    isVeg: true,
    isSample: true,
  },
  {
    id: 'm-9',
    category: 'Desserts',
    name: 'Warm Chandrakala Pastry',
    description:
      'Sample Preview: Crisp pastry shells filled with mawa, crushed dry fruits, and dipped in saffron-cardamom honey syrup.',
    price: 210,
    image: heroImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-10',
    category: 'Desserts',
    name: 'Caramelized Makhana Kheer',
    description:
      'Sample Preview: Fox nuts simmered in slow-reduced milk infused with green cardamom and toasted slivered pistachios.',
    price: 220,
    image: aboutImg,
    isVeg: true,
    isSample: true,
  },
  {
    id: 'm-11',
    category: 'Beverages',
    name: 'Chilled Spiced Sattu Sharbat',
    description:
      'Sample Preview: Traditional roasted gram cooler blended with roasted cumin, green chilli, rock salt, and freshly squeezed lemon in a kulhad.',
    price: 140,
    image: beverageImg,
    isVeg: true,
    isPopular: true,
    isSample: true,
  },
  {
    id: 'm-12',
    category: 'Beverages',
    name: 'Masala Chaach with Mint',
    description:
      'Sample Preview: Refreshing churned buttermilk seasoned with fresh garden mint, ginger, and pink Himalayan salt.',
    price: 120,
    image: beverageImg,
    isVeg: true,
    isSample: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Potbelly Paratha Thali Feast',
    subtitle: 'Flaky layered ajwain paratha with creamy regional curry, chokha & pickled onions',
    category: 'Food',
    image: userPotbellyThaliImg,
  },
  {
    id: 'g-2',
    title: 'Signature Potbelly Litti Chokha',
    subtitle: 'Authentic roasted sattu dumplings with baingan chokha, aloo bharta & dal',
    category: 'Food',
    image: userPotbellyLittiImg,
  },
  {
    id: 'g-3',
    title: 'Restaurant Dining Hall',
    subtitle: 'Spacious dining hall with natural light inside Bihar Museum',
    category: 'Interior',
    image: userPotbellyHallImg,
  },
  {
    id: 'g-4',
    title: 'Intimate Dining Alcove',
    subtitle: 'Private corners ideal for conversation and family time',
    category: 'Atmosphere',
    image: interiorImg,
  },
  {
    id: 'g-5',
    title: 'Potbelly Special Kathi Rolls',
    subtitle: 'Freshly prepared wraps served with house mint chutney & sides',
    category: 'Food',
    image: userPotbellyRollImg,
  },
  {
    id: 'g-6',
    title: 'Refreshing Earthen Coolers',
    subtitle: 'Handcrafted drinks served in authentic kulhads',
    category: 'Beverages',
    image: beverageImg,
  },
];

export const WHY_VISIT_REASONS = [
  {
    id: 'reason-1',
    title: 'A Welcoming Dining Experience',
    description:
      'Comfortable seating, warm hospitality, and a relaxed environment created for sharing meals with friends and family.',
  },
  {
    id: 'reason-2',
    title: 'Explore the Menu',
    description:
      'A diverse selection of traditional regional flavors and comforting dishes prepared with authentic culinary care.',
  },
  {
    id: 'reason-3',
    title: 'Convenient Patna Location',
    description:
      'Centrally situated on Bailey Road inside the renowned Bihar Museum campus, easily accessible across the city.',
  },
];
