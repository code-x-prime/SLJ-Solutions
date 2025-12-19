'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/ScrollAnimations';
import { 
  Send, Mail, Phone, MapPin, Clock, CheckCircle, 
  Instagram, Linkedin, Facebook 
} from 'lucide-react';

// SLJ Solutions actual contact information
const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99535 51248 / +91 88600 36536',
    href: 'tel:+919953551248',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@sljsolutions.com',
    href: 'mailto:sales@sljsolutions.com',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'C-15/1, Street No. 7, Near Gandhi Park, New Govind Pura, Krishna Nagar, New Delhi - 110092',
    href: 'https://maps.google.com/?q=Krishna+Nagar+New+Delhi',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 10AM - 7PM',
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Log form data to console
    console.log('📧 Contact Form Submitted:', formData);

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
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to send message. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-5 py-4 bg-[#fafafa] border border-gray-200 
    font-body text-[#0a0a0a] placeholder-gray-400
    focus:outline-none focus:border-[#ED2028] focus:bg-white
    transition-all duration-300
  `;

  return (
    <PageTransition>
      <Navbar />
      
      <main id="main-content">
        {/* Hero Section - Light & Graceful */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-white via-gray-50 to-[#ED2028]/5">
          {/* Subtle decorative elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#ED2028]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl" />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-[#ED2028]" />
                <span className="text-[#ED2028] font-nav text-sm uppercase tracking-[0.2em]">
                  Get In Touch
                </span>
                <span className="w-12 h-px bg-[#ED2028]" />
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] mb-6">
                Contact <span className="text-[#ED2028]">Us</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
                Ready to transform your space? Reach out to us and let&apos;s discuss 
                how we can bring your vision to life.
              </p>
            </FadeIn>
          </div>

          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ED2028]/30 to-transparent" />
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="space-y-10">
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">
                        Contact Information
                      </h2>
                      <p className="text-gray-600 font-body leading-relaxed">
                        Reach out to us through any of these channels. We typically 
                        respond within 24 hours.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-[#ED2028]/10 text-[#ED2028] shrink-0">
                            <item.icon size={22} strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="block text-xs font-nav uppercase tracking-wider text-gray-400 mb-1">
                              {item.label}
                            </span>
                            {item.href ? (
                              <a 
                                href={item.href}
                                className="text-[#0a0a0a] font-body hover:text-[#ED2028] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <span className="text-[#0a0a0a] font-body">{item.value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div>
                      <span className="block text-xs font-nav uppercase tracking-wider text-gray-400 mb-4">
                        Follow Us
                      </span>
                      <div className="flex gap-4">
                        {socialLinks.map((social) => (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="w-11 h-11 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-[#ED2028] hover:text-[#ED2028] hover:bg-[#ED2028]/5 transition-all duration-300"
                          >
                            <social.icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Map */}
                    <div className="relative aspect-video bg-[#fafafa] overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5091839761!2d77.2773!3d28.6592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9c9b8b8b8b%3A0x0!2sKrishna%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <FadeIn delay={0.2}>
                  <div className="bg-white p-8 md:p-12 shadow-xl">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                      >
                        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[#0a0a0a] mb-3">
                          Thank You!
                        </h3>
                        <p className="text-gray-600 font-body mb-2">
                          We have received your message successfully.
                        </p>
                        <p className="text-gray-500 font-body text-sm mb-6">
                          Please check your email for confirmation.<br/>
                          We will contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setError('');
                            setFormData({
                              name: '',
                              phone: '',
                              email: '',
                              message: '',
                            });
                          }}
                          className="text-[#ED2028] font-nav text-sm uppercase tracking-wider hover:underline"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-2">
                          Send Us a Message
                        </h2>
                        <p className="text-gray-600 font-body mb-8">
                          Fill out the form below and we&apos;ll get back to you shortly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
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
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Your phone number"
                                className={inputClasses}
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

                          <div>
                            <label className="block text-xs font-nav uppercase tracking-wider text-gray-600 mb-2">
                              Message *
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
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
                            className="w-full justify-center font-nav"
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
}
