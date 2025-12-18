import "./globals.css";
import { ModalProvider } from '@/components/ui/EnquiryModal';

// ============================================
// SEO METADATA
// ============================================
export const metadata = {
  title: {
    default: "SLJ Solutions | One Solution For All Your Interior Needs",
    template: "%s | SLJ Solutions",
  },
  description: "SLJ Solutions - Award-winning interior design company since 2009. Specializing in residential, commercial & turnkey interior solutions. Modular kitchens, office interiors, renovations & more.",
  keywords: [
    "SLJ Solutions",
    "interior design",
    "interior design company",
    "office interior",
    "residential interior",
    "commercial interior",
    "turnkey interior solutions",
    "modular kitchen",
    "wardrobes",
    "IKEA furnishing",
    "Delhi interior designer",
    "Krishna Nagar",
  ],

  authors: [{ name: "SLJ Solutions", url: "https://sljsolutions.com" }],
  creator: "SLJ Solutions",
  publisher: "SLJ Solutions",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sljsolutions.com",
    siteName: "SLJ Solutions",
    title: "SLJ Solutions | One Solution For All Your Interior Needs",
    description: "Award-winning interior design company since 2009. Turnkey civil construction, office interiors, modular kitchens & more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SLJ Solutions - Interior Design Excellence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SLJ Solutions | Interior Design Excellence",
    description: "Award-winning interior design company since 2009.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://sljsolutions.com",
  },

  category: "Interior Design",
};

// ============================================
// VIEWPORT CONFIGURATION
// ============================================
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesigner",
              "name": "SLJ Solutions",
              "description": "One Solution For All Your Interior Needs - Award-winning interior design company since 2009",
              "url": "https://sljsolutions.com",
              "logo": "https://sljsolutions.com/logo.png",
              "image": "https://sljsolutions.com/og-image.jpg",
              "telephone": "+91-9953551248",
              "email": "sales@sljsolutions.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C-15/1, Street No. 7, Near Gandhi Park, New Govind Pura",
                "addressLocality": "Krishna Nagar",
                "addressRegion": "New Delhi",
                "postalCode": "110092",
                "addressCountry": "IN"
              },
              "foundingDate": "2009",
              "sameAs": [
                "https://www.instagram.com/sljsolutions",
                "https://www.linkedin.com/company/sljsolutions",
                "https://www.facebook.com/sljsolutions"
              ],
              "priceRange": "$$"
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-[#ED2028] text-white px-4 py-2 z-[100] font-nav text-sm"
        >
          Skip to main content
        </a>

        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
