"use client"

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Search from './Search'
import Image from 'next/image'
import img from "@/public/images/profile.jpg"
import { useContexts } from '@/context/BlogContext'
import { toast } from 'react-toastify'
const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)

  const { router, setToken, token, profilepic } = useContexts();


  const logOut = () => {
    router.push("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken("");
  };
  useEffect(() => {
    if (pathname.includes("login")) {
      setVisible(true);
      setShow(false)
    } else if (pathname.includes("register")) {
      setVisible(false)
      setShow(false)
    } else if (pathname.includes("profile")) {
      setShow(true)
    } else {
      setVisible(false)
      setShow(false)
    }
  }, [pathname]);






  return (
    <div className={`w-full border-b-[1px] ${pathname.includes("profile") && "hidden"}`}>
      <div className="flex max-w-[1500px] mx-auto px-[0.8rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] justify-between py-[1rem] items-center gap-[1rem]">
        <Link href={"/"}><h1 className="text-[1.5rem] sm:text-[2rem] big">LITEBLOG</h1></Link>
        <div className=" flex items-center gap-[2rem]">
          <div className="flex items-center gap-[2rem]">
            <Link href={"/"}>Home</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About</Link>
          </div>
          {!token && !localStorage.getItem("token") ? <div className="flex gap-[1.5rem] text-[#fff]">
            {!visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/login"}>Login</Link>}
            {visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/register"}>SignIn</Link>}
          </div> :
            <div className={`shadow-sm shadow-[#00000028] overflow-hidden ${!show && "rounded-full w-[2rem] h-[2rem]"}`}>
              {!show && profilepic ? <img onClick={() => router.push("/profile")} className='w-full cursor-pointer' src={profilepic} alt='Image' /> : ""}
              {show && <button onClick={() => logOut()} className='cursor-pointer px-[1rem] py-[0.5rem] rounded w-full bg-black text-white'> <p>Logout</p> </button>}
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar