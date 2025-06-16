
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-genedge-green mb-4">
            Quick Access
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Offerings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover comprehensive information about our renewable energy solutions and services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group block"
            >
              <div className={`${link.color} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <div className="mb-4 text-white/90 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{link.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
