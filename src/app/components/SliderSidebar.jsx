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
import { sliderSidebarCategories } from "@/utils/static_data";
import ImageMissing from "./ImageMissing";
SwiperCore.use([Pagination]);

const COLOR_BULLETS = "gray";
const SIZE_BULLETS = "sm";
const SLIDES_PER_VIEW = 1;
const DELAY_PER_VIEW = 3500;
const SPACE_BETWEEN_SLIDES = 10;

export default function SliderSidebar() {
  const [indexPag, setIndexPag] = useState(0);
  const sliderRef = useRef(0);

  const qtyBullets =
    Object.keys(sliderSidebarCategories).length - SLIDES_PER_VIEW + 1;

  const pagination = {
    clickable: true,
    type: "custom",
    renderCustom: function (i, className) {
      setIndexPag(className);
      return null;
    },
  };
  return (
    <div className=" w-auto h-[10vh] min-h-[100px] max-h-[150px] lg:hidden flex flex-col justify-between items-center">
      <Swiper
        ref={sliderRef}
        slidesPerView={SLIDES_PER_VIEW}
        centeredSlides={false}
        spaceBetween={SPACE_BETWEEN_SLIDES}
        autoplay={{
          delay: DELAY_PER_VIEW,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={pagination}
        modules={[Autoplay, Navigation]}
        navigation={false}
        className="mySwiper w-full h-full px-0 overflow-hidden overflow-x-scroll "
      >
        {sliderSidebarCategories?.map((el) => (
          <SwiperSlide
            className=" relative w-full h-full cursor-pointer "
            key={el.id}
          >
            <Link
              className=" relative w-full h-full flex justify-center items-center overflow-hidden hover:cursor-pointer rounded-lg"
              href={el.href}
            >
              {el.imgSrc ? (
                <Image
                  className=" w-auto object-cover "
                  fill={true}
                  sizes="(max-width: 250px)"
                  src={el.imgSrc}
                  alt={`Icono Categoría ${el.name}`}
                  loading="eager"
                />
              ) : (
                <ImageMissing />
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <PaginationBullets
        color={COLOR_BULLETS}
        size={SIZE_BULLETS}
        qtyBullets={qtyBullets}
        index={indexPag}
      />
    </div>
  );
}
