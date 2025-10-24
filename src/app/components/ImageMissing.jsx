import React from 'react'

export default function ImageMissing({
  text = 'Imágen faltante',
  colorBg = 'bg-accent',
}) {
  return (
    <div
      className={` ${colorBg} bg-opacity-20 md:bg-opacity-20 absolute top-0 object-cover w-full h-full px-2 flex items-center justify-center text-center overflow-hidden font-poppins font-normal  text-slate-600  md:text-slate-600 text-sm md:text-base lg:text-lg xl:text-xl  rounded-lg md:rounded-xl lg:rounded-2xl`}
    >
      {text}
    </div>
  )
}
