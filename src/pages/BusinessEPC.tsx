
import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Wrench, PenTool, ShoppingCart, Hammer, Share2, ShieldCheck } from 'lucide-react';

const BusinessEPC = () => {
  return <Layout>
      <PageBanner 
        title="EPC Business"
        subtitle="Building Excellence in Renewable Infrastructure"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
             <div className="flex items-center mb-6">  
              <div className="p-3 bg-gray-100 rounded-full">
                <Wrench className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-2xl font-semibold ml-4">Core Services</h2>
            </div>
            <p className="text-gray-700 mb-6">
              At Genedge Renewables, our EPC (Engineering, Procurement, and Construction) services are designed to deliver comprehensive, end-to-end renewable energy project execution. We act as a one-stop solution partner for solar, hybrid, and emerging energy systems—from concept to commissioning.
            </p>           
            {/* Core Services Cards (Graphical Representation) */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-green flex items-center justify-center text-white mb-4">
                  <PenTool className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">Detailed Engineering &amp; Design</h3>
                <p className="text-gray-700 text-sm">
                  Customized plant design including electrical, structural, and civil works
                </p>
              </div>
              
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-orange flex items-center justify-center text-white mb-4">
                  <ShoppingCart className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">Procurement</h3>
                <p className="text-gray-700 text-sm">
                  Sourcing Tier-1 solar modules, inverters, SCADA systems, and BOS components
                </p>
              </div>
              
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="mx-auto h-16 w-16 rounded-full bg-genedge-green flex items-center justify-center text-white mb-4">
                  <Hammer className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">Construction &amp; Installation</h3>
                <p className="text-gray-700 text-sm">
                  Site preparation, module mounting, electrical cabling, control room setup
                </p>
              </div>
            </div>

            {/* More Services (Commissioning & Regulatory) */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start bg-gray-50 rounded-lg p-5">
                <div className="h-12 w-12 rounded-full bg-genedge-orange flex items-center justify-center text-white mr-4">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Commissioning &amp; Grid Synchronization</h4>
                  <p className="text-gray-700 text-sm">
                    Ensuring project is synchronized to the DISCOM/grid infrastructure efficiently
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 rounded-lg p-5">
                <div className="h-12 w-12 rounded-full bg-genedge-green flex items-center justify-center text-white mr-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Regulatory Liaison</h4>
                  <p className="text-gray-700 text-sm">
                    Support for approvals from DISCOMs, CEIG, and statutory bodies
                  </p>
                </div>
              </div>
            </div>

            {/* Why Clients Choose Us */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Why Clients Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                  <span className="ml-3 text-gray-700">
                    Strong vendor ecosystem and supply chain management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                  <span className="ml-3 text-gray-700">
                    In-house project management team with domain specialists &amp; experts
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-genedge-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">✓</div>
                  <span className="ml-3 text-gray-700">
                    Ability to handle MW-scale and multi-location projects with precision
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>;
};

export default BusinessEPC;
