'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SlideIn, FadeIn, Counter } from '../animations/ScrollAnimations';
import Button from '../ui/Button';
import { ArrowRight, Award, Users, Target, Calendar } from 'lucide-react';

const highlights = [
  { icon: Calendar, value: '2009', label: 'Established' },
  { icon: Award, value: '500+', label: 'Projects' },
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Target, value: '100%', label: 'Client Satisfaction' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fafafa] to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <SlideIn direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="SLJ Solutions Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#ED2028]/20 hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#ED2028] hidden lg:block" />
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-[#ED2028] p-6 text-white hidden md:block"
              >
                <span className="block font-heading text-4xl font-bold">15+</span>
                <span className="block font-nav text-xs uppercase tracking-wider mt-1">
                  Years Experience
                </span>
              </motion.div>
            </div>
          </SlideIn>

          {/* Content Column */}
          <SlideIn direction="right">
            <div className="space-y-6">
              <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.2em]">
                About SLJ Solutions
              </span>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-tight">
                One Solution For All Your{' '}
                <span className="text-[#ED2028]">Interior Needs</span>
              </h2>

              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  <strong className="text-[#0a0a0a]">SLJ Solutions</strong> was established in 2009 
                  with a vision to provide complete interior design solutions. With over 15 years 
                  of experience in the industry, we have successfully completed 500+ projects.
                </p>
                <p>
                  Our expertise spans turnkey civil construction, office interiors, modular kitchens, 
                  IKEA furnishing, and more. We are trusted by industry leaders like DLF, Bestech, 
                  BPTP, and The Lodhi.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-100">
                {highlights.map((item, index) => (
                  <FadeIn key={item.label} delay={index * 0.1}>
                    <div className="text-center">
                      <item.icon className="w-6 h-6 text-[#ED2028] mx-auto mb-2" strokeWidth={1.5} />
                      <span className="block font-heading text-xl font-bold text-[#0a0a0a]">
                        {item.value}
                      </span>
                      <span className="block text-xs text-gray-500 font-nav uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    icon={<ArrowRight size={18} />}
                    className="font-nav"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
