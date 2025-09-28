"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "../../lib/staticData/navLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    handleClickOutside(event);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [open]);

  return (
    <div>
      <Script src="/scripts/navigation.js" strategy="afterInteractive" />

      <div
        id="navbar"
        className="absolute md:fixed top-0 z-30 h-20 md:h-24 lg:h-28 w-full px-4 sm:pl-8 sm:pr-12 flex items-center justify-between"
      >
        {/* -------------- Navbar-Left -------------- */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full shadow-gray-400 shadow-md drop-shadow-lg">
          <Image
            className="rounded-full"
            src="/images/owl-logo.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            alt="images/NightOwl-Logo"
          />
        </div>

        {/* -------------- Navbar-Right -------------- */}

        {/* Mobile Nav Button */}

        <span ref={navRef}>
          <button
            onClick={handleButtonClick}
            className="relative md:hidden bg-indigo-400 rounded-full p-2 shadow-md drop-shadow-lg focus:ring-2 focus:ring-inset focus:ring-indigo-200 transition-all duration-150 ease-linear"
          >
            {open ? (
              // XMarkIcon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fafafa"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // 3Bars Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fafafa"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          {/* 
          ----------- Navigation Links ----------- 
          */}

          <div
            className={`nav-links flex text-blue-700 font-bold transition-right duration-500 ease-in-out w-full h-screen absolute top-full -right-full p-20 flex-col space-y-12 z-20 bg-blue-200 shadow-lg drop-shadow-xl text-lg items-center ${
              open ? "-translate-x-full" : ""
            } md:transition-none md:w-auto md:h-auto md:relative md:top-auto md:right-auto md:p-0 md:flex-row md:space-x-8 md:space-y-0 md:z-10 md:bg-transparent md:shadow-none md:drop-shadow-none md:text-[0.82rem]`}
          >
            {/* 
                -------- Links to sections -------- 
              */}
            {navigation.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}

            {/* 
                ------- Links to other pages ------- 
              */}
            <Link href="/blogs">All Blogs</Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
