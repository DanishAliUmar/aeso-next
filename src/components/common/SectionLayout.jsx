import React from 'react';
import { Button } from '@/components/ui/button';

export const SectionLayout = ({ data, sectionClassName, containerClassName, leftContainerClassName, rightContaineClassName, rightContainerClassName, rightContaineImg, titleClassName, mainHeadingClassName, headingClassName, descClassName, btnClassName, buttonVariant }) => {
    return (
        <div className={`font-bold ${sectionClassName}`}>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex h-full ${containerClassName}`}>
                <div className={`flex-1 space-y-4 ${leftContainerClassName}`}>
                    {data.title && <p className={`text-xl xl:text-2xl text-[var(--tertiary)] ${titleClassName}`}>{data.title}</p>}
                    {data.mainHeading && <h1 className={`text-4xl md:text-6xl xl:text-7xl ${mainHeadingClassName}`}>
                        {data.mainHeading}
                    </h1>}
                    {data.heading && <h2 className={`text-4xl md:text-5xl xl:text-6xl font-light leading-[1.2em] ${headingClassName}`}>
                        {data.heading}
                    </h2>}
                    {data.desc && <p className={`text-lg xl:text-xl ${descClassName}`}>{data.desc}</p>}
                    {data.buttonText && <Button className={`md:text-lg p-4 md:p-6 xl:p-8 font-bold ${btnClassName}`} variant={buttonVariant || "default"}>{data.buttonText}</Button>}
                </div>
                {rightContaineImg &&
                    <div className={`flex-1 flex items-center justify-center p-12 ${rightContainerClassName}`}>
                        <img src={rightContaineImg} alt="" className={`w-full h-full object-contain max-w-[37.5rem] ${rightContaineClassName}`} />
                    </div>
                }
            </div>
        </div>

    );
};