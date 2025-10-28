import React from "react";
import MetricCard from "../components/MetricCard";
import Table from "../components/Table";

const Dashboard = () => {
  const metrics = [
    { title: "Pending Jobs", value: 12 },
    { title: "Active Technicians", value: 5 },
    { title: "Revenue This Month", value: "$8,500" },
    { title: "Completed Today", value: 7 },
  ];

  const jobs = [
    { id: "J001", customer: "John Doe", status: "Pending" },
    { id: "J002", customer: "Jane Smith", status: "Completed" },
    { id: "J003", customer: "Mike Brown", status: "Pending" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex gap-4 flex-wrap">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} title={metric.title} value={metric.value} />
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Job Requests</h2>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Create New Job
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Reports
            </button>
          </div>
        </div>
        <Table data={jobs} />
      </div>
    </div>
  );
};

export default Dashboard;
