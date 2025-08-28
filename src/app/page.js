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
  // Hero Section Data
  const heroData = {
    title: 'Find Your Path to a Brighter Financial Future',
    subtitle: 'Fee-Only Wealth Management Firm Serving the California Region',
    description: '',
    primaryCTA: {
      text: 'Get Started — Chat with an Advisor',
      href: '/contact'
    },
    secondaryCTA: {
      text: 'Learn More',
      href: '/about'
    },
    heroImage: 'https://asesor.progressionstudios.com/wp-content/uploads/2019/11/home-right.jpg',
    backgroundVariant: 'gradient'
  };

  // CTA Section Data
  const ctaData = {
    title: 'Fee-Only, Experienced Advisors Committed to Your Goals.',
    subtitle: 'Ready to start your financial journey?',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.',
    buttonText: 'Get Started Today',
    buttonHref: '/contact',
    backgroundImage: '/cta-background.jpg', // Replace with actual image
    variant: 'dark'
  };

  // Handle service click
  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
    // Navigate to service page or open modal
    window.location.href = service.href;
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={heroData} />
      <AboutSection />

      <Footer />
    </div>
  );
};

export default Home;