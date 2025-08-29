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

const Testimonials = () => {
    return (
        <>
            <HeroSection title={'Real People with Real Results'} heading={"Testimonials"} />
            <TestimonialsSection testimonials={testimonialsData} />
            <CTARideSection />
            <ContactSection />
        </>

    )
}

export default Testimonials