'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * OptimizedVideo - Video component with lazy loading and performance optimizations
 * 
 * @param {Object} props
 * @param {string} props.src - Video source URL
 * @param {string} [props.poster] - Poster image URL
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.autoPlay] - Auto play video
 * @param {boolean} [props.loop] - Loop video
 * @param {boolean} [props.muted] - Mute video
 * @param {boolean} [props.playsInline] - Play inline on mobile
 * @param {boolean} [props.controls] - Show video controls
 * @param {boolean} [props.lazy] - Lazy load video
 * @param {string} [props.objectFit] - Object fit style
 * @param {Function} [props.onLoad] - Callback when video loads
 */
export default function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  lazy = true,
  objectFit = 'cover',
  onLoad,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px', threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  // Handle video loaded
  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle video error
  const handleError = () => {
    setHasError(true);
    console.error('Video failed to load:', src);
  };

  // Play/pause based on visibility
  useEffect(() => {
    if (!videoRef.current || !autoPlay) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [autoPlay, isInView]);

  // Error fallback
  if (hasError) {
    return (
      <div 
        ref={containerRef}
        className={cn(
          'bg-gray-900 flex items-center justify-center',
          className
        )}
      >
        {poster ? (
          <img 
            src={poster} 
            alt="Video poster" 
            className={`w-full h-full object-${objectFit}`}
          />
        ) : (
          <div className="text-gray-500 text-center p-8">
            <svg 
              className="w-16 h-16 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
              />
            </svg>
            <p>Video unavailable</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden bg-gray-900', className)}
    >
      {/* Loading skeleton */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gray-900"
      >
        {poster && (
          <img 
            src={poster} 
            alt="Video loading" 
            className={`w-full h-full object-${objectFit} opacity-50`}
          />
        )}
        
        {/* Loading indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
      </motion.div>

      {/* Video element */}
      {isInView && (
        <motion.video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="metadata"
          onLoadedData={handleLoadedData}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            'w-full h-full',
            `object-${objectFit}`
          )}
          {...props}
        />
      )}
    </div>
  );
}

/**
 * VideoBackground - Full-screen video background with overlay
 */
export function VideoBackground({
  src,
  poster,
  overlay = true,
  overlayColor = 'rgba(0,0,0,0.5)',
  className = '',
  children,
}) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <OptimizedVideo
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full"
        objectFit="cover"
      />
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      
      {/* Content */}
      {children && (
        <div className="relative z-20">
          {children}
        </div>
      )}
    </div>
  );
}



