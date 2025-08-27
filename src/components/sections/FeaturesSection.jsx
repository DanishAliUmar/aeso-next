import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SectionContainer } from '@/components/common/SectionContainer';

export const FeaturesSection = ({
    features,
    title = "It's Your Future: Build a Financial Picture That Fits Your Goals",
    description = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    image,
    variant = 'light',
    className = ''
}) => {
    return (
        <SectionContainer
            variant={variant}
            className={className}
            id="features"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {description}
                    </p>
                    {image && (
                        <img
                            src={image}
                            alt="Features"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    )}
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.id} className="border-0 shadow-md">
                            <CardContent className="flex items-center p-6">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-16 h-16 mr-4"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};