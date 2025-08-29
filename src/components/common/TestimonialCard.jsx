// src/components/TestimonialCard.jsx

import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const TestimonialCard = ({
    testimonial
}) => {
    return (
        <div className='relative flex flex-col justify-between gap-10 pt-12 pb-6 px-11 bg-white rounded-lg shadow-md'>
            <div className="absolute rounded-full size-14 flex items-center justify-center bg-[var(--tertiary)] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"><Quote className={'rotate-180'} /></div>
            <p className="text-[1.375rem] font-medium">{testimonial?.content}</p>
            <div className="space-y-2">
                <div className="flex items-center gap-3 border-b border-[var(--tertiary)] pb-2">
                    <Image width={36} height={36} src={testimonial?.avatar} alt={testimonial?.name} className="size-16 rounded-full object-cover border-2 border-[var(--tertiary)]" />
                    <h3 className="text-2xl">{testimonial?.name || "----"}</h3>
                </div>
                <p className="text-lg font-bold text-[var(--tertiary)]">{testimonial?.tagLine}</p>
            </div>
        </div>
    );
};