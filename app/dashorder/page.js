import React from 'react'
import Table from './component/Table'

export default function Dashorder() {
  return (
    <div>
        <div class="p-8">
 {/* Header */}
  <div class="flex justify-between items-center mb-4">
    <div class="text-xl font-semibold">Order History</div>
    <div class="flex space-x-2">
      <input
        type="date"
        class="border border-gray-300 rounded px-2 py-1 text-gray-600"
      />
      <span>To</span>
      <input
        type="date"
        class="border border-gray-300 rounded px-2 py-1 text-gray-600"
      />
    </div>
  </div>
{/* Table */}
  <Table/>
  </div>

    </div>
  )
}
