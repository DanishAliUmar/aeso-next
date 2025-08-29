import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const Footer = ({
    logo = 'ASESOR',
    description = 'Fee-Only Wealth Management Firm Serving the California Region',
    sections = [
        {
            title: 'Company',
            links: [
                { label: 'News & Press', href: '/news' },
                { label: 'Who We Work With', href: '/partners' },
                { label: 'Our Approach', href: '/approach' },
                { label: 'Leadership', href: '/leadership' },
                { label: 'Contact Us', href: '/contact' }
            ]
        },
        {
            title: 'Services',
            links: [
                { label: 'Financial Planning', href: '/services/financial-planning' },
                { label: 'Lifestyle', href: '/services/lifestyle' },
                { label: 'College Planning', href: '/services/college-planning' },
                { label: 'Retirement', href: '/services/retirement' },
                { label: 'Estate Management', href: '/services/estate-management' },
                { label: 'Life Insurance', href: '/services/life-insurance' }
            ]
        },
        {
            title: 'Locations',
            content: [
                {
                    heading: 'Northern California',
                    address: '435 Wandering Ct, Suite 101.\nSonoma, CA 93632',
                    directionsLink: '#'
                },
                {
                    heading: 'Southern California',
                    address: '789 Ocean Drive, Apt 20.\nLos Angeles, CA 90001',
                    directionsLink: '#'
                }
            ]
        },
        {
            title: 'Newsletter',
            description: 'Join our Weekly Newsletter! We promise we won\'t spam.',
            hasForm: true
        }
    ],
    copyright = 'COPYRIGHT ALL RIGHTS RESERVED. AESO, LIKE ALL PROVIDERS OF PERSONAL FINANCIAL SERVICES IS REQUIRED BY LAW TO INFORM THEIR CLIENTS OF THEIR POLICIES REGARDING PRIVACY OF CLIENT INFORMATION. THE INFORMATION IN THIS MATERIAL IS NOT INTENDED AS TAX OR LEGAL ADVICE. AESO IS A REGISTERED BUSINESS IN CALIFORNIA (LICENSE #123560) PROVIDED CONTENT IS FOR INFORMATIONAL PURPOSES ONLY AND IS COMPLETELY FICTIONAL.'
}) => {
    return (
        <footer className="bg-[#0b0c13] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl md:text-2xl text-[#9ca9d8] mb-6">{section.title}</h3>
                            {section.links && (
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="flex items-center group hover:text-primary transition-colors">
                                            <ChevronRight className="size-4 mr-2" />
                                            <Link className='text-lg md:text-xl group-hover:translate-x-1 transition-all' href={link.href}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.content && (
                                <div className="space-y-6">
                                    {section.content.map((location, locIndex) => (
                                        <div key={locIndex}>
                                            <p className="text-lg md:text-xl font-medium mb-1">{location.heading}</p>
                                            <p className="text-xl md:text-lg text-gray-400 whitespace-pre-line">{location.address}</p>
                                            {location.directionsLink && (
                                                <Link href={location.directionsLink} className="text-[#9ca9d8] leading-[1.2] border-b w-fit border-[#9ca9d8] text-sm mt-1 block">
                                                    Get Directions
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {section.hasForm && (
                                <div className="space-y-4">
                                    <p className="text-lg md:text-xl font-medium mb-1">{section.description}</p>
                                    <div className="flex space-x-2">
                                        <Input className="!bg-white outline-0 focus:border-none border-primary border" type="email" placeholder="email@mailinator.com" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-grow" />
                                        <Button className="!w-fit !px-6 !py-6">
                                            Sign up
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Copyright and Disclaimer */}
                <div className="border-t border-gray-700 mt-16 pt-8 text-center text-[#9ca9d8] text-sm leading-relaxed">
                    <p>&copy; {new Date().getFullYear()} Asesor. All rights reserved.</p>
                    <p className="mt-4">{copyright}</p>
                </div>
            </div>
        </footer>
    );
};