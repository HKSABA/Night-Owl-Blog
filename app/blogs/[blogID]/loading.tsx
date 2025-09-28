import React from "react";

const Loading = () => {
  return (
    <div className="h-screen relative animate-pulse">
      <div className="absolute top-0 w-full h-full -z-10 bg-gradient-to-b from-[#dfecff] to-transparent"></div>

      {/* ------------- Navigation Skeleton ------------- */}
      <div className="h-16 bg-white/70 shadow-md shadow-slate-300"></div>

      {/* -------- Post Skeleton -------- */}
      <div className="pt-12 pl-12 w-full max-w-[74rem] space-y-4">
        {/* --------- Basic Box --------- */}
        <div className="h-32 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></div>

        <div className="pt-10 space-y-8 md:space-y-0">
          {/* 
          ----------- Image Box ----------- 
          */}
          <div className="w-80 h-72 rounded-xl bg-white/70 shadow-md shadow-slate-300 m-auto mb-12 md:float-right md:ml-16"></div>

          {/* --------- MAIN --------- */}
          <ul className="w-[46rem] h-[28rem] space-y-10">
            <li className="h-20 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></li>

            <li className="h-28 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></li>

            <li className="h-36 bg-white/70 shadow-md shadow-slate-300 rounded-lg"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loading;
