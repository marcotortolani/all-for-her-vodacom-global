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
import ButtonSeePost from './ui/ButtonSeePost'
import { TAGS } from '@/utils/constants'
import PlayCircle from './ui/PlayCircle'

SwiperCore.use([Pagination])

export default function SwiperSliderPosts({
  posts,
  categorySlug,
  delayPerView,
  buttonBgColor = 'bg-primary',
}) {
  return (
    <Swiper
      className="relative w-full h-full lg:min-h-[250px] flex justify-center items-center gap-6 "
      centeredSlides={false}
      autoplay={{
        delay: delayPerView,
        disableOnInteraction: false,
      }}
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={false}
      pagination={true}
    >
      {posts?.map((post) => {
        const isVideo =
          post?.tags?.includes(TAGS.video.id) || post?.video?.url?.length
            ? 'videos'
            : 'editorial'

        return (
          <SwiperSlide
            className={`relative pb-10 w-full h-full`}
            key={post?.id}
          >
            <div
              key={post?.id}
              className={` w-full aspect-[3/4] relative overflow-hidden flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              <Link
                href={`/${categorySlug}/${isVideo}/${post?.slug}`}
                className=" relative z-0 w-full h-full rounded-[inherit] hover:scale-110 transition-all duration-500 ease-in-out"
              >
                {post?.featured_image || post?.images.length > 0 ? (
                  <Image
                    className={` relative w-full h-full object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
                    width={220}
                    height={220}
                    src={post?.featured_image[0] || post?.images[0]}
                    alt={`Image ${post?.title}`}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className=" z-10 w-full h-full flex items-center justify-center absolute top-0 bg-black/30 rounded-[inherit]">
                  {isVideo === 'videos' && <PlayCircle />}
                </div>
              </Link>

              <div className="  z-20 absolute bottom-0 w-full px-4 py-2 lg:px-6 lg:py-2  flex flex-col items-start justify-end gap-2 rounded-[inherit] pointer-events-none ">
                <h3
                  className={` w-5/6 line-clamp-3 first-letter:capitalize text-left text-sm sm:text-base md:text-lg lg:text-2xl text-white text-shadow-sm shadow-black pointer-events-none select-none`}
                >
                  {parse(post?.title || '')}
                </h3>
                <ButtonSeePost
                  id={post?.id}
                  href={`/${categorySlug}/${isVideo}/${post?.slug}`}
                  size="sm"
                  bgColor={buttonBgColor}
                />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
