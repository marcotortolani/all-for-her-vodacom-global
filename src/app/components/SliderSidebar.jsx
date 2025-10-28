'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import PaginationBullets from './ui/PaginationBullets'
import ImageMissing from './ImageMissing'
import { cleanDataPosts } from '@/utils/functions'
import { getData } from '@/utils/api'
import { TAGS } from '@/utils/constants'
SwiperCore.use([Pagination])

const COLOR_BULLETS = 'gray'
const SIZE_BULLETS = 'sm'
const SLIDES_PER_VIEW = 1
const DELAY_PER_VIEW = 3500
const SPACE_BETWEEN_SLIDES = 10

export default function SliderSidebar() {
  const [indexPag, setIndexPag] = useState(0)
  const [posts, setPosts] = useState([])
  const sliderRef = useRef(0)

  const qtyBullets = posts.length - SLIDES_PER_VIEW + 1

  const pagination = {
    clickable: true,
    type: 'custom',
    renderCustom: function (i, className) {
      setIndexPag(className)
      return null
    },
  }

  useEffect(() => {
    const getLatestPosts = async () => {
      const { data: dataPosts } = await getData(`posts?per_page=5`)

      const newRandomPosts = cleanDataPosts({
        posts: dataPosts,
      })
      setPosts(newRandomPosts)
    }
    getLatestPosts()
  }, [])

  return (
    <div className=" w-full aspect-square lg:hidden flex flex-col justify-between items-center">
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
        {posts?.map((post) => {
          const isVideo =
            post?.tags?.includes(TAGS.video.id) || post?.video?.url?.length
              ? 'videos'
              : 'editorial'
          return (
            <SwiperSlide
              className=" relative w-full h-full cursor-pointer "
              key={post.id}
            >
              <Link
                className=" relative w-full h-full flex justify-center items-center overflow-hidden hover:cursor-pointer rounded-lg"
                href={`/${isVideo}/${post.slug}`}
              >
                {post?.featured_image || post.images[0] ? (
                  <Image
                    className=" w-auto object-cover "
                    fill={true}
                    sizes="(max-width: 250px)"
                    src={post?.featured_image[0] || post.images[0]}
                    alt={`Icono Categoría ${post.name}`}
                    loading="eager"
                  />
                ) : (
                  <ImageMissing />
                )}
              </Link>
            </SwiperSlide>
          )
        })}
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
