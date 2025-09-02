import React from 'react';
import { Header } from '../../layout/Header';

export const HeroSection = ({ title, heading, image }) => {
    return (
        <section className="relative text-white" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}>
            <Header />
            <div className="container mx-auto  px-4 sm:px-6 lg:px-8 flex items-end pb-28 min-h-[500px] sm:min-h-[37.5rem]">
                <div className="space-y-4 pb-4">
                    <p className="text-xl md:text-2xl font-bold text-[#ffffffa6]">{title}</p>
                    <h2 className="text-5xl md:text-7xl leading-[1.2em]">{heading}</h2>
                </div>
            </div>
        </section>
    );
};