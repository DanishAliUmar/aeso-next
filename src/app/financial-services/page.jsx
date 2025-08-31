import { SectionContainer } from '@/components/common/SectionContainer';
import { SectionLayout } from '@/components/common/SectionLayout'
import { CTARideSection } from '@/components/sections/home/CTARideSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { HeroSection } from '@/components/sections/who-we-are/HeroSection'
import { servicesData } from '@/data/services';
import { testimonialsData } from '@/data/testimonials';
import React from 'react'

const FinancialServices = () => {
    const data = {
        title: "Families, Inviduials, and Corporations",
        heading: "Building Personal Relationships",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        buttonText: "Develop My Financial Picture",
        img: "https://asesor.progressionstudios.com/wp-content/uploads/2019/11/financial.jpg"
    };
    return (
        <>
            <HeroSection image="/assets/imgs/imgi_17_page-title-3.jpg" title={'Who We Serve'} heading={"Financial Services"} />
            <SectionContainer className='!pt-0 lg:!pt-20'>
                <SectionLayout sectionClassName={"py-10"} containerClassName={"flex-col xl:flex-row"} buttonVariant="secondary" descClassName='text-[var(--text-dark)] md:text-[1.375rem] py-3 leading-[1.6]' data={data} leftContainerClassName={'md:pr-12 !py-20'} rightContainerClassName={'!py-0'} rightContaineImg={data?.img} />
            </SectionContainer>
            <ServicesSection services={servicesData} />
            <section className="relative text-white" style={{
                backgroundImage: "url(https://asesor.progressionstudios.com/wp-content/uploads/2019/11/finance-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
                <div className="container mx-auto  px-4 sm:px-6 lg:px-8 flex items-start py-28 lg:min-h-[37.5rem]">
                    <div className="space-y-6 pb-4">
                        <p className="text-xl lg:text-2xl font-bold text-[#ffffffa6]">Our Approach</p>
                        <h2 className="text-3xl sm:text-5xl lg:text-[5.625rem] leading-[1.2em]">Global Scale <br /> + Diverse Presence</h2>
                    </div>
                </div>
            </section>
            <TestimonialsSection testimonials={testimonialsData} />
            <CTARideSection />
        </>
    )
}

export default FinancialServices