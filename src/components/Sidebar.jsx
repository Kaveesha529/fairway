import React, { useState } from "react";
import {
    FaHome,
    FaClipboardList,
    FaUsers,
    FaFileInvoiceDollar,
    FaMoneyCheckAlt,
    FaCalendarAlt,
    FaChartLine,
    FaCog,
    FaBars,
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Job Requests", icon: <FaClipboardList />, path: "/jobRequests" },
    { name: "Technicians", icon: <FaUsers />, path: "/technicians" },
    { name: "Invoices", icon: <FaFileInvoiceDollar />, path: "/invoices" },
    { name: "Payments", icon: <FaMoneyCheckAlt />, path: "/payments" },
    { name: "Schedule", icon: <FaCalendarAlt />, path: "/schedule" },
    { name: "Reports", icon: <FaChartLine />, path: "/reports" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-16 bg-white shadow px-4 flex items-center justify-between">
        {/* Add header content here */}
      </header>

      {/* Main layout (Sidebar + Main content) */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-50 shadow-md p-4 flex flex-col transition-all duration-300 ${
            isOpen ? "w-48" : "w-16"
          }`}
        >
          {/* Toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mb-6 p-2 rounded hover:bg-gray-200 self-end"
          >
            <FaBars />
          </button>

          {/* Menu items */}
          <nav className="flex flex-col gap-3 mt-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-200"
              >
                {item.icon}
                {isOpen && <span className="font-medium">{item.name}</span>}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 bg-white overflow-auto">
          {children}
        </main>
      </div>

      {/* ✅ Footer */}
      <footer className="flex px-60 py-10 w-full bg-gray-50 border-t">
        <div className="flex items-center justify-between w-full">
          <p className="text-black text-lg">
            © 2025 Fairway Holdings (Pvt) Ltd.
          </p>
          <p className="text-black text-lg">Privacy Policy</p>
          <p className="text-black text-lg">Terms of Service</p>
          <p className="text-black text-lg">Contact Support</p>
        </div>
      </footer>
    </div>
  );

}
