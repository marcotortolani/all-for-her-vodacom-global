import React from 'react'

import { CATEGORIES } from '@/utils/constants'
import StaticCover from './StaticCover'
import CardsLatestPosts from './CardsLatestPosts'

const staticCover = {
  id: 1,
  title: 'Advice',
  imgSrc: '/images/advice-banner.webp',
  href: '/advice',
}

export default async function AdviceSummary() {
  const cat = CATEGORIES.advice

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit p-0 pb-1 relative top-0 flex flex-col items-center">
      <StaticCover elem={staticCover} buttonBgColor="bg-primary-extralight" />

      <CardsLatestPosts id={cat.id} qty={4} categorySlug={cat.slug} />
    </section>
  )
}
