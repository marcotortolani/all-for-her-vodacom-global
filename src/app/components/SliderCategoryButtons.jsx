'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import PaginationBullets from './ui/PaginationBullets'

SwiperCore.use([Pagination])

const categButtons = [
  {
    id: 1,
    title: '',
    imgSrc: '/images/health-button.webp',
    href: '/health',
  },
  {
    id: 2,
    title: '',
    imgSrc: '/images/lifestyle-button.webp',
    href: '/lifestlye',
  },
  {
    id: 3,
    title: '',
    imgSrc: '/images/food-button.webp',
    href: '/food',
  },
  {
    id: 4,
    title: '',
    imgSrc: '/images/fashion-button.webp',
    href: '/fashion',
  },
  {
    id: 5,
    title: '',
    imgSrc: '/images/fitness-button.webp',
    href: '/fitness',
  },
  {
    id: 6,
    title: '',
    imgSrc: '/images/advice-button.webp',
    href: '/advice',
  },
]

const COLOR_BULLETS = 'white'
const SIZE_BULLETS = 'default'
const SLIDES_PER_VIEW = 3
const DELAY_PER_VIEW = 2500
const SPACE_BETWEEN_SLIDES = 0

export default function SliderCategoryButtons() {
  const [indexPag, setIndexPag] = useState(0)
  const sliderRef = useRef(0)

  const qtyBullets = Object.keys(categButtons).length - SLIDES_PER_VIEW + 1

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className)
      return null
    },
  }

  return (
    <div className=" z-30 absolute -bottom-10  w-full h-fit min-h-[120px]  flex flex-col items-center justify-end overflow-hidden  lg:hidden">
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
        className="mySwiper w-screen h-5/5 px-0 overflow-hidden flex justify-between items-center gap-6 "
      >
        {categButtons.map((el) => (
          <SwiperSlide
            className=" relative w-full h-fit  cursor-pointer"
            key={el.id}
          >
            <Link
              className=" w-full h-fit flex justify-center items-center hover:cursor-pointer "
              href={el.href}
            >
              <Image
                className=" w-5/6 min-w-[80px] max-w-[100px] sm:max-w-[120px] h-auto"
                width={90}
                height={90}
                src={el.imgSrc}
                alt={`Icono Categoría ${el.title}`}
                loading="eager"
              />
              <h4
                className={
                  ' absolute w-2/3 uppercase font-poppins italic font-medium text-center text-[0.8rem] sm:text-sm text-white text-shadow-sm shadow-black '
                }
              >
                {el.title}
              </h4>
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
  )
}
