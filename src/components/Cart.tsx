import bgimage from "../assets/bgimg.jpg";
import type {Cartitems,Product} from "../types/product";
import Cartcard from "./Cartcard.tsx";
type cartprops={
    cart:Cartitems[];
    increase:(product:Product)=>void;
    decrease:(product:Product)=>void;
};
export default function Cart({cart,increase,decrease}:cartprops){
    return(
        <div className="flex flex-wrap bg-cover bg-center items-center justify-center text-black font-['Black_Ops_One'] overflow-scroll h-215 " style={{backgroundImage:`url(${bgimage})`}}>
            <h1 className="absolute top-40 text-3xl ">Your Current Cart:</h1>   
            {cart.map((item)=><Cartcard cart={item} key={item.id} increase={increase} decrease={decrease}/>)}
        </div>
    );
}