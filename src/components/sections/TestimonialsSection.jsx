import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { TestimonialCard } from '@/components/common/TestimonialCard';

export const TestimonialsSection = ({
    title,
    subtitle,
    testimonials,
    variant = 'default',
    className = ''
}) => {
    return (
        <SectionContainer
            variant={variant}
            className={className}
            id="testimonials"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        variant={variant}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};
