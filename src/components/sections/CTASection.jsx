'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../animations/ScrollAnimations';
import Button from '../ui/Button';
import { useModal } from '../ui/EnquiryModal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const sectionRef = useRef(null);
  const { openModal } = useModal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-[#ED2028] overflow-hidden"
    >
      {/* Animated background pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rotate-12 hidden lg:block" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full hidden lg:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-8"
            >
              <Sparkles className="w-10 h-10 text-white" strokeWidth={1.5} />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Your Dream Space Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Ready to transform your space? Get in touch with us for a free consultation 
              and let&apos;s create something extraordinary.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Get Quote Button - Opens Modal */}
              <Button
                variant="white"
                size="xl"
                icon={<ArrowRight size={20} />}
                onClick={openModal}
                className="font-nav min-w-[200px]"
              >
                Get Quote
              </Button>
            </div>
          </FadeIn>

          {/* Trust indicators */}
          <FadeIn delay={0.4}>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/60 font-nav text-xs uppercase tracking-widest mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 font-nav text-sm uppercase tracking-wider">
                <span>DLF</span>
                <span>Bestech</span>
                <span>BPTP</span>
                <span>The Lodhi</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
