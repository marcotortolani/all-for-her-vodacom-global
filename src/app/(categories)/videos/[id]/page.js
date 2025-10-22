import React from 'react'
import Image from 'next/image'
import { getDataPostById } from '@/utils/api'
import { getVimeoNumber, getImageHeaderPost } from '@/utils/functions'
import parse from 'html-react-parser'

import { poppinsReg500 } from '../../../../utils/fonts'

export default async function VideoReceta({ params }) {
  const { id } = params
  const dataVideo = await getDataPostById(id)

  const imageHeader = getImageHeaderPost(dataVideo)
  const vimeoNumber = getVimeoNumber({ string: dataVideo?.content.rendered })

  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        <div
          className={` bg-EpaPostButton w-full h-[20vh] min-h-[100px] max-h-[120px] sm:max-h-[150px] mb-4 relative flex flex-col items-center justify-center rounded-lg lg:rounded-xl`}
        >
          {imageHeader && (
            <div className="absolute w-full h-full rounded-[inherit]">
              <Image
                className={`  w-full h-auto  object-cover rounded-[inherit]  `}
                // width={220}
                // height={160}
                fill={true}
                src={imageHeader}
                alt="Imagen Header Post"
                loading="eager"
              />
            </div>
          )}

          <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-30 line-clamp-1 content-normal rounded-[inherit]" />
          <div className=" z-20 w-full h-full py-[2%] flex flex-col items-center justify-end gap-8 absolute top-0">
            <h3
              className={
                poppinsReg500.className +
                ` w-full px-6 text-left text-lg md:text-xl lg:text-2xl xl:text-3xl text-EpaWhite text-shadow-sm leading-5 line-clamp-2 shadow-black`
              }
            >
              {parse(dataVideo?.title.rendered)}
            </h3>
          </div>
        </div>

        <div className=" w-full aspect-video rounded-lg lg:rounded-xl">
          {vimeoNumber && (
            <iframe
              src={
                'https://player.vimeo.com/video/' +
                vimeoNumber +
                `?background=0&badge=1&autoplay=0&autopause=1&byline=0&controls=1&pip=none&quality_selector=0`
              }
              className=" rounded-[inherit]"
              frameBorder="0"
              loading="lazy"
              width="100%"
              height="100%"
              allow="fullscreen"
              allowFullScreen
              autoPlay={false}
              // style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title={dataVideo?.title.rendered}
            ></iframe>
          )}
        </div>
      </div>
    </main>
  )
}
