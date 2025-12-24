import HomeClient from '@/components/client/HomeClient';

export const metadata = {
  title: 'SLJ Solutions | One Solution For All Your Interior Needs',
  description: 'Award-winning interior design company since 2009. Specializing in residential, commercial & turnkey interior solutions. Modular kitchens, office interiors, renovations & more. Based in Delhi, India.',
  keywords: [
    'SLJ Solutions',
    'interior design',
    'interior design company',
    'office interior',
    'residential interior',
    'commercial interior',
    'turnkey interior solutions',
    'modular kitchen',
    'wardrobes',
    'Delhi interior designer',
    'Krishna Nagar',
    'interior design Delhi',
    'home interior design',
    'office interior design',
    'interior contractor',
  ],
  openGraph: {
    title: 'SLJ Solutions | One Solution For All Your Interior Needs',
    description: 'Award-winning interior design company since 2009. Specializing in residential, commercial & turnkey interior solutions.',
    url: 'https://sljsolutions.com',
    siteName: 'SLJ Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SLJ Solutions - Interior Design Excellence',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SLJ Solutions | Interior Design Excellence',
    description: 'Award-winning interior design company since 2009.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sljsolutions.com',
  },
};

export default function Home() {
  return <HomeClient />;
}
