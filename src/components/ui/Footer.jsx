'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '../animations/ScrollAnimations';
import { useModal } from './EnquiryModal';
import { 
  Instagram, Facebook, Linkedin, 
  Mail, Phone, MapPin, ArrowUpRight, ArrowRight 
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Turnkey Construction', href: '/services' },
    { name: 'Office Interiors', href: '/services' },
    { name: 'Modular Kitchens', href: '/services' },
    { name: 'IKEA Furnishing', href: '/services' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useModal();

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <FadeIn>
              <Link href="/" className="inline-block mb-6">
                {/* White logo for dark footer */}
                <Image
                  src="/white.png"
                  alt="SLJ Solutions"
                  width={150}
                  height={60}
                  className="h-14 w-auto"
                />
              </Link>
              
              <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm mb-4">
                <strong className="text-white">One Solution For All Your Needs</strong>
              </p>
              <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm mb-8">
                Award-winning interior design company since 2009. Specializing in 
                turnkey construction, office interiors, modular solutions & more.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-400 
                             hover:border-[#ED2028] hover:text-[#ED2028] hover:bg-[#ED2028]/5 
                             transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Company */}
            <div>
              <FadeIn delay={0.1}>
                <h4 className="font-nav text-xs uppercase tracking-[0.15em] text-white mb-5">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 font-body text-sm hover:text-[#ED2028] transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight 
                          size={12} 
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            {/* Services */}
            <div>
              <FadeIn delay={0.15}>
                <h4 className="font-nav text-xs uppercase tracking-[0.15em] text-white mb-5">
                  Services
                </h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 font-body text-sm hover:text-[#ED2028] transition-colors duration-300 inline-flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight 
                          size={12} 
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.25}>
              <h4 className="font-nav text-xs uppercase tracking-[0.15em] text-white mb-5">
                Contact Us
              </h4>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+919953551248"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#ED2028] transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <div className="font-body text-sm">
                    <span className="block">+91 99535 51248</span>
                    <span className="block">+91 88600 36536</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:sales@sljsolutions.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#ED2028] transition-colors group"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span className="font-body text-sm">sales@sljsolutions.com</span>
                </a>
                
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span className="font-body text-sm">
                    C-15/1, Street No. 7, Near Gandhi Park,<br />
                    New Govind Pura, Krishna Nagar,<br />
                    New Delhi - 110092, India
                  </span>
                </div>
              </div>

              {/* Get Quote Button */}
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ED2028] text-white 
                         font-nav text-sm uppercase tracking-wider
                         hover:bg-[#c41a20] transition-colors"
              >
                Get Free Quote
                <ArrowRight size={16} />
              </button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-body text-xs">
              © {currentYear} SLJ Solutions. All rights reserved.
            </p>
            
            <p className="text-gray-600 font-body text-xs">
              Interior Design Excellence Since 2009
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
