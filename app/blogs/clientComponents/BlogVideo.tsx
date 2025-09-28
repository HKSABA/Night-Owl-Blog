"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

export default function BlogVideo({ video }: { video: string }) {
  // Dynamically importing React-Player
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  return (
    <Suspense
      fallback={
        <div className="text-[1.4rem] font-medium capitalize text-slate-700 tracking-normal leading-relaxed text-center">
          Loading...
        </div>
      }
    >
      <div className="relative mx-auto w-64 h-32 sm:w-80 sm:h-40 md:w-[44rem] md:h-[22rem] shadow-lg">
        <ReactPlayer
          className="absolute top-0 left-0 shadow-lg"
          url={video}
          width="100%"
          height="100%"
          controls
        />
      </div>
    </Suspense>
  );
}
