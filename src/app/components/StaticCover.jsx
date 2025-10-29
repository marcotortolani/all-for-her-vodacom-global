import React from 'react'
import Image from 'next/image'
import ButtonSeePost from './ui/ButtonSeePost'
import ImageMissing from './ImageMissing'

import dictionary from '@/dictionary/lang.json'

export default function StaticCover({ elem, buttonBgColor }) {
  return (
    <div
      className={` w-full h-[30vh] min-h-[150px] max-h-[200px] sm:max-h-[250px] lg:min-h-[300px] relative flex flex-col items-center justify-center rounded-lg md:rounded-xl `}
    >
      <div className=" relative w-full h-full rounded-[inherit]">
        {elem.imgSrc ? (
          <Image
            className={`w-full h-auto  object-cover rounded-[inherit]  `}
            fill
            src={elem.imgSrc}
            alt={`Image Static Cover ${elem.title}`}
          />
        ) : (
          <ImageMissing />
        )}
      </div>

      <div className=" z-10 absolute top-0 w-full h-full bg-black opacity-20 line-clamp-1 content-normal rounded-[inherit]" />
      <div className=" z-20 w-full h-full py-[10%] flex flex-col items-center justify-around gap-6 absolute top-0">
        <h3
          className={` w-full font-abrilFatface text-center text-4xl md:text-5xl lg:text-6xl text-white text-shadow-sm shadow-black`}
        >
          {elem.title}
        </h3>
        <ButtonSeePost
          text={dictionary['See more']}
          href={elem.href}
          size="md"
          bgColor={buttonBgColor}
        />
      </div>
    </div>
  )
}
