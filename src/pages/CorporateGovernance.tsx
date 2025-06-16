
import React from 'react';
import Layout from '../components/Layout';

const CorporateGovernance = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Corporate Governance</h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Core Values Section */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-genedge-green mb-6">Core Values</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our organization's values define the principles we stand by, guiding our actions and interactions with stakeholders. We uphold the following values:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-genedge-green pl-4">
                  <h4 className="font-semibold text-genedge-green mb-2">Innovation</h4>
                  <p className="text-sm text-gray-700">We embrace creativity and forward-thinking to develop cutting-edge solutions in natural gas marketing and renewable energy, driving sustainable growth and industry leadership.</p>
                </div>
                
                <div className="border-l-4 border-genedge-orange pl-4">
                  <h4 className="font-semibold text-genedge-orange mb-2">Integrity</h4>
                  <p className="text-sm text-gray-700">We conduct our business with the highest ethical standards, fostering trust and transparency in all our relationships with stakeholders, customers, and partners.</p>
                </div>
                
                <div className="border-l-4 border-genedge-green pl-4">
                  <h4 className="font-semibold text-genedge-green mb-2">Customer Centricity</h4>
                  <p className="text-sm text-gray-700">Our customers are at the heart of everything we do. We are dedicated to delivering exceptional value through tailored, reliable, and sustainable energy solutions.</p>
                </div>
                
                <div className="border-l-4 border-genedge-orange pl-4">
                  <h4 className="font-semibold text-genedge-orange mb-2">Excellence</h4>
                  <p className="text-sm text-gray-700">We are driven by a commitment to excellence, consistently striving to exceed expectations and achieve our ambitious goals with dedication and enthusiasm.</p>
                </div>
                
                <div className="border-l-4 border-genedge-green pl-4">
                  <h4 className="font-semibold text-genedge-green mb-2">Teamwork</h4>
                  <p className="text-sm text-gray-700">We believe in the power of collaboration, leveraging diverse talents and perspectives to achieve shared success and foster a culture of mutual respect and inclusivity.</p>
                </div>
                
                <div className="border-l-4 border-genedge-orange pl-4">
                  <h4 className="font-semibold text-genedge-orange mb-2">Adaptability</h4>
                  <p className="text-sm text-gray-700">We encourage and honour agility of our team in quickly responding to the ever-changing trends, strategies, ideas, expectations and responsibilities.</p>
                </div>
                
                <div className="border-l-4 border-genedge-green pl-4 md:col-span-2">
                  <h4 className="font-semibold text-genedge-green mb-2">Respect for Diversity</h4>
                  <p className="text-sm text-gray-700">We honour and celebrate the diversity of our team, stakeholders, and communities, recognizing it as a cornerstone of innovation and sustainable progress.</p>
                </div>
              </div>
            </div>
            
            {/* Workplace Ethics Section */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-genedge-orange mb-6">Workplace Ethics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As part of our commitment to ethical excellence, all employees are expected to adhere to high standards of professionalism and conduct in the workplace. This includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-genedge-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fairness</h4>
                    <p className="text-sm text-gray-700">Treat all colleagues, customers, and business partners with respect and equity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-genedge-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Transparency</h4>
                    <p className="text-sm text-gray-700">Engage in honest and clear communication to build trust across the organization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-genedge-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Accountability</h4>
                    <p className="text-sm text-gray-700">Take responsibility for your actions and their impact on the organization and its stakeholders.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-genedge-orange rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Inclusivity</h4>
                    <p className="text-sm text-gray-700">Create a safe, respectful, and inclusive environment for everyone, free from discrimination and harassment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Code of Conduct Section */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-genedge-green mb-6">Code of Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Genedge, our commitment to sustainability goes beyond clean energy—we believe in ethical leadership and responsible business practices. Our Code of Conduct is a cornerstone of our corporate governance framework, guiding how we operate, interact, and grow with integrity.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-genedge-orange mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are dedicated to upholding the highest standards of ethics and accountability. Our Code of Conduct ensures every team member—from board directors to field technicians—acts with honesty, respect, and transparency in all business activities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-genedge-green mb-4">Environmental & Social Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  We recognize that renewable energy is not only about power—it's about people and the planet. Our Environmental & Social Management (ESM) approach ensures that our operations promote sustainable development, protect ecosystems, and respect the rights and well-being of communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporateGovernance;
