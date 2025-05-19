
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

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
            <p className="text-gray-300 mb-4">
              Powering India's Future with Clean Energy. We are dedicated to harnessing renewable resources to meet the growing energy demands in India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-genedge-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-genedge-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-genedge-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-genedge-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-genedge-orange transition-colors">About Us</Link></li>
              <li><Link to="/renewable-sector" className="text-gray-300 hover:text-genedge-orange transition-colors">Renewable Sector</Link></li>
              <li><Link to="/businesses" className="text-gray-300 hover:text-genedge-orange transition-colors">Our Businesses</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-genedge-orange transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-genedge-orange transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-genedge-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-orange pl-3">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/businesses/kusum" className="text-gray-300 hover:text-genedge-orange transition-colors">PM Kusum Projects</Link></li>
              <li><Link to="/businesses/utility" className="text-gray-300 hover:text-genedge-orange transition-colors">Utility Scale Projects</Link></li>
              <li><Link to="/businesses/commercial" className="text-gray-300 hover:text-genedge-orange transition-colors">C&I Solutions</Link></li>
              <li><Link to="/businesses/bess" className="text-gray-300 hover:text-genedge-orange transition-colors">Battery Energy Storage</Link></li>
              <li><Link to="/businesses/epc" className="text-gray-300 hover:text-genedge-orange transition-colors">EPC Business</Link></li>
              <li><Link to="/businesses/om" className="text-gray-300 hover:text-genedge-orange transition-colors">O&M Business</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-genedge-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Corporate Office, 
                  <br />New Delhi, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-genedge-orange transition-colors">+91 1234567890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="mailto:contact@genedge.in" className="text-gray-300 hover:text-genedge-orange transition-colors">contact@genedge.in</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Genedge Renewables Pvt. Ltd. All Rights Reserved.
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
