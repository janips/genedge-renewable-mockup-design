import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Battery } from 'lucide-react';
const BusinessBess = () => {
  return <Layout>
      <PageBanner title="Battery Energy Storage Systems" subtitle="Storing Power. Strengthening the Grid" backgroundImage="/lovable-uploads/c97d7f85-4ae7-4ef5-bef5-c4c7a489f055.png" />
      <div className="pt-8 pb-16 bg-gray-50 py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <Battery className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">BESS Solutions</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              As India's energy sector shifts toward round-the-clock reliability, Genedge is preparing to lead 
              in the Battery Energy Storage Systems (BESS) space—developing and bidding for both Standalone 
              Storage and Firm & Dispatchable Renewable Energy (FDRE) projects.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Strategic Pillars</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Grid Resilience:</strong> Enhancing flexibility, peak shifting, and frequency response
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Integration with Solar & Wind:</strong> For dispatchable, 24/7 renewable power delivery
                </span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Strengthens grid stability and renewable penetration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Aligns with DISCOM and national regulatory needs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Future-proofs Genedge's utility-scale and hybrid project portfolio
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Standalone BESS</h3>
                <p className="text-gray-700">
                  Battery systems designed for grid services including frequency regulation, 
                  voltage support, and peak shaving, operating independently to enhance grid stability.
                </p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Hybrid BESS</h3>
                <p className="text-gray-700">
                  Integrated battery systems coupled with solar and wind generation, 
                  providing firm power delivery and optimizing renewable energy usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default BusinessBess;
