
import React from 'react';
import Layout from '../components/Layout';

const RenewableCapacity = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Capacity Addition in India</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              Over the last decade, India has witnessed remarkable growth in renewable energy capacity. 
              From a modest beginning, the sector has grown to become the fourth largest renewable energy 
              market globally.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Renewable Capacity Growth (2012-2022)</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart showing renewable capacity growth over the last 10 years</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Solar Growth</h3>
                <p className="text-gray-700">Details about the growth of solar power capacity in India.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Wind Growth</h3>
                <p className="text-gray-700">Information about the expansion of wind energy installations across the country.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Hybrid Projects</h3>
                <p className="text-gray-700">The emergence of wind-solar hybrid projects in the renewable landscape.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">BESS Integration</h3>
                <p className="text-gray-700">The growing role of battery storage in India's renewable sector.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewableCapacity;
