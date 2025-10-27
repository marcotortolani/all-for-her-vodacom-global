// src/app/(categories)/videos/page.js
import React from 'react'
import GridVideosPagination from '@/app/components/pagination/GridVideosPagination'

export default function Page() {
  return (
    <main className=" z-0 w-full h-full px-2 flex flex-col items-center justify-between overflow-x-hidden ">
      <GridVideosPagination />

      <div className="w-full h-20"></div>
    </main>
  )
}
