import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
  } from "@/components/ui/navigation-menu"
  import {NavLink} from "react-router-dom";
  import shoppingcart from "../assets/shopping-cart.png";
  import logo from "../assets/logo.png";
  export default function Header(){
    return(
        <div className="bg-amber-300 flex justify-center h-20 items-center gap-125">
             <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
            <NavLink to="/">
            <img src={logo} className="h-17"></img>
            </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  <NavigationMenu>
    <NavigationMenuList>
    <div className="flex justify-center gap-20 items-center">
        <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-xl">
            <NavLink to="/"> 
            Home
            </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-xl">
            <NavLink to="/shop"> 
            Shop
            </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-xl">
            <NavLink to="/about">
            About
            </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </div>
        </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink  asChild className="text-xl">
            <NavLink to="/cart">
            <img src={shoppingcart} className="h-7 "></img>(0)
            </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  </div>

    )
}