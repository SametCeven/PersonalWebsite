import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Skills() {
    const { lang, darkMode } = useContext(GlobalContext)
    return (
        <div className="flex flex-col gap-5 pb-15 border-b-1 border-border px-30 py-15 max-sm:px-5 ">
            <h1 className={`${darkMode ? "title-1-dark" : "title-1"}`}> {data[lang].skillsSection.h1} </h1>
            <div className="flex justify-between gap-5 max-sm:gap-2 max-sm:flex-col">
                {data[lang].skillsSection.skills.map((skill, index) =>
                    < div className="flex flex-col gap-5 w-70" key={index} >
                        <h2 className={`${darkMode ? "title-2-dark" : "title-2"}`} key={skill.name} >{skill.name} </h2>
                        <p className="text-xs" key={skill.exp} > {skill.exp} </p>
                    </div>
                )
                }
            </div>
        </div >
    )
}