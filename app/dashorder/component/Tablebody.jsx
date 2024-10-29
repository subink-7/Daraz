import React from 'react';

export default function Tablebody({ id, name, payment, timereaming, type, status, total, action }) {
  return (
    <tr>
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{payment}</td>
      <td className="px-4 py-2">{timereaming}</td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{status}</td>
      <td className="px-4 py-2">{total}</td>
      <td className="px-4 py-2">
        <a href="#" className="text-red-500 mr-2">{action}</a>
        <a href="#" className="text-blue-500">View</a>
      </td>
    </tr>
  );
}
