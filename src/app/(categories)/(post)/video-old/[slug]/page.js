import React from 'react'
import { CATEGORIES } from '@/utils/static_data'
import SectionRecommended from '@/app/components/SectionRecommended'
import VideoPost from '@/app/components/VideoPost'

export default function page({ params }) {
  const { slug } = params

  return (
    <main
      className={`z-0 mt-36 w-full h-full min-h-screen px-4 flex flex-col items-center gap-4`}
    >
      <VideoPost slug={slug} categorySlug={0} />
      <SectionRecommended category={CATEGORIES.health} qty={2} />
    </main>
  )
}
