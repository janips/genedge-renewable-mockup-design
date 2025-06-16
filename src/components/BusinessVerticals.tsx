
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Wind, Battery, Users, Settings, Wrench, ArrowRight } from 'lucide-react';

const BusinessVerticals: React.FC = () => {
  const [activeTab, setActiveTab] = useState("kusum");

  const businesses = [{
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
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkUrl: "/businesses/utility"
  }, {
    id: "commercial",
    icon: <Users className="h-6 w-6 animate-bounce" />,
    title: "C&I Solutions",
    subtitle: "Energy Solutions for Forward-Thinking Businesses",
    description: "We provide tailored renewable energy systems for commercial and industrial clients, helping businesses reduce operational costs and carbon footprints through custom solar solutions.",
    image: "https://images.unsplash.com/photo-1611365892117-00d03937791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    linkUrl: "/businesses/commercial"
  }, {
    id: "bess",
    icon: <Battery className="h-6 w-6 animate-fade-in" />,
    title: "BESS",
    subtitle: "Storing Power. Strengthening the Grid",
    description: "Our Battery Energy Storage Systems enhance grid resilience and enable round-the-clock power delivery, creating the foundation for firm and dispatchable renewable energy in India.",
    image: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
  }];

  const activeBusiness = businesses.find(business => business.id === activeTab);

  return (
    <section className="py-16 bg-genedge-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-genedge-green mb-4">
            Our Business
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Verticals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive renewable energy solutions across multiple sectors
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {businesses.map((business) => (
            <button
              key={business.id}
              onClick={() => setActiveTab(business.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === business.id
                  ? 'bg-genedge-green text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {business.icon}
              <span className="font-medium">{business.title}</span>
            </button>
          ))}
        </div>

        {/* Active Business Content */}
        {activeBusiness && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-genedge-green/10 rounded-lg">
                    {activeBusiness.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold">{activeBusiness.title}</h3>
                </div>
                <h4 className="text-lg text-genedge-green font-semibold mb-4">
                  {activeBusiness.subtitle}
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeBusiness.description}
                </p>
                <Link
                  to={activeBusiness.linkUrl}
                  className="inline-flex items-center gap-2 bg-genedge-green text-white px-6 py-3 rounded-lg hover:bg-genedge-green/90 transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src={activeBusiness.image}
                  alt={activeBusiness.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-genedge-green/20 to-transparent"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessVerticals;
