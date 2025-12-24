import ProjectsPageClient from './ProjectsPageClient';

export const metadata = {
  title: 'Our Projects | SLJ Solutions',
  description: 'Explore SLJ Solutions portfolio - Featured interior design projects including DLF Corporate Office, Bestech Residence, BPTP Office Space, and more. Residential, commercial, office & modular interior projects in Delhi NCR.',
  keywords: [
    'SLJ Solutions projects',
    'interior design portfolio',
    'Delhi interior projects',
    'residential interior projects',
    'commercial interior projects',
    'office interior design projects',
    'modular kitchen projects',
    'SLJ Solutions work',
  ],
  openGraph: {
    title: 'Our Projects | SLJ Solutions',
    description: 'Explore our portfolio of completed interior design projects in Delhi NCR.',
    url: 'https://sljsolutions.com/projects',
    siteName: 'SLJ Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SLJ Solutions Projects',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects | SLJ Solutions',
    description: 'Explore our portfolio of completed interior design projects.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sljsolutions.com/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
