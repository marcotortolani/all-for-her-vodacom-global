import React from 'react'
import { CATEGORIES } from '@/utils/constants'
import SectionRecommended from '@/app/components/SectionRecommended'
import VideoPost from '@/app/components/VideoPost'

export default function page({ params }) {
  const { slug } = params

  return (
    <main
      className={`z-0 mt-0 mb-10 w-full h-full p-4 pb-10 flex flex-col items-center gap-4 bg-white rounded-xl`}
    >
      <VideoPost slug={slug} categorySlug={0} />
      <SectionRecommended category={CATEGORIES['health']} qty={6} />
    </main>
  )
}
