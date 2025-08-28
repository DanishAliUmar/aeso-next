import React from 'react';
import { Button } from '@/components/ui/button';

export const SectionLayout = ({ data, sectionClassName, containerClassName, leftContainerClassName, rightContainerClassName, rightContaineImg, titleClassName, mainHeadingClassName, headingClassName, descClassName, btnClassName }) => {
    return (
        <section className={`font-bold ${sectionClassName}`}>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full ${containerClassName}`}>
                <div className={`space-y-4 ${leftContainerClassName}`}>
                    {data.title && <p className={`text-xl xl:text-2xl text-[var(--tertiary)] ${titleClassName}`}>{data.title}</p>}
                    {data.mainHeading && <h1 className={`text-4xl md:text-6xl xl:text-7xl ${mainHeadingClassName}`}>
                        {data.mainHeading}
                    </h1>}
                    {data.heading && <h2 className={`text-4xl md:text-6xl xl:text-5xl leading-[1.4] ${headingClassName}`}>
                        {data.heading}
                    </h2>}
                    {data.desc && <p className={`text-lg xl:text-xl ${descClassName}`}>{data.desc}</p>}
                    {data.buttonText && <Button className={`text-lg p-6 xl:p-8 font-bold ${btnClassName}`}>{data.buttonText}</Button>}
                </div>
                <div className={`relative ${rightContainerClassName}`}>
                    {rightContaineImg && <img src={rightContaineImg} alt="" className="absolute inset-0 w-full h-full object-cover" />}
                </div>
            </div>
        </section>

    );
};