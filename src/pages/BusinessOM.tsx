
import React from 'react';
import Layout from '../components/Layout';
import { Settings } from 'lucide-react';

const BusinessOM = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">O&M Business</h1>
          <p className="text-xl text-center text-genedge-orange mb-8">Maximizing Performance. Ensuring Longevity</p>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-100 rounded-full">
                <Settings className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">Operations & Maintenance Services</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Our operations and maintenance services ensure optimal performance of renewable energy assets 
              throughout their lifecycle, maximizing energy yield and system longevity. With a focus on 
              preventive maintenance and rapid response, our dedicated O&M team helps clients maximize 
              their return on investment while minimizing downtime.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Preventive Maintenance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Regular system inspections and health assessments</li>
                  <li>Component cleaning and maintenance</li>
                  <li>Performance testing and optimization</li>
                  <li>Scheduled part replacements and upgrades</li>
                </ul>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Corrective Maintenance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>24/7 monitoring and alert systems</li>
                  <li>Rapid response to system failures</li>
                  <li>Fault diagnosis and troubleshooting</li>
                  <li>Emergency repair services</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Comprehensive O&M Services</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Performance Monitoring:</strong> Real-time monitoring and analytics for optimal system performance
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Reporting & Documentation:</strong> Detailed performance reports and maintenance records
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Spare Parts Management:</strong> Inventory management and rapid parts replacement
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Grid Compliance:</strong> Ensuring continuous adherence to grid code requirements
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Performance Guarantees:</strong> Availability and performance guarantees to ensure system reliability
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessOM;
