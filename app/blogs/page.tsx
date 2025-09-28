import React, { Suspense } from "react";
import Link from "next/link";
import Collection from "./components/Collection";
import Loading from "./loading";

export default function Blogs() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-[#d0dcf9] via-neutral-50 to-neutral-100 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-400">
        {/* 
        ------------- Header ------------- 
        */}
        <div className="absolute top-0 z-30 h-20 w-full px-8 md:px-12 flex items-center justify-end">
          <Link
            className="px-5 py-[0.6rem] text-[0.8rem] text-white tracking-wider bg-gradient-to-r from-indigo-400 to-blue-400 shadow-md border border-transparent hover:border-slate-600 hover:text-black transition-all duration-75 ease-in"
            href="/"
          >
            Back to Homepage
          </Link>
        </div>

        <div className="w-full py-12 px-6 md:px-14 lg:px-16 pt-28 lg:pt-20">
          {/* ------------- Page Title ------------- */}
          <h1 className="text-xl md:text-[1.6rem] text-gray-500 font-sans font-bold tracking-widest uppercase underline underline-offset-8 decoration-blue-500">
            All Blogs
          </h1>

          {/* 
          -------- All Blogs Container -------- 
        */}
          <Collection />
        </div>
      </div>
    </Suspense>
  );
}
