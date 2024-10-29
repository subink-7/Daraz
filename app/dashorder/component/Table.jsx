import React from 'react';
import Tablebody from './Tablebody';

export default function Table() {
  return (
    <div>
      <div className="overflow-x-auto shadow-md">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-bold">Id</th>
              <th className="px-4 py-2 text-left font-bold">Name</th>
              <th className="px-4 py-2 text-left font-bold">Payment</th>
              <th className="px-4 py-2 text-left font-bold">Time remaining</th>
              <th className="px-4 py-2 text-left font-bold">Type</th>
              <th className="px-4 py-2 text-left font-bold">Status</th>
              <th className="px-4 py-2 text-left font-bold">Total</th>
              <th className="px-4 py-2 text-left font-bold">Action</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <Tablebody 
              id="1" 
              name="John Doe" 
              payment="Paid" 
              timereaming="10 mins" 
              type="Online" 
              status="Completed" 
              total="$100" 
              action="View"
            />
            <Tablebody 
              id="2" 
              name="Jane Doe" 
              payment="Pending" 
              timereaming="5 mins" 
              type="In-Person" 
              status="Pending" 
              total="$50" 
              action="View"
            />
            <Tablebody 
              id="2" 
              name="Jane Doe" 
              payment="Pending" 
              timereaming="5 mins" 
              type="In-Person" 
              status="Pending" 
              total="$50" 
              action="View"
            />
            <Tablebody 
              id="2" 
              name="Jane Doe" 
              payment="Pending" 
              timereaming="5 mins" 
              type="In-Person" 
              status="Pending" 
              total="$50" 
              action="View"
            />
            <Tablebody 
              id="2" 
              name="Jane Doe" 
              payment="Pending" 
              timereaming="5 mins" 
              type="In-Person" 
              status="Pending" 
              total="$50" 
              action="View"
            />
            <Tablebody 
              id="2" 
              name="Jane Doe" 
              payment="Pending" 
              timereaming="5 mins" 
              type="In-Person" 
              status="Pending" 
              total="$50" 
              action="View"
            />

          </tbody>
        </table>
      </div>
    </div>
  );
}
