import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { FeaturesSection } from '@/components/sections/home/FeaturesSection';
import { ServicesSection } from '@/components/sections/home/ServicesSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { TeamSection } from '@/components/sections/home/TeamSection';
import { CTASection } from '@/components/sections/home/CTASection';

import { servicesData } from '@/data/services';
import { testimonialsData } from '@/data/testimonials';
import { teamData } from '@/data/team';
import { featuresData } from '@/data/features';
import AboutSection from '@/components/sections/home/AboutSection';
import { CTARideSection } from '@/components/sections/home/CTARideSection';
import ContactSection from '@/components/sections/home/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection features={featuresData} />
      <TestimonialsSection testimonials={testimonialsData} />
      <CTASection />
      <TeamSection team={teamData} />
      <ServicesSection services={servicesData} title={"title"} subtitle={"subtitle"} />
      <CTARideSection />
      <ContactSection />
    </div>
  );
};

export default Home;