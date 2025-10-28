import React from "react";

const Table = ({ data }) => (
  <table className="min-w-full bg-white border mt-4">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border">Job ID</th>
        <th className="py-2 px-4 border">Customer</th>
        <th className="py-2 px-4 border">Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((job) => (
        <tr key={job.id}>
          <td className="py-2 px-4 border">{job.id}</td>
          <td className="py-2 px-4 border">{job.customer}</td>
          <td className="py-2 px-4 border">{job.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
