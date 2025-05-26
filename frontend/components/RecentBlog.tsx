"use client"

import React, { useState } from 'react'
import { useContexts } from '@/context/BlogContext'
import Image from 'next/image';
import { FaEye, FaHeart } from 'react-icons/fa6';
import Link from 'next/link';

const RecentBlog = () => {
  const { BlogPost } = useContexts();
  const postsOne = BlogPost.slice(0, 1)
  const postsTwo = BlogPost.slice(1, 3)
  const postsThree = BlogPost.slice(3, 4)

  const [like, setLike] = useState(false)

  return (
    <div className=''>
      <h1 className='text-[2rem] font-semibold'>Recent Blog Post</h1>
      <div className="flex flex-col py-[2rem] gap-[2rem]">
        <div className="flex flex-col md:flex-row gap-[1rem]">
          <div className="w-full md:w-[40%]">
            {postsOne.map((post, index) => {
              return (
                <div key={index} className='flex flex-col gap-[0.5rem]'>
                  <Image src={post.image} alt='Image' className=' h-[17rem] object-cover' />
                  <div className=" flex flex-col gap-[0.6rem]">
                    <p className='font-medium text-[#6941C6]'>Written By: {post.author}</p>
                    <Link href={`/post/${post._id}`}><p className='font-semibold'>{post.title}</p></Link>
                    <p className='line-clamp-3 text-gray-800'>{post.description}</p>
                    <p className='text-[#C11574] font-medium'>{post.date}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{post.view}</p></div>
                    <div onClick={() => setLike(prev => !prev)} className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart className={`${like ? "text-[red]" : "text-[#000]"}`} />  <p>{post.likes}</p></div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-[1rem]">
            {postsTwo.map((post, index) => {
              return (
                <div key={index} className='flex flex-col md:flex-row gap-[1rem] items-center'>
                  <Image src={post.image} alt='Image' className='w-full md:w-[53%] max-h-[15rem] object-cover' />
                  <div className=" flex flex-col gap-[0.6rem] w-full md:w-[47%]">
                    <p className='line-clamp-1 font-medium text-[#6941C6]'>Written By: {post.author}</p>
                    <Link href={`/post/${post._id}`}><p className='line-clamp-2 font-semibold'>{post.title}</p></Link>
                    <p className='line-clamp-3 md:line-clamp-2 lg:line-clamp-3 text-gray-800'>{post.description}</p>
                    <p className='text-[#C11574] font-medium'>{post.date}</p>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{post.view}</p></div>
                      <div onClick={() => setLike(prev => !prev)} className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart className={`${like ? "text-[red]" : "text-[#000]"}`} />  <p>{post.likes}</p></div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
        <div className="">
        {postsThree.map((post, index) => {
              return (
                <div key={index} className='flex flex-col md:flex-row gap-[1rem] items-center'>
                  <Image src={post.image} alt='Image' className='w-full md:h-[20rem] md:w-[53%] object-cover' />
                  <div className=" flex flex-col gap-[0.6rem] w-full md:w-[47%]">
                    <p className='line-clamp-1 font-medium text-[#6941C6]'>Written By: {post.author}</p>
                    <Link href={`/post/${post._id}`}><p className='line-clamp-2 font-semibold'>{post.title}</p></Link>
                    <p className='md:line-clamp-6 lg:line-clamp-none text-gray-800'>{post.description}</p>
                    <p className='text-[#C11574] font-medium'>{post.date}</p>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{post.view}</p></div>
                      <div onClick={() => setLike(prev => !prev)} className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart className={`${like ? "text-[red]" : "text-[#000]"}`} />  <p>{post.likes}</p></div>
                    </div>
                  </div>

                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default RecentBlog