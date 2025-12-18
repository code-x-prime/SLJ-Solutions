'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // End loading after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8"
            >
              {/* Actual SLJ Logo */}
              <Image
                src="/white.png"
                alt="SLJ Solutions"
                width={180}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              />
              
              {/* Glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 blur-2xl bg-[#ED2028]/20 -z-10"
              />
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 md:w-64">
              <div className="h-[2px] bg-gray-800 overflow-hidden">
                <motion.div
                  className="h-full bg-[#ED2028]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Percentage */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-4 text-gray-500 font-nav text-xs uppercase tracking-widest"
              >
                {Math.round(Math.min(progress, 100))}%
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 text-gray-600 font-nav text-xs uppercase tracking-[0.3em]"
            >
              One Solution For All Needs
            </motion.p>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-[#ED2028]/30" />
            <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-[#ED2028]/30" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-[#ED2028]/30" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-[#ED2028]/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
