
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img
          src="/lovable-uploads/9c1e06fa-ffb9-4b41-befa-898b7fd97a22.png"
          alt="Logo"
          className="h-20 w-auto md:h-20" // Increased from h-12 to h-20 for larger logo
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
