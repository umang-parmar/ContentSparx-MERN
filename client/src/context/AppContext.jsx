//global states in different component 

import { useContext, useEffect, useState } from "react";
import { createContext } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL; //for making the API call into axios package 

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/allblog');
            data.success ? setBlogs(data.allBlog) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const adminLogin = (username, password) => {
        if (username === "admin" && password === "admin") {
            setIsAdmin(true);
            return true;
        }
        return false;
    };

    const adminLogout = () => {
        setIsAdmin(false);
        navigate("/");
    };

    const value = {
        axios,
        navigate,
        blogs,
        setBlogs,
        input,
        setInput,
        isAdmin,
        adminLogin,
        adminLogout,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext); //data get from the context file call these fun.. 
};
// making the API call we use axios package 
export default AppContext



