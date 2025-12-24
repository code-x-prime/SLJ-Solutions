'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ClientsSection from '@/components/sections/ClientsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomeClient() {
    return (
        <PageTransition showLoader={true}>
            {/* Scroll Progress Indicator */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main id="main-content">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <ClientsSection />
                <PortfolioSection />
                <TestimonialsSection />
                <CTASection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Elements */}
            <ScrollToTop />
        </PageTransition>
    );
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-[#ED2028] z-[60] origin-left"
            style={{ scaleX }}
            aria-hidden="true"
        />
    );
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Scroll to top"
                >
                    <span className="flex items-center justify-center w-12 h-12 bg-[#ED2028] text-white 
                        shadow-lg shadow-[#ED2028]/20 transition-all duration-300
                        hover:shadow-xl hover:shadow-[#ED2028]/30 hover:bg-[#c41a20]">
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                        >
                            <path d="M18 15l-6-6-6 6" />
                        </motion.svg>
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

