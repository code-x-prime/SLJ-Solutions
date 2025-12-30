'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useModal } from '@/components/ui/EnquiryModal';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/ScrollAnimations';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';


const coreServices = [
    {
        id: 1,
        icon: '/services/turnkey-projects.svg',
        title: 'Turnkey Projects',
        subtitle: 'Civil & Interior Works',
        description: 'Complete turnkey solutions including MEP Design & Build. From concept to completion, we handle everything as your one-stop partner for construction and interior projects.',
        features: ['Complete project management', 'MEP Design & Build', 'Civil construction', 'Interior fitout'],
        image: '/services/turnkey-projects.jpg',
    },
    {
        id: 2,
        icon: '/services/office-interiors.svg',
        title: 'Office Interiors',
        subtitle: 'Commercial & Corporate Spaces',
        description: 'Professional office interiors designed for productivity and brand identity. We create inspiring commercial and corporate workspaces that reflect your business values.',
        features: ['Corporate office design', 'Commercial fitout', 'Space planning', 'Brand integration'],
        image: '/services/office-interiors.jpg',
    },
    {
        id: 3,
        icon: '/services/residential-interiors.svg',
        title: 'Residential Interiors',
        subtitle: 'Flats & Apartments',
        description: 'Transform your home into a beautiful living space. Expert residential interior design services for flats, apartments, and independent houses with personalized styling.',
        features: ['Full home interiors', 'Flat renovation', 'Apartment design', 'Custom solutions'],
        image: '/services/residential-interiors.jpg',
    },
    {
        id: 4,
        icon: '/services/modular-kitchens.svg',
        title: 'Modular Kitchens & Wardrobes',
        subtitle: 'Customized Furnishings',
        description: 'Premium modular kitchens, wardrobes, and customized furnishings crafted to perfection. Modern designs with smart storage solutions tailored to your lifestyle.',
        features: ['Modular kitchens', 'Custom wardrobes', 'Vanity units', 'Smart storage'],
        image: '/services/modular-kitchens.jpg',
    },
    {
        id: 5,
        icon: '/services/terrace-gardens.svg',
        title: 'Terrace Gardens & Landscaping',
        subtitle: 'Outdoor Landscaping',
        description: 'Beautiful terrace gardens and outdoor landscaping solutions. Bring nature into your urban space with vertical gardens, balcony upgrades, and landscape design.',
        features: ['Terrace gardens', 'Vertical gardens', 'Balcony design', 'Outdoor furniture'],
        image: '/services/terrace-gardens.jpg',
    },
];

/**
 * =============================================
 * SECTION 2: DETAILED OFFICE SERVICES
 * Cherry Hill style grid - All MEP & Office services
 * =============================================
 */
const detailedServices = [
    { id: 1, svg: '/interiors.svg', name: 'Interiors' },
    { id: 2, svg: '/civil.svg', name: 'Civil' },
    { id: 3, svg: '/networking.svg', name: 'Networking' },
    { id: 4, svg: '/audio-video.svg', name: 'Audio-Video' },
    { id: 5, svg: '/security-systems.svg', name: 'Security Systems' },
    { id: 6, svg: '/air-conditioning.svg', name: 'Air Conditioning' },
    { id: 7, svg: '/electricals.svg', name: 'Electricals' },
    { id: 8, svg: '/plumbing.svg', name: 'Plumbing' },
    { id: 9, svg: '/fire-fighting.svg', name: 'Fire-Fighting' },
    { id: 10, svg: '/ups.svg', name: 'UPS' },
    { id: 11, svg: '/pac.svg', name: 'PAC' },
    { id: 12, svg: '/access-control.svg', name: 'Access Control' },
    { id: 13, svg: '/hvac.svg', name: 'HVAC' },
    { id: 14, svg: '/fapa.svg', name: 'FAPA' },
    { id: 15, svg: '/bms.svg', name: 'BMS' },
    { id: 16, svg: '/lighting-control.svg', name: 'Lighting Control' },
    { id: 17, svg: '/work-stations.svg', name: 'Work Stations' },
    { id: 18, svg: '/chairs.svg', name: 'Chairs' },
    { id: 19, svg: '/soft-seating.svg', name: 'Soft Seating' },
    { id: 20, svg: '/de-mountable-partitions.svg', name: 'De-Mountable Partitions' },
    { id: 21, svg: '/acoustic-panels.svg', name: 'Acoustic Panels' },
    { id: 22, svg: '/flooring.svg', name: 'Flooring' },
];

/**
 * Core Work Card Component - Premium Design
 */
