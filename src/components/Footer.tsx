import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
  } from "@/components/ui/navigation-menu";
  import instagram from "../assets/instagram.png";
  import facebook from "../assets/facebook.png";
  import youtube from "../assets/youtube.png";
  import twitter from "../assets/twitter.png";
  export default function Footer(){
    return(
        <div className="bg-amber-300 flex justify-center h-20 items-center gap-20">
             <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
            <img src={facebook} className="h-10"></img>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img src={instagram} className="h-10"></img>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
 
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="https://github.com/anandb104">
            <img src={youtube} className="h-10"></img>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="https://github.com/anandb104" className="text-xl">
            <img src={twitter} className="h-10 "></img>
            </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  </div>

    )
}