
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import BusinessVerticals from '../components/BusinessVerticals';
import ProjectShowcase from '../components/ProjectShowcase';
import StatsSection from '../components/StatsSection';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="Leading renewable energy company in India focused on solar and wind projects. We deliver clean, renewable energy solutions across PM Kusum, Utility Scale, C&I, BESS, EPC, and O&M sectors."
        keywords="renewable energy, solar power, wind energy, PM Kusum, utility scale, commercial industrial, BESS, EPC, O&M, India, clean energy, sustainable energy"
        url="/"
      />
      <Hero />
      <StatsSection />
      <AboutSection />
      <BusinessVerticals />
      <ProjectShowcase />
    </Layout>
  );
};

export default Index;
