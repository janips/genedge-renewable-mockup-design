
import React from 'react';
import Layout from '../components/Layout';
import { Sun } from 'lucide-react';

const BusinessKusum = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">PM Kusum Projects</h1>
          <p className="text-xl text-center text-genedge-orange mb-8">Empowering Farmers. Energizing Agriculture</p>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-100 rounded-full">
                <Sun className="h-8 w-8 text-genedge-orange" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">PM-KUSUM Implementation</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              We are actively implementing PM-KUSUM projects across three agriculturally rich and 
              solar-resourceful states—Gujarat, Rajasthan and Madhya Pradesh. These regions face high 
              daytime energy demands for irrigation and farming operations, making them ideal for 
              decentralized solar power deployment.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Strategic Advantages</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Daytime Demand Match:</strong> Aligns with peak agricultural energy usage for maximum efficiency
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Strong Grid Availability:</strong> Ready 11kV infrastructure supports smooth solar injection
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Government Backing:</strong> Financial incentives and policy support under the PM-KUSUM scheme
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Rural Upliftment:</strong> Creates jobs, reduces energy costs, and supports energy equality in villages
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Scalable Model:</strong> Modular design allows rapid expansion across similar regions
                </span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Current Implementation Areas</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange">Gujarat</h4>
                  <p className="text-gray-700">Implementation details...</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange">Rajasthan</h4>
                  <p className="text-gray-700">Implementation details...</p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange">Madhya Pradesh</h4>
                  <p className="text-gray-700">Implementation details...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessKusum;
