import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import JobRequests from "./pages/JobRequests";
import Technicians from "./pages/Technicians";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Schedule from "./pages/Schedule";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobRequests" element={<JobRequests />} />
        <Route path="/technicians" element={<Technicians />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
