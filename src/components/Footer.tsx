
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/7e0d13de-07d5-416e-94fb-c893368715f1.png" alt="Genedge Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-white">Genedge</span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              Empowering India through Clean Energy
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-genedge-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  A306, Navratna Corporate Park
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="tel:+912717468967" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">+91 2717 468967</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="mailto:info@genedge.in" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">info@genedge.in</a>
              </li>
              <li className="flex items-center">
                <Linkedin size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">LinkedIn Page</a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-orange pl-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">About Us</Link></li>
              <li><Link to="/renewable-sector" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Renewable Sector</Link></li>
              <li><Link to="/businesses" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Our Businesses</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/businesses/kusum" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">PM Kusum Projects</Link></li>
              <li><Link to="/businesses/utility" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">Utility Scale Projects</Link></li>
              <li><Link to="/businesses/commercial" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">C&I Projects</Link></li>
              <li><Link to="/businesses/bess" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">BESS</Link></li>
              <li><Link to="/businesses/epc" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">EPC Business</Link></li>
              <li><Link to="/businesses/om" className="text-gray-300 hover:text-genedge-orange transition-colors text-sm">O&M Business</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Genedge Renewables. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-genedge-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-genedge-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
