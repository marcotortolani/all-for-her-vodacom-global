import React from 'react'

import { CATEGORIES } from '@/utils/constants'
import StaticCover from './StaticCover'
import CardsLatestPosts from './CardsLatestPosts'

const staticCover = {
  id: 1,
  title: 'Lifestyle',
  imgSrc: '/images/lifestyle-banner.webp',
  href: '/lifestyle',
}

export default async function LifestyleSummary() {
  const cat = CATEGORIES.lifestyle

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit p-0 pb-1 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} buttonBgColor="bg-primary-extralight" />

      <CardsLatestPosts id={cat.id} qty={4} categorySlug={cat.slug} />
    </section>
  )
}
