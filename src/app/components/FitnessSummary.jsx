import React from 'react'

import { CATEGORIES } from '@/utils/constants'
import SliderLatestPosts from './SliderLatestPosts'
import StaticCover from './StaticCover'

const staticCover = {
  id: 1,
  title: 'Fitness',
  imgSrc: '/images/fitness-banner.webp',
  href: '/fitness',
}

export default async function FitnessSummary() {
  const cat = CATEGORIES.fitness

  return (
    <section className=" z-50 w-full h-fit my-10 p-0 pb-1 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} buttonBgColor={'bg-gray-rose'} />

      <div className="relative w-full h-full pt-6 flex items-center justify-center  ">
        <SliderLatestPosts
          id={cat.id}
          qty={4}
          categorySlug={cat.slug}
          buttonBgColor={'bg-gray-rose'}
        />
      </div>
    </section>
  )
}
