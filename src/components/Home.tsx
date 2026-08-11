import bgimage from "../assets/bgimg.jpg";
export default function Home(){
    return(
        <div className="flex flex-1 bg-cover bg-center text-3xl items-center justify-center text-black font-['Black_Ops_One']" style={{backgroundImage:`url(${bgimage})`}}>
            <img></img>
        Shop. <br/>Discover.<br/> Enjoy.<br/>

Find products you'll love at prices you'll appreciate. Browse our collection, discover new favorites, and make every shopping experience simple, convenient, and enjoyable.
        </div>
    )
}