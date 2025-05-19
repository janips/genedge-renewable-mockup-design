
import React from 'react';
import Layout from '../components/Layout';

const RenewableProcess = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Development Process</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              Developing a wind-solar hybrid project involves integrating both wind and solar energy 
              generation systems to maximize efficiency, minimize clipping and reliability in renewable 
              energy production. Here's a brief overview of the project development process:
            </p>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 md:left-1/2 h-full w-1 bg-genedge-green transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">Feasibility Study</h3>
                    <p className="text-gray-700">
                      Conduct a detailed feasibility study to assess the technical, economic, and environmental viability of the project. 
                      Factors such as local wind patterns, solar irradiance levels, land availability, grid connectivity, 
                      and regulatory considerations are evaluated.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-genedge-green rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-genedge-green rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <h3 className="text-xl font-semibold mb-2">Site Selection</h3>
                    <p className="text-gray-700">
                      Identify suitable locations where both wind and solar resources are abundant and complementary. 
                      This involves analyzing wind speed data, solar radiation levels, land topography, and proximity 
                      to existing infrastructure.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">System Design</h3>
                    <p className="text-gray-700">
                      Develop a comprehensive system design that integrates both wind turbines and solar panels. 
                      Considerations include choosing appropriate turbine and panel technologies, optimizing layout 
                      for maximum energy yield, and designing the balance of system components.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-genedge-green rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1"></div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-genedge-green rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <h3 className="text-xl font-semibold mb-2">Permitting and Regulatory Compliance</h3>
                    <p className="text-gray-700">
                      Obtain necessary permits, approvals, and clearances from local authorities and regulatory bodies. 
                      Compliance with environmental regulations, land use laws, and grid interconnection standards is crucial.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">Financial Analysis</h3>
                    <p className="text-gray-700">
                      Conduct financial modeling and analysis to determine the project's financial viability. 
                      Evaluate capital costs, operational expenses, revenue projections, tax incentives, and return on investment.
                    </p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-genedge-green rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewableProcess;
