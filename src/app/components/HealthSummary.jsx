import React from 'react'

import { CATEGORIES } from '@/utils/constants'
import SliderLatestPosts from './SliderLatestPosts'
import StaticCover from './StaticCover'

const staticCover = {
  id: 1,
  title: 'Health',
  imgSrc: '/images/health-banner.webp',
  href: '/health',
}

export default async function HealthSummary() {
  const cat = CATEGORIES.health

  return (
    <section className=" z-50 w-full h-fit mt-14 p-0 pb-1 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} />

      <div className=" w-full h-full pt-6 flex items-center justify-center ">
        <SliderLatestPosts id={cat.id} qty={4} categorySlug={cat.slug} />
      </div>
    </section>
  )
}
