
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img alt="Genedge Renewables Logo" className="h-20 w-auto md:h-20" 
      src="/lovable-uploads/03acf249-0ad5-4a39-aa7a-117c4bae3933.png" />
      </div>
    </Link>;
};

export default NavbarLogo;
