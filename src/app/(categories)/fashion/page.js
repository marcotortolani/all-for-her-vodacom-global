// src/app/(categories)/fashion/page.js
import React from 'react'
import { CATEGORIES } from '@/utils/constants'

import BannerCategory from '@/app/components/BannerCategory'
import GridPostsPagination from '@/app/components/pagination/GridPostsPagination'

const staticCover = {
  id: 1,
  title: 'Fashion',
  imgSrc: '/images/fashion-banner.webp',
  href: '/fashion',
}

export default function Page() {
  const cat = CATEGORIES.fashion

  return (
    <main className=" z-0 w-full h-full px-2 flex flex-col items-center justify-between overflow-x-hidden ">
      <BannerCategory elem={staticCover} />

      <GridPostsPagination category={cat} />

      <div className="w-full h-20"></div>
    </main>
  )
}
