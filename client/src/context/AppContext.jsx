//global states in different component 

import { useContext, useEffect, useState } from "react";
import { createContext } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL; //for making the API call into axios package 


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const [blogs,setBlogs] = useState([])
    const [input,setInput] = useState("")

    //crate fun for the get data from the DB
    const fetchBlogs = async () => {
        try {
           const {data} = await axios.get('/allblog');
           data.success ? setBlogs(data.blogs) : toast.error(data.message)

           //display the notification error we use react-hot-toast
        } catch (error) {
            toast.error(error.message)
        }
    }

    //execute these fun. whenever we will open the application
    useEffect(()=>{
        fetchBlogs();
    },[])

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