function CoreWorkCard({ service, index }) {
    const { openModal } = useModal();

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-full"
        >
            <div
                className="
          relative h-full bg-white p-8 lg:p-10
          border border-gray-100
          transition-all duration-500 ease-out
          hover:border-[#ED2028]/20 
          hover:shadow-2xl hover:shadow-black/10
        "
            >
                {/* Service Image */}
                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Number badge on image */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#ED2028] flex items-center justify-center">
                        <span className="text-white font-heading text-lg font-bold">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                    <div
                        className="
              w-14 h-14 flex items-center justify-center shrink-0
              bg-[#ED2028]/10 
              group-hover:bg-[#ED2028] 
              transition-all duration-400
              rounded-lg
            "
                    >
                        <Image 
                            src={service.icon} 
                            alt={service.title} 
                            width={32} 
                            height={32} 
                            className="w-10 h-10 text-[#ED2028] group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                    </div>
                    <div>
                        <h3
                            className="
                font-heading text-xl lg:text-2xl font-semibold text-[#0a0a0a]
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
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
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
    );
}

/**
 * Service Grid Item - Cherry Hill Style
 */
function ServiceGridItem({ service }) {
    return (
        <motion.div
            whileHover={{ y: -4, backgroundColor: '#fafafa' }}
            transition={{ duration: 0.2 }}
            className="
        group flex items-center gap-4 p-4 md:p-5
        bg-white border border-gray-100
        hover:border-[#ED2028]/20 hover:shadow-lg
        transition-all duration-300 cursor-pointer
      "
        >
            {/* Icon with SVG */}
            <div
                className="
          w-12 h-12 flex items-center justify-center shrink-0
          bg-[#ED2028]/10
          group-hover:bg-[#ED2028]
          transition-all duration-300
          relative
        "
            >
                <Image
                    src={service.svg}
                    alt={service.name}
                    width={30}
                    height={30}
                    className="
            w-8 h-8
            transition-all duration-300
            group-hover:brightness-0 group-hover:invert
          "
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Service Name */}
            <span
                className="
          font-body text-sm md:text-base text-[#0a0a0a] font-medium
          group-hover:text-[#ED2028] transition-colors duration-300
        "
            >
                {service.name}
            </span>
        </motion.div>
    );
}

export default function ServicesPageClient() {
    const { openModal } = useModal();

    return (
        <PageTransition showLoader={true}>
            {/* Scroll Progress Indicator */}
            <ScrollProgress />

            <Navbar />

            <main id="main-content">
                {/* Hero Section - Light & Graceful */}
                <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/services/service.jpg"
                            alt="Services Banner"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
                        <FadeIn>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="w-12 h-px bg-[#ED2028]" />
                                <span className="text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em]">
                                    What We Offer
                                </span>
                                <span className="w-12 h-px bg-[#ED2028]" />
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Our <span className="text-[#ED2028]">Services</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-200 font-body max-w-2xl mx-auto leading-relaxed">
                                One Solution For All Your Interior Needs - From concept to completion,
                                we offer comprehensive design and construction services.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Bottom border accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ED2028]/30 to-transparent" />
                </section>

                {/* =============================================
            SECTION 1: CORE WORK - Premium Cards
            ============================================= */}
                <section className="py-10 md:py-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        {/* Section Header */}
                        <FadeIn>
                            <div className="text-center mb-16">
                                <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                                    What We Specialize In
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
                                    Core Work
                                </h2>
                                <p className="text-gray-600 font-body max-w-2xl mx-auto">
                                    Our primary expertise areas delivering excellence in every project
                                </p>
                            </div>
                        </FadeIn>

                        {/* Core Services Grid - Premium Cards */}
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreServices.map((service, index) => (
                                <StaggerItem key={service.id}>
                                    <CoreWorkCard service={service} index={index} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* =============================================
            SECTION 2: DETAILED OFFICE SERVICES
            Cherry Hill Style Grid
            ============================================= */}
                <section className="py-10 md:py-16 bg-[#fafafa]">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        {/* Section Header */}
                        <FadeIn>
                            <div className="text-center mb-16">
                                <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                                    Complete Solutions
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
                                    Office & MEP Services
                                </h2>
                                <p className="text-gray-600 font-body max-w-2xl mx-auto">
                                    Comprehensive range of services for commercial and corporate spaces
                                </p>
                            </div>
                        </FadeIn>

                        {/* Services Grid - 4 cols desktop, 2 tablet, 1 mobile */}
                        <StaggerContainer
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                            staggerDelay={0.03}
                        >
                            {detailedServices.map((service) => (
                                <StaggerItem key={service.id}>
                                    <ServiceGridItem service={service} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {/* Essential Additional Services */}
                        <FadeIn delay={0.2}>
                          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                             <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                                <div className="flex items-center gap-4 group">
                                   <div className="w-12 h-12 rounded-full bg-[#ED2028]/10 flex items-center justify-center text-[#ED2028] font-bold text-xl group-hover:bg-[#ED2028] group-hover:text-white transition-colors">
                                      01
                                   </div>
                                   <h3 className="font-heading text-lg font-semibold text-gray-800 uppercase tracking-wide">
                                      CONTRACTING- END TO END SOLUTION
                                   </h3>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                                <div className="flex items-center gap-4 group">
                                   <div className="w-12 h-12 rounded-full bg-[#ED2028]/10 flex items-center justify-center text-[#ED2028] font-bold text-xl group-hover:bg-[#ED2028] group-hover:text-white transition-colors">
                                      02
                                   </div>
                                   <h3 className="font-heading text-lg font-semibold text-gray-800 uppercase tracking-wide">
                                      SUPPLY AND MANUFACTURING OF INTERIOR ITEMS
                                   </h3>
                                </div>
                             </div>
                          </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-10 md:py-16 bg-white">
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
                <section className="py-10 md:py-16 bg-[#ED2028]">
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

            {/* Floating Elements */}
            <ScrollToTop />
        </PageTransition>
    );
}

