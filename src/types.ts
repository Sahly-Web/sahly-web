export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
  popular?: boolean;
  color: string;
  accentColor: string;
}

export interface PackageItem {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  numericPrice: number;
  period?: string;
  description: string;
  popular?: boolean;
  badge?: string;
  features: { text: string; included: boolean; highlight?: boolean }[];
  deliveryTime: string;
  whatsappMessage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  comment: string;
  rating: number;
  avatar: string;
  metrics?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  techs: string[];
  metrics: string;
  previewType: 'store' | 'dashboard' | 'corporate' | 'branding';
}
