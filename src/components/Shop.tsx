import bgimage from "../assets/bgimg.jpg";
export default function Shop(){
    return(
        <div className="flex flex-1 gap-15 flex-col bg-cover bg-center text-4xl items-center justify-center text-black font-['Black_Ops_One'] pl-2.5 " style={{backgroundImage:`url(${bgimage})`}}>
        </div>
    );
}