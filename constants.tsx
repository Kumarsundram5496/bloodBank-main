
import React from 'react';
import { 
  Droplet, 
  HeartPulse, 
  ShieldAlert, 
  GraduationCap, 
  Truck, 
  Stethoscope, 
  Users, 
  HandHelping 
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Blood Bank', href: '/blood-bank' },
  { label: 'Services', href: '/services' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'blood-bank',
    title: 'Blood Bank & Storage',
    description: 'Providing safe and reliable blood products 24/7 with state-of-the-art screening.',
    icon: <Droplet className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/484/800/600'
  },
  {
    id: 'health-care',
    title: 'Health Care Services',
    description: 'Affordable clinics, diagnostic services, and maternal health programs for the underprivileged.',
    icon: <HeartPulse className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/225/800/600'
  },
  {
    id: 'disaster-management',
    title: 'Disaster Management',
    description: 'Rapid response teams and relief materials for natural disasters and emergencies.',
    icon: <ShieldAlert className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/442/800/600'
  },
  {
    id: 'vocational-training',
    title: 'Vocational Training',
    description: 'Skill development programs empowering women and youth for financial independence.',
    icon: <GraduationCap className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/20/800/600'
  },
  {
    id: 'ambulance-service',
    title: 'Emergency Ambulance',
    description: 'Quick response cardiac and basic life support ambulance services across the region.',
    icon: <Truck className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/1070/800/600'
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Center',
    description: 'Specialized rehabilitation and physiotherapy services for chronic pain and post-surgery recovery.',
    icon: <Stethoscope className="w-8 h-8 text-red-600" />,
    imageUrl: 'https://picsum.photos/id/382/800/600'
  }
];

export const STATS = [
  { label: 'Lives Impacted', value: '0k+', icon: <Users className="w-6 h-6" /> },
  { label: 'Blood Units Collected', value: '0k+', icon: <Droplet className="w-6 h-6" /> },
  { label: 'Volunteers', value: '0k+', icon: <HandHelping className="w-6 h-6" /> },
  { label: 'Years of Service', value: '50+', icon: <ShieldAlert className="w-6 h-6" /> },
];
