import React from "react";
import Swipper from "./swipper/Swipper";
import SwipperImg1 from "../assets/hero.png";
import SwipperImg2 from "../assets/hero.png";
import SwipperImg3 from "../assets/hero.png";
import SwipperImg4 from "../assets/hero.png";
import SwipperImg5 from "../assets/hero.png";

const HeroSection = () => {
  const data = [
    {
      img: SwipperImg1,
      alt: "banner-img",
    },
    {
      img: SwipperImg2,
      alt: "banner-img",
    },
    {
      img: SwipperImg3,
      alt: "banner-img",
    },
    {
      img: SwipperImg4,
      alt: "banner-img",
    },
    {
      img: SwipperImg5,
      alt: "banner-img",
    },
  ];

  return (
    <div >
      <Swipper
        data={data}
        imgHeight="80vh"
        imgWidth="100%"
        slidesPerView={1}
      />

      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-16 lg:px-[40px] pointer-events-none z-10">
        <div className="text-white max-w-xl">
          <h4 className="text-sm sm:text-base font-medium tracking-wide text-gray-200">
            Your Trusted Wealth Creation Partner
          </h4>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            Dream Rich, Dare to Reach!
          </h1>

          <h6 className="text-sm sm:text-base mt-3 text-gray-100 font-light">
            Empower your future with smart investments.
          </h6>

          <button className="mt-5 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
