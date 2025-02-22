import { createContext, useState, useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import dataJson from "../data.json"
import axios from "axios"

export const GlobalContext = createContext();
export default function GlobalContextProvider({children}){
    const [lang,setLang] = useLocalStorage("lang","en")
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",true)
    const [scrollPosition,setScrollPosition] = useState(0)
    const [data,setData] = useState(dataJson[lang]);

    useEffect(()=>{
        setScrollPosition(window.scrollY);
        window.addEventListener("scroll",setScrollPosition)
    },[window.scrollY])


    useEffect(()=>{
        const postData = async () => {
          const response = await axios.post("https://reqres.in/api/workintech",dataJson[lang] )
          try{          
              setData(response.data)
          }
          catch(err) {
              console.error(err)
          }
        }
        postData()
      },[data])
    



    return(
        <GlobalContext.Provider value={{lang,darkMode,setLang,setDarkMode, scrollPosition,data}}>
            {children}
        </GlobalContext.Provider>
    )
}
