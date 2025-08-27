import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const TestimonialCard = ({
    testimonial,
    className = '',
    variant = 'default'
}) => {
    const cardClasses = `text-center shadow-lg h-full ${variant === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : ''
        } ${className}`;

    return (
        <Card className={cardClasses}>
            <CardContent className="p-8">
                <div className="mb-6">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover"
                    />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                </h3>

                {testimonial.role && (
                    <p className={`text-sm mb-4 ${variant === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                )}

                {testimonial.rating && (
                    <div className="flex justify-center mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < testimonial.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                <blockquote className={`italic ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    "{testimonial.content}"
                </blockquote>
            </CardContent>
        </Card>
    );
};