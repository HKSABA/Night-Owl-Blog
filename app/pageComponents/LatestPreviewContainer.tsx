import React, { Suspense } from "react";
import { fetchDataFromApi } from "@/lib/mongo/data";
import LatestBlogPreview from "../components/LatestBlogPreview";
import BlogPost from "../Interface/BlogPost";
import Loading from "./loading";

const LatestPreviewContainer = async () => {
  const data = await fetchDataFromApi();

  return (
    <>
      {/* 
        --------- Title and Description ---------
      */}
      <div id="latest-preview">
        <h2 className="decoration-blue-500">Latest</h2>
        <h4>
          <span className="text-indigo-500 font-bold">Stay in the Loop : </span>
          Dive into the Latest Posts for Fresh Insights and Updates in the
          Ever-Evolving Tech Landscape.
          <br />
          Explore the cutting-edge trends and developments that matter now.
        </h4>
      </div>

      {/* 
        ----- Latest Blogs Preview Container ----- 
      */}

      <Suspense fallback={<Loading />}>
        <div className="rounded-3xl w-full place-items-center py-4 grid grid-flow-row auto-cols-1 auto-rows-max gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* 
            Only the first 4 blogs are shown in Latest Section 
          */}
          {data?.slice(0, 4).map((post: BlogPost) => (
            <LatestBlogPreview key={post.basic.key} {...post} />
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default LatestPreviewContainer;
