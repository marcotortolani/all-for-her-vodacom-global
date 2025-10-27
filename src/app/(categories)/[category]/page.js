// src/app/(categories)/food/page.js
import React from 'react'
import { CATEGORIES } from '@/utils/constants'

import BannerCategory from '@/app/components/BannerCategory'
import GridPostsPagination from '@/app/components/pagination/GridPostsPagination'

const staticCover = {
  fashion: {
    id: 1,
    title: 'Fashion',
    imgSrc: '/images/fashion-banner.webp',
    href: '/fashion',
  },
  fitness: {
    id: 2,
    title: 'Fitness 1',
    imgSrc: '/images/fitness-banner.webp',
    href: '/fitness',
  },
  food: {
    id: 3,
    title: 'Food',
    imgSrc: '/images/food-banner.webp',
    href: '/food',
  },
  health: {
    id: 4,
    title: 'Health',
    imgSrc: '/images/health-banner.webp',
    href: '/health',
  },
  advice: {
    id: 5,
    title: 'Advice',
    imgSrc: '/images/advice-banner.webp',
    href: '/advice',
  },
  lifestyle: {
    id: 6,
    title: 'Lifestyle',
    imgSrc: '/images/lifestyle-banner.webp',
    href: '/lifestyle',
  },
}

export default function Page({ params }) {
  const { category } = params
  const cat = CATEGORIES[category]

  return (
    <main className=" z-0 w-full h-full px-2 flex flex-col items-center justify-between overflow-x-hidden ">
      <BannerCategory elem={staticCover[category]} />

      <GridPostsPagination category={cat} />

      <div className="w-full h-20"></div>
    </main>
  )
}
