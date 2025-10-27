import React from 'react'
import { CATEGORIES } from '@/utils/constants'
import SectionRecommended from '@/app/components/SectionRecommended'
import PagePost from '@/app/components/PagePost'

export default async function page({ params }) {
  const { slug, category } = await params

  const getRandomCategory = () => {
    // get random category without the current category
    const categories = Object.values(CATEGORIES).filter(
      (c) => c.slug !== category
    )
    const randomIndex = Math.floor(Math.random() * categories.length)
    return categories[randomIndex]
  }

  return (
    <main
      className={`z-0 mt-0 mb-10 w-full h-full min-h-screen p-4 flex flex-col items-center gap-4 bg-white rounded-xl`}
    >
      <PagePost slug={slug} categorySlug={0} />
      <SectionRecommended category={getRandomCategory()} qty={6} />
    </main>
  )
}
