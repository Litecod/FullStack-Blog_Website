"use client"

import React, { useContext, useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";
import Link from 'next/link'; 
//import { BlogContext } from "../contexts/BlogContext";

const Register = () => {
  //const {backendUrl, token, setToken, navigate} = useContext(BlogContext)
  const [page, setPage] = useState("User");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  return (
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
          <div className="text-center flex flex-col gap-[2rem] w-[30%] mx-auto ">
            <form className="flex flex-col gap-[2rem]">
              <div className="flex relative">
                <IoPersonCircleSharp className="absolute left-[0.5rem] top-[0.5rem] text-[1.3rem] text-gray-600" />
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
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
  )
}

export default Register;