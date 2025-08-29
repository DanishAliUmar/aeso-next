'use client';
import React from 'react';

export const ServiceCard = ({
    service
}) => {
    return (
        <div className={"flex items-center justify-center text-center flex-col gap-2"}>
            <img
                src={service.icon}
                alt={service.title}
                className="w-28 sm:w-40 object-contain"
            />
            <h3 className="text-xl sm:text-[1.75rem] font-semibold">
                {service.title}
            </h3>
            <p className='text-lg sm:text-xl'>
                {service.description}
            </p>
        </div>
    );
};
