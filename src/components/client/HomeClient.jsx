'use client';

import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';
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

