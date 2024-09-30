import Link from 'next/link'
import React from 'react'

export default function Categories({ imageurl, title }) {
  return (
    <Link href="/CategoryDetails" passHref>
      <div className="bg-gray-100 p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer w-32"> {/* Fixed width for categories */}
        <img
          src={imageurl ?? '/placeholder-image.jpg'}
          alt={title ?? 'Category Image'}
          className="w-full h-24 object-cover rounded-t-lg" // Ensure it covers the area without distortion
        />
        <h3 className="text-sm font-bold mt-1 line-clamp-1">{title ?? 'Title'}</h3>
      </div>
    </Link>
  )
}
