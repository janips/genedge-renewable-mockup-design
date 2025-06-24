import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
const Footer: React.FC = () => {
  return <footer className="bg-gray-100 text-genedge-dark-gray pt-16 pb-8 py-[10px] border-t-4 border-genedge-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img alt="Logo" className="h-16 w-auto md:h-20" src="/lovable-uploads/a49ec2e3-c70a-4e74-b6a9-e3cd0cccc919.png" />
            </Link>
            <p className="text-genedge-dark-gray items-center mb-4 text-sm font-bold text-left px-[15px]">
              From the Ground Up,<br /> 
              Towards a Greener Future
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3 text-genedge-dark-gray">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-genedge-orange mt-1 flex-shrink-0" />
                <span className="text-genedge-dark-gray text-sm">
                  Genedge Renewables Private Limited, <br /> 
                  A306, Navratna Corporate Park, <br />
                  Ambali Road, Ashok Vatika, <br />
                  Ahmedabad.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="tel:+912717468967" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">+91 2717 468967</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="mailto:info@genedge.in" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">info@genedge.in</a>
              </li>
              <li className="flex items-center">
                <Linkedin size={16} className="mr-2 text-genedge-orange flex-shrink-0" />
                <a href="https://www.linkedin.com/company/genedge-renewables-private-limited/" target="_blank" rel="noopener noreferrer" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">LinkedIn Page</a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-orange pl-3 text-genedge-dark-gray">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">About Us</Link></li>
              <li><Link to="/renewable-sector" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Renewable Sector</Link></li>
              <li><Link to="/businesses" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Our Businesses</Link></li>
              <li><Link to="/projects" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Projects</Link></li>
              <li><Link to="/careers" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-l-4 border-genedge-green pl-3 text-genedge-dark-gray">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/businesses/kusum" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">PM Kusum Projects</Link></li>
              <li><Link to="/businesses/utility" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">Utility Scale Projects</Link></li>
              <li><Link to="/businesses/commercial" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">C&I Projects</Link></li>
              <li><Link to="/businesses/bess" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">BESS</Link></li>
              <li><Link to="/businesses/epc" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">EPC Business</Link></li>
              <li><Link to="/businesses/om" className="text-genedge-dark-gray hover:text-genedge-orange transition-colors text-sm">O&M Business</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-genedge-light-gray my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-genedge-dark-gray text-sm mb-4 md:mb-0">
            © 2025 Genedge Renewables Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-genedge-dark-gray text-sm hover:text-genedge-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-genedge-dark-gray text-sm hover:text-genedge-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;