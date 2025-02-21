import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import {Link} from "react-router-dom"


export default function Projects() {
    const { lang, darkMode } = useContext(GlobalContext)
    return (
        <div className="flex flex-col gap-10 px-30 py-15">
            <h1 className="title-1"> {data[lang].projectsSection.h1} </h1>
            <div className="flex gap-20">
                {data[lang].projectsSection.projects.map((project, index) =>
                    <div className="flex flex-col gap-5" key={index} >
                        <img src={project.image} alt={project.name} />
                        <h2 className="title-2"> {project.name} </h2>
                        <p className="text-sm"> {project.exp}  </p>
                        <div className="flex gap-1 text-sm" key={index}>
                            {project.tech.map((item) =>
                                <span className="btn-s" key={item}> {item}  </span>
                            )}
                        </div>
                        <div className="text-title underline flex justify-between text-base">
                            <Link className="" to={project.githubUrl} > Github </Link>
                            <Link className="" to={project.webUrl.url} > {project.webUrl.name} </Link>
                        </div>
                        

                    </div>

                )}
            </div>


        </div>
    )
}