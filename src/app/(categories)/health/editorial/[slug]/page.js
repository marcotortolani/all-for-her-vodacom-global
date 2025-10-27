import React from 'react'
import { CATEGORIES } from '@/utils/constants'
import SectionRecommended from '@/app/components/SectionRecommended'
import PagePost from '@/app/components/PagePost'

export default function page({ params }) {
  const { slug } = params

  return (
    <main
      className={`z-0 mt-0 mb-10 w-full h-full min-h-screen p-4 flex flex-col items-center gap-4 bg-white rounded-xl`}
    >
      <PagePost slug={slug} categorySlug={'health'} />
      <SectionRecommended category={CATEGORIES.food} qty={6} />{' '}
    </main>
  )
}
