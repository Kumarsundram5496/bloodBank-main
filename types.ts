
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface VolunteerForm {
  name: string;
  email: string;
  phone: string;
  interests: string[];
}

export interface Donation {
  amount: number;
  frequency: 'once' | 'monthly';
  category: 'general' | 'blood-bank' | 'disaster-relief' | 'health-care';
}
