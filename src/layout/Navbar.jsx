import { Link } from "react-router-dom";
import data from "../data.json"
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Navbar(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className="flex justify-between items-center my-10">
            <Link  className="border-1 border-[#EEEBFF] rounded-full w-10 h-10 bg-[#EEEBFF] text-title font-bold rotate-45 flex items-center justify-center text-xl"> S </Link>
            <div className="flex justify-end items-center gap-15 ">
                <Link> {data[lang].nav.skills} </Link>
                <Link> {data[lang].nav.projects} </Link>
                <Link className="border-1 border-title rounded-lg px-5 py-2"> {data[lang].nav.hire} </Link>
            </div>
        </div>
    )
}