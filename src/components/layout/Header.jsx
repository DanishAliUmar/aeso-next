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
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Facebook, Mail, MapPin, Menu, Phone, Twitter, X } from 'lucide-react';
import Image from "next/image";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { label: 'Home', href: '/' },
        { label: 'Who We Are', href: '/about' },
        { label: 'Financial Services', href: '/services' },
        {
            label: 'News & Press',
            subItems: [
                { label: 'Our Team', href: '#', icon: <CircleHelpIcon /> },
                { label: 'Testimonials', href: '#', icon: <CircleIcon /> },
                { label: 'Image Gallery', href: '#', icon: <CircleCheckIcon /> },
                { label: '404 Error', href: '#', icon: <CircleCheckIcon /> },
            ]
        },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className='container mx-auto px-4 sm:px-6 lg:px-8 py-2 absolute font-medium'>
            <div className="flex items-center justify-between p-2 text-white border-b border-white">
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-2">
                        <MapPin className="size-4" />
                        <p className="">435 Wandering Ct Sonoma, CA 93632</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="size-4" />
                        <p className="">1-800-123-4567</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="size-4" />
                        <p className="">435 Wandering Ct Sonoma, CA 93632</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="siz-8 p-0.5 border-white cursor-pointer border-2 flex items-center justify-center rounded-full">
                        <Facebook className="size-5" />
                    </div>
                    <div className="siz-8 p-0.5 border-white cursor-pointer border-2 flex items-center justify-center rounded-full">
                        <Twitter className="size-5" />
                    </div>
                </div>

            </div>
            <div className="">
                <div className="flex justify-between items-center py-4">
                    <Link href={'/'}>
                        <Image src={'https://asesor.progressionstudios.com/wp-content/themes/aeso-progression/images/logo.png'} width={115} height={100} alt="logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className={'font-bold'} viewport={false}>
                        <NavigationMenuList>
                            {navigation.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    {item.subItems ? (
                                        <>
                                            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="min-w-[8rem] whitespace-nowrap divide-y">
                                                    {item.subItems.map((subItem) => (
                                                        <li key={subItem.label}>
                                                            <NavigationMenuLink className={'p-1'} asChild>
                                                                <Link href={subItem.href}>
                                                                    <span className="flex items-center gap-2 rounded-md group">
                                                                        <span className="size-1 rounded-full bg-primary hidden group-hover:block"></span>
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
                                            <Link className="font-bold text-lg" href={item.href}>{item.label}</Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button className="">
                            <Link href={'/contact'}>Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};