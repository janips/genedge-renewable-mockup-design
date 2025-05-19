
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 h-full flex flex-col border border-gray-100">
                <div className={`${link.color} text-white p-4 rounded-full self-start mb-4`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-genedge-green transition-colors">{link.title}</h3>
                <p className="text-gray-600 flex-grow">{link.description}</p>
                <div className="mt-4 text-genedge-green font-medium">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
