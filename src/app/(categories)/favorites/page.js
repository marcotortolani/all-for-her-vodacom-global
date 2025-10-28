import React from 'react'
import FavouriteCardPost from '@/app/components/FavouriteCardPost'

export default function FavouritesPage() {
  return (
    <main className=" z-0 w-full h-full min-h-screen px-2 flex flex-col items-center justify-between ">
      <FavouriteCardPost />

      <div className="w-full h-20"></div>
    </main>
  )
}
