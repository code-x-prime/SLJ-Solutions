'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import { useModal } from '@/components/ui/EnquiryModal';
import { FadeIn, Counter } from '@/components/animations/ScrollAnimations';
import { ArrowRight, Award, CheckCircle, Shield, Heart, Sparkles, Target, Gem } from 'lucide-react';

const stats = [
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Expert Team' },
];

const values = [
    {
        icon: Shield,
        title: 'Integrity',
        description: 'In all our business & personal relationships, we maintain the highest standards of honesty and transparency.',
    },
    {
        icon: Award,
        title: 'Quality',
        description: 'Being the absolute best - both as individuals and as a company serving our stakeholders with excellence.',
    },
    {
        icon: Heart,
        title: 'Social Responsibility',
        description: 'We strive to impact lives positively where we operate by improving the local talent pool and community.',
    },
    {
        icon: Sparkles,
        title: 'Superior Service',
        description: 'Providing superior service each and every time to our customers, exceeding expectations consistently.',
    },
];

const whyChooseUs = [
    '15+ years of industry experience since 2009',
    'Complete turnkey interior solutions',
    'Cost efficient & timely project completion',
    'Expert team of architects & designers',
    'Premium quality materials & workmanship',
    'After-sales support & maintenance',
];

export default function AboutClient() {
    const { openModal } = useModal();

    return (
        <PageTransition>
            <Navbar />

            <main id="main-content">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-white via-gray-50 to-[#ED2028]/5">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-[#ED2028]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
                        <FadeIn>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="w-12 h-px bg-[#ED2028]" />
                                <span className="text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em]">
                                    Our Story
                                </span>
                                <span className="w-12 h-px bg-[#ED2028]" />
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6">
                                About <span className="text-[#ED2028]">Us</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
                                Award-winning interior design company since 2009. One Solution For All Your Interior Needs.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ED2028]/30 to-transparent" />
                </section>

                {/* Stats Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <FadeIn key={stat.label} delay={index * 0.1}>
                                    <div className="text-center">
                                        <Counter
                                            to={stat.value}
                                            suffix={stat.suffix}
                                            className="font-heading text-4xl md:text-5xl font-bold text-[#ED2028] mb-2"
                                        />
                                        <p className="text-gray-600 font-body text-sm md:text-base">{stat.label}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-10 md:py-16 bg-[#fafafa]">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <FadeIn>
                                <div>
                                    <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                                        Who We Are
                                    </span>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
                                        One Solution For All Your Interior Needs
                                    </h2>
                                    <p className="text-gray-600 font-body leading-relaxed mb-4">
                                        SLJ Solutions is an award-winning interior design company established in 2009,
                                        specializing in comprehensive interior solutions for residential, commercial,
                                        and corporate spaces.
                                    </p>
                                    <p className="text-gray-600 font-body leading-relaxed mb-6">
                                        With over 15 years of experience, we have completed 500+ projects across Delhi NCR,
                                        delivering excellence in turnkey construction, office interiors, modular kitchens,
                                        and custom furnishings.
                                    </p>
                                    <Button
                                        onClick={openModal}
                                        size="lg"
                                        icon={<ArrowRight size={18} />}
                                        className="font-nav"
                                    >
                                        Get Free Consultation
                                    </Button>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                                        alt="SLJ Solutions Team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-10 md:py-16 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <FadeIn>
                            <div className="text-center mb-16">
                                <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4">
                                    Our Values
                                </span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
                                    What Drives Us
                                </h2>
                                <p className="text-gray-600 font-body max-w-2xl mx-auto">
                                    The core principles that guide our work and define our commitment to excellence
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <FadeIn key={value.title} delay={index * 0.1}>
                                    <div className="text-center p-6 bg-[#fafafa] hover:bg-white transition-colors duration-300">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#ED2028]/10 text-[#ED2028] rounded-full flex items-center justify-center">
                                            <value.icon size={28} />
                                        </div>
                                        <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 font-body text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-10 md:py-16 bg-[#ED2028]">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <FadeIn>
                                <div>
                                    <span className="inline-block text-white/80 font-nav text-xs uppercase tracking-[0.25em] mb-4">
                                        Why Choose Us
                                    </span>
                                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                                        Excellence in Every Project
                                    </h2>
                                    <ul className="space-y-4">
                                        {whyChooseUs.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle size={20} className="text-white shrink-0 mt-0.5" />
                                                <span className="text-white/90 font-body">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="relative aspect-[4/3] bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                                        alt="Our Work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </PageTransition>
    );
}

