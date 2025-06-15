
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NavLinkType } from '../types/navigation';

interface MobileNavProps {
  navLinks: NavLinkType[];
  isOpen: boolean;
  activeDropdown: string | null;
  handleDropdown: (title: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ 
  navLinks, 
  isOpen, 
  activeDropdown, 
  handleDropdown, 
  setIsOpen 
}) => {
  return (
    <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"}`}>
      <div className="bg-white shadow-md px-2 pt-2 pb-4 space-y-1">
        {navLinks.map((link) => (
          <div key={link.title} className="relative">
            <div className="flex items-center justify-between">
              <Link 
                to={link.path} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-genedge-green"
                onClick={() => !link.submenu && setIsOpen(false)}
              >
                {link.title}
              </Link>
              {link.submenu && (
                <button 
                  onClick={() => handleDropdown(link.title)}
                  className="p-2 text-gray-500"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.title ? "transform rotate-180" : ""}`} />
                </button>
              )}
            </div>
            {link.submenu && activeDropdown === link.title && (
              <div className="pl-4 space-y-1 mt-1">
                {link.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
