import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'

import { getVideoPostsByCategoryId } from '@/utils/api.js'
import { cleanDataPosts } from '@/utils/functions.js'

import { poppinsReg400, poppinsReg600 } from '../../utils/fonts.js'
import ButtonLikeFav from './ui/ButtonLikeFav.jsx'
import ImageMissing from './ImageMissing.jsx'

export default async function CardsVideoPosts({ id, dataCatCleaned }) {
  //const qtyVideoElements = 4;
  const dataVideoPosts = await getVideoPostsByCategoryId({ id })

  const dataVideoPostsCleaned = cleanDataPosts({
    posts: dataVideoPosts,
    categorySlug: 0,
    allCategoriesData: dataCatCleaned,
    videosCategoryID: id,
  })

  return (
    <div className=" w-screen md:w-full h-full flex justify-center ">
      <ul className=" w-full h-full  flex flex-col items-center md:gap-6">
        {dataVideoPostsCleaned?.map((post, index) => (
          <li
            key={post?.id}
            className={` relative w-full h-full min-h-[180px] max-h-[180px] md:min-h-[300px] md:max-h-[300px] lg:max-h-[380px] p-4 lg:p-8 my-2 mt-0 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 md:rounded-xl lg:rounded-2xl md:bg-EpaPrimary md:bg-opacity-75 ${
              index % 2 !== 0 ? 'bg-none' : ' bg-slate-400 bg-opacity-20 '
            } `}
          >
            <div
              className={`relative w-full  col-span-1 lg:col-span-3   ${
                index % 2 !== 0 ? 'order-first' : 'order-last'
              } `}
            >
              {post?.images.length > 0 ? (
                <Image
                  className={` absolute w-auto h-full   object-center object-cover  rounded-lg md:rounded-xl lg:rounded-2xl`}
                  fill={true}
                  sizes="(max-width: 650px)"
                  src={post?.images[0]}
                  alt={`Imágen ${post?.title}`}
                />
              ) : (
                <ImageMissing />
              )}
            </div>

            <div className=" relative col-span-1 lg:col-span-2 h-full flex flex-col gap-2 md:gap-2 lg:gap-4 ">
              <div className=" w-full h-fit max-h-[80px] md:mb-1 lg:mb-2  flex items-start justify-between md:gap-2 ">
                <h3
                  className={
                    poppinsReg600.className +
                    `  mb-0 line-clamp-3 text-start first-letter:uppercase text-xs md:text-lg lg:text-xl xl:text-2xl leading-3 md:leading-5 lg:leading-6 text-black md:text-EpaWhite `
                  }
                >
                  {parse(post?.title || '')}
                </h3>

                <div className=" px-2 md:px-0 lg:py-1">
                  <ButtonLikeFav post={post} />
                </div>
              </div>
              <p
                className={
                  poppinsReg400.className +
                  ' w-full h-fit  lg:max-h-28 xl:max-h-36 overflow-hidden text-[0.55rem] md:text-sm lg:text-base md:text-EpaWhite leading-3 md:leading-5 lg:leading-5 line-clamp-6 '
                }
              >
                {parse(post?.excerpt || '')}
              </p>

              <div className=" z-20 absolute bottom-0 w-full h-1/6 px-2 py-4 md:px-4 lg:py-6 flex items-center justify-between bg-EpaPostButton rounded-b-lg">
                <Link
                  className={
                    poppinsReg600.className +
                    '  text-EpaPrimary text-sm md:text-lg lg:text-2xl underline'
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
