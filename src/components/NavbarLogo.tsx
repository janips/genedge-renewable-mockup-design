
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img src="/lovable-uploads/9c1e06fa-ffb9-4b41-befa-898b7fd97a22.png" alt="Genedge Logo" className="h-12 w-auto" />
      </div>
    </Link>
  );
};

export default NavbarLogo;
