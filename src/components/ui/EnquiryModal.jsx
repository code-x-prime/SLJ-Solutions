'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Send, CheckCircle } from 'lucide-react';
import Button from './Button';

// ============================================
// MODAL CONTEXT - For global modal control
// ============================================
const ModalContext = createContext();

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
}

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

// ============================================
// ENQUIRY MODAL COMPONENT
// ============================================
function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Log form data to console
    console.log('📧 Enquiry Form Submitted:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message || 'Enquiry from website modal form',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Auto close after success
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to send. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 bg-[#fafafa] border border-gray-200 
    font-body text-[#0a0a0a] placeholder-gray-400 text-sm
    focus:outline-none focus:border-[#ED2028] focus:bg-white
    transition-all duration-300
  `;

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
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#ED2028] hover:bg-gray-100 transition-all duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10">
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
                    Thank You!
                  </h3>
                  <p className="text-gray-600 font-body mb-2">
                    We have received your enquiry successfully.
                  </p>
                  <p className="text-gray-500 font-body text-sm">
                    Please check your email for confirmation. <br/>
                    We will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header with Logo */}
                  <div className="mb-8">
                    <Image
                      src="/red-one.png"
                      alt="SLJ Solutions"
                      width={100}
                      height={40}
                      className="h-8 w-auto mb-4"
                    />
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a]">
                      Get Free Quote
                    </h2>
                    <p className="text-gray-500 font-body text-sm mt-2">
                      Fill in your details and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Phone number"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email address"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Interior Design</option>
                        <option value="commercial">Commercial Interior Design</option>
                        <option value="turnkey">Turnkey Interior Solutions</option>
                        <option value="corporate">Corporate Interiors</option>
                        <option value="modular">Modular Kitchen & Wardrobes</option>
                        <option value="renovation">Renovation & Upgrades</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your project..."
                        className={inputClasses + ' resize-none'}
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
                      {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
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

export default EnquiryModal;

