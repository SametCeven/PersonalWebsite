import data from "../data.json"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Introduction(){
    const {lang,darkMode} = useContext(GlobalContext)
    return(
        <div className="flex items-center justify-between px-30 py-15 max-xl:flex-col max-xl:py-0 max-sm:px-5" >
            <div className="flex flex-col gap-10 mr-10 max-xl:gap-5 max-xl:items-center max-xl:mr-0 max-sm:max-w-85 max-sm:">
                <div className="flex items-center max-sm:mt-5">
                    <span className="border-b-1 border-title w-20 mr-2 flex"></span>
                    <span className="text-title">Samet Çeven</span>
                </div>
                <h1 className={`text-7xl text-titleBold font-bold max-xl:text-center max-sm:text-6xl ${darkMode ? "text-white":""}`}> {data[lang].introSection.h1} </h1>
                <p className="w-150 max-xl:text-center max-sm:max-w-85"> {data[lang].introSection.p} </p>
                <div className="flex gap-3 max-sm:gap-1">
                    <button className={`${darkMode ? "btn-fill-dark" : "btn-fill"}`}>{data[lang].introSection.hire}</button>
                    <button className={`${darkMode ? "btn-dark" : "btn"}`}>
                    <FontAwesomeIcon icon={faGithub} className="mr-2"/>
                        Github
                    </button>
                    <button className={`${darkMode ? "btn-dark" : "btn"}`}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2"/>
                        Linkedin
                    </button>
                </div>
            </div>
            <img src={data[lang].introSection.image} alt="intro" className="w-120 rounded-xl max-xl:w-90 max-xl:my-10 max-md:w-60"/>
        </div>
    )
}