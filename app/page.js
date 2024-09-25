import Image from "next/image";
import banner from "@/public/images/banner.jpg"
import CardComponent from "./component/homeCard/CardComponent";
import Categories from "./component/homeCard/Categories";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gray-100">
    

      {/* Banner */}
      <section className="flex justify-center my-4">
        <Image src={banner} alt="banner" width={1000} height={1000} className="w-full max-w-6xl"
        />
      </section>

      {/* Flash Sale Section */}
      <section className="bg-white p-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Flash Sale</h2>
          <button className="text-orange-600 font-semibold">Shop All Products</button>
        </div>

        {/* Flash Sale Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          <CardComponent title={'soundcore K20i by Anker, Semi-in-Ear Earbuds, Bluetooth Wireless'} price={'2000'} oldprice={4000} imageurl={"https://img.drz.lazcdn.com/static/np/p/582dc47684d561245808dc18a6a4dfa6.jpg_200x200q80.jpg_.webpSS"}/>
          <CardComponent title={'FL1P6 Wireless Bluetooth Speaker Outdoor Riding Card Audio Mp3 Music Player Support Aux Audio Input USB Playback'} price={'1800'} oldprice={2500} imageurl={'https://img.drz.lazcdn.com/static/np/p/5171ea54b09bfc94fff453f32847edca.jpg_200x200q80.jpg_.webp'}/>
          <CardComponent title={'Remote Control Rechargeable Offroad Metal 1:20 Scale Car High Speed Offroad Vehicle'} price={'800'} oldprice={2000} imageurl={'https://img.drz.lazcdn.com/static/np/p/134631f365056a038ec3d80f657b1603.png_200x200q80.png_.webp'}/>
          <CardComponent title={'Tws Wireless Bluetooth Airbuds Charging Case Super Sound'} price={'900'} oldprice={1800} imageurl={'https://img.drz.lazcdn.com/g/kf/S85011dc306d84c3797d12b8f6f4d9affm.jpg_200x200q80.jpg_.webp'}/>
          <CardComponent title={'Hair Trimming Vintage T9 Electric Hair Clipper Hair Cutting Machine Professional'} price={'2000'} oldprice={3500} imageurl={'https://img.drz.lazcdn.com/static/np/p/36cd4e671527a98c113e852ff2d423dd.jpg_200x200q80.jpg_.webp'}/>
          <CardComponent title={'Color Box Set For Kids 42 Pieces Colors Set'} price={'400'} oldprice={800} imageurl={'https://img.drz.lazcdn.com/static/np/p/f9b9aeaa71e867ceb0be947b1be63070.jpg_200x200q80.jpg_.webp'}/>

          
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white mt-4 p-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-4">
        <Categories title={'Rice'} imageurl={'https://img.drz.lazcdn.com/static/np/p/f03985a48fce7df807afcdc2edbe069a.jpg_80x80q80.jpg_.webp'}/>
        <Categories title={'Coffe Grinder'} imageurl={'https://img.drz.lazcdn.com/g/kf/S8c9abce08c874006b38ce1a3f5b40130F.jpg_80x80q80.jpg_.webp'}/>
        <Categories title={'Bracelet'} imageurl={'https://img.drz.lazcdn.com/static/np/p/bfbc800b396d711e9a9fafeebf1c9622.jpg_80x80q80.jpg_.webp'}/>
        <Categories title={'Cleaning Tools'} imageurl={'https://img.drz.lazcdn.com/static/np/p/a905edd00f67e3af89f599b6d391dce4.jpg_80x80q80.jpg_.webp'}/>
        </div>
      </section>
    </div>
  );
}

