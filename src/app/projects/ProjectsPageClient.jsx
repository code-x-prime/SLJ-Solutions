'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { ArrowRight, X, MapPin, Building2, Home, Maximize2 } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Modular'];

const projects = [
    {
        id: 1,
        title: 'DLF Corporate Office',
        category: 'Commercial',
        type: 'Office Interior',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        location: 'Gurugram',
        description: 'Modern corporate office space with contemporary design and premium finishes.',
    },
    {
        id: 2,
        title: 'Bestech Residence',
        category: 'Residential',
        type: 'Full Home Interior',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        location: 'Gurugram',
        description: 'Luxury residential interior with custom modular solutions.',
    },
    {
        id: 3,
        title: 'The Lodhi Hotel',
        category: 'Commercial',
        type: 'Hotel Interior',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        location: 'New Delhi',
        description: 'Premium hotel interior with artistic touches and luxury finishes.',
    },
    {
        id: 4,
        title: 'BPTP Office Space',
        category: 'Office',
        type: 'Corporate Interior',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
        location: 'Faridabad',
        description: 'Functional office design promoting productivity and collaboration.',
    },
    {
        id: 5,
        title: 'Modern Kitchen Project',
        category: 'Modular',
        type: 'Modular Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        location: 'Krishna Nagar, Delhi',
        description: 'Sleek modular kitchen with smart storage solutions.',
    },
    {
        id: 6,
        title: 'Ramprastha Apartment',
        category: 'Residential',
        type: 'Residential Interior',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        location: 'Gurugram',
        description: 'Contemporary apartment interior with elegant design.',
    },
    {
        id: 7,
        title: 'Terrace Garden Project',
        category: 'Residential',
        type: 'Terrace Garden',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
        location: 'South Delhi',
        description: 'Beautiful terrace garden with vertical greens and outdoor furniture.',
    },
    {
        id: 8,
        title: 'Windwod Group Office',
        category: 'Office',
        type: 'Office Fitout',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
        location: 'Noida',
        description: 'Modern workspace with ergonomic design and brand integration.',
    },
];

export default function ProjectsPageClient() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <PageTransition showLoader={true}>
            {/* Scroll Progress Indicator */}
            <ScrollProgress />

            <Navbar />

            <main id="main-content">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center bg-[#fafafa] overflow-hidden pt-24">
                    <div className="absolute inset-0">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ED2028]/5 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
                        <FadeIn>
                            <span className="inline-block text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em] mb-6">
                                Our Work
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6">
                                Featured <span className="text-[#ED2028]">Projects</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
                                Explore our portfolio of completed projects showcasing our expertise
                                in residential, commercial, and modular interior solutions.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Filter */}
                <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2.5 text-sm font-nav uppercase tracking-wider transition-all duration-300 ${activeCategory === category
                                        ? 'bg-[#ED2028] text-white'
                                        : 'bg-transparent text-gray-600 hover:text-[#ED2028]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                        <motion.div
                            layout
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <motion.div
                                            whileHover={{ y: -8 }}
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            {/* Image */}
                                            <div className="relative aspect-[4/3] overflow-hidden mb-5">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* View button */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                    <span className="flex items-center justify-center w-14 h-14 bg-[#ED2028] text-white">
                                                        <Maximize2 size={22} />
                                                    </span>
                                                </div>

                                                {/* Category tag */}
                                                <span className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 text-xs font-nav uppercase tracking-wider text-[#0a0a0a]">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Info */}
                                            <div>
                                                <h3 className="font-heading text-xl font-semibold text-[#0a0a0a] group-hover:text-[#ED2028] transition-colors mb-2">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-500 font-body">
                                                    <span className="flex items-center gap-1.5">
                                                        {project.category === 'Residential' ? <Home size={14} /> : <Building2 size={14} />}
                                                        {project.type}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin size={14} />
                                                        {project.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-10 md:py-16 bg-[#0a0a0a]">
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
                        <FadeIn>
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Have a Project in Mind?
                            </h2>
                            <p className="text-gray-400 font-body text-lg max-w-xl mx-auto mb-10">
                                We&apos;d love to hear about your vision. Let&apos;s create something extraordinary together.
                            </p>
                            <Link href="/contact">
                                <Button size="xl" icon={<ArrowRight size={20} />} className="font-nav">
                                    Contact Us
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div className="absolute inset-0 bg-black/90" />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#0a0a0a] text-white flex items-center justify-center hover:bg-[#ED2028] transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px]">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-8 md:p-12">
                                    <span className="inline-block text-[#ED2028] font-nav text-xs uppercase tracking-[0.2em] mb-4">
                                        {selectedProject.category}
                                    </span>

                                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">
                                        {selectedProject.title}
                                    </h2>

                                    <p className="text-gray-600 font-body leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3">
                                            {selectedProject.category === 'Residential' ? (
                                                <Home size={18} className="text-[#ED2028]" />
                                            ) : (
                                                <Building2 size={18} className="text-[#ED2028]" />
                                            )}
                                            <span className="text-gray-700 font-body">{selectedProject.type}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-[#ED2028]" />
                                            <span className="text-gray-700 font-body">{selectedProject.location}</span>
                                        </div>
                                    </div>

                                    <Link href="/contact">
                                        <Button icon={<ArrowRight size={18} />} className="font-nav">
                                            Start Your Project
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />

            {/* Floating Elements */}
            <ScrollToTop />
        </PageTransition>
    );
}

