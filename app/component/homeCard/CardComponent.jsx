import Link from 'next/link'
import React from 'react'

export default function CardComponent({imageurl,title,price,oldprice,productdetails}) {
  return (
    <Link href="/ProductDetails">
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
    <img
      src={imageurl ?? 'Imageurl'} // Replace with actual product image
      alt="Product 1"
      className="w-full h-40 object-cover"
    />
    <div className="mt-2">
      <h3 className="text-sm font-bold line-clamp-2">{title ?? 'Title'}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">Rs. {price ?? 'Price'}</p>
      <p className="text-red-500 text-sm line-through line-clamp-2S">Rs. {oldprice ?? 'Oldprice'}</p>
    </div>
  </div>
  </Link>
  )
}
