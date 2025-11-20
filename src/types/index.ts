// Type Definitions for Blue Moon Tales Portfolio

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: 'annual' | 'family' | 'team' | 'institutional' | 'corporate' | 'wedding' | 'social' | 'mice' | 'concert';
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'wedding' | 'corporate' | 'concert' | 'social' | 'mice';
  image: string;
  description: string;
  date: string;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}
