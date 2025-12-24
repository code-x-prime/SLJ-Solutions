import AboutClient from '@/components/client/AboutClient';

export const metadata = {
  title: 'About Us | SLJ Solutions',
  description: 'Learn about SLJ Solutions - Award-winning interior design company since 2009. 15+ years of experience, 500+ projects completed. Specializing in residential, commercial & turnkey interior solutions in Delhi NCR.',
  keywords: [
    'about SLJ Solutions',
    'interior design company Delhi',
    'interior designers since 2009',
    'SLJ Solutions team',
    'interior design experience',
    'Delhi interior company',
    'Krishna Nagar interior designers',
  ],
  openGraph: {
    title: 'About Us | SLJ Solutions',
    description: 'Award-winning interior design company since 2009. 15+ years of experience, 500+ projects completed.',
    url: 'https://sljsolutions.com/about',
    siteName: 'SLJ Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About SLJ Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | SLJ Solutions',
    description: 'Award-winning interior design company since 2009.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sljsolutions.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
