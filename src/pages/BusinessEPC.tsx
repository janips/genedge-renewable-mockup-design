
import React from 'react';
import Layout from '../components/Layout';
import { Wrench } from 'lucide-react';

const BusinessEPC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">EPC Business</h1>
          <p className="text-xl text-center text-genedge-orange mb-8">Building Excellence in Renewable Infrastructure</p>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 rounded-full">
                <Wrench className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">Engineering, Procurement & Construction</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Our engineering, procurement, and construction services deliver turnkey renewable energy 
              projects with precision engineering, quality components, and professional installation.
              With a team of experienced engineers and project managers, we handle every aspect of 
              renewable energy project development from design to commissioning.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-green flex items-center justify-center text-white mb-4">
                  <span className="font-bold text-xl">E</span>
                </div>
                <h3 className="font-semibold mb-2">Engineering</h3>
                <p className="text-gray-700 text-sm">
                  Detailed project design, engineering analysis, optimization, and technical specifications
                </p>
              </div>
              
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-orange flex items-center justify-center text-white mb-4">
                  <span className="font-bold text-xl">P</span>
                </div>
                <h3 className="font-semibold mb-2">Procurement</h3>
                <p className="text-gray-700 text-sm">
                  Strategic sourcing of high-quality equipment, materials, and components at competitive prices
                </p>
              </div>
              
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-green flex items-center justify-center text-white mb-4">
                  <span className="font-bold text-xl">C</span>
                </div>
                <h3 className="font-semibold mb-2">Construction</h3>
                <p className="text-gray-700 text-sm">
                  Expert construction management, installation, testing, and commissioning of renewable systems
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Our EPC Services</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Solar PV Systems:</strong> Ground-mounted, rooftop, and floating solar installations
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Wind Energy:</strong> Wind turbine installation and associated infrastructure
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Hybrid Systems:</strong> Integrated solar-wind hybrid projects with complementary generation
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Energy Storage:</strong> Battery energy storage system design and installation
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Balance of System:</strong> Complete electrical infrastructure, mounting structures, and monitoring systems
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessEPC;
