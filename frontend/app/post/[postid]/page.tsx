"use client"

import React, { useState } from 'react'
import { useContexts } from '@/context/BlogContext'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { FaEye, FaHeart } from 'react-icons/fa6'
import { IoIosSend } from "react-icons/io";
import { toast } from 'react-toastify'

const pape = () => {
  const { BlogPost, token } = useContexts()
  const params = useParams();
  const post = BlogPost.find((post) => post._id === params.postid)
  const [like, setLike] = useState(false)
  const [comments, setComments] = useState("")



  if (!post) return <p>Post not found!</p>;

  let com = localStorage.getItem("comment");

  const comment = () => {
    if (!token && !localStorage.getItem("token")) {
      toast.error("Login to Comment")
    }
    else {
      if (comments === "") {
        null
      } else if (!localStorage.getItem("comment")) {
        com = comments;
        localStorage.setItem("comment", com)
        setComments("")
        console.log(com)
      } else if (comments && localStorage.getItem("comment")){
        toast.error("You've a comment already")
      }
    }
  }

  return (
    <div className="px-[0.8rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]">
    <div className='flex flex-col gap-[2rem] py-[3rem]'>
      <Image src={post.image} alt='Image' className='rounded-xl max-h-[40rem] object-cover' />
      <div className=" flex flex-col gap-[0.6rem] w-full">
        <p className=' font-medium text-[#472b89]'>Written By: {post.author}</p>
        <p className=''>{post.title}</p>
        <p className=' text-gray-800'>{post.description}</p>
        <hr />
        <p className=' text-gray-800'>{post.content}</p>
        <p>{post.date}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{post.view}</p></div>
          <div onClick={() => setLike(prev => !prev)} className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart className={`${like ? "text-[red]" : "text-[#000]"}`} />  <p>{post.likes}</p></div>
        </div>
      </div>
      <div className="max-w-[50rem]  relative rounded-xl shadow-xs shadow-[#00000018]">
        <input onChange={(e) => setComments(e.target.value)} value={comments} type="text" placeholder='Comment' className='w-full outline-none px-[1rem] py-[0.6rem] pr-[4rem] bg-gray-100 rounded-xl' />
        <button onClick={() => comment()} className='absolute right-0 top-0 cursor-pointer bg-[#000] hover:bg-gray-800 duration-150 px-[1rem] py-[0.6rem] rounded-tr-xl rounded-br-xl'><IoIosSend className='text-[1.5rem] text-[#fff]' /></button>
      </div>
      <div className="w-full bg-gray-100 text-[#000] p-[1rem] rounded-xl flex justify-between"><p className=''>{com}</p></div>

    </div>
    </div>
  )
}

export default pape