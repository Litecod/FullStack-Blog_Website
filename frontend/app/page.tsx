import AllBlogs from "@/components/AllBlogs";
import Hero from "@/components/Hero";
import RecentBlog from "@/components/RecentBlog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[4rem] mt-[2rem]">
      <Hero />
      <hr />
      <RecentBlog />
      <AllBlogs />
    </div>
  );
}
