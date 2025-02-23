import { createContext, useState, useEffect} from "react";

export const ScrollContext = createContext();
export default function ScrollContextProvider({children}){
    const [scrollPosition,setScrollPosition] = useState(0)


    useEffect(()=>{
        setScrollPosition(window.scrollY);
        window.addEventListener("scroll",setScrollPosition)
    },[window.scrollY])

    
    return(
        <ScrollContext.Provider value={{scrollPosition}}>
            {children}
        </ScrollContext.Provider>
    )
}


/* 
useEffect(()=>{
    setScrollPosition(window.scrollY);
    window.addEventListener("scroll",setScrollPosition)
},[window.scrollY]) */