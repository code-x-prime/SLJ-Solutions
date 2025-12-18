'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import { FadeIn, SlideIn, Counter } from '@/components/animations/ScrollAnimations';
import { ArrowRight, Award, Users, Target, Gem, CheckCircle, Shield, Heart, Sparkles } from 'lucide-react';

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

export default function AboutPage() {
  return (
    <PageTransition>
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#fafafa] overflow-hidden pt-24">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#ED2028]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#ED2028]/3 rounded-full blur-2xl" />
          </div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
            <FadeIn>
              <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em] mb-6">
                About Us
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6">
                About <span className="text-[#ED2028]">SLJ Solutions</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
                One Solution For All Your Interior Needs - Transforming spaces 
                with excellence since 2009.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SlideIn direction="left">
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                      alt="SLJ Solutions Interior Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-[#ED2028]/20 hidden lg:block" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ED2028] hidden lg:block" />
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="space-y-6">
                  <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em]">
                    Our Story
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a]">
                    Excellence in Interior <span className="text-[#ED2028]">Design</span>
                  </h2>
                  <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                    <p>
                      <strong className="text-[#0a0a0a]">SLJ Solutions</strong> was formed in July 2009. 
                      After working in the interiors industry for many years, we decided to start 
                      our own venture to provide qualitative support for both business and home users.
                    </p>
                    <p>
                      Our team leader previously worked as an interior architect for over 9 years 
                      before establishing SLJ Solutions. After making a mark in the interior sector, 
                      we expanded our bandwidth to various design-related spheres which are in huge 
                      demand as people become more conscious about upgradation.
                    </p>
                    <p>
                      The legacy started with the synthesis of brainstorming of entrepreneurs to 
                      establish a successful business and make our mark in the construction market. 
                      Today, we are proud to serve industry leaders like DLF, Bestech, BPTP, and many more.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link href="/projects">
                      <Button size="lg" icon={<ArrowRight size={18} />} className="font-nav">
                        View Our Work
                      </Button>
                    </Link>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <FadeIn>
                <div className="p-8 md:p-10 border border-gray-800 h-full">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#ED2028] text-white mb-6">
                    <Target size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed">
                    To be successful in our business operations, we need people, product, capital, 
                    and our customers&apos; trust. The main priority being <span className="text-[#ED2028]">Customer Trust</span>. 
                    Our behavior, our words, our products, our character reflects our mission to 
                    deliver excellence in every project.
                  </p>
                </div>
              </FadeIn>

              {/* Mission */}
              <FadeIn delay={0.1}>
                <div className="p-8 md:p-10 border border-gray-800 h-full">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#ED2028] text-white mb-6">
                    <Gem size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed">
                    To achieve exponential growth with all our various departments by forming 
                    strategic partnerships that allow us to develop and perform for growth 
                    advancement via management agreements. We aim to provide <span className="text-[#ED2028]">One Solution 
                    For All Your Interior Needs</span>.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#ED2028]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Counter
                        from={0}
                        to={stat.value}
                        duration={2}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white"
                      />
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white/80">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="mt-3 text-sm md:text-base text-white/80 font-nav uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em] mb-4">
                  Our Core Values
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a]">
                  What Drives Us
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group p-8 bg-[#fafafa] hover:bg-white hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-14 h-14 flex items-center justify-center bg-[#ED2028]/10 text-[#ED2028] mb-6 group-hover:bg-[#ED2028] group-hover:text-white transition-all duration-300">
                      <value.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-[#fafafa]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div>
                  <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em] mb-4">
                    Why SLJ Solutions
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-8">
                    Why Choose Us?
                  </h2>
                  
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-6 h-6 flex items-center justify-center bg-[#ED2028] text-white shrink-0 mt-0.5">
                          <CheckCircle size={14} />
                        </div>
                        <span className="text-gray-700 font-body">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <SlideIn direction="right">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                    alt="SLJ Solutions Quality Work"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-8 left-8 bg-[#ED2028] p-6 text-white">
                    <p className="font-heading text-4xl font-bold">15+</p>
                    <p className="font-nav text-xs uppercase tracking-wider mt-1">Years of Excellence</p>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-400 font-body text-lg max-w-xl mx-auto mb-10">
                Let&apos;s collaborate to create something extraordinary together.
              </p>
              <Link href="/contact">
                <Button size="xl" icon={<ArrowRight size={20} />} className="font-nav">
                  Contact Us Today
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
