import React from 'react'
import { SectionLayout } from '../../common/SectionLayout'

const AboutSection = () => {
    const data = {
        title: "Meet with an Advisor to get Started",
        heading: "It's Your Future: Build a Financial Picture That Fits Your Goals",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        buttonText: "Develop My Financial Picture"
    };
    return (
        <section>
            <SectionLayout sectionClassName={"py-10"} containerClassName={"flex-col xl:flex-row"} buttonVariant="secondary" descClassName='text-[var(--text-dark)] md:text-[1.375rem] py-3 leading-[1.6]' data={data} leftContainerClassName={'md:pr-12'} rightContaineImg={'/assets/imgs/imgi_2_home-right.jpg'} />
        </section>
    )
}

export default AboutSection