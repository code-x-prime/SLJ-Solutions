'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../animations/ScrollAnimations';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'SLJ Solutions transformed our apartment into something beyond our wildest dreams. Their attention to detail and understanding of our lifestyle was remarkable. Every room tells a story.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO, TechVenture',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    text: 'Our new office space has completely changed how our team works. The design fosters creativity and collaboration while maintaining professionalism. Outstanding work.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Hotel Manager',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'The lobby redesign has received countless compliments from our guests. SLJ Solutions understood our brand perfectly and created an unforgettable first impression.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Restaurant Owner',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'They took our vision for an intimate dining experience and elevated it to luxury. The ambiance they created has made our restaurant the talk of the town.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 text-brand-red/5">
          <Quote size={400} strokeWidth={1} />
        </div>
      </div>

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <span className="text-brand-red text-sm font-medium uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-serif text-display-2 text-white mb-6">
              What Our Clients Say
            </h2>
          </FadeIn>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full"
              >
                <div className="text-center">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <Quote size={28} className="text-white" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className="text-brand-red fill-brand-red" 
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="font-serif text-2xl md:text-3xl text-white/90 leading-relaxed mb-10 italic">
                    &quot;{testimonials[current].text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-red"
                    />
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[current].role} • {testimonials[current].location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center
                        text-white/60 hover:text-white hover:border-brand-red hover:bg-brand-red/10 
                        transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-brand-red w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center
                        text-white/60 hover:text-white hover:border-brand-red hover:bg-brand-red/10 
                        transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}



