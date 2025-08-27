import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/common/SectionContainer';

const backgroundStyles = {
    gradient: 'bg-gradient-to-r from-blue-50 to-indigo-100',
    image: 'bg-cover bg-center',
    solid: 'bg-white'
};

export const HeroSection = ({ data, className = '' }) => {
    return (
        <SectionContainer
            className={`${backgroundStyles[data.backgroundVariant]} ${className}`}
            variant="default"
            padding="xl"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        {data.subtitle}
                    </p>
                    {data.description && (
                        <p className="text-lg text-gray-600 mb-8">
                            {data.description}
                        </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            <a href={data.primaryCTA.href}>
                                {data.primaryCTA.text}
                            </a>
                        </Button>
                        {data.secondaryCTA && (
                            <Button
                                variant="outline"
                                size="lg"
                            >
                                <a href={data.secondaryCTA.href}>
                                    {data.secondaryCTA.text}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={data.heroImage}
                        alt="Hero Image"
                        className="rounded-lg shadow-2xl w-full max-w-md"
                    />
                </div>
            </div>
        </SectionContainer>
    );
};