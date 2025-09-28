import React from "react";
import { fetchDataFromApi } from "@/lib/mongo/data";
import BlogPost from "@/app/Interface/BlogPost";
import BlogCard from "./BlogCard";

const Collection = async () => {
  const blogs = await fetchDataFromApi();

  return (
    <div className="mt-14 md:mt-12 lg:mt-14 w-full grid place-content-evenly grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-flow-row md:grid-cols-1 gap-x-6 md:gap-x-0 gap-y-6 md:justify-items-start">
      {blogs?.map((blog: BlogPost) => (
        /* 
          Render a Blog Card which is a link to the Blog Post 
        */
        <div key={blog._id}>
          <BlogCard {...blog} />
        </div>
      ))}
    </div>
  );
};

export default Collection;
