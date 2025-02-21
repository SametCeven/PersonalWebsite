import data from "../data.json"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Navbar(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className="flex justify-between items-center px-30 py-15">
            <Link  className="border-1 border-[#EEEBFF] rounded-full w-10 h-10 bg-[#EEEBFF] text-title font-bold rotate-45 flex items-center justify-center text-xl"> S </Link>
            <div className="flex justify-end items-center gap-15 ">
                <Link className="hover:border-b-2"> {data[lang].navSection.skills} </Link>
                <Link className="hover:border-b-2"> {data[lang].navSection.projects} </Link>
                <Link className={`${darkMode ? "btn-dark" : "btn"}`} > {data[lang].navSection.hire} </Link>
            </div>
        </div>
    )
}