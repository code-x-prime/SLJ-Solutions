'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import { useModal } from '@/components/ui/EnquiryModal';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

// React Icons - Reliable and well-tested
import { FaTools, FaBuilding, FaHome, FaTree } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';

/**
 * Core Services - EXACTLY 5 as specified
 * Full version with bigger cards and detailed descriptions
 */
const services = [
  {
    id: 1,
    icon: FaTools,
    title: 'Turnkey Projects',
    subtitle: 'Civil & Interior Works',
    description: 'Complete turnkey solutions including MEP Design & Build. From concept to completion, we handle everything as your one-stop partner for construction and interior projects. Our comprehensive approach ensures seamless coordination between civil work, interiors, and mechanical-electrical-plumbing systems.',
    features: [
      'Complete project management',
      'MEP Design & Build',
      'Civil construction',
      'Interior fitout',
      'Quality assurance',
      'Timely completion',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    icon: FaBuilding,
    title: 'Office Interiors',
    subtitle: 'Commercial & Corporate Spaces',
    description: 'Professional office interiors designed for productivity and brand identity. We create inspiring commercial and corporate workspaces that reflect your business values. From open-plan offices to executive suites, our designs optimize space utilization and employee wellbeing.',
    features: [
      'Corporate office design',
      'Commercial fitout',
      'Space planning',
      'Brand integration',
      'Ergonomic solutions',
      'Modern aesthetics',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    icon: FaHome,
    title: 'Residential Interiors',
    subtitle: 'Flats & Apartments',
    description: 'Transform your home into a beautiful living space. Expert residential interior design services for flats, apartments, and independent houses with personalized styling. We understand that your home is your sanctuary, and we create spaces that reflect your personality and lifestyle.',
    features: [
      'Full home interiors',
      'Flat renovation',
      'Apartment design',
      'Custom solutions',
      'Space optimization',
      'Personal styling',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    icon: MdKitchen,
    title: 'Modular Kitchens & Wardrobes',
    subtitle: 'Customized Furnishings',
    description: 'Premium modular kitchens, wardrobes, and customized furnishings crafted to perfection. Modern designs with smart storage solutions tailored to your lifestyle. We use high-quality materials and innovative mechanisms to create functional yet beautiful storage solutions.',
    features: [
      'Modular kitchens',
      'Custom wardrobes',
      'Vanity units',
      'Smart storage',
      'Premium materials',
      'Modern finishes',
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    icon: FaTree,
    title: 'Terrace Gardens & Landscaping',
    subtitle: 'Outdoor Landscaping',
    description: 'Beautiful terrace gardens and outdoor landscaping solutions. Bring nature into your urban space with vertical gardens, balcony upgrades, and landscape design. We create green oases that provide tranquility and connect you with nature in the heart of the city.',
    features: [
      'Terrace gardens',
      'Vertical gardens',
      'Balcony design',
      'Outdoor furniture',
      'Landscape planning',
      'Green solutions',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
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
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
              alt="Interior design services"
              fill
              className="object-cover opacity-30"
              priority
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

        {/* Services Grid - Cards Layout */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            
            {/* Grid - 3 per row desktop, 2 tablet, 1 mobile */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative h-full"
                  >
                    <div 
                      className="
                        relative h-full bg-white p-8 md:p-10
                        border border-gray-100
                        transition-all duration-500 ease-out
                        hover:border-[#ED2028]/20 
                        hover:shadow-2xl hover:shadow-black/10
                      "
                    >
                      {/* Service Image */}
                      <div className="relative aspect-video mb-6 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        
                        {/* Number badge on image */}
                        <div className="absolute top-4 left-4 w-10 h-10 bg-[#ED2028] flex items-center justify-center">
                          <span className="text-white font-heading text-sm font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="
                            w-12 h-12 flex items-center justify-center shrink-0
                            bg-[#ED2028]/10 text-[#ED2028]
                            group-hover:bg-[#ED2028] group-hover:text-white
                            transition-all duration-400
                          "
                        >
                          <service.icon size={24} />
                        </div>
                        <div>
                          <h3 
                            className="
                              font-heading text-xl md:text-2xl font-semibold text-[#0a0a0a]
                              group-hover:text-[#ED2028] transition-colors duration-300
                            "
                          >
                            {service.title}
                          </h3>
                          <span className="text-[#ED2028] font-nav text-xs uppercase tracking-wider">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-gray-700 font-body">
                            <CheckCircle size={12} className="text-[#ED2028] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Enquire Button */}
                      <Button 
                        onClick={openModal}
                        size="sm"
                        icon={<ArrowRight size={16} />}
                        className="w-full justify-center font-nav"
                      >
                        Enquire Now
                      </Button>

                      {/* Bottom accent line */}
                      <div 
                        className="
                          absolute bottom-0 left-0 h-[3px] bg-[#ED2028]
                          w-0 group-hover:w-full
                          transition-all duration-500 ease-out
                        "
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-28 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                  How We Work
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a]">
                  Our Process
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Understanding your vision, requirements, and budget.' },
                { step: '02', title: 'Design', desc: 'Creating detailed designs and 3D visualizations.' },
                { step: '03', title: 'Execution', desc: 'Expert craftsmen bring your design to life.' },
                { step: '04', title: 'Delivery', desc: 'Final handover with complete satisfaction.' },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <span className="block text-5xl md:text-6xl font-heading font-bold text-[#ED2028]/20 mb-4">
                      {item.step}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm">
                      {item.desc}
                    </p>
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
