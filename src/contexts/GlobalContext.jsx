import { createContext, useState, useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import dataJson from "../data.json"
import useAxiosPost from "../hooks/useAxiosPost";

export const GlobalContext = createContext();
export default function GlobalContextProvider({children}){
    const [lang,setLang] = useLocalStorage("lang","en")
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)
    const {data,loading,error} = useAxiosPost("https://reqres.in/api/workintech",dataJson[lang])

    return(
        <GlobalContext.Provider value={{lang,darkMode,setLang,setDarkMode,data,loading,error}}>
            {children}
        </GlobalContext.Provider>
    )
}
