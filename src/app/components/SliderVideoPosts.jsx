"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import PaginationBullets from "./ui/PaginationBullets";

SwiperCore.use([Pagination]);

import { poppinsReg400 } from "@/utils/fonts";
import videoIcon from "../../../public/assets/icons/IconoVideo2.webp";
import ImageMissing from "./ImageMissing";

export default function SliderVideoPosts({
  sliderElements,
  slidesPerView,
  spaceBetweenSlides,
  delayPerView,
  colorBullets,
  sizeBullets,
}) {
  const [indexPag, setIndexPag] = useState(0);
  const sliderRef = useRef(0);

  const qtyBullets = Object.keys(sliderElements).length - slidesPerView + 1;

  const pagination = {
    clickable: true,
    type: "custom",
    renderCustom: function (i, className) {
      setIndexPag(className);
      return null;
    },
  };
  return (
    <div className=" w-screen md:w-full  lg:max-w-4xl lg:w-full h-full px-2 md:px-0 lg:px-0 pt-2  ">
      {sliderElements.length > 0 && (
        <>
          <Swiper
            ref={sliderRef}
            slidesPerView={sliderElements.length === 1 ? 1 : slidesPerView}
            centeredSlides={false}
            spaceBetween={spaceBetweenSlides}
            autoplay={{
              delay: delayPerView,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={pagination}
            modules={[Autoplay, Navigation]}
            navigation={false}
            className="mySwiper w-full h-full px-0 overflow-hidden flex  items-center justify-center gap-0 "
          >
            {sliderElements?.map((post) => (
              <SwiperSlide
                className={` w-full min-w-[160px] h-full relative flex flex-col items-center justify-center`}
                key={post.id}
              >
                <Link
                  href={`/${post.category}/${post.id}`}
                  className="w-full h-full"
                >
                  <div className=" relative z-0 w-full h-full min-h-[100px] md:min-h-[180px] rounded-lg ">
                    {post.images.length > 0 ? (
                      <Image
                        className={` w-auto h-full object-cover rounded-[inherit]`}
                        // width={220}
                        // height={200}
                        fill={true}
                        sizes="(max-width: 250px)"
                        src={post.images[0]}
                        alt="Imagen"
                      />
                    ) : (
                      <ImageMissing />
                    )}
                    <div className=" z-10 w-full h-full absolute top-0 bg-black opacity-30 rounded-[inherit] "></div>
                  </div>

                  <div className=" z-20 w-full h-full p-2 flex flex-col items-start justify-end gap-2 absolute bottom-0 ">
                    <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center ">
                      <Image
                        className=" w-auto h-1/4 min-h-[20px] max-h-[60px]"
                        width={90}
                        height={90}
                        //   fill={true}
                        //   sizes="(max-width: 350px)"
                        src={videoIcon}
                        alt="Icono"
                      />
                    </div>
                    <h3
                      className={
                        poppinsReg400.className +
                        ` w-full h-1/3 text-start text-[0.6rem] sm:text-xs lg:text-base  text-EpaWhite text-shadow-sm leading-3 shadow-black `
                      }
                    >
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <PaginationBullets
            color={colorBullets}
            size={sizeBullets}
            qtyBullets={qtyBullets}
            index={indexPag}
          />
        </>
      )}
    </div>
  );
}
