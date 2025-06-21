import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
const About = () => {
  return <Layout>
      <PageBanner title="Company" subtitle="Leading India's Clean Energy Revolution" backgroundImage="/lovable-uploads/e1eb5f69-db62-43ca-9eec-f3677f7858fd.png" textAlign="left" />
      <div className="bg-gray-50 py-[10px]">
        <div className="container mx-auto px-4">
          {/* Company Overview - Moved to top */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-genedge-orange mb-6">About Genedge Renewables</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Genedge Renewables Private Limited, an integral part of the Enertech Group, 
                is dedicated to harnessing the power of renewable resources to meet the 
                growing energy demands in India. We specialize in developing, implementing, 
                and maintaining renewable energy projects across multiple sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The company is formed with a vision of establishing itself as one of the 
                leading renewable energy companies, with a balanced project portfolio, 
                spanning across technologies, geographies, utilities and credible third 
                party customer base. Our comprehensive approach ensures sustainable energy 
                solutions that contribute to India's clean energy transition.
              </p>
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-genedge-green mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">To be a significant contributor in the national transition towards a sustainable future, driven by renewable energy solutions, for the generations to come.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-genedge-orange mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">Nurture a dynamic and agile team, build internal processes, develop strong relationships with stakeholders based on the foundation of mutual respect, transparency and growth, to scale up the project pipeline of diversified renewable energy projects to 1 GW by end of 2027.</p>
              </div>
            </div>
            
            
          </div>

          {/* Who We Are Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-genedge-green mb-6">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-6">We are a team of engineers, developers, and energy experts passionate about reshaping India's power future. With extensive experience in renewable energy, we deliver custom energy systems across agricultural, industrial, and grid-scale landscapes.</p>
              
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
    </Layout>;
};
export default About;
