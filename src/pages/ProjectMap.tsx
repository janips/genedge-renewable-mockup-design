
import React from 'react';
import Layout from '../components/Layout';

const ProjectMap = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Project Map</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-6">
                Explore our renewable energy projects across India. Click on Gujarat or Rajasthan 
                to view detailed project locations and information.
              </p>
              
              {/* Placeholder for interactive map */}
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-gray-500">
                    Interactive India map with clickable Gujarat & Rajasthan regions
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Will include Google Earth integration for detailed project views
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Gujarat Projects</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Devki Galol - 2 MWac (Commissioned)</li>
                    <li>• Mendapara - 2 MWac (Commissioned)</li>
                    <li>• Mandodara - 2 MWac (Commissioned)</li>
                    <li>• Kanja - 4 MWac (Under Construction)</li>
                    <li>• GUVNL - 243 MWac (Under Development)</li>
                    <li>• And more...</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Rajasthan Projects</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Mandawri - 2.25 MWac (Under Construction)</li>
                    <li>• Jiva ka Kheda - 2.54 MWac (Under Construction)</li>
                    <li>• Sudri - 2.33 MWac (Under Construction)</li>
                    <li>• Khanedi - 2 MWac (Under Development)</li>
                    <li>• Mandwa - 2 MWac (Under Development)</li>
                    <li>• And more...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectMap;
