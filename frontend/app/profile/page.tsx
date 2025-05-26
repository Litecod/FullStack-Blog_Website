"use client"

import React, { useState } from 'react'
import { useContexts } from '@/context/BlogContext'
import { FaRegHeart } from 'react-icons/fa'

const Profile = () => {
  const { profilepic, username, email, bio, role} = useContexts()
  const [color, setColor] = useState("#000")
  const [show, setShow] = useState(false)

  const save = () => {
    localStorage.setItem("color", color)
    setShow(false);
  }

  const colo = localStorage.getItem("color")


  return (
    <div className='relative w-[84.7%] justify-self-end'>
        <div className={`w-full full h-[17rem] bg-[${colo}] border-b-[3px] border-gray-300`}></div>
        <div onClick={() => setShow(true)} className="absolute top-[13rem] right-[1rem] cursor-pointer px-[1rem] py-[0.5rem] rounded bg-gray-700 text-[#fff]">Change Color</div>
        <div className={`absolute top-[8rem] right-[0.5rem] flex gap-2 p-[1rem] bg-[#ffffff2f] rounded ${!show && "hidden" }`}>
          <p onClick={() => setShow(false)} className='absolute right-[0.2rem] top-[-0.2rem] text-[#fff] cursor-pointer text-[0.9rem]'>x</p>
          <div onClick={() => setColor("#FF69B4")} className="bg-[#FF69B4] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#00BFFF")} className="bg-[#00BFFF] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#98FF98")} className="bg-[#98FF98] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#00FFFF")} className="bg-[#00FFFF] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#FF00FF")} className="bg-[#FF00FF] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#87CEEB")} className="bg-[#87CEEB] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#FFD700")} className="bg-[#FFD700] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#FFA500")} className="bg-[#FFA500] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#DC143C")} className="bg-[#DC143C] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#ff8052")} className="bg-[#ff8052] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => setColor("#FFDAB9")} className="bg-[#FFDAB9] h-[2rem] w-[2rem] rounded cursor-pointer"></div>
          <div onClick={() => save()} className=" cursor-pointer px-[1rem] py-[0.3rem] rounded bg-gray-700 text-[#fff]">Save</div>
        </div>
        <img src={profilepic} alt='' className='max-w-[10rem] absolute top-[12rem] left-[3rem] w-full h-[10rem] rounded-full border-[3px] border-gray-300 ' />
        <div className="mt-[7rem] pl-[3rem]">
          <h1 className='font-semibold text-[1.5rem]'>{username.toUpperCase()}</h1>
          <div className="flex gap-[0.5rem] mt-[0.2rem]">
            <p>{email}</p>
            <p className='font-medium text-gray-500'>.{role}</p>
          </div>
        </div>
        <div className="flex gap-[0.5rem] pl-[3rem] mt-[1rem]">
          <button className='px-[1rem] py-[0.6rem] bg-[#1877F2] text-[#fff] rounded-md cursor-pointer'>All post</button>
          <button className='px-[1rem] py-[0.6rem] border border-[#1877F2] text-[#1877F2] rounded-md cursor-pointer flex gap-[0.3rem] items-center'><FaRegHeart /> Favourite </button>
        </div>
    </div>
  )
}

export default Profile