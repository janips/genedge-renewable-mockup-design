import React from "react";
import { Link } from "react-router-dom";
import { Info, Wind, Briefcase, PhoneCall } from "lucide-react";
const QuickLinks: React.FC = () => {
  const links = [{
    icon: <Info size={32} />,
    title: "About Us",
    description: "Learn about our vision, mission and values that drive us towards a sustainable future.",
    path: "/about",
    color: "bg-gradient-to-br from-blue-500 to-blue-700"
  }, {
    icon: <Wind size={32} />,
    title: "Renewable Sector",
    description: "Explore India's renewable energy landscape, policies and growth opportunities.",
    path: "/renewable-sector",
    color: "bg-gradient-to-br from-genedge-green to-emerald-700"
  }, {
    icon: <Briefcase size={32} />,
    title: "Business Verticals",
    description: "Discover our comprehensive range of renewable energy solutions and services.",
    path: "/businesses",
    color: "bg-gradient-to-br from-genedge-orange to-orange-700"
  }, {
    icon: <PhoneCall size={32} />,
    title: "Contact",
    description: "Get in touch with our expert team for collaborations and inquiries.",
    path: "/contact",
    color: "bg-gradient-to-br from-purple-500 to-purple-700"
  }];
  return;
};
export default QuickLinks;