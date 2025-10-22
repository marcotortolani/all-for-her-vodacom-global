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

import { abrilFatface, openSansItalic } from '../../utils/fonts'
import ButtonSeePost from './ui/ButtonSeePost'
import PaginationBullets from './ui/PaginationBullets'
import ImageMissing from './ImageMissing'

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
    <div className=" z-30 relative top-0 w-screen h-full lg:h-screen lg:max-h-[700px]  pb-10 lg:pb-0 flex flex-col items-center">
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
        className="mySwiper w-full h-full px-0 overflow-hidden flex  items-center gap-0 "
      >
        {posts?.map((post, index) => (
          <SwiperSlide
            className={` w-full min-w-[160px] h-full relative flex flex-col items-center `}
            key={post?.id}
          >
            <div className=" -z-10 relative top-0 w-full h-[80vh] lg:h-full  min-h-[400px] overflow-hidden drop-shadow-lg shadow-md lg:shadow-none shadow-gray-600 rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] ">
              {post?.image ? (
                <Image
                  className={`${
                    indexPag === index + 1 ? 'animation-image-bg' : ''
                  }  relative w-full h-auto lg:w-auto lg:h-full object-cover rounded-[inherit]`}
                  src={post?.image}
                  fill={true}
                  priority
                  sizes="(max-width: 100vw)"
                  alt="Background Image"
                  style={{ animationDuration: `${delayPerView + 5000}ms` }}
                />
              ) : (
                <ImageMissing />
              )}
              <div className=" z-10 absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-zinc-700 to-transparent rounded-[inherit]" />
            </div>
            <div className="absolute top-[25%] w-full h-2/3  px-4 flex flex-col items-center justify-center gap-4 ">
              <div className=" w-full max-w-[800px] h-fit flex flex-col items-center justify-around gap-2 ">
                <h2
                  className={
                    abrilFatface.className +
                    ' w-full max-w-[800px] h-fit mb-4 pb-2 first-letter:capitalize line-clamp-2 text-5xl md:text-6xl lg:text-7xl text-EpaWhite text-center shadow-gray-600 text-shadow-lg   '
                  }
                >
                  {parse(post?.title || '')}
                </h2>
                <span className=" w-3/6  h-[3px] bg-EpaWhite line-clamp-1 content-normal " />
                <h4
                  className={
                    openSansItalic.className +
                    ' mb-4 font-semibold line-clamp-1 text-md md:text:lg lg:text-xl text-EpaWhite text-center first-letter:uppercase shadow-gray-800 text-shadow-sm'
                  }
                >
                  {parse(post?.excerpt || '')}
                </h4>
              </div>

              <ButtonSeePost
                text="Ver más"
                href={`/${post?.category}/${post?.id}`}
                size="md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" z-50 absolute bottom-6 hidden lg:flex">
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
