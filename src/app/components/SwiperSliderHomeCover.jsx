'use client'
import React from 'react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import parse from 'html-react-parser'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import ButtonSeePost from './ui/ButtonSeePost'
import PaginationBullets from './ui/PaginationBullets'
import ImageMissing from './ImageMissing'
import { TAGS } from '@/utils/constants'

SwiperCore.use([Pagination])

export default function SwiperSliderHomeCover({
  posts,
  slidesPerView,
  delayPerView,
  spaceBetweenSlides,
  colorBullets,
  sizeBullets,
}) {
  const [indexPag, setIndexPag] = useState(0)
  const sliderRef = useRef(0)

  const qtyBullets = Object.keys(posts).length - slidesPerView + 1

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className)
      return null
    },
  }

  return (
    <div className=" z-30 relative top-0 w-screen h-full pb-10 lg:pb-28 flex flex-col items-center">
      <Swiper
        ref={sliderRef}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={spaceBetweenSlides}
        speed={3000}
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
        className="mySwiper w-full h-full px-0 overflow-hidden flex  items-center gap-0 "
      >
        {posts?.map((post, index) => {
          const isVideo =
            post?.tags?.includes(TAGS.video.id) || post?.video?.url?.length
              ? 'videos'
              : 'editorial'

          return (
            <SwiperSlide
              className={` w-full min-w-[160px] h-full relative flex flex-col items-center `}
              key={post?.id}
            >
              <div className=" -z-10 relative top-0 w-full h-[80vh] lg:h-full  min-h-[400px] overflow-hidden rounded-none md:rounded-b-[3rem] lg:rounded-b-[4rem] ">
                {post?.featured_image || post?.image ? (
                  <Image
                    className={`${
                      indexPag === index + 1 ? 'animation-image-bg' : ''
                    }  relative w-full h-auto lg:w-auto lg:h-full object-cover rounded-[inherit]`}
                    src={post?.featured_image[0] || post?.image}
                    fill={true}
                    priority
                    sizes="(max-width: 100vw)"
                    alt="Background Image"
                    style={{ animationDuration: `${delayPerView + 5000}ms` }}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className=" z-10 absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-[inherit]" />
              </div>
              <div className="absolute top-[25%] w-full h-2/3  px-4 flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full max-w-[800px] h-fit flex flex-col items-center justify-around gap-2 ">
                  <h2
                    className={
                      ' w-[95%] max-w-[800px] h-fit mb-4 pb-2 first-letter:capitalize font-abrilFatface line-clamp-3 text-nowrap text-5xl leading-tight md:text-6xl lg:text-7xl text-white text-center shadow-black/60 text-shadow-lg   '
                    }
                  >
                    {parse(post?.title || '')}
                  </h2>
                  <span className=" w-3/6  h-[3px] bg-white line-clamp-1 content-normal " />
                  <h4
                    className={
                      ' mb-4 font-openSans italic font-semibold line-clamp-1 text-md md:text:lg lg:text-xl text-white text-center first-letter:uppercase shadow-gray-800 text-shadow-sm'
                    }
                  >
                    {parse(post?.excerpt || '')}
                  </h4>
                </div>

                <ButtonSeePost
                  text="Ver más"
                  href={`/${isVideo}/${post?.slug}`}
                  size="md"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className=" z-50 absolute bottom-36 hidden xl:flex">
        <PaginationBullets
          color={colorBullets}
          size={sizeBullets}
          qtyBullets={qtyBullets}
          index={indexPag}
        />
      </div>
    </div>
  )
}
