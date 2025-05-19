
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Battery, Users, Settings, Wrench, ArrowRight } from 'lucide-react';

const BusinessVerticals: React.FC = () => {
  const [activeTab, setActiveTab] = useState("kusum");
  
  const businesses = [
    {
      id: "kusum",
      icon: <Sun className="h-6 w-6 animate-pulse" />,
      title: "PM Kusum Projects",
      subtitle: "Empowering Farmers. Energizing Agriculture",
      description: "We implement PM-KUSUM projects across Gujarat, Rajasthan, and Madhya Pradesh, bringing reliable solar energy to agricultural regions and supporting rural energy independence.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/businesses/kusum",
    },
    {
      id: "utility",
      icon: <Wind className="h-6 w-6 animate-spin-slow" />,
      title: "Utility Scale Projects",
      subtitle: "Powering the Grid. Supporting National Goals",
      description: "Our large-scale solar and wind energy projects feed directly into the national grid, helping utilities meet renewable purchase obligations and contributing to India's ambitious clean energy targets.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/businesses/utility",
    },
    {
      id: "commercial",
      icon: <Users className="h-6 w-6 animate-bounce" />,
      title: "C&I Solutions",
      subtitle: "Energy Solutions for Forward-Thinking Businesses",
      description: "We provide tailored renewable energy systems for commercial and industrial clients, helping businesses reduce operational costs and carbon footprints through custom solar solutions.",
      image: "https://images.unsplash.com/photo-1611365892117-00d03937791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/businesses/commercial",
    },
    {
      id: "bess",
      icon: <Battery className="h-6 w-6 animate-fade-in" />,
      title: "BESS",
      subtitle: "Storing Power. Strengthening the Grid",
      description: "Our Battery Energy Storage Systems enhance grid resilience and enable round-the-clock power delivery, creating the foundation for firm and dispatchable renewable energy in India.",
      image: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/businesses/bess",
    },
    {
      id: "epc",
      icon: <Wrench className="h-6 w-6 animate-wiggle" />,
      title: "EPC Business",
      subtitle: "Building Excellence in Renewable Infrastructure",
      description: "Our engineering, procurement, and construction services deliver turnkey renewable energy projects with precision engineering, quality components, and professional installation.",
      image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      linkUrl: "/businesses/epc",
    },
    {
      id: "om",
      icon: <Settings className="h-6 w-6 animate-spin-slow" />,
      title: "O&M Business",
      subtitle: "Maximizing Performance. Ensuring Longevity",
      description: "Our operations and maintenance services ensure optimal performance of renewable energy assets throughout their lifecycle, maximizing energy yield and system longevity.",
      image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      linkUrl: "/businesses/om",
    },
  ];
  
  const activeBusiness = businesses.find(business => business.id === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-genedge-orange mb-4">
            Our Businesses
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">A Strategic Approach to Clean Energy</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our diversified portfolio enables us to serve multiple sectors effectively 
            while ensuring long-term growth, resilience, and impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-xl p-4 sticky top-20">
              {businesses.map((business) => (
                <button
                  key={business.id}
                  className={`w-full flex items-center p-4 rounded-lg mb-2 transition-all hover-scale ${
                    activeTab === business.id
                      ? "bg-white shadow text-genedge-green"
                      : "hover:bg-white"
                  }`}
                  onClick={() => setActiveTab(business.id)}
                >
                  <div className={`mr-3 ${
                    activeTab === business.id ? "text-genedge-green" : "text-gray-500"
                  }`}>
                    {business.icon}
                  </div>
                  <span className={`text-left ${
                    activeTab === business.id ? "font-medium" : "text-gray-600"
                  }`}>
                    {business.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {activeBusiness && (
            <div className="lg:col-span-9">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={activeBusiness.image} 
                      alt={activeBusiness.title} 
                      className="h-64 md:h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-genedge-light-gray p-2 mr-3">
                        {activeBusiness.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{activeBusiness.title}</h3>
                    </div>
                    <p className="text-genedge-orange font-medium mb-4">{activeBusiness.subtitle}</p>
                    <p className="text-gray-600 mb-6">{activeBusiness.description}</p>
                    <Link 
                      to={activeBusiness.linkUrl}
                      className="inline-flex items-center text-genedge-green hover:underline font-medium"
                    >
                      Learn more
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/businesses"
            className="inline-flex items-center justify-center px-6 py-3 bg-genedge-green text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            View All Business Verticals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
