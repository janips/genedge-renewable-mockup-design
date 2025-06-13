
import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-genedge-green text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Space for announcements - currently empty */}
            <span className="opacity-0">Announcement space</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Space for contact info - currently empty */}
            <span className="opacity-0">Contact space</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
