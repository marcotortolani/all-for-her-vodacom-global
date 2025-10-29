import React from 'react'

import { CATEGORIES } from '@/utils/constants'
import StaticCover from './StaticCover'
import GridLatestPosts from './GridLatestPosts'

const staticCover = {
  id: 1,
  title: 'Food',
  imgSrc: '/images/food-banner.webp',
  href: '/food',
}

export default async function FoodSummary() {
  const cat = CATEGORIES.food

  return (
    <section className=" z-50 w-full h-fit p-0 pb-1 mt-10 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} buttonBgColor="bg-gray-rose" />

      <GridLatestPosts id={cat.id} categorySlug={cat.slug} />
    </section>
  )
}
