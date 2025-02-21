import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
export default function Profile() {
    const { lang, darkMode } = useContext(GlobalContext)
    return (
        <div className="my-15 flex flex-col gap-5 pb-10 border-b-1 border-border">
            <h1 className="title-1"> {data[lang].profileSection.h1} </h1>
            <div className="flex justify-between">
                <div className="w-100 flex flex-col gap-5">
                    <h2 className="title-2"> {data[lang].profileSection.h2} </h2>
                    <div className="flex flex-col gap-1">

                        {data[lang].profileSection.info.map((item,index)=>
                            <div className="flex justify-between" key={index} >
                                <span className="text-black font-semibold" key={item.name} > {item.name} </span>
                                <span className="text-black w-50" key={item.exp} > {item.exp} </span>
                            </div>
                        )}

                    </div>
                </div>
                <div className="w-175 flex flex-col gap-5">
                    <h2 className="title-2"> {data[lang].profileSection.h22} </h2>
                    <p> {data[lang].profileSection.p} </p>
                </div>
            </div>
        </div>
    )
}