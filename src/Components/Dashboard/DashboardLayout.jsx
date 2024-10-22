// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as necessary
import Topbar from './Topbar'; // Adjust the path as necessary

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
