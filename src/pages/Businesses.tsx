
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Sun, Wind, Battery, Users, Settings, Wrench } from 'lucide-react';

const Businesses = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Businesses</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-semibold mb-4">A Strategic Approach to Clean Energy Deployment</h2>
              <p className="text-gray-700 mb-6">
                Genedge's project portfolio is built on a four-tier foundation designed to drive widespread 
                renewable energy adoption across India. This diversified strategy enables us to serve multiple 
                sectors effectively while ensuring long-term growth, resilience, and impact.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/businesses/kusum" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Sun className="h-6 w-6 text-genedge-orange" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">PM Kusum Projects</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Empowering Farmers. Energizing Agriculture</p>
                <p className="text-gray-700 mb-4">
                  We implement PM-KUSUM projects across Gujarat, Rajasthan, and Madhya Pradesh, bringing reliable 
                  solar energy to agricultural regions and supporting rural energy independence.
                </p>
              </Link>
              
              <Link to="/businesses/utility" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Wind className="h-6 w-6 text-genedge-green" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">Utility Scale Projects</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Powering the Grid. Supporting National Goals</p>
                <p className="text-gray-700 mb-4">
                  Our large-scale solar and wind energy projects feed directly into the national grid, helping utilities 
                  meet renewable purchase obligations and contributing to India's clean energy targets.
                </p>
              </Link>
              
              <Link to="/businesses/commercial" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">C&I Solutions</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Energy Solutions for Forward-Thinking Businesses</p>
                <p className="text-gray-700 mb-4">
                  We provide tailored renewable energy systems for commercial and industrial clients, helping businesses 
                  reduce operational costs and carbon footprints through custom solar solutions.
                </p>
              </Link>
              
              <Link to="/businesses/bess" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Battery className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">BESS</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Storing Power. Strengthening the Grid</p>
                <p className="text-gray-700 mb-4">
                  Our Battery Energy Storage Systems enhance grid resilience and enable round-the-clock power delivery, 
                  creating the foundation for firm and dispatchable renewable energy in India.
                </p>
              </Link>
              
              <Link to="/businesses/epc" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Wrench className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">EPC Business</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Building Excellence in Renewable Infrastructure</p>
                <p className="text-gray-700 mb-4">
                  Our engineering, procurement, and construction services deliver turnkey renewable energy projects 
                  with precision engineering, quality components, and professional installation.
                </p>
              </Link>
              
              <Link to="/businesses/om" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal-100 rounded-full">
                    <Settings className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-3">O&M Business</h3>
                </div>
                <p className="text-genedge-orange font-medium mb-2">Maximizing Performance. Ensuring Longevity</p>
                <p className="text-gray-700 mb-4">
                  Our operations and maintenance services ensure optimal performance of renewable energy assets 
                  throughout their lifecycle, maximizing energy yield and system longevity.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Businesses;
