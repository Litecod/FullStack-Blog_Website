"use client"


import { useRouter } from 'next/navigation';
import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react'
import { BlogPost, BlogType } from '@/public/images/image';
import axios from 'axios';

interface UserType {
    _id: string
    username: string
    email: string
    password: string
    profilePicture: string
    bio: string
    role: string
    post: Object
}

interface BlogContextType {
    backendUrl: string | null;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    router: any;
    BlogPost: BlogType[];
    userInfo: UserType[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const BlogContextProvider = ({ children }: { children: ReactNode }) => {

    const backendUrl = "http://localhost:4500"
    const [token, setToken] = useState("")
    const router = useRouter()

    const [userInfo, setUserInfo] = useState([]);

    const getUser = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/user/list")
            if (response.data.success) {
                setUserInfo(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getUser()
    }, [token])
    return (
        <BlogContext.Provider value={{ backendUrl, token, setToken, router, BlogPost, userInfo }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;


export const useContexts = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};