"use client";

import React from "react";
import Script from "next/script";
import BlogPost from "../Interface/BlogPost";
import FeaturedBlogPreview from "../components/FeaturedBlogPreview";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

const Carousel = (props: { featuredBlogs: BlogPost[] }) => {
  const { featuredBlogs } = props;

  return (
    <>
      {/* -------------- SwiperJS -------------- */}
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
        strategy="beforeInteractive"
      />

      <Swiper
        init={false}
        setWrapperSize={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: -1,
          slideShadows: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        // Responsive breakpoints
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Navigation, Pagination, EffectCoverflow]}
      >
        {featuredBlogs?.map((blog) => (
          <SwiperSlide key={blog.basic.key}>
            <FeaturedBlogPreview {...blog} />
          </SwiperSlide>
        ))}

        {/* 
          ---------- Navigation Arrows ---------- 
        */}
        <div className="relative -bottom-12 flex items-center justify-center">
          {/* 
            ---------- Arrow Backward ---------- 
          */}
          <div className="swiper-button-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fafafa"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* 
            ------------ Arrow Forward ------------ 
          */}
          <div className="swiper-button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fafafa"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
