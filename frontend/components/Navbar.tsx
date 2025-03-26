"use client"

import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Search from './Search'
import Image from 'next/image'
import img from "@/public/images/profile.jpg"

const Navbar = () => {
    const pathname = usePathname();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
      if (pathname.includes("login")) {
        setVisible(true);
      }else if(pathname.includes("register")) {
        setVisible(false)
      }else {
        setVisible(false)
      }
    }, [pathname]);
  return (
    <div>
      <div className="flex justify-between py-[1rem] items-center">
        <Link href={"/"}><h1 className="text-[3rem] big">LITEBLOG</h1></Link>
        <div className="w-[50%]">
        <Search />
        </div>
        <div className="flex gap-[1.5rem] text-[#fff]">
            {!visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/login"}>Login</Link>}
            {visible && <Link className="px-[1rem] py-[0.5rem] rounded bg-[#000]" href={"/register"}>SignIn</Link>}
        </div>
        <div className="rounded-full w-[3rem] shadow-sm shadow-[#00000028] overflow-hidden hidden">
          <Image className='w-full' src={img} alt='Image'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar