import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const GlobalContext = createContext();
export default function GlobalContextProvider({children}){
    const [lang,setLang] = useLocalStorage("lang","en")
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)


    return(
        <GlobalContext.Provider value={{lang,darkMode,setLang,setDarkMode}}>
            {children}
        </GlobalContext.Provider>
    )
}
