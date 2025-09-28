import React from 'react'

export default function Loading() {
  return (
      <div className="flex space-x-6 justify-evenly pt-10 lg:pt-16 px-8 animate-pulse">
        {/*
          -------- Blogs Container Skeleton --------
        */}
        <div className="w-64 md:w-72 h-40 bg-white/70 shadow-lg shadow-slate-300 rounded-lg"></div>

        <div className="hidden sm:block w-64 md:w-72 h-40 bg-white/70 shadow-lg shadow-slate-300 rounded-lg"></div>

        <div className="hidden md:block w-72 h-40 bg-white/70 shadow-lg shadow-slate-300 rounded-lg"></div>
          
        <div className="hidden lg:block w-72 h-40 bg-white/70 shadow-lg shadow-slate-300 rounded-lg"></div>
      </div>
  )
}
