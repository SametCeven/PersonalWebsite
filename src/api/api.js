import axios from "axios"

function creatApiInstance(){
    return (axios.create({
        baseURL:"https://reqres.in/api/workintech",
        headers:{
            "X-LANG":"en",
            "X-DARKMODE":true,
        },
    }))
}

export const API = creatApiInstance();
