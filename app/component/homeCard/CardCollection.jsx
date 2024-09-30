'use client'
import React, { useState } from 'react'
import CardComponent from './CardComponent'


export default function CardCollection() {
    const [allProduct, setAllproduct] = useState([  {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
    ])
  return (
    <div className="flex space-x-4 overflow-x-auto mt-4 scrollbar-hide max-w-full"> {/* Set max-w-full to allow full-width usage */}
    {allProduct.length !==0 && allProduct.map((product,index)=>{
        return(
            <CardComponent
            title={product.title}
            key={index}
            price={'2000'}
            oldprice={4000}
            imageurl={product.image}
          />

        )
    })}
 
  {/* <CardComponent
    title={'FL1P6 Wireless Bluetooth Speaker Outdoor Riding Card Audio Mp3 Music Player Support Aux Audio Input USB Playback'}
    price={'1800'}
    oldprice={2500}
    imageurl={'https://img.drz.lazcdn.com/static/np/p/5171ea54b09bfc94fff453f32847edca.jpg_200x200q80.jpg_.webp'}
  />
  <CardComponent
    title={'Remote Control Rechargeable Offroad Metal 1:20 Scale Car High Speed Offroad Vehicle'}
    price={'800'}
    oldprice={2000}
    imageurl={'https://img.drz.lazcdn.com/static/np/p/134631f365056a038ec3d80f657b1603.png_200x200q80.png_.webp'}
  />
  <CardComponent
    title={'Tws Wireless Bluetooth Airbuds Charging Case Super Sound'}
    price={'900'}
    oldprice={1800}
    imageurl={'https://img.drz.lazcdn.com/g/kf/S85011dc306d84c3797d12b8f6f4d9affm.jpg_200x200q80.jpg_.webp'}
  />
  <CardComponent
    title={'Hair Trimming Vintage T9 Electric Hair Clipper Hair Cutting Machine Professional'}
    price={'2000'}
    oldprice={3500}
    imageurl={'https://img.drz.lazcdn.com/static/np/p/36cd4e671527a98c113e852ff2d423dd.jpg_200x200q80.jpg_.webp'}
  />
  <CardComponent
    title={'Color Box Set For Kids 42 Pieces Colors Set'}
    price={'400'}
    oldprice={800}
    imageurl={'https://img.drz.lazcdn.com/static/np/p/f9b9aeaa71e867ceb0be947b1be63070.jpg_200x200q80.jpg_.webp'}
  /> */}
  
</div>
  )
}
