import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/common/SectionContainer';

export const CTASection = ({ data, className = '' }) => {
    const backgroundStyle = data.backgroundImage
        ? { backgroundImage: `url(${data.backgroundImage})` }
        : {};

    return (
        <SectionContainer
            variant={data.variant}
            className={className}
            style={backgroundStyle}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    {data.title}
                </h2>
                {data.subtitle && (
                    <p className="text-xl mb-6 opacity-90">
                        {data.subtitle}
                    </p>
                )}
                <p className="text-lg mb-8 opacity-80">
                    {data.description}
                </p>
                <Button
                    size="lg"
                    className={
                        data.variant === 'dark'
                            ? "bg-white text-gray-900 hover:bg-gray-100"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                    }
                >
                    <a href={data.buttonHref}>
                        {data.buttonText}
                    </a>
                </Button>
            </div>
        </SectionContainer>
    );
};
