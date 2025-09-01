import { SectionContainer } from '@/components/common/SectionContainer'
import { CTARideSection } from '@/components/sections/home/CTARideSection'
import { FeaturesSection } from '@/components/sections/home/FeaturesSection'
import { TeamSection } from '@/components/sections/home/TeamSection'
import { HeroSection } from '@/components/sections/who-we-are/HeroSection'
import Partners from '@/components/sections/who-we-are/Partners'
import { featuresData } from '@/data/features'
import { teamData } from '@/data/team'
import Image from 'next/image'
import React from 'react'

const WhoWeAre = () => {
    return (
        <>
            <HeroSection image="/assets/imgs/imgi_19_page-title-2.jpg" title={'Investment Firm'} heading={"Who We Are"} />
            <Partners />
            <SectionContainer>
                <div className="flex items-center justify-center flex-col text-center gap-5 px-5 md:px-20">

                    <h2 className="text-2xl md:text-[2rem]">Utilizing Neural Networks and Artificial Intelligence</h2>
                    <p className="text-xl md:text-[1.375rem] font-medium">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </p>
                </div>
            </SectionContainer>
            <FeaturesSection features={featuresData} />
            <SectionContainer className='!pt-0'>
                <div className="space-y-14">
                    <div className="flex flex-col md:flex-row gap-y-10 md:gap-2">
                        <div className="md:w-1/2 space-y-3 pr-14 pt-5">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl">Building and Preserving Wealth</h2>
                            <p className="text-xl md:text-[1.375rem] font-medium">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src={'/assets/imgs/imgi_19_about-image.jpg'} width={525} height={410} alt='' className='w-full h-auto object-contain' />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-y-10 md:gap-2">
                        <div className="md:w-1/2">
                            <Image src={'/assets/imgs/imgi_19_about-image.jpg'} width={525} height={410} alt='' className='w-full h-auto object-contain' />
                        </div>
                        <div className="md:w-1/2 space-y-3 md:pl-14 pt-2">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl">Building and Preserving Wealth</h2>
                            <p className="text-xl md:text-[1.375rem] font-medium">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            <TeamSection team={teamData} />
            <CTARideSection />
        </>

    )
}

export default WhoWeAre