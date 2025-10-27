import React from 'react'
import { CATEGORIES } from '@/utils/static_data'
import SectionRecommended from '@/app/components/SectionRecommended'
import PagePost from '@/app/components/PagePost'

export default function page({ params }) {
  const { id } = params

  return (
    <main
      className={`z-0 mt-36 w-full h-full min-h-screen px-4 flex flex-col items-center gap-4`}
    >
      <PagePost id={id} />
      <SectionRecommended category={CATEGORIES.amor} qty={2} />
    </main>
  )
}
