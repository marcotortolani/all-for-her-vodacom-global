'use client'
import React from 'react'
import Link from 'next/link'

import dictionary from '@/dictionary/lang.json'

export default function error({ error }) {
  console.log('ERROR: ', error)

  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-6">
        <div className="relative w-2/3 h-1/2 p-4 lg:min-h-[200px] flex flex-col items-center justify-center gap-2 bg-primaryDark rounded-2xl">
          <span
            className={
              'font-openSans text-4xl uppercase font-semibold text-white'
            }
          >
            {dictionary['Attention!']}
          </span>
          <h2
            className={
              ' px-10 font-poppins font-medium text-center text-xl text-white'
            }
          >
            {
              dictionary[
                'The category or post you want to access does not exist'
              ]
            }
          </h2>
        </div>
        <Link
          className={
            ' px-4 py-2 font-poppins font-medium bg-primary-light rounded-lg'
          }
          href={'/'}
          target="_self"
        >
          {dictionary['Back to home']}
        </Link>
      </div>

      <div className="w-full h-20"></div>
    </main>
  )
}
