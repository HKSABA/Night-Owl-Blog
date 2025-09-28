import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogNav = () => {
  return (
    <header className="absolute top-0 z-30 h-20 w-full px-4 sm:pl-8 sm:pr-12 flex items-center justify-between text-blue-800 text-sm font-medium tracking-wide underline-offset-8 transition duration-100 ease-in">
      {/* -------------- Nav-Left -------------- */}
      <div className="z-20 relative w-10 h-10 md:w-[3.2rem] md:h-[3.2rem] rounded-full shadow-gray-400 shadow-md drop-shadow-lg">
        <Image
          className="rounded-full"
          src="/images/owl-logo.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="images/NightOwl-Logo"
        />
      </div>

      {/* -------------- Nav-Left -------------- */}
      <div className="space-x-3 md:space-x-10">
        <Link className="blog-nav-link " href="/">
          HOME
        </Link>
        <Link className="blog-nav-link " href="/blogs">
          ALL BLOGS
        </Link>
      </div>
    </header>
  );
};

export default BlogNav;
