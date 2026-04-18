import React from "react";
import Swipper from "./swipper/Swipper";
import SwipperImg1 from "../assets/banner-img.png";
import SwipperImg2 from "../assets/banner-img-2.png";

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
  ];

  return (
    <div>
      <Swipper data={data} imgHeight="80vh" imgWidth="100%" slidesPerView={1} />

      <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-16 lg:px-[40px] pointer-events-none z-10">
        <div className="text-white max-w-xl">
          <h4 className="text-sm sm:text-base font-medium tracking-wide text-gray-200">
            Smart Billing Solution for Small Shops
          </h4>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
            Manage Billing Faster & Smarter
          </h1>

          <h6 className="text-sm sm:text-base mt-3 text-gray-100 font-light">
            Add products, calculate bills, and track sales history effortlessly
            — all in one place.
          </h6>

          <a href="https://billing-software-pro.vercel.app/" target="_blank">
            <button className="mt-5 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition pointer-events-auto">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
