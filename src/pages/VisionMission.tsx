
import React from 'react';
import Layout from '../components/Layout';

const VisionMission = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Vision & Mission</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-genedge-green mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be India's leading renewable energy company, driving the nation's transition 
                  to sustainable energy solutions and contributing to a cleaner, greener future 
                  for generations to come.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-genedge-orange mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To develop, implement, and operate world-class renewable energy projects 
                  that deliver reliable, cost-effective clean energy while fostering 
                  sustainable development in the communities we serve.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-6">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-genedge-green mb-2">Innovation</h3>
                  <p className="text-gray-700">Embracing cutting-edge technologies for sustainable solutions</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-genedge-orange mb-2">Integrity</h3>
                  <p className="text-gray-700">Conducting business with transparency and ethical practices</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-genedge-green mb-2">Excellence</h3>
                  <p className="text-gray-700">Delivering superior quality in all our endeavors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisionMission;
