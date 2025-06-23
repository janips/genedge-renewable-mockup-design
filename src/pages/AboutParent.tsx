import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
const AboutParent = () => {
  return <Layout>
      <PageBanner title="Parent Company" subtitle="Enertech Energy Resources Private Limited" backgroundImage="https://images.unsplash.com/photo-1518737801142-6a0a18af7e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" />
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-700 text-justify">Enertech Energy Resources Private Limited, (“EERPL”), formerly known as Enertech Fuel Solutions Private Limited, offers complete solutions in Natural Gas Sourcing, Contract Management, Formulation and Management of Gas Sales Agreement (GSA) &amp; Gas Transmission Agreement (GTA), Regulatory Affairs Management, DFR Preparation, Project Financing, setting up City Gas Distribution (CGD) Network etc.</p>
            
            <p className="mb-6 text-gray-700">EERPL also offers gas sourcing solutions to customers who are not connected to pipeline through virtual pipeline using innovative methods like LNG by truck and transportation of compressed gas through cascades.</p>
            
            <p className="mb-6 text-gray-700">At EERPL, we are proud to expand into the thriving sector of renewable energy, marking a significant milestone in our journey towards a sustainable future. With a legacy built on excellence in natural gas trading, we are now leveraging our expertise to embrace the burgeoning opportunities in solar and wind energy generation.</p>

            <p className="mb-6 text-gray-700 ">More details can be found at <a href="https://www.enertechfuelsolutions.com/" target="_blank"> www.enertechfuelsolutions.com</a></p>

          </div>
        </div>
      </div>
    </Layout>;
};
export default AboutParent;