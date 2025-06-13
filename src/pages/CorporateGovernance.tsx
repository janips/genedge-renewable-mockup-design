
import React from 'react';
import Layout from '../components/Layout';

const CorporateGovernance = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Corporate Governance</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Genedge Renewables, we are committed to maintaining the highest standards 
                of corporate governance, transparency, and ethical business practices. Our 
                governance framework is designed to ensure accountability, promote sustainable 
                business practices, and create long-term value for all stakeholders.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-green mb-4">Board of Directors</h3>
                <p className="text-gray-700 mb-4">
                  Our Board comprises experienced professionals from diverse backgrounds 
                  who provide strategic guidance and oversight.
                </p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Independent oversight</li>
                  <li>Strategic decision making</li>
                  <li>Risk management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-orange mb-4">Compliance Framework</h3>
                <p className="text-gray-700 mb-4">
                  We maintain strict compliance with all applicable laws, regulations, 
                  and industry standards.
                </p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Regulatory compliance</li>
                  <li>Environmental standards</li>
                  <li>Safety protocols</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6">Our Governance Principles</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-genedge-green mb-2">Transparency</h4>
                  <p className="text-sm text-gray-700">Open and honest communication with all stakeholders</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-genedge-orange mb-2">Accountability</h4>
                  <p className="text-sm text-gray-700">Taking responsibility for our actions and decisions</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-genedge-green mb-2">Integrity</h4>
                  <p className="text-sm text-gray-700">Conducting business with honesty and ethical standards</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-genedge-orange mb-2">Sustainability</h4>
                  <p className="text-sm text-gray-700">Creating long-term value for all stakeholders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporateGovernance;
