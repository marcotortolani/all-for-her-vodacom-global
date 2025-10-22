import React from "react";
import Image from "next/image";

import ButtonSeePost from "./ui/ButtonSeePost";

import { abrilFatface } from "../../utils/fonts";
import ImageMissing from "./ImageMissing";

export default function StaticCover({ elem }) {
  return (
    <div
      className={` w-full  h-[30vh] min-h-[150px] max-h-[200px] sm:max-h-[250px] lg:min-h-[300px] relative flex flex-col items-center justify-center rounded-lg md:rounded-xl `}
    >
      <div className=" relative w-full h-full rounded-[inherit]">
        {elem.imgSrc ? (
          <Image
            className={`  w-full h-auto  object-cover rounded-[inherit]  `}
            // width={220}
            // height={160}
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
          className={
            abrilFatface.className +
            ` w-full text-center text-3xl md:text-4xl lg:text-5xl text-EpaWhite text-shadow-sm shadow-black`
          }
        >
          {elem.title}
        </h3>
        <ButtonSeePost text="Ver más" href={elem.href} size="sm" />
      </div>
      <div className=" z-10 w-1/4 h-full flex items-center justify-center absolute">
        <Image
          className=" w-auto h-1/3 md:h-2/4 lg:h-3/5 opacity-50"
          width={90}
          height={90}
          src={elem.iconSrc}
          alt={`Icon ${elem.title}`}
        />
      </div>
    </div>
  );
}
