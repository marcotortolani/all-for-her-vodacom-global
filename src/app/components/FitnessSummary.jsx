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
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit my-14 p-0 pb-1 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} buttonBgColor={'bg-gray-rose'} />

      <div className="relative w-screen px-4 h-full pt-6 flex items-center justify-center  ">
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
