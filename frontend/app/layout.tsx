import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BlogContextProvider from "@/context/BlogContext";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" text-[#000] bg-gray-100"
      >
        <BlogContextProvider>
          <ToastContainer />
          <Navbar />

          <div className="max-w-[1500px] mx-auto ">
            <div className="">
              <Sidebar />
            </div>
            <div className="">
              {children}
            </div>
          </div>

        </BlogContextProvider>
      </body>
    </html>
  );
}
