import React from 'react'
import { CATEGORIES } from '@/utils/static_data'
import { getData } from '@/utils/api'
import FeaturedPosts from '@/app/components/FeaturedPosts'
import CardsVideoPost from '@/app/components/CardsVideoPost'

const videoTagId = 14

function cleanDataCategories({ dataCategories }) {
  return dataCategories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }))
}

export default async function VideosPage() {
  const cat = CATEGORIES.videos

  const dataCategories = await getData('categories?per_page=50')

  const dataCatCleaned = cleanDataCategories({ dataCategories })
  const categoryID = dataCatCleaned.find((categ) => categ.name === cat.name).id

  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        {/* Ver videos simples, sin contenidos */}
        <FeaturedPosts
          id={categoryID}
          qty={'all'}
          categorySlug={cat.slug}
          tagExclude={videoTagId}
        />

        {/* Ver video-posts de todas las categorias, con contenido */}
        <CardsVideoPost id={categoryID} dataCatCleaned={dataCatCleaned} />

        <div className="w-full h-20"></div>
      </div>
    </main>
  )
}
