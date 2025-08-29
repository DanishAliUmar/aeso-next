import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/common/SectionContainer';
import Image from 'next/image';

export const FeaturesSection = ({
    features
}) => {
    return (
        <SectionContainer
            className={"!pt-5 md:pt-20"}
            id="features"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                    <div key={feature.id} className="p-3 flex flex-col items-center md:block text-center md:text-left">
                        <Image src={feature.icon} alt={feature.title} width={40} height={40} className="" />
                        <h3 className="text-2xl sm:text-3xl font-semibold pb-3 pt-4 sm:pt-8">{feature.title}</h3>
                        <p className="sm:text-xl text-[var(--text-dark)] font-medium leading-[1.6] max-w-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};