import React from 'react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Button } from '../../ui/button';
import Link from 'next/link';

export const CTARideSection = () => {
    return (
        <SectionContainer
            style={{
                backgroundImage: "url(/assets/imgs/imgi_29_footer-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
            className={"!text-white"}
            id="cta-ride"
        >
            <div className="space-y-7 md:max-w-[35.625rem]">
                <div className="space-y-4 pb-4">
                    <h2 className="text-3xl md:text-5xl leading-[1.2em]">Enjoy
                        <br />the ride.</h2>
                </div>
                <p className="text-[1.375rem] font-medium opacity-90">Let us take the mystery out of financial planning so you can focus on what matters.</p>
                <div className="flex items-center gap-4">
                    <Link href={'/contact'}>
                        <Button className={''}>Chat with an Advisor</Button>
                    </Link>
                    <p className="">— Free Consultation</p></div>
            </div>
        </SectionContainer>
    );
};
