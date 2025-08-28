import React from 'react'
import { SectionLayout } from '../common/SectionLayout'

const AboutSection = () => {
    const data = {
        title: "Meet with an Advisor to get Started",
        heading: "It’s Your Future: Build a Financial Picture That Fits Your Goals",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        buttonText: "Develop My Financial Picture"
    };
    return (
        <SectionLayout data={data} rightContainerClassName={'md:w-[32.8125rem]'} rightContaineImg={'https://asesor.progressionstudios.com/wp-content/uploads/2019/11/slide-1.jpg'} />
    )
}

export default AboutSection