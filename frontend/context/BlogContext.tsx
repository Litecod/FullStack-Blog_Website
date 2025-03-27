"use client"


import { useRouter } from 'next/navigation';
import React, { createContext, useState, ReactNode, useContext } from 'react'

interface BlogContextType {
    backendUrl: string | null;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    router: any;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const BlogContextProvider = ({ children }: { children: ReactNode }) => {

    const backendUrl = "http://localhost:4500"
    const [token, setToken] = useState("")
    const router = useRouter()


    return (
        <BlogContext.Provider value={{backendUrl, token, setToken, router}}>
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