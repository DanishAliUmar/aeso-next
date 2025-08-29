import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { Button } from '../../ui/button';

export const CTASection = ({
    testimonials
}) => {
    return (
        <SectionContainer
            style={{
                backgroundImage: "url(https://asesor.progressionstudios.com/wp-content/uploads/2019/11/home-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
            className={"!text-white"}
            id="testimonials"
        >
            <div className="space-y-7 md:max-w-[35.625rem]">
                <div className="space-y-4 pb-4">
                    <p className="text-xl md:text-2xl font-bold">Why Choose Us</p>
                    <h2 className="text-3xl md:text-5xl leading-[1.2em]">Fee-Only, Experienced Advisors Committed to Your Goals.</h2>
                </div>
                <p className="text-[1.375rem] font-medium opacity-90">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
                <p className="text-[1.375rem] font-medium opacity-90">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p>
                <Button className={'text-white hover:bg-primary'} variant={"outline"}>Chat with an Advisor</Button>
            </div>
        </SectionContainer>
    );
};
