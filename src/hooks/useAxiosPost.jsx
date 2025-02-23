import { useState,useEffect } from "react"
import { API } from "../api/api";
import dataJsonInitial from "../data.json"


export default function useAxiosPost(url,dataJson){
    const [data,setData] = useState(dataJsonInitial["en"]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);


    useEffect(()=>{
        const postData = async () => {
            setLoading(true)
            const res = await API.post(url,dataJson)
            try{          
                setData(res.data)
                setLoading(false)
                setError(false)
            }
            catch(err) {
                console.error(err)
                setLoading(false)
                setError(true)
            }
        }
        postData()
    },[dataJson])


    
    return {data,loading,error}

}