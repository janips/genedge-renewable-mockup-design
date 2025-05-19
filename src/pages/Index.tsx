
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import AboutSection from '../components/AboutSection';
import BusinessVerticals from '../components/BusinessVerticals';
import ProjectShowcase from '../components/ProjectShowcase';
import StatsSection from '../components/StatsSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <StatsSection />
      <AboutSection />
      <QuickLinks />
      <BusinessVerticals />
      <ProjectShowcase />
    </Layout>
  );
};

export default Index;
