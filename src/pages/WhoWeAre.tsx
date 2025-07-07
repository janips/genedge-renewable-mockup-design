
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const WhoWeAre = () => {
  return (
    <Layout>
      <SEO 
        title="Who We Are - Our Team and Expertise" 
        description="Meet our team of engineers, developers, and energy experts passionate about reshaping India's power future with extensive renewable energy experience."
        keywords="renewable energy team, energy experts, engineers, developers, India power future, clean energy professionals"
        url="/about/who-we-are"
      />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Who Are We</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">We are a team of engineers, developers, and energy experts passionate about reshaping India's power future. With extensive experience in renewable energy, we deliver custom energy systems across agricultural, industrial, and grid-scale landscapes.
            </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team comprises industry veterans, technical experts, and passionate 
                professionals who bring decades of combined experience in renewable energy 
                development, project management, and sustainable technology implementation. 
                We pride ourselves on our ability to deliver comprehensive energy solutions 
                that meet the diverse needs of our clients while contributing to 
                environmental sustainability.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                From conceptualization to commissioning, we handle every aspect of renewable 
                energy projects with precision and expertise. Our commitment to excellence, 
                innovation, and sustainable development has positioned us as a reliable 
                partner for businesses, governments, and communities seeking clean energy solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-genedge-green mb-2">Experience</h3>
                <p className="text-gray-700">Years of expertise in renewable energy development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-genedge-orange mb-2">Innovation</h3>
                <p className="text-gray-700">Cutting-edge technology and sustainable solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-genedge-green mb-2">Commitment</h3>
                <p className="text-gray-700">Dedicated to India's clean energy future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
