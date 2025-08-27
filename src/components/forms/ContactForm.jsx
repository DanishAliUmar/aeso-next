'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const ContactForm = ({
    title = "Get Started Today",
    subtitle = "Schedule a consultation with our financial experts",
    onSubmit,
    className = ''
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            subject: formData.get('subject'),
        };

        try {
            if (onSubmit) {
                await onSubmit(data);
            } else {
                // Default form submission
                console.log('Form data:', data);
            }
            setIsSubmitted(true);
        } catch (err) {
            setError('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <Card className={className}>
                <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">
                        Thank You!
                    </h3>
                    <p className="text-gray-600">
                        We've received your message and will get back to you within 24 hours.
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={className}>
            <CardContent className="p-8">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {title}
                    </h3>
                    <p className="text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full"
                                placeholder="(555) 123-4567"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject *
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select a subject</option>
                                <option value="consultation">Free Consultation</option>
                                <option value="financial-planning">Financial Planning</option>
                                <option value="retirement">Retirement Planning</option>
                                <option value="investment">Investment Advisory</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Tell us about your financial goals..."
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy.
                    </p>
                </form>
            </CardContent>
        </Card>
    );
};