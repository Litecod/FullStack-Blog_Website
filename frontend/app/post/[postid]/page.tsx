"use client"

import React, { useState } from 'react'
import { useContexts } from '@/context/BlogContext'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { FaEye, FaHeart } from 'react-icons/fa6'

const pape = () => {
  const { BlogPost } = useContexts()
  const params = useParams();
  const post = BlogPost.find((post) => post._id === params.postid)
  const [like, setLike] = useState(false)

  console.log(post)

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <Image src={post.image} alt='Image' />
      <div className=" flex flex-col gap-[0.6rem] w-full md:w-[47%]">
        <p className='line-clamp-1 font-medium text-[#472b89]'>Written By: {post.author}</p>
        <p className='line-clamp-2'>{post.title}</p>
        <p className='line-clamp-3 md:line-clamp-2 lg:line-clamp-3 text-gray-800'>{post.description}</p>
        <p>{post.date}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{post.view}</p></div>
          <div onClick={() => setLike(prev => !prev)} className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart className={`${like ? "text-[red]" : "text-[#000]"}`} />  <p>{post.likes}</p></div>
        </div>
      </div>
    </div>
  )
}

export default pape