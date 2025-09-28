import React from "react";

export default function Loading() {
  return (
    <div className="h-screen relative animate-pulse">
      <div className="absolute top-0 w-full h-full -z-10 bg-gradient-to-b from-[#dfecff] to-transparent">
        {/* 
        --------- Header Skeleton --------- 
        */}
        <div className="h-16 bg-white/70 shadow-md shadow-slate-300"></div>

        {/* 
          -------- Blogs Container Skeleton -------- 
        */}
        <div className="w-full space-y-4 pt-20 px-8 md:px-24">
          <div className="w-60 md:w-80 h-40 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></div>

          <div className="w-60 md:w-80 h-40 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></div>

          <div className="w-60 md:w-80 h-40 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
