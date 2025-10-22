'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { useState, useRef } from 'react'
import { poppinsReg500, poppinsReg600 } from '../../utils/fonts'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import PaginationBullets from './ui/PaginationBullets'
import ButtonLikeFav from './ui/ButtonLikeFav'
import ImageMissing from './ImageMissing'

SwiperCore.use([Pagination])

export default function SwiperSliderPosts({
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
    <div className=" w-full px-4 lg:px-0 h-fit  ">
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
        className="mySwiper w-full  max-w-2xl md:max-w-2xl lg:max-w-4xl h-full lg:min-h-[250px] px-0 overflow-hidden flex justify-center items-center gap-6 "
      >
        {posts?.map((post) => (
          <SwiperSlide className={` w-full  h-fit`} key={post?.id}>
            <div className={`  h-fit  grid grid-cols-2 lg:grid-cols-5 gap-4`}>
              <div className=" col-span-1 lg:col-span-3 relative w-full h-full min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ">
                {post?.images.length > 0 ? (
                  <Image
                    className={` w-auto h-full md:w-full md:h-auto  object-cover rounded-lg`}
                    // width={200}
                    // height={200}
                    fill={true}
                    sizes="(max-width: 350px)"
                    src={post?.images[0]}
                    alt={`Image ${post?.title}`}
                  />
                ) : (
                  <ImageMissing />
                )}
              </div>

              <div className="  col-span-1 lg:col-span-2 w-full  h-full flex flex-col justify-between">
                <div className="  w-full  h-1/6 md:h-1/5 lg:h-1/4 mb-1 flex items-start justify-between ">
                  <h3
                    className={
                      poppinsReg600.className +
                      `  text-start text-xs sm:text-sm md:text-base lg:text-xl leading-3 md:leading-[1.1rem] lg:leading-[1.4rem] text-black md:text-EpaWhite`
                    }
                  >
                    {parse(post?.title || '')}
                  </h3>
                  <div className=" px-2">
                    <ButtonLikeFav post={post} />
                  </div>
                </div>
                <p
                  className={
                    poppinsReg500.className +
                    ' w-full h-full max-h-20 md:max-h-28 lg:max-h-32   text-[0.55rem] md:text-sm lg:text-base leading-3 lg:leading-4 text-black md:text-EpaWhite overflow-hidden '
                  }
                >
                  {parse(post?.excerpt || '')}
                </p>

                <div className=" z-20 w-full h-1/6 lg:h-1/5 px-2 lg:px-6 py-4 flex items-center justify-between bg-EpaPostButton rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl">
                  <Link
                    className={
                      poppinsReg600.className +
                      '  text-EpaPrimary text-sm md:text-lg lg:text-2xl underline'
                    }
                    href="/bienestar/[id]"
                    as={'/bienestar/' + post?.id}
                  >
                    Ver más
                  </Link>
                </div>
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
