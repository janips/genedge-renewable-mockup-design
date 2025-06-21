import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Wind, Battery, Activity } from 'lucide-react';
const AboutSection: React.FC = () => {
  const services = [{
    icon: <Sun className="h-8 w-8 text-genedge-orange" />,
    label: "Solar Energy"
  }, {
    icon: <Wind className="h-8 w-8 text-genedge-green" />,
    label: "Wind Energy"
  }, {
    icon: <Battery className="h-8 w-8 text-blue-500" />,
    label: "BESS Solutions"
  }, {
    icon: <Activity className="h-8 w-8 text-purple-500" />,
    label: "EPC Services"
  }];
  return <section className="bg-genedge-light-gray py-0">
      <div className="container mx-auto px-4 py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img src="/lovable-uploads/8dd7cbb8-baa7-458d-9f87-d2b80406bad5.png" alt="Solar panels installation" className="rounded-lg shadow-lg w-full h-64 object-cover mb-4" />
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Wind turbines" className="rounded-lg shadow-lg w-full h-40 object-cover" />
                </div>
                <div >
                  <img src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Agricultural solar panels" className="rounded-lg shadow-lg w-full h-40 object-cover mb-4" />
                  <img src="/lovable-uploads/c77a4bd4-0e26-452e-834c-64ba1d8ce410.png" alt="Battery storage systems" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contributing to India's Clean Energy Revolution</h2>
            <p className="text-gray-600 mb-6">Genedge Renewables Private Limited, an integral part of the Enertech Group, is dedicated to harnessing the power of renewable resources to meet the growing energy demands in India.</p>
            <p className="text-gray-600 mb-6">The company is formed with a vision of establishing itself as one of the leading renewable energy company, with a balanced project portfolio, spanning across technologies, geographies, utilities and credible third party customer base.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {services.map((service, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-2">{service.icon}</div>
                  <div className="font-medium">{service.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;