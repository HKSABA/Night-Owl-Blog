import React, { Suspense } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogFromApiById } from "@/lib/mongo/data";
import { Code } from "bright";

import BlogPost from "@/app/Interface/BlogPost";
import Loading from "./loading";
import BlogNav from "../components/BlogNav";
import Sidenav from "../components/Sidenav";
import BlogVideo from "../clientComponents/BlogVideo";
import "../blogPost.css";

export default async function BlogPage({ params }: any) {
  /* 
    Find the Blog using its "ID" from params 
  */
  const foundBlog: BlogPost = await fetchBlogFromApiById(params.blogID);

  return (
    <Suspense fallback={<Loading />}>
      {/* ------ Script ------ */}
      <Script src="/scripts/sidenav.js" strategy="beforeInteractive" />

      {/* 
        ------------- Header ------------- 
      */}
      <BlogNav />

      {/* ------ BODY ------ */}
      <div id="TOP" className="relative md:flex md:flex-row-reverse">
        {/* ------- Background graphic ------- */}
        <div className="absolute top-0 w-full h-[30rem] -z-10 bg-gradient-to-b from-[#dfecff] to-transparent"></div>

        {/* 
          ---------- SIDEBAR ----------
          ------ 
            only visible in tablet and larger screens
          -----
        */}
        <aside className="hidden md:block w-1/4 max-w-md px-10">
          <Sidenav {...foundBlog} />
        </aside>

        {/* 
         ---------- MAIN ----------
        */}
        <main className="relative md:w-3/4 md:max-w-[74rem]">
          {/* -------- Post Container -------- */}
          <article className="w-full flex flex-col space-y-8 pt-4">
            {/* --------- BASIC --------- */}
            <div className="pt-20 lg:pt-24 px-6 md:px-16 tracking-wide leading-relaxed">
              {/* -------- Title -------- */}
              <h1 className="text-2xl lg:text-3xl font-semibold text-slate-600">
                {foundBlog?.basic?.title}
              </h1>

              {/* -------- Date -------- */}
              <time
                className="flex pt-2 text-[0.8rem] font-medium text-slate-500"
                dateTime="2024-01-01"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>

                {foundBlog?.basic?.date}
              </time>

              {/* -------- Description -------- */}
              <div className="flex space-x-2 md:space-x-4 text-[#f2f2f2] font-bold mt-7 bg-[#5c7bf8] p-4 pr-8 rounded-xl text-left sm:text-justify shadow-lg">
                {/* ----- Left Quote Mark ----- */}
                <span className="text-4xl sm:text-6xl md:text-8xl">
                  &#8220;
                </span>

                <p className="pt-1 sm:pt-2 md:pt-4 pb-2 text-sm md:text-[0.9rem] font-medium leading-loose md:leading-[2.2]">
                  {foundBlog?.basic?.description}
                </p>
              </div>
            </div>

            <div className="p-8 md:px-20 space-y-8 md:space-y-0">
              {/* 
                ----------- Blog Main Image ----------- 
              */}
              {foundBlog && foundBlog.postImage && (
                <div className="relative w-60 md:w-[28rem] h-auto rounded-xl shadow-lg m-auto mb-12 md:float-right md:ml-16">
                  <Image
                    className="rounded-xl shadow-lg w-full h-auto object-contain"
                    src={foundBlog.postImage}
                    width={0}
                    height={0}
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="main-image"
                  />
                </div>
              )}

              {/* --------- MAIN --------- */}
              <article className="space-y-6 text-justify">
                {foundBlog?.main?.map((section, i) => (
                  /* 
                    -------- Section contents --------
                  */
                  <section key={i}>
                    {/* ----- Sub-Title ----- */}
                    <h2
                      id={`${section.subtitle}`}
                      className="pb-1 text-[1.4rem] font-medium capitalize text-slate-700 tracking-normal leading-relaxed text-left"
                    >
                      <hr className="w-8 h-1 bg-blue-500" />
                      {section?.subtitle}
                    </h2>

                    {section?.paragraph?.map((para, i) => (
                      // ----- Paragraph -----
                      <section key={i}>
                        {/* ----- Heading ----- */}
                        {para?.heading ? (
                          <h3
                            id={`${para.heading}`}
                            className="pt-4 pb-2 text-xl text-slate-600 font-medium"
                          >
                            {para.heading}
                          </h3>
                        ) : (
                          ""
                        )}

                        {/* ----- Para Content ----- */}
                        <p className="py-2 lg:pb-4 text-sm md:text-[0.9rem] text-gray-700 leading-relaxed lg:leading-[1.8]">
                          {para.content}
                        </p>
                      </section>
                    ))}

                    {/* ----- Code Snippet ----- */}

                    {section.code ? (
                      <Code
                        className="w-full max-h-[17.7rem] scrollbar-thin scrollbar-track-[#22272E] scrollbar-thumb-gray-600"
                        style={{
                          overflow: "auto",
                          boxShadow: "0.1rem 0.35rem 0.6rem rgba(0,0,0,0.25)",
                          marginBottom: "2.4rem",
                          borderRadius: "0",
                        }}
                        theme={"github-dark-dimmed"}
                        lang="javascript"
                        lineNumbers
                      >
                        {section.code}
                      </Code>
                    ) : (
                      ""
                    )}
                  </section>
                ))}

                {/* -------- Blog Video -------- */}
                {foundBlog.video ? (
                  <div className="pb-6 space-y-4">
                    <span>
                      <hr className="w-8 h-1 bg-blue-500" />
                      <h2 className="text-[1.4rem] font-medium capitalize text-slate-700 tracking-normal leading-relaxed text-left">
                        Witness the Process: Check Out the Demo for a Closer
                        Look!
                      </h2>
                    </span>

                    <BlogVideo video={foundBlog.video} />
                  </div>
                ) : (
                  ""
                )}

                {foundBlog.link ? (
                  <div className="flex flex-col space-y-2 bg-blue-100 p-4 border-l-4 border-blue-400 shadow-md">
                    <p className="text-slate-500 font-medium">
                      Useful Resource{" "}
                    </p>

                    <Link
                      className="text-[0.8rem] text-gray-600 font-medium hover:underline underline-offset-2 overflow-clip"
                      href={foundBlog.link}
                      target="_blank"
                    >
                      {foundBlog.link}
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </article>
            </div>
          </article>
        </main>

        {/* ----- Go to the TOP ----- */}
        <a
          href="#TOP"
          className="absolute md:hidden bottom-2 right-[50%] rounded-full w-6 h-6 ring-2 ring-slate-500 animate-bounce flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </Suspense>
  );
}
