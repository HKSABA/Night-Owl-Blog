import React from "react";
import Image from "next/image";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="relative h-screen w-full mx-auto flex flex-col items-center justify-center transition-transform duration-200 ease">
      {/* welcome text */}

      {/* ------------- LEFT SIDE ------------- */}

      {/* Background design */}
      <div className="hidden md:block absolute -left-16 bottom-4 w-72 h-72 rounded-full bg-blue-200 bg-blend-multiply filter blur-3xl"></div>

      <Image
        className="hidden md:block absolute left-64 bottom-56"
        style={{ width: "42px", height: "auto" }}
        src="/images/undraw_star.svg"
        width={0}
        height={0}
        alt="star"
      />

      <Image
        className="hidden md:block absolute left-56 bottom-52 rotate-180"
        style={{ width: "36px", height: "auto" }}
        src="/images/undraw_two-lines.svg"
        width={0}
        height={0}
        alt="lines"
      />

      {/* ------------- RIGHT SIDE ------------- */}

      {/* Background design */}
      <div className="hidden md:block absolute right-8 bottom-0 w-80 h-80 rounded-full bg-indigo-200 bg-blend-multiply filter blur-3xl"></div>

      {/* Illustration */}
      <Image
        className="hidden md:block absolute right-8 bottom-16 opacity-90"
        src="/images/undraw_stars.svg"
        style={{ width: "300px", height: "auto" }}
        width={0}
        height={0}
        alt="undraw-planet"
      />

      {/* -------------- Background Illustrations -------------- */}
      <Banner />
    </div>
  );
}
