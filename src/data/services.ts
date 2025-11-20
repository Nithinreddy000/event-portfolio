import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Annual Day Events',
    description: 'Celebrate milestones with professionally orchestrated annual celebrations',
    icon: '🎉',
    features: ['Event Planning', 'Venue Coordination', 'Entertainment Booking']
  },
  {
    id: '2',
    title: 'Family Day',
    description: 'Create memorable family gatherings with personalized touches',
    icon: '👨‍👩‍👧‍👦',
    features: ['Family Activities', 'Catering Services', 'Photography']
  },
  {
    id: '3',
    title: 'Team Outing',
    description: 'Strengthen team bonds with engaging outdoor experiences',
    icon: '🏕️',
    features: ['Adventure Activities', 'Team Building', 'Transportation']
  },
  {
    id: '4',
    title: 'Institutional Activities',
    description: 'Organize impactful institutional events and ceremonies',
    icon: '🏛️',
    features: ['Conference Management', 'Guest Coordination', 'AV Setup']
  },
  {
    id: '5',
    title: 'Corporate Events',
    description: 'Execute flawless corporate functions and business gatherings',
    icon: '💼',
    features: ['Product Launches', 'Conferences', 'Executive Meetings']
  },
  {
    id: '6',
    title: 'Weddings',
    description: 'Transform wedding dreams into unforgettable celebrations',
    icon: '💍',
    features: ['Full Wedding Planning', 'Décor & Design', 'Vendor Management']
  },
  {
    id: '7',
    title: 'Social Events',
    description: 'Host elegant social gatherings and milestone celebrations',
    icon: '🎊',
    features: ['Birthdays', 'Anniversaries', 'Reunions']
  },
  {
    id: '8',
    title: 'MICE Events',
    description: 'Deliver seamless meetings, incentives, conferences, and exhibitions',
    icon: '🎯',
    features: ['Conference Planning', 'Exhibition Setup', 'Travel Coordination']
  },
  {
    id: '9',
    title: 'Live Concerts',
    description: 'Stage spectacular live music experiences and performances',
    icon: '🎸',
    features: ['Artist Management', 'Sound & Lighting', 'Crowd Management']
  },
];

export const navigationLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
