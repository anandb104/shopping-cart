import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import type {Product,Cartitems} from "../types/product.ts";
import Shop from './components/Shop.tsx';
import Cart from './components/Cart.tsx';
import { createBrowserRouter,RouterProvider } from 'react-router';
function Routerapp(){
const [cart,setcart]=useState<Cartitems[]>([]);
function addtocart(product:Product){
  setcart((currentcart)=>{
    const exist=currentcart.find((item)=>(item.id==product.id));
    if(exist){return currentcart.map((item)=>(item.id==product.id)?{...item,quantity:item.quantity+1}:item);}
    else{
      return [...currentcart,{...product,quantity:1}];
    }
  });
}
function increase(product){
  setcart((currentcart)=>{
    const exist=currentcart.find((item)=>(item.id==product.id));
    return currentcart.map((item)=>(item.id==product.id)?{...item,quantity:item.quantity+1}:item);
  })
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<App cart={cart}/>,
    children:[
    {path:"/",element:<Home/>},
    {path:"/shop",element:<Shop addtocart={addtocart} cart={cart} increase={increase}/>},
    {path:"/about",element:<About/>},
    {path:"/cart",element:<Cart cart={cart} increase={increase}/>},
    ]
  }
]);
return <RouterProvider router={router}/>
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routerapp/>
  </StrictMode>,
)
