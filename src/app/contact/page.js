import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact Us | SLJ Solutions',
  description: 'Get in touch with SLJ Solutions - Award-winning interior design company in Delhi. Contact us at +91 99535 51248 or sales@sljsolutions.com. Located in Krishna Nagar, New Delhi. Free consultation available.',
  keywords: [
    'contact SLJ Solutions',
    'interior designer contact Delhi',
    'SLJ Solutions phone number',
    'interior design consultation',
    'Krishna Nagar interior designer',
    'Delhi interior design contact',
    'SLJ Solutions email',
  ],
  openGraph: {
    title: 'Contact Us | SLJ Solutions',
    description: 'Get in touch with SLJ Solutions for your interior design needs. Free consultation available.',
    url: 'https://sljsolutions.com/contact',
    siteName: 'SLJ Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SLJ Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | SLJ Solutions',
    description: 'Get in touch with SLJ Solutions for your interior design needs.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sljsolutions.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
