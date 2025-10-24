import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { cleanDataPosts, getImageHeaderPost } from '@/utils/functions'
import { getDataPostBySlug } from '@/utils/api'

import ImageMissing from './ImageMissing'
import ButtonLikeFav from './ui/ButtonLikeFav'

export default async function PagePost({ slug, categorySlug }) {
  const [dataPost] = await getDataPostBySlug(slug)

  const contentPostParsed = parse(dataPost?.content.rendered)

  const post = cleanDataPosts({
    posts: new Array(dataPost),
    categorySlug: categorySlug,
  })

  return (
    <section className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-4 ">
      <div
        className={` bgpostButton w-full h-[20vh] min-h-[100px] max-h-[120px] sm:max-h-[150px] mb-4 relative flex flex-col items-center justify-center rounded-lg lg:rounded-xl`}
      >
        {post[0].images.length > 0 ? (
          <div className=" w-full h-full rounded-[inherit]">
            <Image
              className={`  w-full h-auto  object-cover rounded-[inherit]  `}
              // width={220}
              // height={160}
              fill={true}
              src={post[0].images[0]}
              alt="Imagen Header Post"
              loading="eager"
            />
          </div>
        ) : (
          <ImageMissing text={''} colorBg={'bg-primary'} />
        )}
        <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-30 line-clamp-1 content-normal rounded-[inherit]" />
        <div className=" z-20 w-full h-full py-[2%] flex flex-col items-center justify-end gap-8 absolute top-0">
          <h3
            className={` w-full px-6 font-poppins font-medium text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-shadow-sm leading-5 line-clamp-2 shadow-black`}
          >
            {parse(post[0]?.title || '')}
          </h3>
        </div>
        <div className="z-50 absolute top-0 m-2 p-2 right-0 w-14 h-10 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
          <ButtonLikeFav post={post[0]} />
        </div>
      </div>
      <div className=" post-parsed text-base sm:text-lg md:text-xl lg:text-2xl leading-4 sm:leading-5 md:leading-6 lg:leading-7 ">
        {contentPostParsed}
      </div>
    </section>
  )
}
