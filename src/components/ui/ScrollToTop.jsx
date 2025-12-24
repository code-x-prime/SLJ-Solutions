'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 group md:bottom-28"
                    aria-label="Scroll to top"
                >
                    <span className="flex items-center justify-center w-12 h-12 bg-[#ED2028] text-white 
                        shadow-lg shadow-[#ED2028]/20 transition-all duration-300
                        hover:shadow-xl hover:shadow-[#ED2028]/30 hover:bg-[#c41a20]">
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                        >
                            <path d="M18 15l-6-6-6 6" />
                        </motion.svg>
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

