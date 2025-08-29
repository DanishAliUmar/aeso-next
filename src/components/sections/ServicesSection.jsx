'use client';
import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { ServiceCard } from '@/components/common/ServiceCard';

export const ServicesSection = ({
    services,
}) => {
    return (
        <SectionContainer
            className={"!bg-[#0b0c13] text-white"}
            id="services"
        >
            <div className="space-y-4 pb-10">
                <p className="text-xl md:text-2xl font-bold">Our Services</p>
                <h2 className="text-3xl md:text-5xl">What We Do</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};