export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  category: PackageCategory;
  destination: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  bestTime: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  featured?: boolean;
  trending?: boolean;
  discount?: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  accommodation?: string;
}

export type PackageCategory = 
  | 'family' 
  | 'honeymoon' 
  | 'religious' 
  | 'corporate' 
  | 'group' 
  | 'weekend' 
  | 'adventure'
  | 'educational';

export interface TransportService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  priceRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
  tourPackage: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  travelers: number;
  budget: string;
  packageType: PackageCategory | '';
  message: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  packageCount: number;
  startingPrice: number;
  description: string;
}
