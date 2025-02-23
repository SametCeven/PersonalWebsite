import "./Header.css"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { ScrollContext } from "../contexts/ScrollContext"
import { toast } from "react-toastify"

export default function Header() {
    const { lang, darkMode, setLang, setDarkMode,data,loading,error } = useContext(GlobalContext)
    const {scrollPosition} = useContext(ScrollContext)
    
    function handleDarkMode() {
        if (darkMode === true) setDarkMode(false)
        else setDarkMode(true)
    }
    function handleLanguage() {
        if (lang === "en") setLang("tr")
        else setLang("en")
        
    }



    return (
        <header className={`sticky z-100 top-5 text-primary ${darkMode?"bg-titleBold":"bg-[#F9F9F9]"} text-[15px] px-30 flex justify-end gap-3  max-sm:justify-center max-sm:px-2 ${scrollPosition>50 ? "py-0" : "" }`}>
            <div className="flex gap-1 items-center">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={handleDarkMode}
                        className="checkbox"
                        checked={darkMode ? true : false}
                    ></input>
                    <span className="slider"></span>
                    <h1 className="font-semibold"> {data.headerSection.darkmode} </h1>
                </label>
            </div>
            <span>|</span>
            <div className="font-bold hover:cursor-pointer">
                <p onClick={handleLanguage}>
                    {lang === "tr" ? <span> SWITCH TO </span> : ""}
                    <span className="text-title">
                        {data.headerSection.language}
                    </span>
                    <span className="">
                        {data.headerSection.languageSuffix}
                    </span>
                </p>
            </div>
        </header>
    )
}