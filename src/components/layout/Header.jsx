// src/components/layout/Header.jsx
'use client';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, CircleCheckIcon, CircleHelpIcon, CircleIcon, Facebook, Mail, MapPin, Menu, MessageSquare, Phone, Twitter, X } from 'lucide-react';
import Image from "next/image";

// New MobileNav component (defined below or in a separate file)
const MobileNav = ({ isOpen, onClose, navigationItems }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (label) => {
        setOpenSubMenu(openSubMenu === label ? null : label);
    };

    return (
        <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Mobile Menu */}
            <aside
                className={`absolute right-0 top-0 h-full w-64 bg-[#121429] shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={onClose} className="text-white">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                    {navigationItems.map((item) => (
                        <div key={item.label}>
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(item.label)}
                                        className="w-full text-left text-lg py-2 px-3 text-gray-200 hover:text-primary transition-colors flex justify-between items-center"
                                    >
                                        {item.label}
                                        <ChevronRight className={`size-4 transition-transform duration-200 ${openSubMenu === item.label ? 'rotate-90' : ''}`} />
                                    </button>
                                    {openSubMenu === item.label && (
                                        <ul className="pl-6 pt-2 pb-1 space-y-1 bg-[#1a1c32] rounded">
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.label}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="flex items-center gap-2 py-2 text-sm text-gray-300 hover:text-primary transition-colors"
                                                        onClick={onClose}
                                                    >
                                                        <span className="size-1 rounded-full bg-primary"></span>
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block text-lg py-2 px-3 text-gray-200 hover:text-primary transition-colors"
                                    onClick={onClose}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-4">
                        <Link href={'/contact'} onClick={onClose}>
                            <Button className="w-full text-white hover:bg-primary flex items-center justify-center gap-2" variant={"outline"}>
                                <MessageSquare /> Chat with an Advisor
                            </Button>
                        </Link>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { label: 'Home', href: '/' },
        { label: 'Who We Are', href: '/who-we-are' },
        { label: 'Financial Services', href: '/financial-services/' },
        {
            label: 'News & Press',
            subItems: [
                { label: 'Our Team', href: '/our-team/', icon: <CircleHelpIcon /> },
                { label: 'Testimonials', href: '/testimonials', icon: <CircleIcon /> },
                { label: 'Image Gallery', href: '/image-gallery', icon: <CircleCheckIcon /> },
                { label: '404 Error', href: '#', icon: <CircleCheckIcon /> },
            ]
        },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className='w-screen absolute font-medium z-40'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="hidden md:flex items-center justify-between p-2 text-white border-b border-white/30"> {/* Added md:flex to hide on small, border-white/30 for subtle border */}
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            <p className="text-sm">435 Wandering Ct Sonoma, CA 93632</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="size-4" />
                            <p className="text-sm">1-800-123-4567</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="size-4" />
                            <p className="text-sm">contact@aeso-site.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="size-7 p-1.5 border-white/50 cursor-pointer border flex items-center justify-center rounded-full transition-colors hover:border-primary hover:text-primary">
                            <Facebook className="size-3.5 fill-current text-white hover:fill-primary" />
                        </div>
                        <div className="size-7 p-1.5 border-white/50 cursor-pointer border flex items-center justify-center rounded-full transition-colors hover:border-primary hover:text-primary">
                            <Twitter className="size-3.5 fill-current text-white hover:fill-primary" />
                        </div>
                    </div>
                </div>

                {/* Main Navigation Row */}
                <div className="flex justify-between items-center py-4">
                    <Link href={'/'}>
                        <Image src={'https://asesor.progressionstudios.com/wp-content/themes/aeso-progression/images/logo.png'} width={115} height={100} alt="logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className={'hidden lg:flex font-bold text-lg text-white'} viewport={false}>
                        <NavigationMenuList>
                            {navigation.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    {item.subItems ? (
                                        <>
                                            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="min-w-[10rem] whitespace-nowrap divide-y divide-gray-200/10 bg-white shadow-md rounded-md overflow-hidden">
                                                    {item.subItems.map((subItem) => (
                                                        <li key={subItem.label}>
                                                            <NavigationMenuLink className={'p-3 text-gray-700 hover:text-primary transition-colors'} asChild>
                                                                <Link href={subItem.href}>
                                                                    <span className="flex items-center gap-2">
                                                                        <span className="size-1.5 rounded-full bg-primary hidden group-hover:block transition-all duration-200"></span>
                                                                        <span>{subItem.label}</span>
                                                                    </span>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link className="font-bold text-lg text-white hover:text-primary transition-colors" href={item.href}>{item.label}</Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <Link href={'/contact'}>
                            <Button className="text-white hover:bg-primary flex items-center gap-2" variant={"outline"}>
                                <MessageSquare className="size-5" /> Chat with an Advisor
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navigationItems={navigation} />
        </header>
    );
};