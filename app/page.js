import Image from "next/image";
import banner from "@/public/images/banner.jpg"
import CardComponent from "./component/homeCard/CardComponent";
import Categories from "./component/homeCard/Categories";
import Link from "next/link";
import banner2 from "@/public/images/banner2.jpg"
import banner3 from "@/public/images/banner3.jpg"

{/* Importing carousel*/}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import CardCollection from "./component/homeCard/CardCollection";



export default function Home() {
  return (
    <div className="bg-gray-100">
    

      {/* Banner */}
      <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image src={banner} alt="Banner 1" width={800} height={400} className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <Image src={banner2} alt="Banner 2" width={800} height={400} className="w-full" />
        </CarouselItem>
        <CarouselItem>
          <Image src={banner3} alt="Banner 3" width={800} height={400} className="w-full" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>

      {/* Flash Sale Section */}
      <section className="bg-white p-4 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Flash Sale</h2>
          <Link href="/fullcard" className="text-orange-600 font-semibold">Shop All Products
          </Link>
        </div>

       {/* Flash Sale Products */}
<CardCollection/>

      </section>

     {/* Categories Section */}
<section className="bg-white mt-4 p-4 max-w-6xl mx-auto">
  <h2 className="text-xl font-bold">Categories</h2>
  <div className="flex space-x-4 overflow-x-auto mt-4 scrollbar-hide max-w-full">
    <Categories
      title={'Rice'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/f03985a48fce7df807afcdc2edbe069a.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Coffee Grinder'}
      imageurl={'https://img.drz.lazcdn.com/g/kf/S8c9abce08c874006b38ce1a3f5b40130F.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Bracelet'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/bfbc800b396d711e9a9fafeebf1c9622.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Cleaning Tools'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/a905edd00f67e3af89f599b6d391dce4.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Trash Bag'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/7a6d6095b735bdf14ef29aae1a81f1da.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Infant 0-6'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/99d3b9f4ecd9214dd1a2517c84d6033b.jpg_80x80q80.jpg'}
    />
    <Categories
      title={'Airpot Router'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/ff7a8258a23c114ac7db9260cefd3144.jpg_80x80q80.jpg_.webp'}
    />
    <Categories
      title={'Switches'}
      imageurl={'https://img.drz.lazcdn.com/static/np/p/87c122237d1000fc4b5d25b5e7e92de0.png_80x80q80.png_.webp'}
    />
  </div>
</section>

      
    </div>
  );
}

