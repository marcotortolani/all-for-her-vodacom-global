import React from "react";
import Image from "next/image";

import { poppinsReg400, poppinsReg500, poppinsReg600 } from "../../utils/fonts";

export default function VideoReceta({ elem }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className=" w-full aspect-video rounded-lg">
        <iframe
          src={
            elem.videoUrl +
            `?background=0&badge=1&autoplay=0&autopause=1&byline=0&controls=1&pip=none&quality_selector=0`
          }
          className=" rounded-[inherit]"
          frameBorder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Titulo video"
        ></iframe>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <h2
          className={poppinsReg600.className + ` py-2 capitalize md:text-xl `}
        >
          {elem.title}
        </h2>
        <div className=" w-full flex items-start gap-2 sm:gap-8 md:gap-12 ">
          <div className=" w-1/2 flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 rounded-2xl ">
            <div className=" w-full bg-EpaPostButton  rounded-[inherit]">
              <h4
                className={
                  poppinsReg500.className +
                  ` w-full px-4 py-1 text-EpaWhite md:text-lg bg-EpaPrimary rounded-full`
                }
              >
                Ingredientes:
              </h4>
              <ul
                className={
                  poppinsReg400.className +
                  " px-4 py-4 flex flex-col items-start justify-center gap-4 "
                }
              >
                {elem.ingredients?.map((item, index) => (
                  <li
                    key={index}
                    className=" font-light text-[0.6rem] sm:text-xs md:text-sm capitalize"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" relative z-0 w-full h-full rounded-lg ">
              <Image
                className={` relative w-full h-full object-center object-cover rounded-[inherit]`}
                width={200}
                height={120}
                src={elem.imgUrl}
                alt="Imagen"
              />
            </div>
          </div>
          <div className=" w-1/2 flex flex-col items-center justify-center gap-2 rounded-2xl ">
            <h4
              className={
                poppinsReg500.className +
                ` w-full px-4 py-1 text-EpaWhite md:text-lg bg-EpaPrimary rounded-full`
              }
            >
              Preparación:
            </h4>
            <ul
              className={
                poppinsReg400.className +
                " px-1 py-2 flex flex-col items-start justify-center gap-4 "
              }
            >
              {elem.steps?.map((item, index) => (
                <li
                  key={index}
                  className=" w-full flex flex-col items-start font-light text-[0.6rem] sm:text-xs md:text-sm lg:text-base capitalize"
                >
                  <span className={poppinsReg600.className + ""}>
                    Paso {index + 1}
                  </span>
                  <p className=" font-light leading-3 md:leading-4 lg:leading-5">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
