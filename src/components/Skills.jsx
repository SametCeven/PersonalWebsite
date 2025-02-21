import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Skills() {
    const { lang, darkMode } = useContext(GlobalContext)
    return (
        <div className="my-15 flex flex-col gap-5 pb-10 border-b-1 border-border">
            <h1 className="title-1">Skills</h1>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col gap-5 w-70">
                    <h2 className="title-2"> Java Script </h2>
                    <p className="text-xs"> {data[lang].skills.p1} </p>
                </div>
                <div className="flex flex-col gap-5 w-70">
                    <h2 className="title-2"> React.js </h2>
                    <p className="text-xs"> {data[lang].skills.p2} </p>
                </div>
                <div className="flex flex-col gap-5 w-70">
                    <h2 className="title-2"> Node.js </h2>
                    <p className="text-xs"> {data[lang].skills.p3} </p>
                </div>
            </div>
        </div>
    )
}