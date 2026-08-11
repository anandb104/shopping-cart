import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
  } from "@/components/ui/navigation-menu"
  import shoppingcart from "../assets/shopping-cart.png";
  import logo from "../assets/logo.png";
  export default function Header(){
    return(
        <div className="bg-amber-300 flex justify-center h-20 items-center gap-125">
             <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="/about">
            <img src={logo} className="h-17"></img>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  <NavigationMenu>
    <NavigationMenuList>
    <div className="flex justify-center gap-20 items-center">
        <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-xl">
            Home
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/shop" className="text-xl">
            Shop
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-xl">
            About
            </NavigationMenuLink>
        </NavigationMenuItem>
        </div>
        </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-xl">
            <img src={shoppingcart} className="h-7 "></img>(0)
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  </div>

    )
}