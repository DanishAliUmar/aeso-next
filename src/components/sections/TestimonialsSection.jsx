import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { TestimonialCard } from '@/components/common/TestimonialCard';

export const TestimonialsSection = ({
    testimonials
}) => {
    return (
        <SectionContainer
            className={"!bg-[#F3F4FA]"}
            id="testimonials"
        >
            <section className="space-y-10">
                <div className="space-y-4 pb-10">
                    <p className="text-xl md:text-2xl font-bold text-[var(--tertiary)]">Case Studies</p>
                    <h2 className="text-3xl md:text-5xl">Personal Testimonials</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </section>
        </SectionContainer>
    );
};
