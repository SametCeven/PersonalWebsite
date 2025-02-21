import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
export default function Profile() {
    const { lang, darkMode } = useContext(GlobalContext)
    return (
        <div className="flex flex-col gap-5 pb-15 border-b-1 border-border px-30 py-15 max-sm:px-5">
            <h1 className={`${darkMode ? "title-1-dark" : "title-1"}`}> {data[lang].profileSection.h1} </h1>
            <div className="flex justify-between max-xl:flex-col max-xl:gap-5">
                <div className="w-100 flex flex-col gap-5 mr-15 max-sm:w-85">
                    <h2 className={`${darkMode ? "title-2-dark" : "title-2"}`}> {data[lang].profileSection.h2} </h2>
                    <div className="flex flex-col gap-1">

                        {data[lang].profileSection.info.map((item,index)=>
                            <div className={`flex justify-between ${darkMode ? "text-white" : "text-black"}`} key={index} >
                                <span className="font-semibold" key={item.name} > {item.name} </span>
                                <span className="w-50" key={item.exp} > {item.exp} </span>
                            </div>
                        )}

                    </div>
                </div>
                <div className="w-175 flex flex-col gap-5 max-xl:w-100 max-sm:w-85">
                    <h2 className={`${darkMode ? "title-2-dark" : "title-2"}`}> {data[lang].profileSection.h22} </h2>
                    <p> {data[lang].profileSection.p1} </p>
                    <p> {data[lang].profileSection.p2} </p>
                </div>
            </div>
        </div>
    )
}