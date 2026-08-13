import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import type {Cartitems} from "../types/product.ts";
  type cartcardprop={
   cart:Cartitems
  };
export default function Cartcard({cart}:cartcardprop){
    return (
        <Card className="relative mx-auto max-w-sm pt-0 h-120 w-200 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={cart.image}
          alt={cart.title}
          className="relative z-20 aspect-video w-auto h-auto object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardTitle className="h-17 overflow-scroll mb-2 flex justify-center items-center">{cart.title}</CardTitle>
          <CardDescription className="h-20 overflow-scroll">
          {cart.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between flex-1">
         <div>Price: {cart.price}$</div>
          <Button className="w-20">+</Button>
          {cart.quantity}
          <Button className="w-20">-</Button>
        </CardFooter>
      </Card>
    )
}