import React from 'react'
import Paisa from "@/public/images/paisa.jpg"
import Image from 'next/image'



export default function ProductDetails() {
  return (
    <div className="bg-gray-100 p-6">
      {/* Main container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <Image src={Paisa}
              alt="Product Image" layout='resposive' width={500} height={500}
              quality={100} className="w-full mb-4 rounded-lg"
            />
            <div className="flex space-x-2">
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 md:pl-6">
            {/* Product title */}
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              Ultima Boom 141 ANC Earbuds (30 dB)
            </h1>
            <p className="text-gray-500 text-sm">
              45Hrs Playtime | Game Mode (40ms) | IPX5 Water Resistant | 13mm
              Drivers
            </p>

            {/* Rating and Reviews */}
            <div className="flex items-center mt-3">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="ml-2 text-gray-600">
                (2913 Ratings | 534 Reviews)
              </span>
            </div>

            {/* Price and Discount */}
            <div className="mt-4">
              <p className="text-2xl font-bold text-orange-600">Rs. 1,699</p>
              <p className="text-gray-500 line-through">Rs. 3499</p>
              <p className="text-sm text-green-500">51% off</p>
            </div>
            {/* Quantity and Add to Cart */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <h3 className="text-sm font-medium text-gray-800">Quantity</h3>
                <div className="flex items-center ml-4">
                  <button className="w-8 h-8 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-l focus:outline-none">
                    -
                  </button>
                  <span className="w-10 text-center">1</span>
                  <button className="w-8 h-8 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-r focus:outline-none">
                    +
                  </button>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
                  Buy Now
                </button>
                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
      <div class="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg">
  
  <h2 class="text-lg font-bold mb-4">
    Product details of (25th Sep Deal) Ultima Boom 141 ANC Earbuds (30 dB) | 45Hrs Playtime | Game Mode (40ms) | IPX5 Water Resistant
  </h2>
  
  
  <div class="grid grid-cols-2 gap-4 text-gray-800">
   
    <ul class="list-disc pl-5 space-y-2">
      <li>Model: Ultima Boom 141 ANC Wireless Earbuds</li>
      <li>Bluetooth: V5.3 with Hyper Sync</li>
      <li>Range: Up to 10M</li>
      <li>Supports Android, & Windows too</li>
      <li>Supports Active Noise Cancellation (ANC) up to 30dB</li>
      <li>Playtime: Total Playtime Up to 45 Hours at 60% Volume with ANC off and up to 36 Hours with ANC on. Buds Playtime Up to 7 Hours on Single Charge at 60% Volume with ANC off and Up to 5.5 Hours at 60% Volume with ANC on</li>
      <li>13MM Dynamic Driver for Loud and Clear Audio</li>
    </ul>
    
 
    <ul class="list-disc pl-5 space-y-2">
      <li>Charging Time: 30Mins (Earbuds), 60Mins (Case) | Charging Port: Type-C | Supports Fast Charging: 10mins Charge = 180mins Playtime</li>
      <li>Game Mode: Up to 45ms Low Latency</li>
      <li>IPX5 Water Resistant</li>
      <li>Supports Google & Siri Voice Assistant</li>
      <li>Quad Mics with Environmental Noise Cancellation (ENC)</li>
      <li>On-Ear Touch Control (Volume, Music & Call Control Feature on Both Earbuds)</li>
      <li>6 Months Brand Warranty With Excellent After Sales Support</li>
    </ul>
  </div>
</div>

      </div>
    </div>
  
  )
}
