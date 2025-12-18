'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

// Luxury easing curve
const luxuryEase = [0.22, 1, 0.36, 1];

// ============================================
// FADE IN ANIMATION
// ============================================
export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = null,
  className = '',
  once = true,
  amount = 0.3,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  const initial = {
    opacity: 0,
    ...(direction && directions[direction]),
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SLIDE IN ANIMATION
// ============================================
export function SlideIn({
  children,
  delay = 0,
  duration = 1,
  direction = 'left',
  className = '',
  once = true,
  amount = 0.3,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCALE IN ANIMATION
// ============================================
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.3,
  scale = 0.85,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale }}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER
// ============================================
export function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM
// ============================================
export function StaggerItem({
  children,
  className = '',
  direction = 'up',
}) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    scale: { scale: 0.9 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: luxuryEase,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// REVEAL ANIMATION (Clip reveal)
// ============================================
export function Reveal({
  children,
  delay = 0,
  duration = 1,
  className = '',
  once = true,
  amount = 0.3,
  direction = 'up',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const clipPaths = {
    up: ['inset(100% 0 0 0)', 'inset(0 0 0 0)'],
    down: ['inset(0 0 100% 0)', 'inset(0 0 0 0)'],
    left: ['inset(0 100% 0 0)', 'inset(0 0 0 0)'],
    right: ['inset(0 0 0 100%)', 'inset(0 0 0 0)'],
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: clipPaths[direction][0] }}
        animate={isInView ? { clipPath: clipPaths[direction][1] } : { clipPath: clipPaths[direction][0] }}
        transition={{
          duration,
          delay,
          ease: luxuryEase,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ============================================
// TEXT REVEAL ANIMATION
// ============================================
export function TextReveal({
  text,
  className = '',
  delay = 0,
  wordByWord = true,
  once = true,
  amount = 0.5,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const words = text.split(' ');
  const chars = text.split('');
  const items = wordByWord ? words : chars;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {items.map((item, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotate: 5 }}
            animate={isInView ? { y: 0, rotate: 0 } : { y: '110%', rotate: 5 }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.04,
              ease: luxuryEase,
            }}
          >
            {item}{wordByWord && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ============================================
// PARALLAX EFFECT
// ============================================
export function Parallax({
  children,
  speed = 0.5,
  className = '',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
}

// ============================================
// MAGNETIC EFFECT
// ============================================
export function Magnetic({ 
  children, 
  className = '',
  strength = 0.15,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// BLUR IN ANIMATION
// ============================================
export function BlurIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.3,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={isInView 
        ? { opacity: 1, filter: 'blur(0px)' } 
        : { opacity: 0, filter: 'blur(20px)' }
      }
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// ROTATE IN ANIMATION
// ============================================
export function RotateIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.3,
  degrees = 10,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: degrees, y: 30 }}
      animate={isInView 
        ? { opacity: 1, rotate: 0, y: 0 } 
        : { opacity: 0, rotate: degrees, y: 30 }
      }
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// COUNTER ANIMATION
// ============================================
export function Counter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className = '',
  once = true,
  suffix = '',
  prefix = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay * 1000;
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }
      
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentCount = Math.round(from + (to - from) * easeProgress);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, from, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ============================================
// SECTION WRAPPER - For consistent section animations
// ============================================
export function SectionWrapper({
  children,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: luxuryEase,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// ============================================
// SMOOTH SCROLL LINK
// ============================================
export function SmoothScrollLink({
  children,
  href,
  className = '',
  offset = 0,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

// ============================================
// LINE DRAW ANIMATION
// ============================================
export function LineDraw({
  className = '',
  delay = 0,
  duration = 1,
  direction = 'horizontal',
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const isHorizontal = direction === 'horizontal';

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        scaleX: isHorizontal ? 0 : 1, 
        scaleY: isHorizontal ? 1 : 0 
      }}
      animate={isInView 
        ? { scaleX: 1, scaleY: 1 } 
        : { scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }
      }
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
      style={{ originX: 0, originY: 0 }}
    />
  );
}
