'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';
import Button from '../ui/Button';
import { useModal } from '../ui/EnquiryModal';
import { 
  ArrowRight, Building2, Home, Paintbrush, 
  Sofa, Trees, Palette, Warehouse, Armchair 
} from 'lucide-react';

// SLJ Solutions actual services from company profile
const services = [
  {
    icon: Warehouse,
    title: 'Turnkey Civil Construction',
    description: 'Complete construction projects from design to delivery. We handle everything as a one-stop solution for your building needs.',
    featured: true,
  },
  {
    icon: Building2,
    title: 'Office Interior & Fitout',
    description: 'Professional office interiors with aesthetical design. Cost efficient and timely completion with utmost quality.',
    featured: true,
  },
  {
    icon: Home,
    title: 'Residential Interior Design',
    description: 'Transform your home into a beautiful living space with our expert residential interior design services.',
    featured: true,
  },
  {
    icon: Armchair,
    title: 'Modular Kitchens & Wardrobes',
    description: 'Custom modular solutions for kitchens, wardrobes, and vanity units. Modern designs to suit your lifestyle.',
    featured: true,
  },
  {
    icon: Sofa,
    title: 'IKEA Furnishing & Furniture',
    description: 'Expert supply and installation of world-class IKEA furniture and furnishing solutions for your space.',
    featured: false,
  },
  {
    icon: Trees,
    title: 'Terrace Gardens & Balcony',
    description: 'Beautiful terrace gardens and balcony upgrades to bring nature into your urban living space.',
    featured: false,
  },
  {
    icon: Palette,
    title: 'Wall Murals & Arts',
    description: 'Cost effective artworks in printed and handmade format to add aesthetic value to your walls.',
    featured: false,
  },
  {
    icon: Paintbrush,
    title: 'Sculptures & Artefacts',
    description: 'Wide range of stone and metal sculptures in vibrant designs. Custom crafting available.',
    featured: false,
  },
];

export default function ServicesSection() {
  const { openModal } = useModal();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ED2028]/5 to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                What We Do
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a]">
                Our Services
              </h2>
            </div>
            <Link href="/services">
              <Button
                variant="outline"
                icon={<ArrowRight size={18} />}
                className="border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white font-nav"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Featured Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.filter(s => s.featured).map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-white p-8 border border-gray-100
                              transition-all duration-500 ease-out
                              hover:border-[#ED2028]/30 hover:shadow-xl hover:shadow-[#ED2028]/5">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center 
                                bg-[#ED2028]/10 text-[#ED2028] mb-6
                                group-hover:bg-[#ED2028] group-hover:text-white
                                transition-all duration-400">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-3
                               group-hover:text-[#ED2028] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Enquire Button */}
                  <button 
                    onClick={openModal}
                    className="inline-flex items-center gap-2 text-[#ED2028] font-nav text-xs 
                             uppercase tracking-wider font-medium
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Enquire Now
                    <ArrowRight size={14} />
                  </button>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[3px] bg-[#ED2028]"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Number badge */}
                  <span className="absolute top-4 right-4 text-4xl font-heading font-bold text-gray-100
                                 group-hover:text-[#ED2028]/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other Services - Compact */}
        <FadeIn delay={0.3}>
          <div className="bg-white p-8 border border-gray-100">
            <h4 className="font-nav text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
              More Services
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.filter(s => !s.featured).map((service) => (
                <motion.button
                  key={service.title}
                  onClick={openModal}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-left group"
                >
                  <div className="w-10 h-10 flex items-center justify-center 
                                bg-gray-100 text-gray-600
                                group-hover:bg-[#ED2028]/10 group-hover:text-[#ED2028]
                                transition-all duration-300">
                    <service.icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-body text-sm text-[#0a0a0a] 
                                 group-hover:text-[#ED2028] transition-colors">
                    {service.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
