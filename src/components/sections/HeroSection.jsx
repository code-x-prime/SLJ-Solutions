'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from '../ui/Button';
import { useModal } from '../ui/EnquiryModal';
import { ArrowRight, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

// Video slides with SLJ Solutions content
const heroSlides = [
  {
    video: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    headline: ['Define', 'Modern', 'Luxury'],
    highlightIndex: 2,
    subtitle: 'Award-winning design excellence',
  },
  {
    video: 'https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80',
    headline: ['One', 'Solution', 'For All'],
    highlightIndex: 1,
    subtitle: 'Your trusted interior design partner since 2009',
  },
  {
    video: 'https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
    headline: ['Transform', 'Your', 'Space'],
    highlightIndex: 0,
    subtitle: 'Residential & commercial interior experts',
  },
];

export default function HeroSection() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef([]);
  const progressInterval = useRef(null);
  const autoPlayTimeout = useRef(null);
  
  const SLIDE_DURATION = 8000;

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setProgress(0);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isTransitioning, currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);

    autoPlayTimeout.current = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval.current);
      clearTimeout(autoPlayTimeout.current);
    };
  }, [currentSlide, nextSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -60,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: {
        duration: 0.25,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: { duration: 0.25 },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <video
              ref={(el) => (videoRefs.current[currentSlide] = el)}
              src={heroSlides[currentSlide].video}
              poster={heroSlides[currentSlide].poster}
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            
            {/* Film grain */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-6"
                style={{ perspective: 800 }}
              >
                {/* Headline */}
                <h1 className="font-heading leading-[1] tracking-[-0.02em]">
                  {heroSlides[currentSlide].headline.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      className={`block text-[clamp(2.75rem,8vw,6rem)] font-bold ${
                        index === heroSlides[currentSlide].highlightIndex
                          ? 'text-[#ED2028]'
                          : 'text-white'
                      }`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                  variants={subtitleVariants}
                  className="mt-6 text-lg md:text-xl lg:text-2xl text-white/70 font-body font-light tracking-wide max-w-xl"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  {/* Start Your Project - Opens Modal */}
                  <Button
                    size="lg"
                    icon={<ArrowRight size={18} />}
                    onClick={openModal}
                    className="text-sm md:text-base px-8 py-4 font-nav"
                  >
                    Start Your Project
                  </Button>
                  
                  {/* View Portfolio - Links to Projects page */}
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/40 text-white hover:bg-white/10 hover:border-white text-sm md:text-base px-8 py-4 font-nav"
                    >
                      View Portfolio
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-full max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={prevSlide}
            disabled={isTransitioning}
            className="pointer-events-auto group relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 
                           group-hover:border-[#ED2028] group-hover:bg-[#ED2028]/10
                           transition-all duration-400" />
            <ChevronLeft 
              className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white 
                        group-hover:text-[#ED2028] group-hover:-translate-x-0.5
                        transition-all duration-300" 
              strokeWidth={1.5}
            />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={nextSlide}
            disabled={isTransitioning}
            className="pointer-events-auto group relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 
                           group-hover:border-[#ED2028] group-hover:bg-[#ED2028]/10
                           transition-all duration-400" />
            <ChevronRight 
              className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white 
                        group-hover:text-[#ED2028] group-hover:translate-x-0.5
                        transition-all duration-300" 
              strokeWidth={1.5}
            />
          </motion.button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pb-6 md:pb-10">
          <div className="flex items-end justify-between gap-6">
            {/* Slide Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-white/40 text-sm font-body">/</span>
                <span className="text-white/40 text-sm font-body">
                  {String(heroSlides.length).padStart(2, '0')}
                </span>
              </div>

              <div className="hidden md:block w-24 lg:w-32">
                <div className="h-[2px] bg-white/20 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#ED2028]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Slide Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="hidden sm:flex items-center gap-3"
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative py-3"
                >
                  <span className={`block w-8 lg:w-12 h-[2px] transition-all duration-400 ${
                    currentSlide === index 
                      ? 'bg-[#ED2028]' 
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`} />
                </button>
              ))}
            </motion.div>

            {/* Mute Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              onClick={() => setIsMuted(!isMuted)}
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span className="hidden md:inline text-xs font-nav uppercase tracking-widest">
                {isMuted ? 'Unmute' : 'Mute'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Progress line */}
        <div className="h-[3px] bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ED2028] to-[#ff4d54]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 
                   flex flex-col items-center gap-2 text-white/40 hover:text-white 
                   transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-nav uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent 
                     group-hover:from-[#ED2028]"
        />
      </motion.button>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-white/15 hidden lg:block" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-white/15 hidden lg:block" />
      <div className="absolute bottom-20 left-6 w-12 h-12 border-l border-b border-white/15 hidden lg:block" />
      <div className="absolute bottom-20 right-6 w-12 h-12 border-r border-b border-white/15 hidden lg:block" />
    </section>
  );
}
