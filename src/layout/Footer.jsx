import { useContext } from "react"
import data from "../data.json"
import { GlobalContext } from "../contexts/GlobalContext"
export default function Footer(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className="my-15 flex flex-col justify-center gap-15 bg-[#F9F9F9] h-100 px-30 py-15">
            <h1 className="title-1 w-150"> {data[lang].footerSection.title} </h1>
            <div className="flex justify-between">
                <div className="flex">
                    <img className="mr-2" src="../../public/images/pointer.png" alt="" />
                    <span className="text-[#AF0C48] "> {data[lang].footerSection.email} </span>
                </div>
                <div className="flex gap-5">
                    {data[lang].footerSection.nav.map((item)=>
                        <span className="" key={item.item} style={{color:item.color}}> {item.item} </span>
                    )}
                </div>
            </div>
        </div>
    )
}