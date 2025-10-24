'use client'
import React from 'react'
import Link from 'next/link'

export default function error({ error }) {
  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-6">
        <div className=" w-2/3 h-1/2 p-4 lg:min-h-[200px] flex flex-col items-center justify-center gap-2 bg-accent rounded-2xl">
          <span
            className={
              'font-openSans text-4xl uppercase font-semibold text-white'
            }
          >
            Atencion!
          </span>
          <h2
            className={
              ' px-10 font-poppins font-medium text-center text-xl text-white'
            }
          >
            La categoría o el post al que queres acceder no existe
          </h2>
        </div>
        {/* <span>{error.message}</span> */}
        <Link
          className={' px-4 py-2 font-poppins font-medium bg-black rounded-lg'}
          href={'/'}
          target="_self"
        >
          Volver al inicio
        </Link>
      </div>

      <div className="w-full h-20"></div>
    </main>
  )
}
