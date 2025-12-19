'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModal } from './EnquiryModal';

/**
 * Reusable ServiceCard Component
 * - White background with subtle border
 * - Icon at top (red color)
 * - Service title
 * - Optional short description
 * - Hover effect: slight scale + shadow
 */
export default function ServiceCard({
    icon: Icon,
    title,
    description,
    showDescription = true,
    variant = 'default', // 'default' | 'compact' | 'large'
    className = '',
}) {
    const { openModal } = useModal();

    // Card size variants
    const variants = {
        default: {
            padding: 'p-6 md:p-8',
            iconSize: 'w-14 h-14',
            iconInner: 28,
            titleSize: 'text-lg md:text-xl',
            descSize: 'text-sm',
        },
        compact: {
            padding: 'p-5 md:p-6',
            iconSize: 'w-12 h-12',
            iconInner: 24,
            titleSize: 'text-base md:text-lg',
            descSize: 'text-sm',
        },
        large: {
            padding: 'p-8 md:p-10',
            iconSize: 'w-16 h-16',
            iconInner: 32,
            titleSize: 'text-xl md:text-2xl',
            descSize: 'text-base',
        },
    };

    const v = variants[variant];

    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative h-full ${className}`}
        >
            <div
                className={`
          relative h-full bg-white ${v.padding}
          border border-gray-100
          transition-all duration-500 ease-out
          hover:border-[#ED2028]/20 
          hover:shadow-xl hover:shadow-black/5
        `}
            >
                {/* Icon */}
                <div
                    className={`
            ${v.iconSize} flex items-center justify-center 
            bg-[#ED2028]/10 text-[#ED2028] mb-5
            group-hover:bg-[#ED2028] group-hover:text-white
            transition-all duration-400
          `}
                >
                    <Icon size={v.iconInner} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                    className={`
            font-heading ${v.titleSize} font-semibold text-[#0a0a0a] mb-3
            group-hover:text-[#ED2028] transition-colors duration-300
          `}
                >
                    {title}
                </h3>

                {/* Description (optional) */}
                {showDescription && description && (
                    <p className={`text-gray-600 font-body ${v.descSize} leading-relaxed mb-5`}>
                        {description}
                    </p>
                )}

                {/* Enquire Button - visible on hover */}
                <button
                    onClick={openModal}
                    className="
            inline-flex items-center gap-2 
            text-[#ED2028] font-nav text-xs 
            uppercase tracking-wider font-medium
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300
            hover:underline
          "
                >
                    Enquire Now
                    <ArrowRight size={14} />
                </button>

                {/* Bottom accent line on hover */}
                <div
                    className="
            absolute bottom-0 left-0 h-[3px] bg-[#ED2028]
            w-0 group-hover:w-full
            transition-all duration-500 ease-out
          "
                />
            </div>
        </motion.div>
    );
}

