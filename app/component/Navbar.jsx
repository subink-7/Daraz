import Link from 'next/link'
import React from 'react'
import logo from "@/public/images/daraz_logo.png"
import Image from 'next/image'
import "@/app/globals.css";

export default function Navbar() {
  return (
      <div className=" p-4 flex justify-between items-center bg-orange-500">
        <Link href="/" className="font-bold text-xl">
        <Image src={logo} alt='logo' height={100} width={100} className='w-32 h-auto'/>
        </Link>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="p-2 rounded-md"
          />
          <button className="bg-white text-orange-600 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
        <div className="flex space-x-4 text-white">
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/signup" className="hover:underline">Sign Up</Link>
        </div>
      </div>
  )
}
