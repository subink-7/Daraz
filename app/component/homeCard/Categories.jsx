import React from 'react'

export default function Categories({imageurl,title}) {
  return (
    <div>
        <div className="text-center">
            <img
              src={imageurl ?? 'Imageurl'} // Replace with actual category icon
              alt="Category"
              className="mx-auto h-16"
            />
            <p className="text-sm mt-2">{title ?? 'title'  }</p>
          </div>
    </div>
  )
}
