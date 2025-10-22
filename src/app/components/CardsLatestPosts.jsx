import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { getPostsByCategoryId } from '@/utils/api'
import { cleanDataPosts, getLatestPosts } from '@/utils/functions'
import ButtonSeePost from './ui/ButtonSeePost'
import ButtonLikeFav from './ui/ButtonLikeFav'

import { poppinsReg400 } from '../../utils/fonts'
import ImageMissing from './ImageMissing'

export default async function CardsLatestPosts({ id, qty, categorySlug }) {
  const dataPosts = await getPostsByCategoryId({ id })

  const cardPosts = cleanDataPosts({
    posts: getLatestPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  })

  return (
    <div className=" w-screen h-full flex justify-center">
      <ul className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit lg:max-h-[800px] px-2 py-4 lg:my-4 grid grid-cols-2 grid-rows-1  gap-4 lg:gap-6 select-none">
        {cardPosts?.map((post) => (
          <li
            key={post?.id}
            className={` w-full h-full col-span-1 row-span-1  relative flex flex-col items-center justify-center rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl`}
          >
            <div className=" relative z-0 w-full h-full rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl">
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
            <div className=" z-20 w-full h-full p-4 pb-10 flex items-center absolute bottom-0  pointer-events-none select-none">
              <h3
                className={
                  poppinsReg400.className +
                  ` w-4/5 line-clamp-3 first-letter:capitalize text-start text-[0.6rem] xs:text-xs sm:text-base md:text-lg lg:text-2xl text-EpaWhite text-shadow-sm shadow-black pointer-events-none select-none`
                }
              >
                {parse(post?.title || '')}
              </h3>
            </div>
            <div className="  z-20 absolute bottom-0 w-full px-4 py-2 lg:px-6 lg:py-2  flex items-center justify-between bg-EpaPostButton rounded-[inherit] ">
              <ButtonSeePost
                id={post?.id}
                text="Ver"
                href={categorySlug + `/${post?.id}`}
                size="xs"
              />
              <ButtonLikeFav post={post} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
