import React from 'react'
import { getPostsByCategoryId } from '@/utils/api'
import { cleanDataPosts } from '@/utils/functions'
import SwiperSliderPosts from './SwiperSliderPosts'

export default async function SliderLatestPosts({
  id,
  qty,
  categorySlug,
  buttonBgColor = 'bg-primary',
}) {
  const { posts: dataPosts } = await getPostsByCategoryId({ id })

  if (!dataPosts || dataPosts.length === 0) return null

  const randomPosts = cleanDataPosts({
    posts: dataPosts?.slice(0, qty) || [],
    categorySlug,
  })

  return (
    <SwiperSliderPosts
      posts={randomPosts}
      categorySlug={categorySlug}
      slidesPerView={1}
      delayPerView={3500}
      spaceBetweenSlides={30}
      colorBullets={'primary'}
      sizeBullets={'default'}
      buttonBgColor={buttonBgColor}
    />
  )
}
