export interface Program {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export const PROGRAMS: Program[] = [
  { id: 'muscle', name: 'Muscle Building', description: 'Hypertrophy-focused training for maximum muscle growth and strength.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600' },
  { id: 'weight-loss', name: 'Weight Loss', description: 'High-intensity workouts designed to burn fat and improve cardiovascular health.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600' },
  { id: 'strength', name: 'Strength Training', description: 'Powerlifting and functional strength exercises to build raw power.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600' },
  { id: 'functional', name: 'Functional Training', description: 'Improve your everyday movement patterns and overall athletic performance.', image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=600' },
  { id: 'cardio', name: 'Cardio Fitness', description: 'Endurance building sessions utilizing premium cardio equipment.', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600' },
  { id: 'personal', name: 'Personal Training', description: '1-on-1 expert guidance tailored to your specific fitness goals.', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600' },
  { id: 'beginner', name: 'Beginner Fitness', description: 'A safe and structured introduction to gym equipment and exercises.', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=600' },
  { id: 'womens', name: 'Women\'s Fitness', description: 'Empowering fitness programs designed specifically for women.', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600' }
];

export const PLANS: PricingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: '₹1,500',
    duration: '1 Month',
    features: ['Access to all equipment', 'Cardio & Strength Area', 'Locker Room Access', 'Free Diet Consultation']
  },
  {
    id: 'quarterly',
    name: 'Quarterly Plan',
    price: '₹4,000',
    duration: '3 Months',
    features: ['Access to all equipment', 'Cardio & Strength Area', 'Locker Room Access', '1 Free Personal Training Session', 'Custom Diet Plan'],
    recommended: true
  },
  {
    id: 'half-yearly',
    name: 'Half-Yearly Plan',
    price: '₹7,000',
    duration: '6 Months',
    features: ['Access to all equipment', 'Cardio & Strength Area', 'Locker Room Access', '3 Free PT Sessions', 'Custom Diet & Workout Plan', 'Free Gym Merchandise']
  },
  {
    id: 'annual',
    name: 'Annual Plan',
    price: '₹12,000',
    duration: '12 Months',
    features: ['Access to all equipment', 'Cardio & Strength Area', 'Locker Room Access', '5 Free PT Sessions', 'Custom Diet & Workout Plan', 'Premium Gym Kit', 'Freeze Option Available']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Vikram Singh',
    rating: 5,
    text: 'Best gym in Sitapur! The equipment is top-notch, and the trainers are incredibly knowledgeable. Ive seen amazing results in just 3 months.',
    date: '2 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=D4AF37&color=000'
  },
  {
    id: 't2',
    author: 'Neha Sharma',
    rating: 5,
    text: 'A very safe and professional environment. The trainers give personal attention even during general workouts. Highly recommended for women.',
    date: '1 month ago',
    avatar: 'https://ui-avatars.com/api/?name=Neha+Sharma&background=2563EB&color=fff'
  },
  {
    id: 't3',
    author: 'Rahul Verma',
    rating: 5,
    text: 'Premium vibe, great music, and serious lifters. If you want to build muscle and need a hardcore yet clean gym, this is the place.',
    date: '2 months ago',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=1C1C1C&color=fff'
  }
];

export const STORE_INFO = {
  name: 'Veer The Muscle Academy Gym',
  address: 'Veer The Muscle Academy Gym, Sitapur, Uttar Pradesh 261001',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  hours: 'Mon - Sat: 5:00 AM - 10:00 PM | Sun: Closed',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14197.669862276537!2d80.66978695!3d27.56653245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998c761b65b6ad1%3A0xc64fb4c063cfce4d!2sSitapur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin',
  googleMapsLink: 'https://maps.google.com/?q=Sitapur,Uttar+Pradesh',
  rating: 4.9,
  reviewCount: 128,
};
