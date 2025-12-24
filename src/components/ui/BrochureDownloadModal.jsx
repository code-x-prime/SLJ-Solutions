'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Send, CheckCircle } from 'lucide-react';
import Button from './Button';

// Country codes list
const countryCodes = [
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
];

export default function BrochureDownloadModal({ isOpen, onClose, brochureUrl = '/brochure.pdf' }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [countryCode, setCountryCode] = useState('+91'); // Default to India
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Reset form when modal closes
    const handleClose = () => {
        if (!isSubmitting) {
            setFormData({ name: '', phone: '', email: '' });
            setCountryCode('+91');
            setIsSubmitted(false);
            setError('');
            onClose();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDownload = () => {
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = 'SLJ-Solutions-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Combine country code with phone number
            const fullPhoneNumber = `${countryCode} ${formData.phone}`.trim();

            // Send email to admin with brochure download details
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: fullPhoneNumber,
                    email: formData.email,
                    message: 'Downloaded SLJ Solutions Brochure',
                    subject: 'Brochure Download Request',
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setIsSubmitting(false);
            setIsSubmitted(true);

            // Download brochure after email is sent
            setTimeout(() => {
                handleDownload();
                // Auto close after download
                setTimeout(() => {
                    handleClose();
                }, 2000);
            }, 500);

        } catch (err) {
            console.error('Form submission error:', err);
            setError(err.message || 'Failed to send details. Please try again.');
            setIsSubmitting(false);
        }
    };

    const inputClasses = `
    w-full px-4 py-3 bg-[#fafafa] border border-gray-200 
    font-body text-[#0a0a0a] placeholder-gray-400 text-sm
    focus:outline-none focus:border-[#ED2028] focus:bg-white
    transition-all duration-300
  `;

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative bg-white w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            disabled={isSubmitting}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ED2028] hover:bg-gray-100 transition-all duration-300 disabled:opacity-50"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="p-8">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-[#0a0a0a] mb-3">
                                        Download Started!
                                    </h3>
                                    <p className="text-gray-600 font-body mb-2">
                                        Your brochure is downloading now.
                                    </p>
                                    <p className="text-gray-500 font-body text-sm">
                                        Thank you for your interest in SLJ Solutions!
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#ED2028]/10 rounded-full flex items-center justify-center">
                                            <Download size={32} className="text-[#ED2028]" />
                                        </div>
                                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a] text-center mb-2">
                                            Download Brochure
                                        </h2>
                                        <p className="text-gray-500 font-body text-sm text-center">
                                            Please fill in your details to download our brochure
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                                className={inputClasses}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                                                Phone Number *
                                            </label>
                                            <div className="flex gap-2">
                                                <select
                                                    value={countryCode}
                                                    onChange={(e) => setCountryCode(e.target.value)}
                                                    className={`
                            px-3 py-3 bg-[#fafafa] border border-gray-200 
                            font-body text-[#0a0a0a] text-sm
                            focus:outline-none focus:border-[#ED2028] focus:bg-white
                            transition-all duration-300
                            cursor-pointer
                            appearance-none
                            bg-no-repeat bg-right
                            pr-8
                          `}
                                                    style={{
                                                        width: '100px',
                                                        flexShrink: 0,
                                                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                                                        backgroundPosition: 'right 10px center',
                                                        backgroundSize: '10px'
                                                    }}
                                                >
                                                    {countryCodes.map((country) => (
                                                        <option key={country.code} value={country.code}>
                                                            {country.flag} {country.code}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Phone number"
                                                    className={inputClasses + ' flex-1'}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your email address"
                                                className={inputClasses}
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-body">
                                                {error}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            icon={isSubmitting ? null : <Send size={18} />}
                                            loading={isSubmitting}
                                            className="w-full justify-center font-nav mt-2"
                                        >
                                            {isSubmitting ? 'Processing...' : 'Download Brochure'}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Red accent line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#ED2028]" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

