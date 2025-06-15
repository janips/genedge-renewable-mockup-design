
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center space-x-2">
        <img src="/lovable-uploads/7e0d13de-07d5-416e-94fb-c893368715f1.png" alt="Genedge Logo" className="h-12 w-auto" />
        <span className="font-bold text-xl text-genedge-dark-gray">Genedge</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
