import React from 'react'
import Image from 'next/image'
import ButtonSeePost from './ui/ButtonSeePost'

import ImageMissing from './ImageMissing'

const gridColumns = {
  2: 'grid-cols-2 grid-rows-1',
  3: 'grid-cols-3 grid-rows-1',
  4: 'grid-cols-4 grid-rows-2 sm:grid-rows-1',
}

const gridElem = {
  2: ' col-span-1 row-span-1',
  3: ' col-span-1 row-span-1',
  4: ' col-span-2 row-span-1 sm:col-span-1',
}

export default function SubcategoriesItems({ subcatElem }) {
  return (
    <div className=" w-full h-fit mt-4 ">
      <ul
        className={`w-full h-full max-h-[200px]  grid ${
          gridColumns[subcatElem.length]
        } gap-4`}
      >
        {subcatElem?.map((elem) => (
          <li
            key={elem.id}
            className={` h-full md:min-h-[10rem]  ${
              gridElem[subcatElem.length]
            } relative flex flex-col items-center justify-center rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl`}
          >
            <div className=" relative z-0 w-full h-full  rounded-b-xl md:rounded-b-2xl">
              {elem.imgSrc ? (
                <Image
                  className={` relative w-full h-full  object-cover rounded-[inherit]`}
                  width={220}
                  height={160}
                  src={elem.imgSrc}
                  alt={`Image Subcategory ${elem.title}`}
                />
              ) : (
                <ImageMissing />
              )}
              <div className=" z-10 w-full h-full absolute top-0 bg-black opacity-30 rounded-[inherit]"></div>
            </div>

            <div className=" z-20 absolute top-0 w-full h-5/6 flex flex-col items-center justify-center ">
              <Image
                className=" w-auto h-1/3 opacity-60 "
                width={40}
                height={40}
                src={elem.iconSrc}
                alt={`Icon ${elem.title}`}
              />
              <h3
                className={` w-fit font-abrilFatface text-center text-xs sm:text-lg md:text-lg lg:text-xl text-white text-shadow-sm shadow-black`}
              >
                {elem.title}
              </h3>
            </div>
            <div className=" z-20 absolute bottom-0 w-full p-1 md:p-2 flex items-center justify-center bgpostButton rounded-[inherit]">
              <ButtonSeePost href={elem.href} size="xs" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
