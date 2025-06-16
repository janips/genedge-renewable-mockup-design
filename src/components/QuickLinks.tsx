
import React from "react";
import { Link } from "react-router-dom";
import { Info, Wind, Briefcase, PhoneCall } from "lucide-react";

const QuickLinks: React.FC = () => {
  const links = [
    {
      icon: <Info size={32} />,
      title: "About Us",
      description: "Learn about our vision, mission and values that drive us towards a sustainable future.",
      path: "/about",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <Wind size={32} />,
      title: "Renewable Sector",
      description: "Explore India's renewable energy landscape, policies and growth opportunities.",
      path: "/renewable-sector",
      color: "bg-gradient-to-br from-genedge-green to-emerald-700"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Business Verticals",
      description: "Discover our comprehensive range of renewable energy solutions and services.",
      path: "/businesses",
      color: "bg-gradient-to-br from-genedge-orange to-orange-700"
    },
    {
      icon: <PhoneCall size={32} />,
      title: "Contact",
      description: "Get in touch with our expert team for collaborations and inquiries.",
      path: "/contact",
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Links</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our key areas and discover how we're driving India's renewable energy transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`${link.color} rounded-xl p-6 text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{link.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
