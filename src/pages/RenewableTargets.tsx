
import React from 'react';
import Layout from '../components/Layout';

const RenewableTargets = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Government Targets</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              India has set ambitious targets for renewable energy capacity addition as part of its 
              commitment to address climate change and enhance energy security. These targets drive 
              policy framework and investment in the sector.
            </p>
            
            <div className="p-6 bg-gray-50 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-2">500 GW by 2030</h3>
              <p className="text-gray-700">
                India has committed to installing 500 GW of non-fossil fuel electricity capacity by 2030, 
                as announced at COP26. This target includes solar, wind, hydro, and other renewable sources.
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="p-4 bg-gray-100 rounded-lg flex items-center">
                <div className="w-24 h-24 rounded-full bg-genedge-green flex items-center justify-center text-white text-xl font-bold">
                  280 GW
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold">Solar Target</h4>
                  <p className="text-gray-700">Planned solar capacity by 2030</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 rounded-lg flex items-center">
                <div className="w-24 h-24 rounded-full bg-genedge-orange flex items-center justify-center text-white text-xl font-bold">
                  140 GW
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold">Wind Target</h4>
                  <p className="text-gray-700">Planned wind capacity by 2030</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 rounded-lg flex items-center">
                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                  50 GW
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold">Hydro Target</h4>
                  <p className="text-gray-700">Planned hydro capacity by 2030</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 rounded-lg flex items-center">
                <div className="w-24 h-24 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  30 GW
                </div>
                <div className="ml-6">
                  <h4 className="font-semibold">BESS Target</h4>
                  <p className="text-gray-700">Planned battery storage capacity by 2030</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewableTargets;
