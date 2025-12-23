'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowUpRight, ArrowRight, X, MapPin, Calendar } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation'];

const projects = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    location: 'New York, NY',
    year: '2024',
    size: 'large', // large, medium, tall
    description: 'A stunning penthouse transformation featuring panoramic city views and bespoke Italian furnishings.',
  },
  {
    id: 2,
    title: 'Luxe Hotel Lobby',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    location: 'Miami, FL',
    year: '2024',
    size: 'tall',
    description: 'Grand lobby design with marble accents and custom lighting installations.',
  },
  {
    id: 3,
    title: 'Tech Startup HQ',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'San Francisco, CA',
    year: '2023',
    size: 'medium',
    description: 'Modern workspace promoting creativity and collaboration.',
  },
  {
    id: 4,
    title: 'Brownstone Revival',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    location: 'Brooklyn, NY',
    year: '2023',
    size: 'medium',
    description: 'Historic brownstone brought to life with contemporary elegance.',
  },
  {
    id: 5,
    title: 'Coastal Retreat',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    location: 'Malibu, CA',
    year: '2024',
    size: 'tall',
    description: 'Beachfront luxury with organic materials and ocean-inspired palette.',
  },
  {
    id: 6,
    title: 'Executive Suite',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    location: 'Chicago, IL',
    year: '2023',
    size: 'large',
    description: 'Corner office suite with panoramic views and premium finishes.',
  },
  {
    id: 7,
    title: 'Boutique Restaurant',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    location: 'Los Angeles, CA',
    year: '2024',
    size: 'medium',
    description: 'Intimate dining space with dramatic lighting and velvet accents.',
  },
  {
    id: 8,
    title: 'Modern Loft',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    location: 'Boston, MA',
    year: '2023',
    size: 'medium',
    description: 'Industrial loft converted into a sophisticated urban dwelling.',
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  // Get size classes for masonry effect
  const getSizeClasses = (size, index) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-[700px]';
      case 'tall':
        return 'md:row-span-2 aspect-[3/4] md:aspect-auto md:h-[700px]';
      default:
        return 'aspect-[4/3] md:h-[340px]';
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ED2028]/20 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-3">
                <span className="w-12 h-px bg-[#ED2028]" />
                <span className="text-[#ED2028] text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Portfolio
                </span>
              </span>
            </motion.div>

            <motion.h2
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.1}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] mb-6"
            >
              Featured{' '}
              <span className="text-[#ED2028]">Projects</span>
            </motion.h2>

            <motion.p
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.2}
              className="text-lg text-gray-500"
            >
              Explore our curated collection of luxury interiors, each telling a unique story
              of craftsmanship and design excellence.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.3}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 text-sm font-medium uppercase tracking-wider 
                          transition-all duration-300 overflow-hidden group
                          ${activeCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:text-[#1a1a1a]'
                  }`}
              >
                {/* Background */}
                <span className={`absolute inset-0 transition-transform duration-500 ease-out
                                ${activeCategory === category
                    ? 'bg-[#ED2028] scale-100'
                    : 'bg-gray-100 scale-100 group-hover:bg-gray-200'
                  }`}
                />
                {/* Text */}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Masonry Style */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                exit={{ opacity: 0, scale: 0.9 }}
                custom={index}
                className={`group cursor-pointer ${getSizeClasses(project.size, index)}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-100">
                  {/* Image with zoom effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Red overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#ED2028]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 0.85 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Dark gradient overlay (always visible, subtle) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                  {/* Content - fade in on hover */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    {/* Top - Category & Arrow */}
                    <div className="flex items-start justify-between">
                      <motion.span
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs 
                                  font-semibold uppercase tracking-wider"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : -20,
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        {project.category}
                      </motion.span>

                      <motion.div
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.5,
                          rotate: hoveredProject === project.id ? 0 : -45,
                        }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <ArrowUpRight size={24} className="text-[#ED2028]" />
                      </motion.div>
                    </div>

                    {/* Bottom - Title & Info */}
                    <div>
                      {/* Project number */}
                      <motion.span
                        className="block text-white/40 text-sm font-medium mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          x: hoveredProject === project.id ? 0 : -20,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        Project {String(project.id).padStart(2, '0')}
                      </motion.span>

                      {/* Title - always visible on large, hover on others */}
                      <motion.h3
                        className={`font-serif text-white mb-3 ${project.size === 'large'
                            ? 'text-3xl md:text-5xl'
                            : project.size === 'tall'
                              ? 'text-2xl md:text-4xl'
                              : 'text-2xl md:text-3xl'
                          }`}
                        initial={{ opacity: project.size === 'large' ? 1 : 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id || project.size === 'large' ? 1 : 0,
                          y: hoveredProject === project.id || project.size === 'large' ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Location & Year */}
                      <motion.div
                        className="flex items-center gap-4 text-white/80 text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                      </motion.div>

                      {/* Description - only on large */}
                      {project.size === 'large' && (
                        <motion.p
                          className="mt-4 text-white/70 max-w-md hidden md:block"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 20,
                          }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        >
                          {project.description}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Border accent */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="secondary"
            icon={<ArrowRight size={20} />}
            className="px-10"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-14 h-14 bg-white rounded-full 
                          flex items-center justify-center shadow-xl
                          hover:bg-gray-100 transition-colors group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Red accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ED2028]" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 text-[#ED2028] text-sm font-semibold 
                              uppercase tracking-widest mb-4"
                  >
                    <span className="w-8 h-px bg-[#ED2028]" />
                    {selectedProject.category}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4"
                  >
                    {selectedProject.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-6 text-gray-500 mb-6"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#ED2028]" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#ED2028]" />
                      {selectedProject.year}
                    </span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-gray-500 text-lg leading-relaxed mb-8"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 leading-relaxed mb-10"
                  >
                    Every detail was carefully considered to deliver an exceptional result
                    that exceeds expectations. Our team worked closely with the client to
                    ensure their vision was brought to life with precision and artistry.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Button
                      size="lg"
                      icon={<ArrowRight size={20} />}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Similar Project
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
