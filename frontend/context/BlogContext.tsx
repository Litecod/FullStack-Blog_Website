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
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    router: any;
    BlogPost: BlogType[];
    userInfo: UserType[];
    profilepic: string
    email: string
    username: string
    role: string
    bio: string
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const BlogContextProvider = ({ children }: { children: ReactNode }) => {

    const backendUrl = "http://localhost:4500"
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const [post, setPost] = useState([])
    const [role, setRole] = useState("")
    const [bio, setBio] = useState("")
    const [userId, setUserId] = useState("")
    const router = useRouter()

    const [userInfo, setUserInfo] = useState([]);

    const getUser = async () => {
        try {
            const tokenss = localStorage.getItem('token');

            const response = await axios.post(
                `${backendUrl}/api/user/getuser`, {},
                {
                    headers: { tokenss },
                }
            );
            if(response.data.success) {
                console.log(response.data.userInfo)
                setProfilepic(response.data.userInfo.profilePicture)
                setEmail(response.data.userInfo.email)
                setUsername(response.data.userInfo.username)
                setRole(response.data.userInfo.role)
                setBio(response.data.userInfo.bio)
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    },[])
    return (
        <BlogContext.Provider value={{ backendUrl, token, setToken, router, BlogPost, userInfo, userId, setUserId, profilepic, email, username, bio, role }}>
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