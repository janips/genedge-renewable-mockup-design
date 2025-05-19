
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLinkType = {
  title: string;
  path: string;
  submenu?: { title: string; path: string }[];
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNav = () => setIsOpen(!isOpen);

  const handleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Text color logic: Use white on homepage hero, black elsewhere
  const getTextColor = () => {
    if (isHomePage && !scrolled) {
      return "text-white";
    }
    return "text-gray-700"; // Use dark text color on all other pages
  };

  const navLinks: NavLinkType[] = [
    { title: "Home", path: "/" },
    { 
      title: "About Us", 
      path: "/about",
      submenu: [
        { title: "Company Overview", path: "/about" },
        { title: "Management Team", path: "/about/team" },
        { title: "Parent Company", path: "/about/parent" }
      ]
    },
    { 
      title: "Renewable Sector", 
      path: "/renewable-sector",
      submenu: [
        { title: "Key Policies", path: "/renewable-sector/policies" },
        { title: "Capacity Growth", path: "/renewable-sector/capacity" },
        { title: "Government Targets", path: "/renewable-sector/targets" },
        { title: "Development Process", path: "/renewable-sector/process" }
      ]
    },
    { 
      title: "Our Businesses", 
      path: "/businesses",
      submenu: [
        { title: "PM Kusum Projects", path: "/businesses/kusum" },
        { title: "Utility Scale Projects", path: "/businesses/utility" },
        { title: "C&I Solutions", path: "/businesses/commercial" },
        { title: "BESS", path: "/businesses/bess" },
        { title: "EPC", path: "/businesses/epc" },
        { title: "O&M", path: "/businesses/om" }
      ]
    },
    { title: "Projects", path: "/projects" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/7e0d13de-07d5-416e-94fb-c893368715f1.png" alt="Genedge Logo" className="h-12 w-auto" />
              <span className={`font-bold text-xl ${scrolled || !isHomePage ? "text-genedge-dark-gray" : "text-white"}`}>Genedge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <button 
                  onClick={() => link.submenu && handleDropdown(link.title)}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-genedge-green transition-colors ${getTextColor()} ${activeDropdown === link.title ? "text-genedge-green" : ""}`}
                >
                  {link.title}
                  {link.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>

                {link.submenu && (
                  <div 
                    className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 transition-all duration-200 transform origin-top-left ${
                      activeDropdown === link.title ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/contact" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-genedge-green hover:bg-opacity-90 rounded transition-colors">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleNav} className={`p-2 focus:outline-none ${scrolled || !isHomePage ? "text-gray-700" : "text-white"}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
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
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="block w-full px-4 py-2 text-center text-white bg-genedge-green hover:bg-opacity-90 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
