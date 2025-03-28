"use client"

import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
    
    return (
        <div className=' '>
            <div className="max-w-[1000px] flex flex-col gap-[1.5rem]">
                <p className='flex items-center gap-[1rem]'>Home <FaArrowRight /> Blog and Article</p>
                <h1 className='text-[3.5rem] font-semibold leading-none'>Your Destination for Creativity, Knowledge and Growth</h1>
                <p>Discover insight, tips and trends to improve your Creativity and skills</p>
            </div>

        </div>
    )
}

export default Hero

// {posts.map((post, index) => {
//     return (
//         <div key={index} className="w-ful flex flex-col md:flex-row justify-between gap-[3rem] py-[2rem] sm:py-[3rem] items-center">
//             <div className="w-full md:w-[50%] flex flex-col gap-[1rem] md:gap-[0.5rem] lg:gap-[1rem] ">
//                 <h4 className='text-[0.7rem] sm:text-[1rem] md:text-[0.8rem] lg:text-[1rem]'>FROM RECENT POST</h4>
//                 <h1 className='text-[2rem] sm:text-[2.5rem] md:text-[1.5rem] lg:text-[2.5rem] font-medium prata '>{post.title}</h1>
//                 <div className=" flex gap-3 text-[0.8rem] sm:text-[1rem] md:text-[0.8rem] lg:text-[1rem] items-center">
//                     <p>By: {post.author}</p>
//                     <div className=" w-[1px] h-[15px] sm:h-[17px]"></div>
//                     <p>{post.date}</p>
//                 </div>
//                 <p className=' text-[0.8rem] sm:text-[1rem] md:text-[0.8rem] lg:text-[1rem]'>{post.description}</p>
//                 <button className="bg-[#000]  rounded px-[1.5rem] py-[0.6rem] flex gap-[1rem] items-center max-w-[10.1rem] md:mt-[0.5rem]">Read more <FaGreaterThan /></button>
//             </div>
//             <div className="w-full md:w-[50%]">
//                 <Image src={post.image} alt='Image' className='w-full rounded'/>
//             </div>
//         </div>
//     )
// })}