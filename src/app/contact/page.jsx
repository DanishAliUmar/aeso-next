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

const Contact = () => {
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
            <HeroSection title={'Schedule a Meeting with an Advisor'} heading={"Contact Us"} />
            <SectionContainer className=''>
                <div className="flex flex-col md:flex-row items-center gap-y-10">
                    <div className="md:w-1/2 pr-14 pt-5">
                        <p className={`text-xl xl:text-2xl text-[var(--tertiary)]`}>Northern California</p>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl">Sonoma <br /> County</h2>
                        <div className="text-xl font-medium space-y-4">
                            <div className="flex items-center gap-4">
                                <MapPin className="size-5" />
                                <p className="">435 Wandering Ct Sonoma, CA 93632</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="size-5" />
                                <p className="">1-800-123-4567</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="size-5" />
                                <p className="">contact@aeso-site.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <Image src={'https://asesor.progressionstudios.com/wp-content/uploads/2019/11/about-image.jpg'} width={525} height={410} alt='' className='w-full h-auto object-contain' />
                    </div>
                </div>
                <div className="flex flex-col-reverse items-center md:flex-row gap-y-10">
                    <div className="md:w-1/2">
                        <Image src={'https://asesor.progressionstudios.com/wp-content/uploads/2019/11/about-image.jpg'} width={525} height={410} alt='' className='w-full h-auto object-contain' />
                    </div>
                    <div className="md:w-1/2 space-y-3 md:pl-14 pt-2">
                        <p className={`text-xl xl:text-2xl text-[var(--tertiary)]`}>Southern California</p>
                        <h2 className="text-3xl md:text-4xl lg:text-6xl">Pasadena</h2>
                        <div className="text-xl font-medium space-y-4">
                            <div className="flex items-center gap-4">
                                <MapPin className="size-5" />
                                <p className="">4252 Main St. Pasadena, CA 93325</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="size-5" />
                                <p className="">1-800-123-4567</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="size-5" />
                                <p className="">contact@aeso-site.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className='relative z-10 py-24' style={{
                backgroundImage: "url(https://asesor.progressionstudios.com/wp-content/uploads/2019/11/contact-base.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                    {/* Left content */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                        <h1 className="text-5xl md:text-6xl font-semibold font-serif leading-tight">Lets <br /> Talk <br /> Business</h1> {/* Adjusted font and size */}
                        <p className="text-xl md:text-2xl mt-4">
                            Ready to make an appointment? <br />
                            Call <span className="font-bold">1-800-343-0002</span> or send us an Email.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="lg:w-1/2 w-full space-y-6 text-black bg-white/10 p-8 rounded-lg shadow-xl backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full text-black"
                                />
                                {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full text-black"
                                />
                                {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full text-black"
                                />
                                {formErrors.subject && <p className="text-red-400 text-sm mt-1">{formErrors.subject}</p>}
                            </div>
                            <div>
                                <Input
                                    type="tel" // Use type="tel" for phone numbers
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full text-black"
                                />
                                {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="flex h-32 w-full min-w-0 rounded-md border border-[#3E9FCD] bg-transparent px-4 py-2 text-base shadow-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                            ></textarea>
                            {formErrors.message && <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>}
                        </div>
                        <Button type="submit" className="w-fit bg-primary  text-lg py-3 px-6 hover:bg-primary/90 transition-colors">
                            Send Message
                        </Button>
                        {submitStatus === 'success' && (
                            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                        )}
                    </form>
                </div>
            </SectionContainer>
            <CTARideSection />
            <ContactSection />

        </>
    )
}

export default Contact
