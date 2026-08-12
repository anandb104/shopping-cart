import bgimage from "../assets/bgimg.jpg";
import {type Product} from "../types/product";
import { useEffect, useState } from "react";
import Productcard from "../components/Productcard.tsx";
export default function Shop(){
   const [product,setproduct]=useState<Product[]>([]);
   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((response)=>
        response.json())
    .then((data)=>{
        setproduct(data);})
},[])
    return(
        <div className="flex flex-wrap gap-5 bg-cover bg-center items-center justify-center text-black font-['Black_Ops_One'] overflow-scroll h-215 p-5" style={{backgroundImage:`url(${bgimage})`}}>
            {product.map((item)=>{
            return <Productcard key={item.id} product={item}/>})}
        </div>
    );
}