import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { cleanDataPosts } from '@/utils/functions'
import { getDataPostBySlug } from '@/utils/api'

import ImageMissing from './ImageMissing'
import ButtonLikeFav from './ui/ButtonLikeFav'
import { sanitizeContent } from '@/lib/utils'

export default async function PagePost({ slug, categorySlug }) {
  const [dataPost] = await getDataPostBySlug(slug)

  if (!dataPost) return null

  const content = sanitizeContent(dataPost.content?.rendered)

  const post = cleanDataPosts({
    posts: new Array(dataPost),
    categorySlug: categorySlug,
  })

  return (
    <section className="relative w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-4 ">
      <div className="z-50 absolute top-0 right-0 translate-x-2 -translate-y-2 flex items-center justify-center ">
        <ButtonLikeFav post={post[0]} />
      </div>
      <h3
        className={` w-full pr-4 font-abrilFatface font-medium text-left text-4xl md:text-5xl lg:text-6xl text-black `}
      >
        {parse(post[0]?.title || '')}
      </h3>

      <div
        className={` bgpostButton w-full h-[20vh] min-h-[100px] max-h-[120px] sm:max-h-[150px] mb-4 relative flex flex-col items-center justify-center rounded-lg lg:rounded-xl`}
      >
        {post?.featured_image || post[0].images.length > 0 ? (
          <div className=" w-full h-full rounded-[inherit]">
            <Image
              className={`  w-full h-auto  object-cover rounded-[inherit]  `}
              fill={true}
              src={
                post?.featured_image?.[0] ||
                post[0].images[1] ||
                post[0].images[0]
              }
              alt="Imagen Header Post"
              loading="eager"
            />
          </div>
        ) : (
          <ImageMissing colorBg={'bg-primary'} />
        )}

        <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-30 line-clamp-1 content-normal rounded-[inherit]" />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-black my-2 font-normal text-sm leading-[1.3rem] md:text-[1rem] md:leading-[1.45rem]"
      ></div>
    </section>
  )
}
