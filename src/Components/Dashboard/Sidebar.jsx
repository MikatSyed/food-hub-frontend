// src/components/Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard, MdRestaurantMenu, MdPerson, MdExitToApp } from 'react-icons/md';
import { removeUserInfo } from '../../utils/auth.service';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserInfo(); 
    navigate('/')
    
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-full">
      <div className="flex-1">
        <div className="text-center py-4 border-b border-gray-700">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center p-4 hover:bg-gray-700">
                <MdDashboard className="text-lg mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/recipe" className="flex items-center p-4 hover:bg-gray-700">
                <MdRestaurantMenu className="text-lg mr-3" />
                <span>Recipe</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/user" className="flex items-center p-4 hover:bg-gray-700">
                <MdPerson className="text-lg mr-3" />
                <span>User</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg flex items-center justify-center" onClick={() => handleLogout()}>
          <MdExitToApp className="text-lg mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
