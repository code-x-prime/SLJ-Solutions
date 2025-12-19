'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';
import Button from '../ui/Button';
import { useModal } from '../ui/EnquiryModal';
import { ArrowRight } from 'lucide-react';

// React Icons - Reliable and well-tested
import { FaTools, FaBuilding, FaHome, FaTree } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';

/**
 * Core Services - EXACTLY 5 as specified
 * 1. Turnkey Projects – Civil & Interior Works (including MEP Design & Build)
 * 2. Office Interiors – Commercial & Corporate Spaces
 * 3. Residential Interiors – Flats & Apartments
 * 4. Modular Kitchens, Wardrobes & Customized Furnishings
 * 5. Terrace Gardens & Outdoor Landscaping
 */
const services = [
  {
    id: 1,
    icon: FaTools,
    title: 'Turnkey Projects',
    subtitle: 'Civil & Interior Works',
    description: 'Complete turnkey solutions including MEP Design & Build. One-stop partner for construction and interior projects.',
  },
  {
    id: 2,
    icon: FaBuilding,
    title: 'Office Interiors',
    subtitle: 'Commercial & Corporate',
    description: 'Professional office interiors designed for productivity. Inspiring commercial and corporate workspaces.',
  },
  {
    id: 3,
    icon: FaHome,
    title: 'Residential Interiors',
    subtitle: 'Flats & Apartments',
    description: 'Transform your home into a beautiful living space with personalized interior design solutions.',
  },
  {
    id: 4,
    icon: MdKitchen,
    title: 'Modular Kitchens & Wardrobes',
    subtitle: 'Customized Furnishings',
    description: 'Premium modular kitchens, wardrobes, and customized furnishings with smart storage solutions.',
  },
  {
    id: 5,
    icon: FaTree,
    title: 'Terrace Gardens',
    subtitle: 'Outdoor Landscaping',
    description: 'Beautiful terrace gardens and outdoor landscaping. Bring nature into your urban space.',
  },
];

export default function ServicesSection() {
  const { openModal } = useModal();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ED2028]/5 to-transparent pointer-events-none" />

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

        {/* Services Grid - 3 per row desktop, 2 tablet, 1 mobile */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full"
              >
                <div
                  className="
                    relative h-full bg-white p-6 md:p-8
                    border border-gray-100
                    transition-all duration-500 ease-out
                    hover:border-[#ED2028]/20 
                    hover:shadow-xl hover:shadow-black/5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14 flex items-center justify-center 
                      bg-[#ED2028]/10 text-[#ED2028] mb-5
                      group-hover:bg-[#ED2028] group-hover:text-white
                      transition-all duration-400
                    "
                  >
                    <service.icon size={28} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className="
                      font-heading text-lg md:text-xl font-semibold text-[#0a0a0a] mb-1
                      group-hover:text-[#ED2028] transition-colors duration-300
                    "
                  >
                    {service.title}
                  </h3>
                  <span className="block text-[#ED2028] font-nav text-xs uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Enquire Button - visible on hover */}
                  <button
                    onClick={openModal}
                    className="
                      inline-flex items-center gap-2 
                      text-[#ED2028] font-nav text-xs 
                      uppercase tracking-wider font-medium
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300
                      hover:underline
                    "
                  >
                    Enquire Now
                    <ArrowRight size={14} />
                  </button>

                  {/* Bottom accent line on hover */}
                  <div
                    className="
                      absolute bottom-0 left-0 h-[3px] bg-[#ED2028]
                      w-0 group-hover:w-full
                      transition-all duration-500 ease-out
                    "
                  />

                  {/* Number badge */}
                  <span
                    className="
                      absolute top-4 right-4 
                      text-4xl font-heading font-bold text-gray-100
                      group-hover:text-[#ED2028]/10 
                      transition-colors duration-300
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
