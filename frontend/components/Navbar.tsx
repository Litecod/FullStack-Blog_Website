"use client"

import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Search from './Search'
import Image from 'next/image'
import img from "@/public/images/profile.jpg"
import { useContexts } from '@/context/BlogContext'

const Navbar = () => {
    const pathname = usePathname();
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)

  const {router,setToken, token} = useContexts();


  const logOut = () => {
    router.push("/login");
    localStorage.removeItem("token");
    setToken("");
  };


  useEffect(() => {
      if (pathname.includes("login")) {
        setVisible(true);
        setShow(false)
      }else if(pathname.includes("register")) {
        setVisible(false)
        setShow(false)
      }else if(pathname.includes("profile")){
        setShow(true)
      }else {
        setVisible(false)
        setShow(false)
      }
    }, [pathname]);
  return (
    <div>
      <div className="flex justify-between py-[1rem] items-center">
        <Link href={"/"}><h1 className="text-[3rem] big">LITEBLOG</h1></Link>
        <div className="w-[50%]">
        <Search />
        </div>
        {!token && !!localStorage ? <div className="flex gap-[1.5rem] text-[#fff]">
            {!visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/login"}>Login</Link>}
            {visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/register"}>SignIn</Link>}
        </div> :
        <div className={`shadow-sm shadow-[#00000028] overflow-hidden ${!show && "rounded-full w-[3rem]"}`}>
          {!show && <Image onClick={() => router.push("/profile")} className='w-full cursor-pointer' src={img} alt='Image'/>}
          {show && <button onClick={() => logOut()} className='cursor-pointer px-[1rem] py-[0.5rem] rounded w-full bg-black text-white'> <p>Logout</p> </button>}
        </div>}
      </div>
    </div>
  )
}

export default Navbar