
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img alt="Genedge Renewables Logo" className="h-20 w-auto md:h-20" 
      src="/lovable-uploads/5f527f8a-2f7c-41b1-9545-7b7ec57c7ace.png" />
      </div>
    </Link>;
};

export default NavbarLogo;
