'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import parse from 'html-react-parser'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import ImageMissing from './ImageMissing'
import { TAGS } from '@/utils/constants'
import PlayCircle from './ui/PlayCircle'

SwiperCore.use([Pagination])

export default function SliderRecommended({ posts, categorySlug }) {
  return (
    <Swiper
      centeredSlides={false}
      autoplay={{
        delay: 5500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay, Navigation]}
      navigation={false}
      className="mySwiper w-full max-w-2xl md:max-w-2xl lg:max-w-4xl h-full lg:min-h-[250px] px-0 overflow-hidden flex justify-center items-center gap-6 "
    >
      {posts?.map((post) => {
        const isVideo = post?.tags?.includes(TAGS.video.id)
          ? 'video'
          : 'editorial'
        return (
          <SwiperSlide className={` w-full  h-full`} key={post?.id}>
            <div
              key={post?.id}
              className={` w-full aspect-[3/4] relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              <Link
                href={`/${categorySlug}/${isVideo}/${post?.slug}`}
                className=" w-full h-full rounded-[inherit]"
              >
                <div className=" relative z-0 w-full h-full rounded-[inherit]">
                  {post?.images.length > 0 ? (
                    <Image
                      className={` relative w-full h-full object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
                      width={220}
                      height={220}
                      src={post?.images[0]}
                      alt={`Image ${post?.title}`}
                    />
                  ) : (
                    <ImageMissing />
                  )}
                  <div className=" z-10 w-full h-full flex items-center justify-center absolute top-0 bg-black/30 rounded-[inherit]">
                    {isVideo === 'video' && <PlayCircle />}
                  </div>
                </div>

                <div className="  z-20 absolute bottom-0 w-full px-2 py-2 lg:px-4 lg:py-2  flex flex-col items-start justify-end gap-2 rounded-[inherit] ">
                  <h3
                    className={` w-full line-clamp-3 first-letter:capitalize text-left text-xs sm:text-sm md:text-base lg:text-xl text-white text-shadow-sm shadow-black pointer-events-none select-none`}
                  >
                    {parse(post?.title || '')}
                  </h3>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
