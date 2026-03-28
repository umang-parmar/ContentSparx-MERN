//global states in different component 

import { useContext, useState } from "react";
import { createContext } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

axios.dafaults.baseURL = import.meta.env.VITE_BASE_URL; //for making the API call into axios package 


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const [blogs,setBlogs] = useState([])
    const [input,setInput] = useState("")

    const value = {
        axios,navigate,blogs,setBlogs,input,setInput
    }

    return (
 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext) //data get from the context file call these fun.. 
}
// making the API call we use axios package 