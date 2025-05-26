"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { FaBlog} from 'react-icons/fa'
import Link from 'next/link'
import { useContexts } from '@/context/BlogContext'
import { IoHomeOutline} from 'react-icons/io5'
import { TbLogout2 } from 'react-icons/tb'
import { FiBookOpen } from 'react-icons/fi'
import { MdOutlinePerson3 } from 'react-icons/md'

const Sidebar = () => {
    const {router, setToken} = useContexts()
    const pathname = usePathname()
    const navs = [
        { id: 1, name: "Home", icon: <IoHomeOutline />, src: "/", path: "home" },
        { id: 2, name: "Profile", icon: <MdOutlinePerson3  />, src: "/profile", path: "profile"},
        { id: 3, name: "Blog", icon: <FaBlog />, src: "/blog", path: "blog"},
        { id: 4, name: "About", icon: <FiBookOpen />, src: "/about", path: "about"},
    ]

    const logOut = () => {
        router.push("/login");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setToken("");
    };

    return (
        <div className={`${pathname.includes("profile") ? "block" : "hidden"} fixed border-r-[3px] border-gray-300 h-screen w-[15%] bg-gray-100 pr-[1rem]`}>
            <div className=" py-[1rem] flex flex-col">
                <Link href={"/"}><h1 className="text-[1.5rem] sm:text-[2rem] big">LITEBLOG</h1></Link>
                <div className="mt-[2rem] flex flex-col gap-[1rem]">
                    {navs.map((item, index) => {
                        return (
                            <Link href={item.src} key={index} className={`flex gap-[0.5rem] items-center w-full px-[1rem] py-[0.5rem] rounded-md  ${pathname.includes(item.path) && "bg-[#fff]"}`}>
                                <div className="text-[1.4rem]">{item.icon}</div>
                                <p className='text-[1.2rem]'>{item.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div onClick={() => logOut()} className="absolute cursor-pointer left-0 bottom-[2rem] flex gap-[0.5rem] items-center w-[95%] px-[1rem] py-[0.5rem] border rounded-md text-[#fff] bg-gray-800">
                <TbLogout2 className='text-[1.4rem]' />
                <p className='text-[1.2rem]'>Logout</p>
            </div>
        </div>
    )
}

export default Sidebar