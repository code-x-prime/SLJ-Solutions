'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark shadow-luxury hover:shadow-luxury-hover',
    secondary: 'bg-white text-brand-red border-2 border-brand-red hover:bg-brand-red hover:text-white',
    outline: 'bg-transparent text-foreground border border-foreground/20 hover:border-brand-red hover:text-brand-red',
    ghost: 'bg-transparent text-foreground hover:text-brand-red hover:bg-brand-red/5',
    white: 'bg-white text-brand-red hover:bg-gray-100 shadow-lg',
};

const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
};

const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon,
    iconPosition = 'right',
    disabled,
    loading,
    ...props
}, ref) => {
    return (
        <motion.button
            ref={ref}
            className={cn(
                'relative inline-flex items-center justify-center gap-2 font-medium tracking-wide',
                'transition-all duration-500 ease-luxury',
                'overflow-hidden group',
                buttonVariants[variant],
                buttonSizes[size],
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            disabled={disabled || loading}
            {...props}
        >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 overflow-hidden">
                <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                     group-hover:animate-shimmer"
                />
            </span>

            {/* Content */}
            <span className="relative flex items-center gap-2">
                {loading ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                ) : (
                    <>
                        {icon && iconPosition === 'left' && (
                            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                {icon}
                            </span>
                        )}
                        {children}
                        {icon && iconPosition === 'right' && (
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                {icon}
                            </span>
                        )}
                    </>
                )}
            </span>
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;

