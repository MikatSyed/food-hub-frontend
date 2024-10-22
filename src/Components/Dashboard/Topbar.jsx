// src/components/Topbar.jsx
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="bg-white shadow-md flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="flex items-center space-x-6">
      
        <Link to="/dashboard/profile">
        
        <div className="relative">
          <FaUserCircle className="text-2xl" />
        </div></Link>
      </div>
    </div>
  );
};

export default Topbar;
