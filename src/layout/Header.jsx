import { useContext } from "react"
import "./Header.css"
import { GlobalContext } from "../contexts/GlobalContext"
import data from "../data.json"

export default function Header() {
    const { lang, darkMode, setLang, setDarkMode } = useContext(GlobalContext)
    function handleDarkMode() {
        if (darkMode === true) setDarkMode(false)
        else setDarkMode(true)

    }
    function handleLanguage() {
        if (lang === "en") setLang("tr")
        else setLang("en")
    }
    return (
        <div className="flex justify-end gap-3 text-primary items-center text-[15px]">
            <div className="flex gap-1 items-center">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={handleDarkMode}
                        className="checkbox"
                        checked={darkMode ? true : false}
                    ></input>
                    <span className="slider"></span>
                </label>
                <h1 className="font-bold"> {data[lang].header.darkmode} </h1>
            </div>
            <span>|</span>
            <div>
                <span className="text-title font-bold hover:cursor-pointer" onClick={handleLanguage}>
                    {data[lang].header.language}
                    <span className="text-primary">
                        {data[lang].header.languageSuffix}
                    </span>
                </span>

            </div>


        </div>
    )
}