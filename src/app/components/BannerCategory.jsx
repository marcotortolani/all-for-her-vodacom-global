import React from 'react'
import Image from 'next/image'
import ImageMissing from './ImageMissing'

export default function BannerCategory({ elem }) {
  return (
    <div
      className={` w-full aspect-[8/3] xl:aspect-[12/3] relative flex flex-col items-center justify-center rounded-lg md:rounded-xl `}
    >
      <div className=" relative w-full h-full rounded-[inherit]">
        {elem.imgSrc ? (
          <Image
            className={`  w-full h-auto  object-cover rounded-[inherit]  `}
            fill
            src={elem.imgSrc}
            alt={`Image Static Cover ${elem.title}`}
          />
        ) : (
          <ImageMissing />
        )}
      </div>

      <div className=" z-10 absolute top-0 w-full h-full pb-4 lg:pb-6 xl:pb-8 flex items-end justify-center bg-black/40 content-normal rounded-[inherit]">
        <h3
          className={` font-abrilFatface text-center text-4xl md:text-5xl lg:text-6xl text-white text-shadow-sm shadow-black`}
        >
          {elem.title}
        </h3>
      </div>
    </div>
  )
}
