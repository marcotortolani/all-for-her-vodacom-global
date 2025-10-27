import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getPostsByCategoryId } from '@/utils/api'
import { cleanDataPosts } from '@/utils/functions'
import ButtonSeePost from './ui/ButtonSeePost'
import ButtonLikeFav from './ui/ButtonLikeFav'

import ImageMissing from './ImageMissing'
import { TAGS } from '@/utils/constants'
import PlayCircle from './ui/PlayCircle'

export default async function CardsLatestPosts({ id, qty, categorySlug }) {
  const { posts: dataPosts } = await getPostsByCategoryId({ id })

  const cardPosts = cleanDataPosts({
    posts: dataPosts?.slice(0, qty) || [],
    categorySlug,
  })

  if (!cardPosts || cardPosts.length === 0) return null

  return (
    <div className=" w-full h-full flex justify-center">
      <ul className=" w-full h-full py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-4 lg:gap-6 select-none">
        {cardPosts?.map((post) => {
          const isVideo = post?.tags?.includes(TAGS.video.id)
            ? 'video'
            : 'editorial'
          return (
            <li
              key={post?.id}
              className={` w-full aspect-[5/6] col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
            >
              <div className=" relative z-0 w-full h-full rounded-[inherit]">
                {post?.images.length > 0 ? (
                  <Image
                    className={` relative w-full h-full object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
                    width={220}
                    height={220}
                    src={post?.images[0]}
                    alt={`Image ${post?.title}`}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className=" z-10 absolute top-0 w-full h-full flex items-center justify-center bg-black/30 rounded-[inherit]">
                  {isVideo == 'video' && <PlayCircle />}
                </div>
              </div>
              <div className="z-20 absolute bottom-0 w-full h-full pb-0 flex flex-col items-center justify-end gap-2 select-none rounded-b-[inherit]">
                <h3
                  className={` w-5/6 line-clamp-3 first-letter:capitalize text-start text-[0.6rem] xs:text-sm sm:text-base md:text-lg lg:text-2xl text-white text-shadow-sm shadow-black pointer-events-none select-none`}
                >
                  {parse(post?.title || '')}
                </h3>
                <div className=" z-20 w-full px-4 py-2 lg:px-6 lg:py-2  flex items-center justify-between bg-primary-extralight rounded-b-[inherit] ">
                  <ButtonSeePost
                    id={post?.id}
                    text="Ver"
                    href={`/${categorySlug}/${isVideo}/${post?.slug}`}
                    size="xs"
                    bgColor="bg-black"
                  />
                  <ButtonLikeFav post={post} heartStrokeColor="text-white" />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
