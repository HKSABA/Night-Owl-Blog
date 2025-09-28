import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../Interface/BlogPost";

const FeaturedBlogPreview = ({ _id, basic }: BlogPost) => {
  return (
    <div className="relative w-full h-full cursor-pointer overflow-hidden">
      {/* -------------- Preview Image -------------- */}
      <Image
        style={{ objectFit: "cover" }}
        id="featured-image"
        className="transition-bottom duration-300 ease-linear"
        src={basic.image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={basic.image}
        alt="blog-img"
      />

      {/* 
      ------- Preview Collapsible Container ------- 
      */}
      <div
        id="featured-content"
        className="h-full bg-gradient-to-b from-gray-500 to-slate-700 opacity-90 absolute left-0 right-0 -bottom-full flex flex-col space-y-4 lg:space-y-8 px-8 py-12 lg:px-16 items-start justify-end text-[#f0f0f0] transition-bottom duration-300 ease-linear"
      >
        {/*
          ------------ Blog Content ------------ 
        */}

        {/* -------------- Title -------------- */}
        <h3 className="font-bold uppercase leading-loose tracking-wide text-slate-100">
          {basic.title}
        </h3>

        {/* ---- Link to read full blog ---- */}
        <Link
          className="text-sm font-bold capitalize bg-[#f0f0f0] w-3/4 rounded-lg px-1 py-[0.55rem] md:py-3 text-center text-slate-900 opacity-80 hover:opacity-100"
          key={_id}
          href="/blogs/[blogID]"
          as={`/blogs/${_id}`}
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogPreview;
