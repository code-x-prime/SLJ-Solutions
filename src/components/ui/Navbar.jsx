'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from './Button';
import { useModal } from './EnquiryModal';
import { ArrowRight } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { openModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Check if we're on the home page (has dark hero)
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = isHomePage ? 100 : 20;
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    const isTransparent = isHomePage && !isScrolled;

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
                    isTransparent
                        ? 'bg-transparent py-5'
                        : 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3'
                )}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10 group">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative"
                        >
                            {/* Show white logo on transparent navbar, red logo otherwise */}
                            <Image
                                src={isTransparent ? "/white.png" : "/red-one.png"}
                                alt="SLJ Solutions"
                                width={200}
                                height={100}
                                className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10 xl:gap-14">
                        {navLinks.map((link, index) => {
                            const active = isActive(link.href);

                            return (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.08 + 0.3,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.href)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className="relative group py-2"
                                    >
                                        <span className={cn(
                                            'font-nav text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300',
                                            active
                                                ? 'text-[#ED2028]'
                                                : isTransparent
                                                    ? 'text-white hover:text-[#ED2028]'
                                                    : 'text-[#2a2a2a] hover:text-[#ED2028]'
                                        )}>
                                            {link.name}
                                        </span>

                                        <span className="absolute -bottom-0.5 left-0 w-full h-[2px] overflow-hidden">
                                            <motion.span
                                                className="absolute inset-0 bg-[#ED2028]"
                                                initial={{ x: '-100%' }}
                                                animate={{
                                                    x: active || hoveredLink === link.href ? '0%' : '-100%'
                                                }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </span>

                                        {active && (
                                            <motion.span
                                                layoutId="navActiveDot"
                                                className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ED2028]"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Get Quote CTA Button - Opens Modal */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="hidden lg:block"
                    >
                        <Button
                            size="md"
                            icon={<ArrowRight size={16} />}
                            onClick={openModal}
                            className="px-6 py-2.5 text-[13px] font-nav font-medium tracking-wider"
                        >
                            Get Quote
                        </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-4 flex flex-col justify-between">
                            <motion.span
                                className={cn(
                                    'absolute top-0 left-0 w-full h-[2px] origin-center transition-colors duration-300',
                                    isTransparent && !isMobileMenuOpen ? 'bg-white' : 'bg-[#1a1a1a]'
                                )}
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 7 : 0,
                                    backgroundColor: isMobileMenuOpen ? '#ED2028' : undefined
                                }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            />
                            <motion.span
                                className={cn(
                                    'absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] transition-colors duration-300',
                                    isTransparent && !isMobileMenuOpen ? 'bg-white' : 'bg-[#1a1a1a]'
                                )}
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    x: isMobileMenuOpen ? 20 : 0
                                }}
                                transition={{ duration: 0.25 }}
                            />
                            <motion.span
                                className={cn(
                                    'absolute bottom-0 left-0 w-full h-[2px] origin-center transition-colors duration-300',
                                    isTransparent && !isMobileMenuOpen ? 'bg-white' : 'bg-[#1a1a1a]'
                                )}
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -7 : 0,
                                    backgroundColor: isMobileMenuOpen ? '#ED2028' : undefined
                                }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 300,
                                mass: 0.8
                            }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] z-40 bg-white shadow-2xl lg:hidden overflow-y-auto"
                        >
                            <div className="min-h-full flex flex-col pt-24 pb-10 px-8">
                                {/* Mobile Logo */}
                                <div className="mb-8">
                                    <Image
                                        src="/red-one.png"
                                        alt="SLJ Solutions"
                                        width={140}
                                        height={60}
                                        className="h-12 w-auto"
                                    />
                                </div>

                                <nav className="flex-1">
                                    <div className="space-y-1">
                                        {navLinks.map((link, index) => {
                                            const active = isActive(link.href);

                                            return (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ opacity: 0, x: 40 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 40 }}
                                                    transition={{
                                                        delay: index * 0.06,
                                                        duration: 0.4,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="group block py-4 border-b border-gray-100"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className={cn(
                                                                'font-heading text-3xl sm:text-4xl font-medium transition-all duration-300',
                                                                active
                                                                    ? 'text-[#ED2028]'
                                                                    : 'text-[#1a1a1a] group-hover:text-[#ED2028] group-hover:translate-x-2'
                                                            )}>
                                                                {link.name}
                                                            </span>

                                                            <motion.span
                                                                className="text-[#ED2028] opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                            >
                                                                <ArrowRight size={24} />
                                                            </motion.span>
                                                        </div>

                                                        {active && (
                                                            <motion.div
                                                                layoutId="mobileActiveIndicator"
                                                                className="mt-2 h-[2px] w-12 bg-[#ED2028]"
                                                            />
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="mt-10 space-y-6"
                                >
                                    <Button
                                        size="lg"
                                        icon={<ArrowRight size={20} />}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setTimeout(openModal, 300);
                                        }}
                                        className="w-full justify-center text-base font-nav"
                                    >
                                        Get Free Quote
                                    </Button>

                                    <div className="pt-6 border-t border-gray-100 space-y-3">
                                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-nav font-medium">
                                            Get in touch
                                        </p>
                                        <a
                                            href="mailto:sales@sljsolutions.com"
                                            className="block text-base font-body text-[#1a1a1a] hover:text-[#ED2028] transition-colors"
                                        >
                                            sales@sljsolutions.com
                                        </a>
                                        <a
                                            href="tel:+919953551248"
                                            className="block text-base font-body text-[#1a1a1a] hover:text-[#ED2028] transition-colors"
                                        >
                                            +91 99535 51248
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#ED2028] via-[#ED2028]/30 to-transparent" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
