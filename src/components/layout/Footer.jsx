import React from 'react';

export const Footer = ({
    logo = 'ASESOR',
    description = 'Fee-Only Wealth Management Firm Serving the California Region',
    sections = [
        {
            title: 'Services',
            links: [
                { label: 'Financial Planning', href: '/services/financial-planning' },
                { label: 'Retirement', href: '/services/retirement' },
                { label: 'Investment', href: '/services/investment' },
                { label: 'Tax Management', href: '/services/tax-management' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/team' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' }
            ]
        }
    ],
    contactInfo = {
        address: 'California, USA',
        phone: '(555) 123-4567',
        email: 'info@asesor.com'
    },
    copyright = '2024 Asesor. All rights reserved.'
}) => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <div className="text-2xl font-bold mb-4">{logo}</div>
                        <p className="text-gray-400 mb-4">{description}</p>
                    </div>

                    {/* Footer Sections */}
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-400">
                            {contactInfo.address && <p>{contactInfo.address}</p>}
                            {contactInfo.phone && <p>Phone: {contactInfo.phone}</p>}
                            {contactInfo.email && <p>Email: {contactInfo.email}</p>}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {copyright}</p>
                </div>
            </div>
        </footer>
    );
};