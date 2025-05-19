
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About the Company</h2>
            <p className="mb-6 text-gray-700">
              Genedge Renewables Private Limited is part of the esteemed Enertech Group, dedicated to harnessing 
              the power of renewable resources to meet the growing energy demands in India.
            </p>
            
            <p className="mb-6 text-gray-700">
              The company is formed with a vision of establishing itself as one of the leading renewable energy company, 
              with a balance project portfolio, spanning across technologies, geographies, utilities and credible third 
              party customer base.
            </p>
            
            <p className="mb-8 text-gray-700">
              We are committed to driving the transition to a sustainable world through reliable, and affordable renewable 
              energy solutions. Founded with a mission to reduce carbon footprints and empower communities, we harness the 
              power of the sun and other clean sources to create a brighter tomorrow.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Company's Vision & Mission</h2>
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-genedge-green">
              <p className="italic text-gray-700">
                To be aligned with the HR Manual
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Who are we</h2>
            <p className="mb-8 text-gray-700">
              We are a team of engineers, developers, and energy experts passionate about reshaping India's power future. 
              With extensive experience in renewable technologies, we deliver custom energy systems across agricultural, 
              industrial, and grid-scale landscapes.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li className="mb-2">Solar Energy Projects (C&I, PM-KUSUM, Utility Scale)</li>
              <li className="mb-2">Wind Energy Projects (Utility Scale)</li>
              <li className="mb-2">Stand Alone Battery Energy Storage Systems (BESS) (Utility Scale)</li>
              <li className="mb-2">Hybrid Energy Projects (C&I and Utility Projects)</li>
              <li className="mb-2">Customized EPC Service</li>
              <li className="mb-2">Sustainability Consulting & Clean Energy Advisory</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
