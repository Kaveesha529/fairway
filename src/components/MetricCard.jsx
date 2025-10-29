import React from "react";

const MetricCard = ({ title, value, remark }) => (
  <div className="bg-white shadow rounded p-4 w-full">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
    <p className="text-lg font-semibold mt-2">{remark}</p>
  </div>
);

export default MetricCard;
