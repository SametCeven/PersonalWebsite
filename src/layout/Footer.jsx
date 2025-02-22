import { useContext } from "react"
import data from "../data.json"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Footer(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className={`my-15 flex flex-col justify-center gap-15 h-100 px-30 py-15 max-sm:px-5 ${darkMode ? "bg-[#12171F]": "bg-[#F9F9F9]"}`}>
            <h1 className={`w-150 max-md:w-85 ${darkMode ? "title-1-dark" : "title-1"}`}> {data[lang].footerSection.title} </h1>
            <div className="flex justify-between max-lg:flex-col">
                <div className="flex max-lg:mb-10">
                    <img className="mr-2" src="../../public/images/pointer.png" alt="" />
                    <span className={`hover:cursor-pointer ${darkMode ? "text-[#DB105A]" : "text-[#AF0C48]"}`}> {data[lang].footerSection.email} </span>
                </div>
                <div className="flex gap-5 hover:cursor-pointer">
                    {data[lang].footerSection.nav.map((item)=>
                        <span className="" key={item.item} style={darkMode ? {color:item.darkcolor} : {color:item.color}}> {item.item} </span>
                    )}
                </div>
            </div>
        </div>
    )
}