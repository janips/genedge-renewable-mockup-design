
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navLinks";
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleNav = () => setIsOpen(!isOpen);

  const handleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      {/* Green thick line at the top */}
      <div className="fixed w-full top-0 z-50 h-1 bg-genedge-green"></div>
      
      <nav className="fixed w-full top-1 z-50 bg-white shadow-md py-2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <NavbarLogo />

            {/* Desktop Navigation */}
            <DesktopNav 
              navLinks={navLinks}
              activeDropdown={activeDropdown}
              handleDropdown={handleDropdown}
            />

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button onClick={toggleNav} className="p-2 focus:outline-none text-gray-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileNav
          navLinks={navLinks}
          isOpen={isOpen}
          activeDropdown={activeDropdown}
          handleDropdown={handleDropdown}
          setIsOpen={setIsOpen}
        />
      </nav>
    </>
  );
};

export default Navbar;
