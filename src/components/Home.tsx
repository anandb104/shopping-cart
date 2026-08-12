import bgimage from "../assets/bgimg.jpg";
import { Button } from "@/components/ui/button"
import bru from "../assets/bru.png";
import nescafe from "../assets/nescafe.png";
import continental from "../assets/continental.png";
import logo from "../assets/logo.png";

export default function Home(){
    return(
        <div className="flex flex-1 gap-15 flex-col bg-cover bg-center text-4xl items-center justify-center text-black font-['Black_Ops_One'] pl-2.5 " style={{backgroundImage:`url(${bgimage})`}}>
            {/* <div className="flex gap-40 absolute top-30 ml-5">
            <img src={bru} className="  h-55"></img>
            <img src={nescafe} className="  h-55"></img>
            <img src={continental} className="  h-55"></img>
            </div> */}
            <div className="mt-10 flex gap-10 flex-col">
        Shop. <br/>Discover.<br/> Enjoy.<br/>
Find products you'll love at prices you'll appreciate. Browse our collection, discover new favorites, and make every shopping experience simple, convenient, and enjoyable.
<Button className="self-start h-15 flex items-center"><a href='/shop' className="flex items-center">Shop Now<img src={logo} className="h-8 w-8 "></img></a></Button>
</div>
        </div>
    )
}