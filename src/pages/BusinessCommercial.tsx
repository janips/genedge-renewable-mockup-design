
import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Users } from 'lucide-react';

const BusinessCommercial = () => {
  return <Layout>
      <PageBanner 
        title="C&I Solutions"
        subtitle="Energy Solutions for Forward-Thinking Businesses"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
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
            
            
          </div>
        </div>
      </div>
    </Layout>;
};

export default BusinessCommercial;
