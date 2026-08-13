import bgimage from "../assets/bgimg.jpg";
import { Button } from "@/components/ui/button"
import bru from "../assets/bru.png";
import nescafe from "../assets/nescafe.png";
import continental from "../assets/continental.png";
import logo from "../assets/logo.png";

export default function Home(){
    return(
        <div className="flex flex-1 gap-15 flex-col bg-cover bg-center text-4xl items-center justify-center text-black font-['Black_Ops_One'] pl-2.5 " style={{backgroundImage:`url(${bgimage})`}}>
            <div className="mt-10 flex gap-10 flex-col justify-center items-center">
            <h1>About Us</h1>

Welcome to our online store, where shopping is made simple, convenient, and enjoyable. We bring together a collection of quality products across different categories, making it easy for you to discover something you love.

Our goal is to provide a smooth shopping experience where you can browse products, compare prices, add your favorites to your cart, and shop with ease. Whether you're looking for everyday essentials or something new to try, we're here to make your shopping experience simple and hassle-free.

Why Shop With Us?
Wide Selection – Discover a variety of products in one place.
Simple Shopping – Browse, add products to your cart, and manage your order easily.
Great Prices – Find products at prices you'll appreciate.
Easy Experience – We focus on keeping shopping straightforward and enjoyable.

Shop. Discover. Enjoy.

</div>
        </div>
    )
}