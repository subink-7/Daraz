import Link from 'next/link'
import React from 'react'

export default function CardComponent({ imageurl, title, price, oldprice }) {
  return (
    <Link href="/ProductDetails" passHref>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer w-48"> {/* Fixed width */}
        <img
          src={imageurl ?? '/placeholder-image.jpg'}
          alt={title ?? 'Product Image'}
          className="w-full h-40 object-cover rounded-t-lg" // Ensure it covers the area without distortion
        />
        <div className="mt-2">
          <h3 className="text-sm font-bold line-clamp-2">{title ?? 'Title'}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">Rs. {price ?? 'Price'}</p>
          <p className="text-red-500 text-sm line-through line-clamp-2">
            Rs. {oldprice ?? 'Old Price'}
          </p>
        </div>
      </div>
    </Link>
  );
}

