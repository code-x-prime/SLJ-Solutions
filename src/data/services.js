// SLJ Solutions - Services Data
// Using react-icons for reliable icon rendering

import { FaTools, FaBuilding, FaHome, FaTree } from 'react-icons/fa';
import { MdKitchen } from 'react-icons/md';

/**
 * Core Services List - EXACTLY as specified
 * 1. Turnkey Projects – Civil & Interior Works (including MEP Design & Build)
 * 2. Office Interiors – Commercial & Corporate Spaces
 * 3. Residential Interiors – Flats & Apartments
 * 4. Modular Kitchens, Wardrobes & Customized Furnishings
 * 5. Terrace Gardens & Outdoor Landscaping
 */

export const coreServices = [
    {
        id: 1,
        icon: FaTools,
        title: 'Turnkey Projects',
        subtitle: 'Civil & Interior Works',
        description: 'Complete turnkey solutions including MEP Design & Build. From concept to completion, we handle everything as your one-stop partner for construction and interior projects.',
        shortDescription: 'Civil & Interior Works including MEP Design & Build',
        features: [
            'Complete project management',
            'MEP Design & Build',
            'Civil construction',
            'Interior fitout',
        ],
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 2,
        icon: FaBuilding,
        title: 'Office Interiors',
        subtitle: 'Commercial & Corporate Spaces',
        description: 'Professional office interiors designed for productivity and brand identity. We create inspiring commercial and corporate workspaces that reflect your business values.',
        shortDescription: 'Commercial & Corporate Spaces',
        features: [
            'Corporate office design',
            'Commercial fitout',
            'Space planning',
            'Brand integration',
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 3,
        icon: FaHome,
        title: 'Residential Interiors',
        subtitle: 'Flats & Apartments',
        description: 'Transform your home into a beautiful living space. Expert residential interior design services for flats, apartments, and independent houses with personalized styling.',
        shortDescription: 'Flats & Apartments',
        features: [
            'Full home interiors',
            'Flat renovation',
            'Apartment design',
            'Custom solutions',
        ],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 4,
        icon: MdKitchen,
        title: 'Modular Kitchens & Wardrobes',
        subtitle: 'Customized Furnishings',
        description: 'Premium modular kitchens, wardrobes, and customized furnishings crafted to perfection. Modern designs with smart storage solutions tailored to your lifestyle.',
        shortDescription: 'Customized Furnishings',
        features: [
            'Modular kitchens',
            'Custom wardrobes',
            'Vanity units',
            'Smart storage',
        ],
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 5,
        icon: FaTree,
        title: 'Terrace Gardens & Landscaping',
        subtitle: 'Outdoor Landscaping',
        description: 'Beautiful terrace gardens and outdoor landscaping solutions. Bring nature into your urban space with vertical gardens, balcony upgrades, and landscape design.',
        shortDescription: 'Outdoor Landscaping',
        features: [
            'Terrace gardens',
            'Vertical gardens',
            'Balcony design',
            'Outdoor furniture',
        ],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    },
];

// Export services array for easy mapping
export default coreServices;




