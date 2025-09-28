import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full mx-auto h-1/2 md:pb-12 lg:pb-0 flex flex-col items-center justify-center text-center">
      {/* -------------- Banner Text -------------- */}
      <h1
        style={{ wordSpacing: "6px" }}
        className="w-5/6 p-auto text-3xl lg:text-4xl text-gray-600 font-bold tracking-[0.2em] leading-loose uppercase z-10"
      >
        The
        <span className="block sm:inline text-blue-500"> Night Owl </span>
        <span className="border-b-4 border-blue-400">Blog</span>
      </h1>

      <h3
        style={{ wordSpacing: "3px" }}
        className="mt-16 sm:mt-8 w-3/6 text-gray-500 text-lg font-bold uppercase tracking-[0.15em] leading-loose z-10"
      >
        Discovering
        <span className="text-blue-500"> Wisdom </span>
        Within The Lines
      </h3>
    </div>
  );
};

export default Banner;
