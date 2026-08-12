import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import type {Product} from "../types/product.ts";
  interface Productcardprops{
    product:Product;
  }
export default function Productcard({product}:Productcardprops){
    return(
        <Card className="relative mx-auto max-w-sm pt-0 h-120 w-200 ">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={product.image}
          alt={product.title}
          className="relative z-20 aspect-video w-auto h-auto object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardTitle className="h-17 overflow-scroll mb-2 flex justify-center items-center">{product.title}</CardTitle>
          <CardDescription className="h-20 overflow-scroll">
          {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between flex flex-1">
         <div>{product.price}</div>
          <Button className="w-25">Add To Cart</Button>
        </CardFooter>
      </Card>
    )
}