import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import image from "../assets/intro.png"

export default function Introduction(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className="my-15 flex items-center">
            <div className="flex flex-col gap-10">
                <div className="flex items-center">
                    <span className="border-b-1 border-title w-20 mr-2 flex"></span>
                    <span className="text-title">Samet Çeven</span>
                </div>
                <h1 className="text-7xl text-titleBold font-bold"> {data[lang].introSection.h1} </h1>
                <p> {data[lang].introSection.p} </p>
                <div className="flex gap-3">
                    <button className="btn-fil">{data[lang].introSection.hire}</button>
                    <button className="btn">
                    <FontAwesomeIcon icon={faGithub} className="mr-2"/>
                        Github
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2"/>
                        Linkedin
                    </button>
                </div>
            </div>
            <img src={image} alt="intro" />
        </div>
    )
}