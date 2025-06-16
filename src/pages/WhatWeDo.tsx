import React from 'react';
import Layout from '../components/Layout';
const WhatWeDo = () => {
  return <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">What We Do</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                Genedge Renewables specializes in comprehensive renewable energy solutions, 
                covering the entire project lifecycle from development to operation and maintenance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-green mb-4">Solar Power Projects</h3>
                <p className="text-gray-700 mb-4">
                  Development and implementation of utility-scale solar farms, 
                  rooftop installations, and agricultural solar projects.
                </p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Utility-scale solar farms</li>
                  <li>Rooftop solar systems</li>
                  <li>PM-KUSUM agricultural projects</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-orange mb-4">Wind Energy Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Strategic development of wind farms and hybrid projects 
                  optimized for maximum energy generation.
                </p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Wind farm development</li>
                  <li>Hybrid solar-wind projects</li>
                  <li>Grid integration solutions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-green mb-4">Stand Alone BESS</h3>
                <p className="text-gray-700 mb-4">Content needed</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Content</li>
                  <li>Content</li>
                  <li>Contet</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-orange mb-4">Hybrid Energy Projects</h3>
                <p className="text-gray-700 mb-4">Content needed</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Content</li>
                  <li>Content</li>
                  <li>Content</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-genedge-green mb-4">Tailormade EPC Service</h3>
                <p className="text-gray-700 mb-4">Content</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Grid-scale storage systems</li>
                  <li>Hybrid storage solutions</li>
                  <li>Peak shaving applications</li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default WhatWeDo;