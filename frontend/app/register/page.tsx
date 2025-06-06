"use client"

import React, { useEffect, useState } from 'react'
import { useContexts } from '@/context/BlogContext';
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const { backendUrl, token, setToken, router, userId, setUserId } = useContexts()
  const [page, setPage] = useState("User");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onSubmitHandeler = async (e: any) => {
    e.preventDefault();
    try {
      if (page === "User") {
        const response = await axios.post(backendUrl + "/api/user/register", { username, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          setUserId(response.data.id)
          console.log(response.data)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data._id)
          toast.success("welcome to LITE BLOG")
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/author-register", { username, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          setUserId(response.data.id)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data._id)
          console.log(response.data)
          toast.success("welcome to LITE BLOG")
          
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error("unavailable")
    }
  }

  useEffect(() => {
    if (token || userId) {
      router.push("/")
    }
  }, [token, userId])
  return (
    <div className="px-[0.8rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]">
    <div className="text-center mt-14 flex flex-col gap-[2rem]">
      <div className="flex flex-col items-center gap-3 mx-auto">
        <h1 className="prata text-[2rem] font-medium">
          {page === "Writer" ? "Join as an Writer" : "Join Us Today"}
        </h1>
        {page === "User" &&
          <button
            onClick={() => setPage("Writer")}
            className="bg-black text-white p-[0.4rem] rounded cursor-pointer"
          >
            Register As Writer
          </button>
        }
        {page === "Writer" && <button
          onClick={() => setPage("User")}
          className="bg-black text-white p-[0.4rem] rounded cursor-pointer"
        >
          Register As User
        </button>}
      </div>
      <div className="text-center flex flex-col gap-[2rem] w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto ">
        <form onSubmit={onSubmitHandeler} className="flex flex-col gap-[2rem]">
          <div className="flex relative">
            <IoPersonCircleSharp className="absolute left-[0.5rem] top-[0.5rem] text-[1.3rem] text-gray-600" />
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="UserName"
              className="w-full pl-[2.3rem] outline-none bg-[#0000000e] shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded px-[0.4rem] py-[0.4rem]"
            />
          </div>
          <div className="flex relative">
            <MdEmail className="absolute left-[0.5rem] top-[0.5rem] text-[1.3rem] text-gray-600" />
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full pl-[2.3rem] outline-none bg-[#0000000e] shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded-tl rounded-bl px-[0.4rem] py-[0.4rem]"
            />
            <div className=" cursor-pointer bg-[#000] text-[#fff] shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded-tr rounded-br px-[0.8rem] py-[0.4rem]">
              <p>Verify</p>
            </div>
          </div>
          <div className="flex relative">
            <TbPasswordMobilePhone className="absolute left-[0.5rem] top-[0.5rem] text-[1.3rem] text-gray-600" />
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full pl-[2.3rem] outline-none bg-[#0000000e] shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded px-[0.4rem] py-[0.4rem]"
            />
          </div>
          <button
            type="submit"
            className="px-[1rem] py-[0.5rem] rounded bg-[#000] text-[#fff] cursor-pointer"
          >
            Register
          </button>
        </form>
        <hr className="" />
        <button className="px-[1rem] py-[0.5rem] rounded bg-[#000] text-[#fff] cursor-pointer max">
          Continue With Google
        </button>
        <p>
          Already have an account?{" "}
          <Link href={"/login"} className="underline text-purple-900">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Register;