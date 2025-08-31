import React from 'react'
import { SectionContainer } from '@/components/common/SectionContainer'
import { CTARideSection } from '@/components/sections/home/CTARideSection'
import { FeaturesSection } from '@/components/sections/home/FeaturesSection'
import { TeamSection } from '@/components/sections/home/TeamSection'
import { HeroSection } from '@/components/sections/who-we-are/HeroSection'
import Partners from '@/components/sections/who-we-are/Partners'
import { featuresData } from '@/data/features'
import { teamData } from '@/data/team'
import Image from 'next/image'
import ContactSection from '@/components/sections/home/ContactSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { testimonialsData } from '@/data/testimonials'

const ImageGallery = () => {
    return (
        <>
            <HeroSection image="/assets/imgs/imgi_23_page-title.jpg" title={'Experienced, Trusted, Dedicated'} heading={"Image Gallery"} />
            <SectionContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Image src={'/assets/imgs/imgi_13_hunters-race-MYbhN8KaaEc-unsplash-1024x584.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_14_carlos-muza-hpjSkU2UYSU-unsplash-1024x584.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_18_about-image-2.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_20_contact-bg-2.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_17_financial.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_12_dylan-gillis-KdeqA3aTnBY-unsplash-1024x584.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_7_testimonial-1.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_6_home-bg-oh3xwg4c7pml3n9zfumvoqg9khslbucszwj3ko6vg8.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                    <Image src={'/assets/imgs/imgi_19_about-image.jpg'} alt='img' width={414} height={295} className='w-full h-[15.625rem] md:h-[25rem] object-cover' />
                </div>
            </SectionContainer>
            <CTARideSection />
            <ContactSection />
        </>

    )
}

export default ImageGallery