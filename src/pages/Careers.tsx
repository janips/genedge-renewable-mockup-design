
import React from 'react';
import Layout from '../components/Layout';

const Careers = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-genedge-green text-white rounded-lg shadow-lg p-8 md:p-12 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission to Power a Greener India</h1>
            <p className="text-lg">
              Be part of a dynamic team that's driving the renewable energy revolution across the country.
              At Genedge, we're passionate about creating a sustainable future through innovative clean energy solutions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Join Genedge?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-medium text-genedge-green mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    Work on cutting-edge renewable energy projects that are transforming India's energy landscape.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-medium text-genedge-orange mb-2">Growth</h3>
                  <p className="text-gray-700">
                    Develop your skills and career in one of the fastest-growing sectors in the global economy.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-medium text-genedge-green mb-2">Impact</h3>
                  <p className="text-gray-700">
                    Make a meaningful difference in combating climate change and supporting sustainable development.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
            <div className="space-y-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Solar PV Design Engineer</h3>
                    <p className="text-genedge-green">Full-time | New Delhi</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-genedge-green rounded-full text-sm">Engineering</span>
                </div>
                <p className="text-gray-700 my-4">
                  We're looking for an experienced Solar PV Design Engineer to join our team. 
                  The ideal candidate will have expertise in designing utility-scale solar PV systems.
                </p>
                <button className="px-4 py-2 bg-genedge-green text-white rounded hover:bg-opacity-90 transition-colors">
                  Apply Now
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Project Manager</h3>
                    <p className="text-genedge-green">Full-time | Gujarat</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Management</span>
                </div>
                <p className="text-gray-700 my-4">
                  We're seeking an experienced Project Manager to oversee the development and execution of our renewable energy projects.
                </p>
                <button className="px-4 py-2 bg-genedge-green text-white rounded hover:bg-opacity-90 transition-colors">
                  Apply Now
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Business Development Executive</h3>
                    <p className="text-genedge-green">Full-time | Mumbai</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-genedge-orange rounded-full text-sm">Sales</span>
                </div>
                <p className="text-gray-700 my-4">
                  Join our commercial team to drive business growth and develop our client portfolio in the C&I sector.
                </p>
                <button className="px-4 py-2 bg-genedge-green text-white rounded hover:bg-opacity-90 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">Don't see a suitable position?</h2>
              <p className="text-gray-700 mb-4">
                We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
              </p>
              <a href="mailto:careers@genedge.in" className="inline-block px-5 py-3 bg-genedge-orange text-white rounded hover:bg-opacity-90 transition-colors">
                Submit Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
