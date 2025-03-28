"use client"

import React, { useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { TbPasswordMobilePhone } from "react-icons/tb";
import Link from "next/link";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContexts } from '@/context/BlogContext';

const Login = () => {
    const [page, setPage] = useState("User");

    const { backendUrl, token, setToken, router } = useContexts()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmithandler = async (e) => {
        e.preventDefault()
        try {
            if (page === "User") {
                const response = await axios.post(backendUrl + "/api/user/login", { email, password })
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    toast.success("Login Successful");
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(backendUrl + "/api/user/author-login", { email, password })
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    toast.success("Login Successful");
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (token) {
            router.push("/")
        }
    }, [token])

    return (
        <div className="text-center mt-14 flex flex-col gap-[2rem]">
            <div className="flex flex-col items-center gap-3 mx-auto">
                <h1 className="prata text-[2rem] font-medium">
                    {page === "Writer" ? "Login as Writer" : "Login as User"}
                </h1>
                {page === "User" &&
                    <button
                        onClick={() => setPage("Writer")}
                        className="bg-black text-white p-[0.4rem] rounded cursor-pointer"
                    >
                        Login As Writer
                    </button>
                }
                {page === "Writer" && <button
                    onClick={() => setPage("User")}
                    className="bg-black text-white p-[0.4rem] rounded cursor-pointer"
                >
                    Login As User
                </button>}
            </div>
            <div className="text-center flex flex-col gap-[2rem] w-full sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto ">
                <form onSubmit={onSubmithandler} className="flex flex-col gap-[2rem]">
                    <div className="flex relative">
                        <MdEmail className="absolute left-[0.5rem] top-[0.5rem] text-[1.3rem] text-gray-600" />
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full pl-[2.3rem] outline-none bg-[#0000000e] shadow-sm shadow-[#0000001e] border border-[#0000001e] rounded px-[0.4rem] py-[0.4rem]"
                        />
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
                        Login
                    </button>
                </form>
                <hr className="" />
                <button className="px-[1rem] py-[0.5rem] rounded bg-[#000] text-[#fff] cursor-pointer max">
                    Continue With Google
                </button>
                <p>
                    Register if you don't have an account?{" "}
                    <Link href={"/register"} className="underline text-purple-900">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;