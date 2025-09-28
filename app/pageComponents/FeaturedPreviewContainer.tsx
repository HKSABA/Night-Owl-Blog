import React, { Suspense } from "react";
import { fetchDataFromApi } from "@/lib/mongo/data";
import BlogPost from "../Interface/BlogPost";
import Carousel from "../clientComponents/Carousel";
import Loading from "./loading";

const FeaturedPreviewContainer = async () => {
  const data = await fetchDataFromApi();

  // -------- Get the Featured Blog Previews --------
  const featuredBlogs: BlogPost[] = data?.filter(
    (blog: BlogPost) => blog.basic.featured
  );

  return (
    <div className="flex flex-col relative">
      {/* -------------- Title and Description -------------- */}
      <div id="featured-preview">
        <h2 className="decoration-blue-500">Featured</h2>
        <h4>
          <span className="text-indigo-500 font-bold">Top Picks : </span>
          Embark on an illuminating expedition through The Night Owl's premier
          blogs. Uncover a curated collection, guiding you through a world of
          articles that ignite curiosity, cultivate inspiration, and redefine
          the boundaries of creativity. Experience the forefront of innovation
          with these handpicked gems, sparking new ideas and uncovering endless
          possibilities.
        </h4>
      </div>

      {/* 
        ----------- Swiper Carousel ----------- 
      */}
      <Suspense fallback={<Loading />}>
        <Carousel featuredBlogs={featuredBlogs} />
      </Suspense>
    </div>
  );
};

export default FeaturedPreviewContainer;
