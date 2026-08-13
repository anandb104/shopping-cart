import bgimage from "../assets/bgimg.jpg";
import type {Cartitems} from "../types/product";
import Cartcard from "./Cartcard.tsx";
type cartprops={
    cart:Cartitems[];
};
export default function Cart({cart}:cartprops){
    return(
        <div className="flex flex-1 gap-15 flex-col bg-cover bg-center text-4xl items-center justify-center text-black font-['Black_Ops_One'] pl-2.5 " style={{backgroundImage:`url(${bgimage})`}}>
            <h1>Your Current Cart:</h1>
            {cart.map((item)=><Cartcard cart={item} key={item.id} />)}
        </div>
    );
}