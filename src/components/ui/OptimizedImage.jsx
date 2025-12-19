'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * OptimizedImage - A wrapper around Next.js Image with loading states and animations
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.priority] - Load image with priority
 * @param {boolean} [props.fill] - Fill parent container
 * @param {string} [props.sizes] - Responsive sizes attribute
 * @param {string} [props.objectFit] - Object fit style
 * @param {boolean} [props.showSkeleton] - Show loading skeleton
 * @param {boolean} [props.animate] - Enable reveal animation
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  objectFit = 'cover',
  showSkeleton = true,
  animate = true,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Placeholder component
  const Placeholder = () => (
    <div 
      className={cn(
        'absolute inset-0 bg-gray-100 animate-pulse',
        isLoaded && 'opacity-0'
      )}
    />
  );

  // Error fallback
  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-gray-100 flex items-center justify-center text-gray-400',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <svg 
          className="w-12 h-12" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
    );
  }

  const imageContent = (
    <>
      {showSkeleton && <Placeholder />}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={90}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          fill && `object-${objectFit}`,
          className
        )}
        style={!fill ? { objectFit } : undefined}
        {...props}
      />
    </>
  );

  // With animation wrapper
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn('relative overflow-hidden', fill ? 'w-full h-full' : '')}
        style={!fill ? { width, height } : undefined}
      >
        {imageContent}
      </motion.div>
    );
  }

  // Without animation
  return (
    <div 
      className={cn('relative overflow-hidden', fill ? 'w-full h-full' : '')}
      style={!fill ? { width, height } : undefined}
    >
      {imageContent}
    </div>
  );
}

/**
 * BackgroundImage - For full background images with overlay support
 */
export function BackgroundImage({
  src,
  alt,
  overlay = true,
  overlayColor = 'rgba(0,0,0,0.5)',
  className = '',
  children,
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Skeleton */}
      <div 
        className={cn(
          'absolute inset-0 bg-gray-200 transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        quality={85}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'object-cover transition-opacity duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      
      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
}



