export  interface Product{
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
}

export interface Cartitems extends Product{
    quantity:number;
}