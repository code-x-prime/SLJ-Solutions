'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 99535 51248',
    subContent: '+91 88600 36536',
    href: 'tel:+919953551248',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sales@sljsolutions.com',
    href: 'mailto:sales@sljsolutions.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: 'Krishna Nagar, New Delhi - 110092',
    href: 'https://maps.google.com/?q=Krishna+Nagar+New+Delhi',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Sat: 10AM - 7PM',
    href: null,
  },
];

// Custom Input Component with focus animation
function FormInput({ label, type = 'text', name, value, onChange, required, placeholder, rows }) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      {/* Label */}
      <motion.label
        className={`absolute left-4 transition-all duration-300 pointer-events-none
                   ${isFocused || value 
                     ? 'top-2 text-xs font-medium text-[#ED2028]' 
                     : 'top-1/2 -translate-y-1/2 text-gray-400 text-base'
                   }
                   ${isTextarea && (isFocused || value) ? 'top-3' : ''}
                   ${isTextarea && !(isFocused || value) ? 'top-6 translate-y-0' : ''}
                  `}
        animate={{
          color: isFocused ? '#ED2028' : (value ? '#ED2028' : '#9ca3af'),
        }}
      >
        {label} {required && <span className="text-[#ED2028]">*</span>}
      </motion.label>

      {/* Input/Textarea */}
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-transparent border-2 rounded-none outline-none transition-all duration-300
                   ${isTextarea ? 'pt-8 pb-4 px-4 resize-none' : 'pt-6 pb-2 px-4'}
                   ${isFocused 
                     ? 'border-[#ED2028] shadow-[0_0_0_4px_rgba(237,32,40,0.1)]' 
                     : 'border-gray-200 hover:border-gray-300'
                   }
                  `}
      />

      {/* Focus indicator line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#ED2028]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

// Custom Select Component
function FormSelect({ label, name, value, onChange, options }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <motion.label
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10
                   ${isFocused || value 
                     ? 'top-2 text-xs font-medium text-[#ED2028]' 
                     : 'top-1/2 -translate-y-1/2 text-gray-400 text-base'
                   }`}
      >
        {label}
      </motion.label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-white border-2 rounded-none outline-none transition-all duration-300
                   pt-6 pb-2 px-4 appearance-none cursor-pointer
                   ${isFocused 
                     ? 'border-[#ED2028] shadow-[0_0_0_4px_rgba(237,32,40,0.1)]' 
                     : 'border-gray-200 hover:border-gray-300'
                   }`}
      >
        <option value=""></option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Custom dropdown arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gray-400">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#ED2028]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const serviceOptions = [
    { value: 'residential', label: 'Residential Design' },
    { value: 'commercial', label: 'Commercial Spaces' },
    { value: 'renovation', label: 'Renovation' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ED2028]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ED2028]/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#ED2028]" />
              <span className="text-[#ED2028] text-sm font-semibold uppercase tracking-[0.2em]">
                Contact Us
              </span>
              <span className="w-12 h-px bg-[#ED2028]" />
            </span>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] mb-6">
              Let&apos;s Start Your
              <br />
              <span className="text-[#ED2028]">Project</span>
            </h2>

            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Ready to transform your space? Get in touch and let&apos;s bring your vision to life.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column - Contact Info & Map */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    {item.href ? (
                      <a href={item.href} className="block p-6 bg-gray-50 hover:bg-[#ED2028] transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4
                                      group-hover:bg-white/20 transition-colors duration-300">
                          <item.icon size={20} className="text-[#ED2028] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 
                                     group-hover:text-white/70 transition-colors duration-300 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300 font-medium text-sm">
                          {item.content}
                        </p>
                        {item.subContent && (
                          <p className="text-[#1a1a1a] group-hover:text-white transition-colors duration-300 font-medium text-sm">
                            {item.subContent}
                          </p>
                        )}
                      </a>
                    ) : (
                      <div className="p-6 bg-gray-50">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                          <item.icon size={20} className="text-[#ED2028]" />
                        </div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#1a1a1a] font-medium text-sm">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-[300px] lg:h-[400px] overflow-hidden group"
              >
                {/* Map container */}
                <div className="absolute inset-0 bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5091839761!2d77.2773!3d28.6592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9c9b8b8b8b%3A0x0!2sKrishna%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Red corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-[#ED2028]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-[#ED2028]" />

                {/* Location badge */}
                <div className="absolute bottom-6 left-6 bg-white px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ED2028] flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-[#1a1a1a]">New Delhi, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 lg:p-12 border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8"
                      >
                        <CheckCircle size={48} className="text-green-500" />
                      </motion.div>
                      <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4">Message Sent!</h3>
                      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({ name: '', email: '', phone: '', service: '', message: '' });
                        }}
                        className="text-[#ED2028] font-medium hover:underline"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          label="Full Name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                        <FormInput
                          label="Email Address"
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          label="Phone Number"
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                        <FormSelect
                          label="Service Interested In"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          options={serviceOptions}
                        />
                      </div>

                      <FormInput
                        label="Your Message"
                        type="textarea"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />

                      {/* Submit Button */}
                      <div className="pt-4">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full bg-[#ED2028] text-white py-5 px-8
                                   font-semibold uppercase tracking-wider text-lg
                                   overflow-hidden disabled:opacity-70"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          {/* Hover background effect */}
                          <motion.span
                            className="absolute inset-0 bg-[#c41a20]"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          />

                          {/* Glow effect */}
                          <motion.span
                            className="absolute inset-0"
                            whileHover={{
                              boxShadow: '0 0 40px rgba(237, 32, 40, 0.4), 0 0 80px rgba(237, 32, 40, 0.2)',
                            }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Button content */}
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <motion.span
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ArrowRight size={20} />
                                </motion.span>
                              </>
                            )}
                          </span>
                        </motion.button>
                      </div>

                      <p className="text-center text-sm text-gray-400">
                        By submitting, you agree to our{' '}
                        <a href="#" className="text-[#ED2028] hover:underline">Privacy Policy</a>
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
