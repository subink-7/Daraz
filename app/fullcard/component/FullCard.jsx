import React from 'react';
import Image from 'next/image';

export default function FullCard({ imageurl, title, price, off }) {
  return (
    <div className="border border-gray-300 p-4 bg-white rounded-lg shadow-lg text-center max-w-xs">
      {/* Image on the top */}
      <Image
        src={imageurl ?? '/placeholder-image.jpg'}
        alt={title ?? 'Product Image'}
        width={150}
        height={150}
        className="mx-auto mb-4 rounded-lg"
      />

      {/* Product Title */}
      <h2 className="text-lg font-medium mb-2">{title ?? 'Title'}</h2>

      {/* Price and Discount */}
      <p className="text-orange-600 text-xl font-semibold mb-2">
        Rs. {price ?? 'Price'} <span className="text-gray-500 line-through ml-2">{off ?? 'Discount'}</span>
      </p>

      {/* Buy Now Button */}
      <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
        BUY NOW
      </button>
    </div>
  );
}
