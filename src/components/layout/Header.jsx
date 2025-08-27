'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = ({
    logo = 'ASESOR',
    navigation = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Team', href: '/team' },
        { label: 'Contact', href: '/contact' }
    ],
    ctaText = 'Get Started',
    ctaHref = '/contact'
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-900">
                        {logo}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                            <a href={ctaHref}>{ctaText}</a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-900 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
                                <a href={ctaHref}>{ctaText}</a>
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};