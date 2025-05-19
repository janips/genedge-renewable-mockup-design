
import React from 'react';
import Layout from '../components/Layout';
import { Users } from 'lucide-react';

const BusinessCommercial = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">C&I Solutions</h1>
          <p className="text-xl text-center text-genedge-orange mb-8">Energy Solutions for Forward-Thinking Businesses</p>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">Commercial & Industrial (C&I) Projects</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Our C&I business offers custom renewable energy systems to businesses seeking cost savings, 
              energy security, and sustainability. These projects include ground mountain solar, hybrid 
              systems, and energy storage for manufacturing units, tech parks, commercial spaces, and more.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Advantages</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Cost Reduction:</strong> Reduces operational costs and carbon footprints
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Flexible Models:</strong> CAPEX, OPEX, and third-party ownership options
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Quick Returns:</strong> Rapid ROI and scalable for future growth
                </span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our C&I Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange mb-2">Rooftop Solar</h4>
                  <p className="text-gray-700">
                    Customized rooftop solar installations for commercial buildings, factories, and warehouses,
                    maximizing available space and minimizing land requirements.
                  </p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange mb-2">Ground Mount Systems</h4>
                  <p className="text-gray-700">
                    Large-scale ground mount solar systems for industrial clients with available land,
                    designed for maximum generation efficiency.
                  </p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange mb-2">Open Access Solutions</h4>
                  <p className="text-gray-700">
                    Off-site renewable energy solutions through open access mechanisms,
                    allowing businesses to source green power without on-site installations.
                  </p>
                </div>
                <div className="p-4 bg-white rounded shadow-sm">
                  <h4 className="font-medium text-genedge-orange mb-2">Hybrid Systems</h4>
                  <p className="text-gray-700">
                    Integrated solutions combining solar with battery storage to provide
                    reliable power during grid outages and peak demand periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessCommercial;
