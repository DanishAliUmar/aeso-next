'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ServiceCard = ({
    service,
    className = '',
    variant = 'default',
    onClick
}) => {
    const cardClasses = `text-center hover:shadow-lg transition-all duration-300 cursor-pointer group ${variant === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : ''
        } ${className}`;

    return (
        <Card className={cardClasses}
        // onClick={onClick}
        >
            <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                    <img
                        src={service.icon}
                        alt={service.title}
                        className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                </h3>
                <p className={variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {service.description}
                </p>
            </CardContent>
        </Card>
    );
};
