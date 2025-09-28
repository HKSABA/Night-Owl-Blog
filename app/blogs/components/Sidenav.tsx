import React from "react";
import BlogPost from "@/app/Interface/BlogPost";
import "../blogPost.css";

export default function Sidenav(blog: BlogPost) {
  return (
    <nav
      id="sidenav"
      className="absolute right-0 top-48 w-[22rem] px-12 py-8 text-slate-500 text-sm font-semibold flex flex-col space-y-2 bg-white/70 border shadow-lg rounded-md"
    >
      <h3 className="text-base text-slate-600 font-semibold underline underline-offset-8 decoration-blue-500 pb-6">
        Read on this page
      </h3>

      {blog?.main.map((section, i) => (
        <div key={i} className="space-y-2">
          <a
            className="leading-loose hover:text-blue-500"
            href={`#${section.subtitle}`}
          >
            {section?.subtitle}
          </a>

          <ul className="flex flex-col space-y-2 pb-2">
            {section.paragraph.map((para, i) => (
              <li key={i} className="indent-6 leading-relaxed list-none">
                <a className="hover:text-blue-500" href={`#${para.heading}`}>
                  {para.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
