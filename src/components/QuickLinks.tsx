
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quick Links
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through our key sections to learn more about our renewable energy solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="group block transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${link.color} p-6 rounded-lg text-white h-full flex flex-col justify-between min-h-[200px]`}>
                <div>
                  <div className="mb-4 text-white/90">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {link.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    Learn More →
                  </span>
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
