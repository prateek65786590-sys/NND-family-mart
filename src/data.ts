export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export const CATEGORIES: Category[] = [
  { id: 'grocery', name: 'Grocery & Staples', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'fresh', name: 'Fresh Fruits & Veggies', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400', color: 'bg-orange-100 text-orange-800' },
  { id: 'dairy', name: 'Dairy & Bakery', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400', color: 'bg-blue-100 text-blue-800' },
  { id: 'beverages', name: 'Beverages', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400', color: 'bg-red-100 text-red-800' },
  { id: 'snacks', name: 'Snacks & Branded Foods', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'household', name: 'Household Essentials', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400', color: 'bg-purple-100 text-purple-800' },
  { id: 'personal-care', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400', color: 'bg-pink-100 text-pink-800' },
  { id: 'home-kitchen', name: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400', color: 'bg-teal-100 text-teal-800' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aashirvaad Superior MP Sharbati Atta, 5kg',
    price: 245,
    originalPrice: 280,
    image: 'https://images.unsplash.com/photo-1627485937980-221c88ce04ea?auto=format&fit=crop&q=80&w=400', // Placeholder
    category: 'Grocery',
    badge: '12% OFF',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'p2',
    name: 'Fortune Sunlite Refined Sunflower Oil, 1L',
    price: 135,
    originalPrice: 155,
    image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=400', // Placeholder
    category: 'Grocery',
    badge: 'Best Seller',
    rating: 4.6,
    reviews: 89
  },
  {
    id: 'p3',
    name: 'Fresh Red Apple (Washington), 1kg',
    price: 180,
    originalPrice: 220,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=400',
    category: 'Fresh Fruits',
    badge: '18% OFF',
    rating: 4.9,
    reviews: 56
  },
  {
    id: 'p4',
    name: 'Amul Taaza Homogenised Toned Milk, 1L',
    price: 72,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
    category: 'Dairy',
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'p5',
    name: 'Surf Excel Easy Wash Detergent Powder, 1.5kg',
    price: 185,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1585241936939-f8319f6be2b2?auto=format&fit=crop&q=80&w=400',
    category: 'Household',
    rating: 4.5,
    reviews: 312
  },
  {
    id: 'p6',
    name: 'Maggi 2-Minute Instant Noodles, 140g',
    price: 28,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
    category: 'Snacks',
    badge: 'Popular',
    rating: 4.8,
    reviews: 540
  },
  {
    id: 'p7',
    name: 'Lays Potato Chips - India\'s Magic Masala, 50g',
    price: 20,
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400',
    category: 'Snacks',
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'p8',
    name: 'Dettol Original Liquid Handwash Refill, 750ml',
    price: 115,
    originalPrice: 125,
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=400',
    category: 'Personal Care',
    rating: 4.7,
    reviews: 421
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Rajesh Kumar',
    rating: 5,
    text: 'Best supermarket in Sitapur! They have everything you need for the family. The staff is very polite and helpful. Prices are also very reasonable compared to local shops.',
    date: '2 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=16a34a&color=fff'
  },
  {
    id: 't2',
    author: 'Sunita Mishra',
    rating: 5,
    text: 'Very clean and well-organized store. I can find all my grocery and household items easily. They always have good offers running. Highly recommended for daily needs.',
    date: '1 month ago',
    avatar: 'https://ui-avatars.com/api/?name=Sunita+Mishra&background=f97316&color=fff'
  },
  {
    id: 't3',
    author: 'Amit Verma',
    rating: 4,
    text: 'Great variety of products. The vegetables are always fresh and billing is quite fast. Parking is also available which is a big plus.',
    date: '2 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Amit+Verma&background=1e3a8a&color=fff'
  }
];

export const STORE_INFO = {
  name: 'NND Family Mart',
  address: 'NND Family Mart, Near Eye Hospital, Sitapur, Uttar Pradesh 261001',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  hours: 'Mon - Sun: 8:00 AM - 10:00 PM',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.669862276537!2d80.66978695!3d27.56653245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998c761b65b6ad1%3A0xc64fb4c063cfce4d!2sSitapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.google.com/?q=Sitapur,Uttar+Pradesh', // Generic link, since we don't have the exact Maps CID
  rating: 4.8,
  reviewCount: 342,
};
