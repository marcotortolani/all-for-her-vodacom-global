import React from 'react'
import HorizontalLine from './ui/HorizontalLine'

import { getPostsByCategoryId } from '@/utils/api'
import { cleanDataPosts } from '@/utils/functions'
import SliderRecommended from './SliderRecommended'

export default async function SectionRecommended({ category, qty }) {
  const { posts: dataPosts } = await getPostsByCategoryId({ id: category.id })

  const posts = cleanDataPosts({
    posts: dataPosts?.slice(0, qty + 1),
    categorySlug: category.slug,
  })

  return (
    <section className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-4">
      <div className=" w-full flex flex-col items-center">
        <div className=" w-full h-fit ">
          <HorizontalLine size="xs" />
          <h4
            className={
              ' mb-2 font-poppins font-medium text-sm md:text-lg lg:text-xl'
            }
          >
            Podría interesarte
          </h4>
        </div>

        <SliderRecommended posts={posts} categorySlug={category.slug} />
      </div>
    </section>
  )
}
