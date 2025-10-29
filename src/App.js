import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import JobRequests from "./pages/JobRequests";
import Technicians from "./pages/Technicians";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobRequests" element={<JobRequests />} />
        <Route path="/technicians" element={<Technicians />} />
      </Routes>
    </Router>
  );
}

export default App;
