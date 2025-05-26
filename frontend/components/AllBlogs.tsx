"use client"

import React from 'react'
import { useContexts } from '@/context/BlogContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaHeart } from 'react-icons/fa6'

const AllBlogs = () => {
    const { BlogPost } = useContexts()
    return (
        <div className='mt-[5rem]'>
            <h1 className='text-[2rem] font-semibold'>All Blog</h1>
            <div className="mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
                {BlogPost.map((item, index) => {
                    return (
                        <div key={index} className="">
                            <Image src={item.image} alt='' className='h-full max-h-[17rem]'/>
                            <div className=" flex flex-col gap-[0.6rem] mt-[2rem]">
                                <p className='font-medium text-[#6941C6]'>Written By: {item.author}</p>
                                <Link href={`/post/${item._id}`}><p className='font-bold text-[1.3rem]'>{item.title}</p></Link>
                                <p className='line-clamp-3 text-gray-800'>{item.description}</p>
                                <p className='text-[#C11574] font-medium'>{item.date}</p>
                            </div>
                            <div className="flex justify-between mt-[1rem]">
                                <div className="flex items-center gap-[0.5rem]"><FaEye />  <p>{item.view}</p></div>
                                <div className="flex items-center gap-[0.5rem] cursor-pointer"><FaHeart />  <p>{item.likes}</p></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllBlogs