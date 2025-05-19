
import React from 'react';
import Layout from '../components/Layout';

const RenewablePolicies = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Key Policies & Regulations</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              India has established a robust policy framework to promote renewable energy development. 
              These policies create a favorable environment for investments in clean energy projects.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">National Solar Mission</h3>
                <p className="text-gray-700">Details about the National Solar Mission and its targets.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">PM-KUSUM Scheme</h3>
                <p className="text-gray-700">Information about the PM-KUSUM scheme for solar agriculture pumps and grid-connected solar projects.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Renewable Purchase Obligation (RPO)</h3>
                <p className="text-gray-700">Details about RPO mechanisms and their implementation across states.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Green Energy Corridors</h3>
                <p className="text-gray-700">Information about transmission infrastructure for renewable energy integration.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">BESS Policy Framework</h3>
                <p className="text-gray-700">Details about emerging policies for battery energy storage systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewablePolicies;
