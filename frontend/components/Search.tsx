"use client"

import React, { useState, useEffect, useContext } from 'react'
import { usePathname } from 'next/navigation'
import { IoSearch } from "react-icons/io5";

const Search = () => {
    //const { search, setSearch} = useContext(Blogcontext);
    const pathname = usePathname();
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        if (pathname.includes("login") || pathname.includes("register") || pathname.includes("profile")) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [pathname]);

    
    return visible ? (
        <div className="text-center">
            <div className=" relative flex max-w-[40rem] w-full">
                <div className="absolute left-[0.5rem] top-[0.4rem] text-[1.4rem] text-gray-600">
                    <IoSearch />
                </div>
                <input type="text" placeholder="Search" className="w-full pl-[2.3rem] bg-gray-100 shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded px-[0.4rem] py-[0.4rem]" />
            </div>
        </div>
    ) : null;
}

export default Search