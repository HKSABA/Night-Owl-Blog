import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../Interface/BlogPost";

const LatestBlogPreview = ({ _id, basic }: BlogPost) => {
  return (
    <div className="group w-64 h-96 bg-[#eff6fe] bg-opacity-90 rounded-xl shadow-lg drop-shadow-md cursor-pointer hover:bg-opacity-100 hover:shadow-xl hover:drop-shadow-xl transition-all duration-75 ease-out">
      {/* -------------- Blog Preview -------------- */}

      {/* -------------- Blog Image -------------- */}
      <div className="relative h-1/2 w-64 rounded-t-xl">
        <Image
          style={{ objectFit: "cover" }}
          className="opacity-90 rounded-t-xl group-hover:opacity-100"
          src={basic.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="blog-image"
        />
      </div>

      {/* -------------- Blog Content -------------- */}
      <div className="flex flex-col p-4 space-y-[0.35rem] text-gray-700">
        {/* -------------- Date -------------- */}
        <p className="text-xs tracking-wider">{basic.date}</p>

        {/* -------------- Title -------------- */}
        <h3 className="text-lg font-semibold capitalize pb-1 line-clamp-2">
          {basic.title}{" "}
        </h3>
        {/* -------------- Description -------------- */}
        <p className="text-[0.8rem] leading-relaxed  line-clamp-2">
          {basic.description}
        </p>

        {/* -------- Link to read full blog -------- */}
        <Link
          key={_id}
          href="/blogs/[blogID]"
          as={`/blogs/${_id}`}
          className="pt-4 relative"
        >
          <hr className="mb-1 h-[0.1rem] bg-indigo-300 -z-10" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="#3b82f6"
            className="w-5 h-5 absolute top-1/3 left-0 rounded-full bg-[#eff6fe] transition-transform duration-[250ms] ease-linear group-hover:translate-x-44"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogPreview;
