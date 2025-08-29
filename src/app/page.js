import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTASection } from '@/components/sections/CTASection';

import { servicesData } from '@/data/services';
import { testimonialsData } from '@/data/testimonials';
import { teamData } from '@/data/team';
import { featuresData } from '@/data/features';
import AboutSection from '@/components/sections/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection features={featuresData} />
      <TestimonialsSection testimonials={testimonialsData} />
      <CTASection />
      {/* <TeamSection team={teamData} /> */}
      <ServicesSection services={servicesData} title={"title"} subtitle={"subtitle"} />
      <Footer />
    </div>
  );
};

export default Home;