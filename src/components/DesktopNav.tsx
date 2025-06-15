
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavLinkType } from '../types/navigation';

interface DesktopNavProps {
  navLinks: NavLinkType[];
  activeDropdown: string | null;
  handleDropdown: (title: string) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks, activeDropdown, handleDropdown }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <div key={link.title} className="relative group">
          {link.submenu ? (
            <button 
              onClick={() => handleDropdown(link.title)}
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-genedge-green transition-colors text-gray-700 ${activeDropdown === link.title ? "text-genedge-green" : ""}`}
            >
              {link.title}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          ) : (
            <Link 
              to={link.path}
              className="px-3 py-2 rounded-md text-sm font-medium hover:text-genedge-green transition-colors text-gray-700"
            >
              {link.title}
            </Link>
          )}

          {link.submenu && (
            <div 
              className={`absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg z-50 transition-all duration-200 transform origin-top-left ${
                activeDropdown === link.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="py-1">
                {link.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => handleDropdown("")}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;
