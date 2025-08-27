'use client';
import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { ServiceCard } from '@/components/common/ServiceCard';

export const ServicesSection = ({
    title,
    subtitle,
    services,
    variant = 'light',
    className = '',
    onServiceClick
}) => {
    return (
        <SectionContainer
            variant={variant}
            className={className}
            id="services"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        variant={variant}
                    // onClick={() => onServiceClick?.(service)}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};