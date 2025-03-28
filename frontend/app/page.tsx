import Hero from "@/components/Hero";
import RecentBlog from "@/components/RecentBlog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-[4rem]">
      <Hero />
      <hr />
      <RecentBlog />
    </div>
  );
}
