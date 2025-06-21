
import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Wind } from 'lucide-react';

const BusinessUtility = () => {
  return <Layout>
      <PageBanner 
        title="Utility Scale Projects"
        subtitle="Powering the Grid. Supporting National Goals"
        backgroundImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <Wind className="h-8 w-8 text-genedge-green" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">Large Utility-Scale Projects</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              At Genedge Renewables, our utility-scale strategy centers on active participation in competitive bidding 
              processes launched by major government and public sector agencies such as GUVNL (Gujarat Urja Vikas Nigam Ltd.), 
              and other nodal bodies across India. 
            </p>
            <p className="text-gray-700 mb-6">
              We leverage our technical expertise, financial strength, and execution 
              capability to secure and deliver high-quality renewable energy projects that contribute significantly to the 
              national grid.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Strategic Approach</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Bid Participation:</strong> We systematically evaluate and participate in tenders floated by central and state agencies
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Cost Competitiveness:</strong> Rigorous planning and procurement strategies ensure competitive tariffs in bids
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Strategic Partnerships:</strong> Collaborate with EPCs, financiers, and developers to strengthen bid positions
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                <span className="ml-3 text-gray-700">
                  <strong>Bankable Projects:</strong> Focus on locations with strong irradiation, grid access, and policy support
                </span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Long-term PPAs with sovereign or quasi-sovereign entities ensure revenue stability
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Helps meet Renewable Purchase Obligations (RPOs) of utilities and states
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Enables contribution to India's ambitious 500+ GW renewable target
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">→</div>
                  <span className="ml-3 text-gray-700">
                    Positions the company as a serious player in national-level clean energy infrastructure
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};

export default BusinessUtility;
