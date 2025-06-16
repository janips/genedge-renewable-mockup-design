import React from 'react';
import { Link } from 'react-router-dom';
const NavbarLogo: React.FC = () => {
  return <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img alt="Logo" className="h-20 w-auto md:h-20" // Increased from h-12 to h-20 for larger logo
      src="/lovable-uploads/8a12e278-d773-4896-8fae-ce07dd5f3917.png" />
      </div>
    </Link>;
};
export default NavbarLogo;