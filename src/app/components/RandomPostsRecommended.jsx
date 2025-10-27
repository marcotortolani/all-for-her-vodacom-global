import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

import { getPostsByCategoryId } from '@/utils/api.js'
import { getRandomPosts, cleanDataPosts } from '@/utils/functions.js'

import ButtonLikeFav from './ui/ButtonLikeFav.jsx'
import ImageMissing from './ImageMissing.jsx'

export default async function RandomPostsRecommended({
  id,
  qty,
  categorySlug,
}) {
  const { posts: dataPosts } = await getPostsByCategoryId({ id })
  const randomPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataPosts, qty: qty }),
    categorySlug: categorySlug,
  })

  return (
    <div className=" w-screen md:w-full h-full flex justify-center ">
      <ul className=" w-full h-full  flex flex-col items-center md:gap-6">
        {randomPosts?.map((post, index) => (
          <li
            key={post?.id}
            className={` relative w-full h-full min-h-[200px] max-h-[200px] md:min-h-[300px] md:max-h-[300px] lg:max-h-[380px] p-4 lg:p-8 my-2 mt-0 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 md:rounded-xl lg:rounded-2xl md:bg-primary md:bg-opacity-75 ${
              index % 2 !== 0 ? 'bg-none' : ' bg-slate-400 bg-opacity-20 '
            } `}
          >
            <div
              className={`relative w-full   col-span-1 lg:col-span-3   ${
                index % 2 !== 0 ? 'order-first' : 'order-last'
              } `}
            >
              {post?.images.length > 0 ? (
                <Image
                  className={` absolute w-auto h-full   object-center object-cover  rounded-lg md:rounded-xl lg:rounded-2xl`}
                  fill={true}
                  src={post?.images[0]}
                  alt={`Image ${post?.title}`}
                />
              ) : (
                <ImageMissing />
              )}
            </div>

            <div className=" relative col-span-1 lg:col-span-2 h-full flex flex-col gap-2 md:gap-2 lg:gap-4 ">
              <div className=" w-full h-fit max-h-[80px] md:mb-1 lg:mb-2  flex items-start justify-between md:gap-2 ">
                <h3
                  className={`  mb-0 line-clamp-3 font-poppins font-semibold text-start first-letter:uppercase text-xs md:text-lg lg:text-xl xl:text-2xl leading-3 md:leading-5 lg:leading-6 text-black md:text-white `}
                >
                  {parse(post?.title || '')}
                </h3>

                <div className=" px-2 md:px-0 lg:py-1">
                  <ButtonLikeFav post={post} />
                </div>
              </div>
              <p
                className={
                  ' w-full h-fit  lg:max-h-28 xl:max-h-36 overflow-hidden font-poppins font-normal text-[0.55rem] md:text-sm lg:text-base md:text-white leading-3 md:leading-5 lg:leading-5 line-clamp-6 '
                }
              >
                {parse(post?.excerpt || '')}
              </p>

              <div className=" z-20 absolute bottom-0 w-full h-1/6 px-2 py-4 md:px-4 lg:py-6 flex items-center justify-between bgpostButton rounded-b-lg">
                <Link
                  className={
                    ' font-poppins font-semibold text-primary text-sm md:text-lg lg:text-2xl underline'
                  }
                  href={`/${post?.category}/${post?.id}`}
                >
                  Ver más
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
