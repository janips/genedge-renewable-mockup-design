
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Wind, Battery, Activity } from 'lucide-react';

const AboutSection: React.FC = () => {
  const services = [
    {
      icon: <Sun className="h-8 w-8 text-genedge-orange" />,
      label: "Solar Energy",
    },
    {
      icon: <Wind className="h-8 w-8 text-genedge-green" />,
      label: "Wind Energy",
    },
    {
      icon: <Battery className="h-8 w-8 text-blue-500" />,
      label: "BESS Solutions",
    },
    {
      icon: <Activity className="h-8 w-8 text-purple-500" />,
      label: "EPC Services",
    },
  ];

  return (
    <section className="py-20 bg-genedge-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1593561011103-5ac1057fd0f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Solar panels" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover mb-4"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Wind turbines" 
                    className="rounded-lg shadow-lg w-full h-40 object-cover"
                  />
                </div>
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Agricultural solar panels" 
                    className="rounded-lg shadow-lg w-full h-40 object-cover mb-4"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1579962404986-56bb6647ba41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Battery storage" 
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 md:bottom-8 md:right-8 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-bold text-genedge-green">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-genedge-green mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading India's Clean Energy Revolution</h2>
            <p className="text-gray-600 mb-6">
              Genedge Renewables Private Limited is part of the esteemed Enertech Group, dedicated to harnessing the power of renewable resources to meet the growing energy demands in India. 
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to driving the transition to a sustainable world through reliable and affordable renewable energy solutions. Founded with a mission to reduce carbon footprints and empower communities, we harness the power of the sun and other clean sources to create a brighter tomorrow.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-2">{service.icon}</div>
                  <div className="font-medium">{service.label}</div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="inline-flex items-center text-genedge-green hover:underline font-medium">
              Learn more about our company
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
