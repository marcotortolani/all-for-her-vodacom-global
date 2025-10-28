'use client'
import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { StateContext } from '@/providers/StateProvider'
import parse from 'html-react-parser'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import ImageMissing from './ImageMissing.jsx'
import { TAGS } from '@/utils/constants.js'
import PlayCircle from './ui/PlayCircle.jsx'
import ButtonSeePost from './ui/ButtonSeePost.jsx'

export default function FavouriteCardPost() {
  const { favouritePosts } = useContext(StateContext)
  const [page, setPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const postsPerPage = 12

  // Esperar a que el componente esté montado en el cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Calcular posts para la página actual
  const { currentPosts, totalPages } = useMemo(() => {
    if (!favouritePosts || favouritePosts.length === 0) {
      return { currentPosts: [], totalPages: 0 }
    }

    const indexOfLastPost = page * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const posts = favouritePosts.slice(indexOfFirstPost, indexOfLastPost)
    const total = Math.ceil(favouritePosts.length / postsPerPage)

    return { currentPosts: posts, totalPages: total }
  }, [favouritePosts, page, postsPerPage])

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePageClick = (pageNum) => {
    setPage(pageNum)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // No renderizar hasta que esté montado en el cliente
  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (favouritePosts === undefined || favouritePosts.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center py-12">
        <p className="text-2xl font-bold text-primary">No tienes favoritos</p>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* Grid de posts */}
      <div className="grid h-full w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {currentPosts.map((post, index) => {
          const isVideo =
            post?.tags?.includes(TAGS.video.id) || post?.video?.url?.length
              ? 'videos'
              : 'editorial'

          return (
            <div
              key={`${post?.id}-${index}`}
              className="relative flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl"
            >
              <Link
                href={`/${isVideo}/${post?.slug}`}
                className="relative z-0 h-full w-full rounded-[inherit] transition-all duration-500 ease-in-out hover:scale-110"
              >
                {post?.featured_image || post?.images?.length > 0 ? (
                  <Image
                    className="pointer-events-none relative h-full w-full cursor-default select-none rounded-[inherit] object-cover object-center"
                    width={220}
                    height={220}
                    src={post?.featured_image?.[0] || post?.images?.[0]}
                    alt={`Image ${post?.title}`}
                  />
                ) : (
                  <ImageMissing />
                )}
                <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center rounded-[inherit] bg-black/30">
                  {isVideo === 'videos' && <PlayCircle />}
                </div>
              </Link>

              <div className="pointer-events-none absolute bottom-0 z-20 flex w-full flex-col items-start justify-end gap-2 rounded-[inherit] px-4 py-2 lg:px-6 lg:py-2">
                <h3 className="pointer-events-none line-clamp-3 w-5/6 select-none text-left text-sm text-white text-shadow-sm shadow-black first-letter:capitalize sm:text-base md:text-lg lg:text-2xl">
                  {parse(post?.title || '')}
                </h3>
                <ButtonSeePost
                  id={post?.id}
                  text="Ver"
                  href={`/${isVideo}/${post?.slug}`}
                  size="sm"
                  bgColor={'bg-primary'}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <PaginationControl
          totalPages={totalPages}
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  )
}

const PaginationControl = ({
  totalPages,
  page,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
}) => {
  // Generar los números de página a mostrar
  const getPageNumbers = () => {
    const pages = []

    // Si hay 5 páginas o menos, mostrar todas
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
      return pages
    }

    // Si la página actual está entre las primeras 4
    if (page <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages]
    }

    // Si la página actual está entre las últimas 4
    if (page >= totalPages - 3) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]
    }

    // Si la página actual está en el medio
    return [1, '...', page - 1, page, page + 1, '...', totalPages]
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="mx-auto mt-12 flex h-full w-full max-w-screen-md items-center justify-between gap-2">
      {/* Previous Button */}
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft />
      </button>

      {/* Mobile: Page Numbers Text */}
      <div className="flex gap-1 lg:hidden">
        <p className="text-sm text-gray-500">
          Página {page} / {totalPages}
        </p>
      </div>

      {/* Desktop: Clickable Page Numbers */}
      <div className="hidden items-center gap-1 lg:flex">
        {pageNumbers.map((pageNum, index) => {
          // Si es "..." mostrar solo texto
          if (pageNum === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            )
          }

          // Botón de página clickeable
          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`min-w-[40px] rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                pageNum === page
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronRight />
      </button>
    </div>
  )
}

// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useContext } from 'react'
// import { StateContext } from '@/providers/StateProvider'
// import parse from 'html-react-parser'

// import ImageMissing from './ImageMissing.jsx'
// import { TAGS } from '@/utils/constants.js'
// import PlayCircle from './ui/PlayCircle.jsx'
// import ButtonSeePost from './ui/ButtonSeePost.jsx'

// export default function FavouriteCardPost() {
//   const { favouritePosts } = useContext(StateContext)

//   if (favouritePosts === undefined || favouritePosts.length === 0)
//     return (
//       <div>
//         <p className="text-2xl font-bold text-primary">No tienes favoritos</p>
//       </div>
//     )

//   return (
//     <div className=" w-full h-full flex justify-center ">
//       {favouritePosts?.length >= 1 ? (
//         <div className=" w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
//           {favouritePosts?.map((post, index) => {
//             const isVideo =
//               post?.tags?.includes(TAGS.video.id) || post?.video?.url?.length
//                 ? 'videos'
//                 : 'editorial'

//             return (
//               // <li
//               //   key={post?.id}
//               //   className={` relative w-full h-full min-h-[200px] max-h-[200px] md:min-h-[300px] md:max-h-[300px] lg:max-h-[380px] p-4 lg:p-8 my-2 mt-0 grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 md:rounded-xl lg:rounded-2xl md:bg-primary md:bg-opacity-75 ${
//               //     index % 2 !== 0 ? 'bg-none' : ' bg-slate-400 bg-opacity-20 '
//               //   } `}
//               // >
//               //   <div
//               //     className={`relative w-full   col-span-1 lg:col-span-3   ${
//               //       index % 2 !== 0 ? 'order-first' : 'order-last'
//               //     } `}
//               //   >
//               //     {post?.featured_image || post?.images.length > 0 ? (
//               //       <Image
//               //         className={` absolute w-auto h-full   object-center object-cover  rounded-lg md:rounded-xl lg:rounded-2xl`}
//               //         fill={true}
//               //         src={post?.featured_image?.[0] || post?.images[0]}
//               //         alt={`Imágen ${post?.title}`}
//               //       />
//               //     ) : (
//               //       <ImageMissing />
//               //     )}
//               //     {isVideo === 'videos' && (
//               //       <div className="  z-20 absolute bottom-0 w-full h-full flex items-center justify-center ">
//               //         <PlayCircle className=" w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
//               //       </div>
//               //     )}
//               //   </div>

//               //   <div className=" relative col-span-1 lg:col-span-2 h-full flex flex-col gap-2 md:gap-2 lg:gap-4 ">
//               //     <div className=" w-full h-fit max-h-[80px] md:mb-1 lg:mb-2  flex items-start justify-between md:gap-2 ">
//               //       <h3
//               //         className={`  mb-0 line-clamp-3 font-poppins font-semibold text-start first-letter:uppercase text-xs md:text-lg lg:text-xl xl:text-2xl leading-3 md:leading-5 lg:leading-6 text-black md:text-white `}
//               //       >
//               //         {parse(post?.title || '')}
//               //       </h3>

//               //       <div className=" px-2 md:px-0 lg:py-1">
//               //         <ButtonLikeFav post={post} />
//               //       </div>
//               //     </div>
//               //     <p
//               //       className={
//               //         ' w-full h-fit  lg:max-h-28 xl:max-h-36 overflow-hidden font-poppins font-normal text-[0.55rem] md:text-sm lg:text-base md:text-white leading-3 md:leading-5 lg:leading-5 line-clamp-6 '
//               //       }
//               //     >
//               //       {parse(post?.excerpt || '')}
//               //     </p>

//               //     <div className=" z-20 absolute bottom-0 w-full h-1/6 px-2 py-4 md:px-4 lg:py-6 flex items-center justify-between bgpostButton rounded-b-lg">
//               //       <Link
//               //         className={
//               //           ' font-poppins font-semibold text-primary text-sm md:text-lg lg:text-2xl underline'
//               //         }
//               //         href={`/${post?.category}/${post?.slug}`}
//               //       >
//               //         Ver más
//               //       </Link>
//               //     </div>
//               //   </div>
//               // </li>
//               <div
//                 key={`${post?.id}-${index}`}
//                 className={` w-full aspect-[3/4] relative overflow-hidden flex flex-col items-center justify-center rounded-lg md:rounded-xl lg:rounded-2xl`}
//               >
//                 <Link
//                   href={`/${isVideo}/${post?.slug}`}
//                   className=" relative z-0 w-full h-full rounded-[inherit] hover:scale-110 transition-all duration-500 ease-in-out"
//                 >
//                   {post?.featured_image || post?.images.length > 0 ? (
//                     <Image
//                       className={` relative w-full h-full object-center object-cover rounded-[inherit] cursor-default pointer-events-none select-none`}
//                       width={220}
//                       height={220}
//                       src={post?.featured_image[0] || post?.images[0]}
//                       alt={`Image ${post?.title}`}
//                     />
//                   ) : (
//                     <ImageMissing />
//                   )}
//                   <div className=" z-10 w-full h-full flex items-center justify-center absolute top-0 bg-black/30 rounded-[inherit]">
//                     {isVideo === 'videos' && <PlayCircle />}
//                   </div>
//                 </Link>

//                 <div className="  z-20 absolute bottom-0 w-full px-4 py-2 lg:px-6 lg:py-2  flex flex-col items-start justify-end gap-2 rounded-[inherit] pointer-events-none ">
//                   <h3
//                     className={` w-5/6 line-clamp-3 first-letter:capitalize text-left text-sm sm:text-base md:text-lg lg:text-2xl text-white text-shadow-sm shadow-black pointer-events-none select-none`}
//                   >
//                     {parse(post?.title || '')}
//                   </h3>
//                   <ButtonSeePost
//                     id={post?.id}
//                     text="Ver"
//                     href={`/${isVideo}/${post?.slug}`}
//                     size="sm"
//                     bgColor={'bg-primary'}
//                   />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       ) : (
//         'No hay favoritos agregados'
//       )}
//     </div>
//   )
// }
