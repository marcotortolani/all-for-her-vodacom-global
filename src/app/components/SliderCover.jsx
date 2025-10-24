'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import parse from 'html-react-parser'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import PaginationBullets from './ui/PaginationBullets'
import ButtonSeePost from './ui/ButtonSeePost'

SwiperCore.use([Pagination])

import iconEye from '../../../public/old/icons/IconoOjo.png'
import ImageMissing from './ImageMissing'

export default function SliderCover({
  sliderElements,
  tagElement,
  slidesPerView,
  spaceBetweenSlides,
  delayPerView,
  colorBullets,
  sizeBullets,
}) {
  const [indexPag, setIndexPag] = useState(0)
  const sliderRef = useRef(0)

  const qtyBullets = Object.keys(sliderElements).length - slidesPerView + 1

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className)
      return null
    },
  }
  return (
    <div className=" w-full px-0 h-fit ">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
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
        className="mySwiper w-full h-full px-0 overflow-hidden flex justify-between items-center gap-6 "
      >
        {sliderElements?.map((elem, index) => (
          <SwiperSlide className={` w-full h-fit`} key={elem.id + '-' + index}>
            <div
              className={` w-full  h-[30vh] min-h-[150px] max-h-[200px] sm:max-h-[250px] relative flex flex-col items-center justify-center rounded-lg `}
            >
              <div className=" w-full h-full rounded-[inherit]">
                {tagElement && (
                  <span
                    className={` z-20 absolute top-4 left-4 p-1 font-poppins font-medium text-xs capitalize text-primary bgpostButton rounded-md `}
                  >
                    {elem.category}
                  </span>
                )}
                {elem.images.length ? (
                  <Image
                    className={`  w-full h-auto  object-cover rounded-[inherit]  `}
                    // width={220}
                    // height={160}
                    fill={true}
                    src={elem.images[0]}
                    alt="Imagen"
                    loading="eager"
                  />
                ) : (
                  <ImageMissing text={''} colorBg={'bg-primary'} />
                )}
              </div>

              <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-20 line-clamp-1 content-normal rounded-[inherit]" />
              <div className=" z-20 w-full h-full py-[5%] flex flex-col items-center justify-end gap-8 absolute top-0">
                <ButtonSeePost
                  text="Ver"
                  href={'/' + elem.category + `/${elem.id}`}
                  size="xs"
                  icon={iconEye}
                />
                <h3
                  className={` w-full px-6 font-poppins font-medium text-left text-lg md:text-xl xl:text-2xl text-white text-shadow-sm leading-5 line-clamp-2 shadow-black`}
                >
                  {parse(elem.title)}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <PaginationBullets
        color={colorBullets}
        size={sizeBullets}
        qtyBullets={qtyBullets}
        index={indexPag}
      />
    </div>
  )
}
