import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getPostsByCategoryId } from '@/utils/api'
import { cleanDataPosts } from '@/utils/functions'
import { TAGS } from '@/utils/constants'

import ImageMissing from './ImageMissing'
import PlayCircle from './ui/PlayCircle'
import Link from 'next/link'

export default async function GridLatestPosts({ id, categorySlug }) {
  const { posts: dataPosts } = await getPostsByCategoryId({ id })

  const cardPosts = cleanDataPosts({
    posts: dataPosts?.slice(0, 6),
    categorySlug,
  })

  if (!cardPosts) return null

  return (
    <div className=" w-full h-full flex justify-center">
      <ul className=" w-full h-full py-4 lg:my-4 grid grid-cols-3 gap-2 lg:gap-6 select-none">
        {cardPosts?.slice(0, 6).map((post) => (
          <ItemLatestPost
            key={post?.id}
            post={post}
            categorySlug={categorySlug}
          />
        ))}
      </ul>
    </div>
  )
}

const ItemLatestPost = ({ post, categorySlug }) => {
  const isVideo = post?.tags?.includes(TAGS.video.id) ? 'videos' : 'editorial'

  return (
    <li
      className={` w-full aspect-[3/4] col-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
    >
      <Link
        href={`/${categorySlug}/${isVideo}/${post?.slug}`}
        className=" w-full h-full rounded-[inherit]"
      >
        <div className=" relative z-0 w-full h-full rounded-[inherit]">
          {post?.images.length > 0 ? (
            <Image
              className={` relative w-full h-full max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
              width={220}
              height={220}
              src={post?.images[0]}
              alt={`Image ${post?.title}`}
            />
          ) : (
            <ImageMissing />
          )}
          <div className=" z-10 w-full h-full lg:h-[90%] absolute top-0 bg-black opacity-30 rounded-[inherit]"></div>
        </div>
        <div className=" z-20 w-full h-full p-2 flex items-end absolute bottom-0 pointer-events-none select-none">
          <h3
            className={` w-full line-clamp-3 first-letter:capitalize text-start text-[0.6rem] xs:text-xs sm:text-base md:text-lg lg:text-2xl text-white text-shadow-sm shadow-black pointer-events-none select-none`}
          >
            {parse(post?.title || '')}
          </h3>
        </div>
        {isVideo === 'videos' && (
          <div className="  z-20 absolute bottom-0 w-full h-full flex items-center justify-center ">
            <PlayCircle className=" w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
          </div>
        )}
      </Link>
    </li>
  )
}
