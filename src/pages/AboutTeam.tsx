
import React from 'react';
import Layout from '../components/Layout';

const AboutTeam = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Management Team</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-700">
              Our leadership team brings decades of experience in renewable energy, project development, and sustainable business practices.
              Each member is dedicated to driving our mission of clean energy adoption across India.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Director Name</h3>
                <p className="text-gray-700 italic mb-4">Managing Director</p>
                <p className="text-gray-700">Brief description about the director's experience and expertise in the renewable energy sector.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Director Name</h3>
                <p className="text-gray-700 italic mb-4">Technical Director</p>
                <p className="text-gray-700">Brief description about the director's experience and expertise in the renewable energy sector.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">KMP Name</h3>
                <p className="text-gray-700 italic mb-4">Chief Financial Officer</p>
                <p className="text-gray-700">Brief description about the KMP's experience and expertise in the renewable energy sector.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">KMP Name</h3>
                <p className="text-gray-700 italic mb-4">Chief Operating Officer</p>
                <p className="text-gray-700">Brief description about the KMP's experience and expertise in the renewable energy sector.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutTeam;
