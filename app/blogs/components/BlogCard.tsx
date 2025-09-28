import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogPost from "@/app/Interface/BlogPost";

// monoblue for code blocks

const BlogCard = ({ _id, basic }: BlogPost) => {
  return (
    <>
      <Link
        key={_id}
        href="/blogs/[blogID]"
        as={`/blogs/${_id}`}
        className="group mx-auto bg-slate-100 md:bg-transparent shadow-md md:shadow-none h-[26rem] max-w-[16rem] md:h-56 md:max-w-5xl flex flex-col md:flex-row cursor-pointer rounded-xl md:hover:bg-slate-100 md:hover:drop-shadow-md transition-all duration-100 ease-in-out"
      >
        {/* 
          -------------- Blog Card -------------- 
        */}

        {/* ---------- Blog Image -------------- */}
        <div className="relative h-2/5 md:h-full md:w-full md:max-w-[90rem]">
          <Image
            style={{ objectFit: "cover" }}
            className="shadow-inherit rounded-t-xl md:rounded-xl md:group-hover:rounded-r-none transition-all duration-100 ease-linear"
            src={basic.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="blog-image"
          />
        </div>

        {/* ---------- Blog Content -------------- */}
        <div className="h-3/5 md:h-full flex flex-col justify-between px-6 py-5 md:px-8 md:py-4 text-gray-700">
          {/* -------------- Date -------------- */}
          <p className="text-xs tracking-wider">{basic.date}</p>

          {/* -------------- Title -------------- */}
          <h3 className="text-lg font-semibold capitalize md:py-1">
            {basic.title}{" "}
          </h3>
          {/* -------------- Description -------------- */}
          <p className="text-[0.8rem] leading-relaxed md:text-justify line-clamp-2 md:line-clamp-3">
            {basic.description}
          </p>

          <p className="text-[0.78rem] text-gray-500 capitalize font-semibold group-hover:text-indigo-500">
            Go to the article
          </p>
        </div>
      </Link>

      {/* ------- Divider ------- */}
      <hr className="hidden md:block mt-8 mb-2 bg-slate-800 w-full" />
    </>
  );
};

export default BlogCard;
