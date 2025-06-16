
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img alt="Genedge Renewables Logo" className="h-20 w-auto md:h-20" 
      src="/lovable-uploads/a49ec2e3-c70a-4e74-b6a9-e3cd0cccc919.png" />
      </div>
    </Link>;
};

export default NavbarLogo;
