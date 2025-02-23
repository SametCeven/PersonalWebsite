import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ScrollContext } from "../contexts/ScrollContext";

export default function Navbar(){
    const {darkMode,data} = useContext(GlobalContext)
    const {scrollPosition} = useContext(ScrollContext)
    
    function skillsScroll(){
        window.scrollTo(0,600)
    }
    function projectsScroll(){
        window.scrollTo(0,1300)
    }
   

    return(
        <nav className={`sticky z-99 top-0 flex justify-between items-center px-30 py-15 max-md:px-10 max-md:pb-10 max-sm:px-2 ${scrollPosition>50 && darkMode ? "bg-titleBold pb-5" : "" } ${scrollPosition>50 && !darkMode ? "bg-[#F9F9F9] pb-5" : "" }`}>
            <Link  className="border-1 border-[#EEEBFF] rounded-full w-10 h-10 bg-[#EEEBFF] text-title font-bold rotate-45 flex items-center justify-center text-xl"> S </Link>
            <div className="flex justify-end items-center gap-15 max-sm:gap-3 ">
                <Link className="hover:border-b-2" onClick={skillsScroll} > {data.navSection.skills} </Link>
                <Link className="hover:border-b-2" onClick={projectsScroll} > {data.navSection.projects} </Link>
                <Link className={`${darkMode ? "btn-dark" : "btn"}`} > {data.navSection.hire} </Link>
            </div>
        </nav>
    )
}