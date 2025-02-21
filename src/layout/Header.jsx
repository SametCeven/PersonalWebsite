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
        <div className="flex justify-end gap-3 text-primary items-center text-[15px] px-30">
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
                <h1 className="font-semibold"> {data[lang].headerSection.darkmode} </h1>
            </div>
            <span>|</span>
            <div className="font-bold hover:cursor-pointer">
                <p onClick={handleLanguage}>
                    {lang === "tr" ? <span> SWITCH TO </span> : ""}
                    <span className="text-title">
                        {data[lang].headerSection.language}
                    </span>
                    <span className="">
                        {data[lang].headerSection.languageSuffix}
                    </span>
                </p>
            </div>


        </div>
    )
}