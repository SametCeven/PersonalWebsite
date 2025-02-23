import { useState,useEffect } from "react"
import { API } from "../api/api";
import dataJsonInitial from "../data.json"
import { toast } from "react-toastify";

export default function useAxiosPost(url,dataJson){
    const [data,setData] = useState(dataJsonInitial["en"]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(()=>{
        const postData = async () => {
            const toastId = toast.loading("Loading...")
            setLoading(true)
            try{        
                const res = await API.post(url,dataJson)  
                setData(res.data)
                setLoading(false)
                setError(false)
                toast.update(toastId,{render:"Sucess",type:"success",isLoading:false,autoClose:1000})
            }
            catch(err) {
                console.error(err)
                setLoading(false)
                setError(true)
                toast.update(toastId,{render:"Error",type:"error",isLoading:false,autoClose:1000})
            }
            finally{
                
            }
        }
        postData()
    },[dataJson])


    
    return {data,loading,error}

}