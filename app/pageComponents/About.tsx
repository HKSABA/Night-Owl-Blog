import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative flex items-center justify-between px-6 lg:px-16 h-full m-auto">
      {/* --------------- Content --------------- */}
      <div className="w-full lg:w-2/3 p-2 lg:p-4 flex flex-col justify-center space-y-8 lg:space-y-10">
        <h2 className="decoration-blue-500 ">About</h2>

        <h3 className="text-lg text-slate-500 font-bold tracking-widest leading-loose uppercase">
          Welcome to
          <span className="text-blue-500"> The Night Owl Blog !</span>
        </h3>

        <h4 className="text-gray-600 lg:text-justify font-semibold tracking-wider leading-loose lg:leading-loose space-y-2">
          <span className="lg:inline-block">
            The Night Owl is passionate about unraveling the intricacies of the
            digital realm. Its mission is to illuminate the ever-evolving world
            of technology and web development through insightful articles,
            practical guides, and thought-provoking discussions.{" "}
          </span>
          <span className="lg:inline-block">
            Join this journey to explore the forefront of innovation, decode
            complex technical concepts, and share the fascination for all things
            tech. Whether you're a seasoned developer, an aspiring enthusiast,
            or simply curious about the digital landscape, The Night Owl Blog
            offers a space to learn, grow, and stay inspired.{" "}
          </span>
          <span className="lg:inline-block">
            Step into The Night Owl community, where knowledge meets curiosity,
            and where the night owls gather to discover the endless
            possibilities within the digital universe.
          </span>
        </h4>
      </div>

      {/* --------------- Illustration --------------- */}

      <div className="hidden lg:inline-block absolute w-[100px] h-[100px] rounded-full bg-blue-400 top-48 right-72 z-10"></div>

      <div className="hidden lg:inline-block absolute w-[360px] h-[360px] rounded-full bg-blue-200 top-48 right-10 filter blur-2xl"></div>

      <div className="hidden lg:inline-block relative w-[320px] h-[320px] rounded-full">
        <Image
          className="opacity-90 rounded-full object-cover z-20"
          src="/images/undraw_working_late.svg"
          fill
          alt="undraw-night-owl"
        />
      </div>
    </div>
  );
};

export default About;
