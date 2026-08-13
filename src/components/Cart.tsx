import bgimage from "../assets/bgimg.jpg";
import type {Cartitems} from "../types/product";
import Cartcard from "./Cartcard.tsx";
type cartprops={
    cart:Cartitems[];
};
export default function Cart({cart}:cartprops){
    return(
        <div className="flex flex-wrap bg-cover bg-center items-center justify-center text-black font-['Black_Ops_One'] overflow-scroll h-215 " style={{backgroundImage:`url(${bgimage})`}}>
            <h1 className="absolute top-40 text-3xl ">Your Current Cart:</h1>   
            {cart.map((item)=><Cartcard cart={item} key={item.id} />)}
        </div>
    );
}