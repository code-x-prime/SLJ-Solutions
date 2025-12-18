'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import { useModal } from '@/components/ui/EnquiryModal';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { 
  ArrowRight, Building2, Home, Paintbrush, 
  Sofa, Trees, Palette, Warehouse, Armchair, Sparkles 
} from 'lucide-react';

// SLJ Solutions actual services from company profile
const services = [
  {
    icon: Warehouse,
    title: 'Turnkey Civil Construction',
    description: 'Complete turnkey construction projects from design to delivery. We handle everything as a one-stop solution for your building needs. Our expertise covers residential, commercial, and industrial construction with full project management.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    features: ['Complete project management', 'Design to delivery', 'Quality assurance', 'Timely completion'],
  },
  {
    icon: Building2,
    title: 'Office Interior & Fitout',
    description: 'Professional office interiors with aesthetical design. We create inspiring workspaces that boost productivity and reflect your brand identity. Cost efficient and timely completion with utmost quality.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    features: ['Space planning', 'Brand integration', 'Ergonomic design', 'Modern aesthetics'],
  },
  {
    icon: Home,
    title: 'Residential Interior Design',
    description: 'Transform your home into a beautiful living space with our expert residential interior design services. We create personalized interiors that reflect your lifestyle and preferences.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom designs', 'Full home interiors', 'Renovation', 'Space optimization'],
  },
  {
    icon: Armchair,
    title: 'Modular Kitchens & Wardrobes',
    description: 'Custom modular solutions for kitchens, wardrobes, and vanity units. Modern designs crafted to perfection with premium materials to suit your lifestyle and storage needs.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom modular units', 'Premium materials', 'Smart storage', 'Modern finishes'],
  },
  {
    icon: Sofa,
    title: 'IKEA Furnishing & Furniture',
    description: 'Expert supply and installation of world-class IKEA furniture and furnishing solutions. Whether you just moved into a new home or looking to revamp, we bring IKEA excellence to your doorstep.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    features: ['IKEA certified', 'Supply & installation', 'Assembly service', 'Interior styling'],
  },
  {
    icon: Trees,
    title: 'Terrace Gardens & Balcony Upgrades',
    description: 'Beautiful terrace gardens and balcony upgrades to bring nature into your urban living space. We create green oases with vertical gardens, outdoor furniture, and landscape solutions.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    features: ['Vertical gardens', 'Outdoor furniture', 'Landscape design', 'Green solutions'],
  },
  {
    icon: Palette,
    title: 'Wall Murals & Arts',
    description: 'Cost effective artworks in printed and handmade format by various artists. Add aesthetic value to your walls or dead spaces with our curated collection of art pieces.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80',
    features: ['Printed artworks', 'Handmade murals', 'Custom designs', 'Wall décor'],
  },
  {
    icon: Paintbrush,
    title: 'Sculptures & Artefacts',
    description: 'Wide range of stone and metal sculptures in vibrant designs. Custom crafting available to suit your needs. Our sculptures enhance both internal and external areas of any project.',
    image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?auto=format&fit=crop&w=1200&q=80',
    features: ['Stone sculptures', 'Metal art', 'Custom crafting', 'Indoor & outdoor'],
  },
];

export default function ServicesPage() {
  const { openModal } = useModal();

  return (
    <PageTransition>
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
              alt="Interior design services"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />
          </div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
            <FadeIn>
              <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em] mb-6">
                What We Offer
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-[#ED2028]">Services</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-400 font-body max-w-2xl mx-auto leading-relaxed">
                One Solution For All Your Interior Needs - From concept to completion, 
                we offer comprehensive design and construction services.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="space-y-20">
              {services.map((service, index) => (
                <FadeIn key={service.title}>
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? '' : ''
                  }`}>
                    {/* Image */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`relative aspect-[4/3] overflow-hidden ${
                        index % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      {/* Service number */}
                      <div className="absolute top-6 left-6 w-14 h-14 bg-[#ED2028] flex items-center justify-center">
                        <span className="text-white font-heading text-xl font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#ED2028]/10 text-[#ED2028]">
                          <service.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a]">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 font-body text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 font-body">
                            <span className="w-1.5 h-1.5 bg-[#ED2028] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Enquire Now Button - Opens Modal */}
                      <Button 
                        onClick={openModal}
                        icon={<ArrowRight size={18} />} 
                        className="font-nav"
                      >
                        Enquire Now
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-[#ED2028]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <FadeIn>
              <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Your Dream Space
              </h2>
              <p className="text-white/80 font-body text-lg max-w-xl mx-auto mb-10">
                Every great space starts with a conversation. Tell us about your project.
              </p>
              <Button 
                variant="white" 
                size="xl" 
                icon={<ArrowRight size={20} />} 
                onClick={openModal}
                className="font-nav"
              >
                Get Free Consultation
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
