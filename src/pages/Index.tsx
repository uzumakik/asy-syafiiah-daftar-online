
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import InfoSection from '@/components/InfoSection';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <InfoSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
