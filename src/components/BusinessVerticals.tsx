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
  return;
};
export default BusinessVerticals;