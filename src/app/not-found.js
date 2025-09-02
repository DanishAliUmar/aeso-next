'use client';

import { SectionContainer } from '@/components/common/SectionContainer';
import { HeroSection } from '@/components/sections/who-we-are/HeroSection';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CTARideSection } from '@/components/sections/home/CTARideSection';
import ContactSection from '@/components/sections/home/ContactSection';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function NotFound() {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.message.trim()) errors.message = 'Message is required';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (validateForm()) {
            console.log('Form Data Sent:', formData);

            setTimeout(() => {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: '',
                });
                setFormErrors({});
            }, 1000);
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <>
            <HeroSection image="/assets/imgs/imgi_23_page-title.jpg" title={'Oops! That page cannot be found.'} heading={"404 Error"} />
            <SectionContainer>
                <Card className={"w-fit mx-auto flex items-center justify-center flex-col gap-6 p-8 md:p-18 shadow-2xl text-center"}>
                    <h2 className="text-xl md:text-2xl lg:text-3xl">We couldn’t find the page you’re looking for.</h2>
                    <p className="sm:text-lg">Try using the navigation menu at the top or going back to the homepage.</p>
                    <Link href={"/"}>
                        <Button>Back To Home</Button>
                    </Link>
                </Card>
            </SectionContainer>
            <CTARideSection />
            <ContactSection />

        </>
    )
}
