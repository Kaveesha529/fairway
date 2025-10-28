import React from "react";

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4 w-48">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

export default MetricCard;
