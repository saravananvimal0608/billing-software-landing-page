"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Swipper({
  data,
  imgHeight,
  freeMode = false,
  slidesPerView = 1,
  border=false
}) {
  return (
    <Swiper
      spaceBetween={30}
      effect={freeMode ? "slide" : "fade"}
      loop={true}
      speed={1000}
      slidesPerView={freeMode ? slidesPerView : 1}
      // image responsive
      breakpoints={
        freeMode
          ? {
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }
          : undefined
      }
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      freeMode={freeMode} // working in dynamic for feature and hero section
      modules={[EffectFade, Navigation, Pagination, Autoplay, FreeMode]}
      className="mySwiper"
    >
      {data?.map((d, index) => (
        <SwiperSlide key={index}>
          {/* Card Container */}
          <div className={`bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden ${border && "rounded-2xl"}`}>
            {/* Image Section */}
            <div style={{ height: imgHeight }} className="relative">
              <Image src={d?.img} alt={d?.alt} fill className="object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content Section */}
            {d.title && (
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {d.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2">{d.para}</p>

                <Link
                  href={"#"}
                  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                >
                  Learn More →
                </Link>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
