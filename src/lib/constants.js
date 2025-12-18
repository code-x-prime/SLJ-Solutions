/**
 * Application Constants
 * Centralized configuration and data for the SLJ Solutions website
 */

// ============================================
// BRAND CONFIGURATION
// ============================================
export const BRAND = {
  name: 'SLJ Solutions',
  tagline: 'Luxury Interior Design',
  description: 'Award-winning luxury interior design services for residential and commercial spaces.',
  email: 'sales@sljsolutions.com',
  phone: '+1 (234) 567-890',
  address: {
    street: '123 Design Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    full: '123 Design Avenue, New York, NY 10001',
  },
  hours: 'Mon - Fri: 9AM - 6PM',
  social: {
    instagram: 'https://instagram.com/sljsolutions',
    linkedin: 'https://linkedin.com/company/sljsolutions',
    facebook: 'https://facebook.com/sljsolutions',
    pinterest: 'https://pinterest.com/sljsolutions',
  },
};

// ============================================
// COLORS
// ============================================
export const COLORS = {
  primary: '#ED2028',
  primaryDark: '#c41a20',
  primaryLight: '#ff4d54',
  white: '#ffffff',
  black: '#0a0a0a',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

// ============================================
// NAVIGATION
// ============================================
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

// ============================================
// SERVICES
// ============================================
export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Design',
    description: 'Transform your home into a sanctuary of style and comfort with our bespoke residential design services.',
    icon: 'Home',
  },
  {
    id: 'commercial',
    title: 'Commercial Spaces',
    description: 'Create inspiring workspaces that boost productivity and reflect your brand identity.',
    icon: 'Building2',
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Breathe new life into existing spaces with our comprehensive renovation expertise.',
    icon: 'Paintbrush',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Expert guidance for your design decisions, from concept to completion.',
    icon: 'Lightbulb',
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Optimize every square foot with intelligent, functional layouts that flow beautifully.',
    icon: 'Ruler',
  },
  {
    id: 'furniture',
    title: 'Furniture Curation',
    description: 'Handpicked furniture and décor that perfectly complement your space and lifestyle.',
    icon: 'Armchair',
  },
];

// ============================================
// STATS
// ============================================
export const STATS = [
  { value: '250+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Design Awards' },
];

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'SLJ Solutions transformed our apartment into something beyond our wildest dreams. Their attention to detail and understanding of our lifestyle was remarkable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, TechVenture',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    text: 'Our new office space has completely changed how our team works. The design fosters creativity and collaboration while maintaining professionalism.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Hotel Manager',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'The lobby redesign has received countless compliments from our guests. SLJ Solutions understood our brand perfectly.',
    rating: 5,
  },
];

// ============================================
// PROJECTS
// ============================================
export const PROJECTS = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    location: 'New York, NY',
    year: '2024',
    size: 'large',
    description: 'A stunning penthouse transformation featuring panoramic city views and bespoke Italian furnishings.',
  },
  {
    id: 2,
    title: 'Luxe Hotel Lobby',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    location: 'Miami, FL',
    year: '2024',
    size: 'tall',
    description: 'Grand lobby design with marble accents and custom lighting installations.',
  },
  {
    id: 3,
    title: 'Tech Startup HQ',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'San Francisco, CA',
    year: '2023',
    size: 'medium',
    description: 'Modern workspace promoting creativity and collaboration.',
  },
];

// ============================================
// ANIMATION SETTINGS
// ============================================
export const ANIMATION = {
  ease: {
    luxury: [0.22, 1, 0.36, 1],
    smooth: [0.16, 1, 0.3, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

// ============================================
// BREAKPOINTS (matches Tailwind)
// ============================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};


