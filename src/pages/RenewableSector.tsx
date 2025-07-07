
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const RenewableSector = () => {
  return (
    <Layout>
      <SEO 
        title="Renewable Sector in India" 
        description="Learn about India's renewable energy sector growth, key policies, capacity additions, government targets, and development processes driving the clean energy transition."
        keywords="renewable sector India, clean energy policies, renewable capacity, government targets, solar wind energy"
        url="/renewable-sector"
      />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Renewable Sector in India</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              India's renewable energy sector is experiencing rapid growth, driven by ambitious government targets, 
              supportive policies, and falling technology costs. As a key player in this transformation, Genedge 
              Renewables is committed to contributing to the nation's clean energy goals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Link to="/renewable-sector/policies" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg border-l-4 border-genedge-green transition-all">
                <h3 className="text-xl font-semibold mb-2">Key Policies & Regulations</h3>
                <p className="text-gray-700">Learn about the policy framework driving India's renewable energy growth.</p>
              </Link>
              
              <Link to="/renewable-sector/capacity" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg border-l-4 border-genedge-orange transition-all">
                <h3 className="text-xl font-semibold mb-2">Capacity Addition</h3>
                <p className="text-gray-700">Explore the growth of renewable capacity over the last decade across India.</p>
              </Link>
              
              <Link to="/renewable-sector/targets" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg border-l-4 border-genedge-orange transition-all">
                <h3 className="text-xl font-semibold mb-2">Government Targets</h3>
                <p className="text-gray-700">Review India's ambitious clean energy targets and roadmap.</p>
              </Link>
              
              <Link to="/renewable-sector/process" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg border-l-4 border-genedge-green transition-all">
                <h3 className="text-xl font-semibold mb-2">Development Process</h3>
                <p className="text-gray-700">Understand the typical process for developing renewable energy projects in India.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewableSector;
