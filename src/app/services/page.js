import ServicesPageClient from './ServicesPageClient';

export const metadata = {
  title: 'Our Services | SLJ Solutions',
  description: 'Comprehensive interior design services: Turnkey projects, office interiors, residential interiors, modular kitchens, wardrobes, terrace gardens & landscaping. Complete MEP services for commercial spaces. Delhi NCR.',
  keywords: [
    'interior design services',
    'office interior design',
    'residential interior design',
    'modular kitchen Delhi',
    'turnkey interior solutions',
    'MEP services',
    'commercial interior design',
    'interior contractor Delhi',
    'SLJ Solutions services',
  ],
  openGraph: {
    title: 'Our Services | SLJ Solutions',
    description: 'Comprehensive interior design services: Turnkey projects, office interiors, residential interiors, modular kitchens & more.',
    url: 'https://sljsolutions.com/services',
    siteName: 'SLJ Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SLJ Solutions Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | SLJ Solutions',
    description: 'Comprehensive interior design services for all your needs.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sljsolutions.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
