import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Linkedin } from "lucide-react";
const AboutTeam = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Management Team</h1>

          <p className="text-xl md:text-2xl text-center opacity-90 text-gray-800">
            Leadership Driving Clean Energy Innovation
          </p>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-700">
              Our leadership team brings decades of experience in renewable energy, project development, and sustainable
              business practices. Each member is dedicated to driving our mission of clean energy adoption across India.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Ravindra Agrawal</h3>
                  <a
                    href="https://linkedin.com/in/ravindra-agrawal-a596067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
                <p className="text-gray-700 italic mb-4">Managing Director</p>
                <p className="text-gray-700 text-justify">
                  Mr. Ravindra Agrawal has track record of more than 28 years, successfully handling Gas Trading,
                  Transmission, City Gas Distribution and Business Development in midstream and downstream segments of
                  natural gas and has served as Director and CEO of GIGL. Beyond the gas sector, his keen interests are
                  in the Renewable energy space as well. With the techno-commercial skills, business acumen, and wisdom
                  of project management honed over the last three decades, he has set his eyes to replicate the success
                  stories of gas industry to the renewable industry.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Badri Mahapatra</h3>
                <p className="text-gray-700 italic mb-4">Promoter Director</p>
                <p className="text-gray-700 text-justify">
                  Mr. Badri Mahapatra is a Management Graduate from Symbiosis Institute of Management, Pune and has over
                  28 years of experience across private sector firms, public sector / government organizations, academic
                  institutions and industry networks. He was handling strategic and key positions in Gujarat
                  Infrastructure Development Board (GIDB) and Gujarat Venture Finance Limited. As an entrepreneur, Mr.
                  Mahapatra has mentored several companies in various areas such as Management Consultancy, Entry
                  Advisory, Micro Finance, Natural Gas Consultancy, Trading and Manufacturing. He has also served as
                  Executive Director at TiE (The Indus Entrepreneurs) Gujarat Chapter to promote and facilitate the
                  entrepreneurship aspects in the State of Gujarat.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Abhijeet Kumar</h3>
                  <a
                    href="https://linkedin.com/in/abhijeet-kumar-4666b376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>

                <p className="text-gray-700 text-justify">
                  Mr. Abhijeet Kumar is a seasoned project management professional with over 13 years of experience in
                  delivering large-scale, high-impact projects across the renewable energy and infrastructure sectors.
                  He has consistently demonstrated the ability to lead cross-functional teams across diverse
                  geographies, ensuring projects are completed efficiently on time, within budget, and to the highest
                  standards. His expertise spans the full project lifecycle—from planning and execution to stakeholder
                  coordination and regulatory compliance. With a deep understanding of both technical and project
                  management aspects, Abhijeet excels in navigating complex challenges and driving sustainable,
                  results-oriented outcomes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Mr. Mitesh Trivedi</h3>
                </div>

                <p className="text-gray-700 text-justify">
                  Mr. Mitesh Trivedi, a Chartered Accountant, brings over 11 years of diverse experience across Large
                  Infrastructure Companies. He has held key positions at prominent organizations such as Adani
                  Enterprises Limited, Chiripal Poly Films Limited, and BDO India Services. Mitesh specializes in
                  project finance and fund-raising for large-scale infrastructure initiatives in Manufacturing, Mining
                  and and Renewable energy sectors. His expertise includes fund raising in capital-intensive projects,
                  financial structuring, financial management and stakeholder management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AboutTeam;
