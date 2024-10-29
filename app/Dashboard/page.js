"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Product from './components/Product';

export default function Dashboard() {
  // Step 1: Create a state to hold the list of products
  const [products, setProducts] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);

  // Step 2: Function to add a new product
  const addProduct = () => {
    setProducts([...products, {}]); // Add a new product (empty object)
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <h1 className="p-4 text-lg font-bold">Admin</h1>
        <ul>
          <li>
            <Link href="Dashboard" className="p-4 block">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashproduct" className="p-4 block">Products</Link>
          </li>
          <li>
            <Link href="/dashorder" className="p-4 block">Orders</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            className="border p-2 w-1/3"
            type="text"
            placeholder="Search"
          />
          {/* Step 3: Call addProduct function when button is clicked */}
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={addProduct}
          >
            Create New
          </button>
        </div>

        {/* Step 4: Render the products */}
        <div className="grid grid-cols-4 gap-6">
          {products.map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}