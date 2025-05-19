
import React from 'react';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Project Portfolio</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <p className="text-gray-700 mb-6">
                At Genedge Renewables, we have successfully implemented a diverse portfolio of renewable energy 
                projects across India. Our project experience spans utility-scale installations, agricultural 
                solar projects, commercial & industrial solutions, and integrated energy systems.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-4 py-2 rounded-full bg-genedge-green text-white">All Projects</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Solar</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Wind</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Hybrid</button>
                <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">BESS</button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards would go here */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-genedge-green text-sm font-medium mb-2">Solar</span>
                  <h3 className="text-xl font-semibold mb-2">20 MW Solar Project</h3>
                  <p className="text-gray-600 mb-2">Gujarat, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2">Wind</span>
                  <h3 className="text-xl font-semibold mb-2">15 MW Wind Farm</h3>
                  <p className="text-gray-600 mb-2">Rajasthan, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-2">Hybrid</span>
                  <h3 className="text-xl font-semibold mb-2">10 MW Solar-Wind Hybrid</h3>
                  <p className="text-gray-600 mb-2">Madhya Pradesh, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-2">PM-KUSUM</span>
                  <h3 className="text-xl font-semibold mb-2">5 MW Agricultural Solar</h3>
                  <p className="text-gray-600 mb-2">Gujarat, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-2">C&I</span>
                  <h3 className="text-xl font-semibold mb-2">2 MW Rooftop Solar</h3>
                  <p className="text-gray-600 mb-2">Maharashtra, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-2">BESS</span>
                  <h3 className="text-xl font-semibold mb-2">5 MW / 10 MWh BESS</h3>
                  <p className="text-gray-600 mb-2">Karnataka, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
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

export default Projects;
