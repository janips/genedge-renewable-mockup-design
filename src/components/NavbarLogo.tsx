
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img alt="Genedge Renewables Logo" className="h-20 w-auto md:h-20" 
      src="/lovable-uploads/0461a9ac-8626-42f7-ab5e-73539979bf8f.png" />
      </div>
    </Link>;
};

export default NavbarLogo;
