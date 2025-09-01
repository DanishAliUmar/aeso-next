import { SectionContainer } from '@/components/common/SectionContainer'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <SectionContainer
            className={"!bg-[#F3F4FA]"}
            id="partners">
            <div className='container grid gap-4 gap-y-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <Image src={'/assets/imgs/imgi_2_logo-1.png'} width={200} height={44} className='w-32 sm:w-48 object-contain' alt='logo' />
                <Image src={'/assets/imgs/imgi_3_logo-2.png'} width={200} height={44} className='w-32 sm:w-48 object-contain' alt='logo' />
                <Image src={'/assets/imgs/imgi_4_logo-3.png'} width={200} height={44} className='w-32 sm:w-48 object-contain' alt='logo' />
                <Image src={'/assets/imgs/imgi_5_logo-4.png'} width={200} height={44} className='w-32 sm:w-48 object-contain' alt='logo' />
            </div>
        </SectionContainer>
    )
}

export default Partners