'use client';

import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/ScrollAnimations';

// SLJ Solutions actual clients from company profile
const clients = [
  {
    name: 'DLF',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'var(--font-nav)', letterSpacing: '0.1em' }}>
          DLF
        </text>
      </svg>
    ),
  },
  {
    name: 'Bestech',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'var(--font-nav)', letterSpacing: '0.05em' }}>
          BESTECH
        </text>
      </svg>
    ),
  },
  {
    name: 'Ramprastha',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-nav)', letterSpacing: '0.08em' }}>
          RAMPRASTHA
        </text>
      </svg>
    ),
  },
  {
    name: 'BPTP',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '26px', fontWeight: '700', fontFamily: 'var(--font-nav)', letterSpacing: '0.1em' }}>
          BPTP
        </text>
      </svg>
    ),
  },
  {
    name: 'Windwod Group',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-nav)', letterSpacing: '0.05em' }}>
          WINDWOD
        </text>
        <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '10px', fontWeight: '400', fontFamily: 'var(--font-nav)', letterSpacing: '0.15em' }}>
          GROUP
        </text>
      </svg>
    ),
  },
  {
    name: 'The Lodhi',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '12px', fontWeight: '400', fontFamily: 'var(--font-heading)', letterSpacing: '0.2em' }}>
          THE
        </text>
        <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '18px', fontWeight: '600', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
          LODHI
        </text>
      </svg>
    ),
  },
  {
    name: 'OoO',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '24px', fontWeight: '300', fontFamily: 'var(--font-heading)' }}>
          OoO
        </text>
      </svg>
    ),
  },
  {
    name: 'Premium Clients',
    logo: (
      <svg viewBox="0 0 160 60" className="w-full h-full">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          className="fill-current" style={{ fontSize: '11px', fontWeight: '500', fontFamily: 'var(--font-nav)', letterSpacing: '0.15em' }}>
          AND MANY MORE
        </text>
      </svg>
    ),
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0a0a0a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.25em] mb-4"
            >
              Trusted By Industry Leaders
            </motion.span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a]">
              Our Clients
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-16 h-[2px] bg-[#ED2028] mx-auto mt-6"
            />
          </div>
        </FadeIn>

        {/* Logo Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client) => (
            <StaggerItem key={client.name}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative flex items-center justify-center h-20 md:h-24 px-6 py-4
                              bg-[#fafafa] border border-gray-100
                              transition-all duration-500 ease-out
                              hover:bg-white hover:border-[#ED2028]/20 hover:shadow-lg hover:shadow-[#ED2028]/5">
                  {/* Logo */}
                  <div className="w-full h-full text-gray-400 transition-colors duration-400 group-hover:text-[#0a0a0a]">
                    {client.logo}
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-[#ED2028]"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
