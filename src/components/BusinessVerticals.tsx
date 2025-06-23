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
      linkUrl: "/businesses/kusum"
    }, {
      id: "utility",
      icon: <Wind className="h-6 w-6 animate-spin-slow" />,
      title: "Utility Scale Projects",
      subtitle: "Powering the Grid. Supporting National Goals",
      description: "Our large-scale solar and wind energy projects feed directly into the national grid, helping utilities meet renewable purchase obligations and contributing to India's ambitious clean energy targets.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      linkUrl: "/businesses/utility"
    }, {
      id: "commercial",
      icon: <Users className="h-6 w-6 animate-bounce" />,
      title: "C&I Solutions",
      subtitle: "Energy Solutions for Forward-Thinking Businesses",
      description: "We provide tailored renewable energy systems for commercial and industrial clients, helping businesses reduce operational costs and carbon footprints through custom solar solutions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      linkUrl: "/businesses/commercial"
    }, {
      id: "bess",
      icon: <Battery className="h-6 w-6 animate-fade-in" />,
      title: "BESS",
      subtitle: "Storing Power. Strengthening the Grid",
      description: "Our Battery Energy Storage Systems enhance grid resilience and enable round-the-clock power delivery, creating the foundation for firm and dispatchable renewable energy in India.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      linkUrl: "/businesses/bess"
    }, {
      id: "epc",
      icon: <Wrench className="h-6 w-6 animate-wiggle" />,
      title: "EPC Business",
      subtitle: "Building Excellence in Renewable Infrastructure",
      description: "Our engineering, procurement, and construction services deliver turnkey renewable energy projects with precision engineering, quality components, and professional installation.",
      image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      linkUrl: "/businesses/epc"
    }, {
      id: "om",
      icon: <Settings className="h-6 w-6 animate-spin-slow" />,
      title: "O&M Business",
      subtitle: "Maximizing Performance. Ensuring Longevity",
      description: "Our operations and maintenance services ensure optimal performance of renewable energy assets throughout their lifecycle, maximizing energy yield and system longevity.",
      image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      linkUrl: "/businesses/om"
    }
  ];
  const activeBusiness = businesses.find(business => business.id === activeTab);
  return <section className="bg-white py-[30px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Business Verticals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive renewable energy solutions across multiple sectors and technologies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {businesses.map(business => <button key={business.id} onClick={() => setActiveTab(business.id)} className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === business.id ? "bg-genedge-green text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
              <span className="mr-2">{business.icon}</span>
              <span className="hidden sm:inline">{business.title}</span>
            </button>)}
        </div>

        {/* Active Business Content */}
        {activeBusiness && <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-genedge-green rounded-lg mr-4">
                  {activeBusiness.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{activeBusiness.title}</h3>
                  <p className="text-genedge-green font-medium">{activeBusiness.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{activeBusiness.description}</p>
              <Link to={activeBusiness.linkUrl} className="inline-flex items-center px-6 py-3 bg-genedge-orange text-white rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div>
              <img src={activeBusiness.image} alt={activeBusiness.title} className="rounded-lg shadow-lg w-full h-80 object-cover" />
            </div>
          </div>}
      </div>
    </section>;
};
export default BusinessVerticals;
