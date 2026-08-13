import bgimage from "../assets/bgimg.jpg";
import type {Product,Cartitems} from "../types/product";
import { useEffect, useState, type SetStateAction,type Dispatch } from "react";
import { Spinner } from "@/components/ui/spinner";
import Productcard from "../components/Productcard.tsx";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
  } from "@/components/ui/empty"
    type shopprops={
      addtocart:(product:Product)=>void;
      cart:Cartitems[];
      increase:(product:Product)=>void;
    };
export default function Shop({addtocart,cart,increase}:shopprops){
   const [product,setproduct]=useState<Product[]>([]);
   const [loading,setloading]=useState<boolean>(true);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((response)=>
        response.json())
    .then((data)=>{
        setproduct(data);})
    .finally(()=>setloading(false));
},[])
    if(loading){
        return (
            <div className="flex flex-wrap gap-5 bg-cover bg-center items-center justify-center text-black font-['Black_Ops_One'] overflow-scroll h-215 p-5" style={{backgroundImage:`url(${bgimage})`}}>
            <Empty className="w-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Spinner />
              </EmptyMedia>
              <EmptyTitle>Processing your request</EmptyTitle>
              <EmptyDescription>
                Please wait while we process your request. Do not refresh the page.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
            </EmptyContent>
          </Empty>
          </div>
        );
    }
    return(
        <div className="flex flex-wrap gap-5 bg-cover bg-center items-center justify-center text-black font-['Black_Ops_One'] overflow-scroll h-215 p-5" style={{backgroundImage:`url(${bgimage})`}}>
            {product.map((item)=>{
               const cartitem=cart.find((cartproduct)=>cartproduct.id==item.id);
            return <Productcard key={item.id} product={item} addtocart={addtocart} quantity={cartitem?.quantity??0} increase={increase}/>})}
        </div>
    );
}