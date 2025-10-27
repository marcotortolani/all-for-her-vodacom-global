'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TAGS } from '@/utils/constants'
import { getPostsByCategoryId } from '@/utils/api'
import ImageMissing from '../ImageMissing'
import { cleanDataPosts } from '@/utils/functions'
import parse from 'html-react-parser'
import PlayCircle from '../ui/PlayCircle'
import PostCardSkeleton from '@/app/components/pagination/PostCardSkeleton'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function GridPostsPagination({ category }) {
  const [posts, setPosts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDataPosts = async () => {
      setLoading(true)
      try {
        const data = await getPostsByCategoryId({
          id: category.id,
          page: page,
          perPage: 12,
        })

        setPosts(data.posts)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    getDataPosts()
  }, [page, category])

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

  return (
    <section className="flex w-full mt-3 md:mt-4 lg:mt-6 xl:mt-8 flex-col items-center">
      {/* Loading Skeleton Grid */}
      {loading && (
        <div className=" grid w-full grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 ">
          {Array.from({ length: 12 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Posts Grid */}
      {!loading && posts?.length > 0 && (
        <div className=" grid w-full grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 ">
          {posts.map((post) => {
            const isVideo =
              post?.tags?.includes(TAGS.video.id) || post.video.url.length
                ? 'video'
                : 'editorial'

            const [postCleaned] = cleanDataPosts({
              posts: [post],
              categorySlug: category.slug,
            })

            return (
              <Link
                key={postCleaned.id}
                href={`/${category.slug}/${isVideo}/${postCleaned.slug}`}
                className="relative w-full aspect-[9/12] group overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="relative z-0 w-full h-full rounded-[inherit]">
                  {post.featured_image || postCleaned?.images[0] ? (
                    <Image
                      className="relative w-full h-full object-center object-cover rounded-[inherit] cursor-default select-none"
                      fill
                      src={post.featured_image[0] || postCleaned?.images[0]}
                      alt={`Image ${postCleaned?.title}`}
                    />
                  ) : (
                    <ImageMissing />
                  )}
                  <div className="z-10 absolute top-0 w-full h-full flex items-center justify-center bg-black/30 rounded-[inherit]">
                    {isVideo === 'video' && <PlayCircle />}
                  </div>
                </div>
                <div className="absolute top-0 w-full h-full p-2 lg:p-4 xl:p-6 flex items-end">
                  <h3 className="line-clamp-3 text-white text-sm leading-4 lg:text-base lg:leading-5 xl:text-lg xl:leading-6 ">
                    {parse(post.title.rendered || '')}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Empty State */}
      {(!posts || (!loading && posts?.length === 0)) && (
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            No se encontraron posts en esta categoría.
          </p>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <PaginationControl
          totalPages={totalPages}
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePageClick={handlePageClick}
        />
      )}
    </section>
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
    <div className="mt-12 w-full max-w-screen-md mx-auto h-full flex items-center justify-between gap-2">
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
      <div className="hidden lg:flex items-center gap-1">
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
              onClick={() => {
                handlePageClick(pageNum)
              }}
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

// const PaginationControl = ({
//   totalPages,
//   page,
//   handleNextPage,
//   handlePrevPage,
// }) => {
//   return (
//     <div className="mt-12 w-full max-w-screen-md mx-auto h-full flex items-center justify-between gap-2">
//       {/* Previous Button */}
//       <button
//         onClick={handlePrevPage}
//         disabled={page === 1}
//         className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
//       >
//         <ChevronLeft />
//       </button>

//       {/* Page Numbers */}
//       <div className="flex gap-1">
//         <p className="text-sm text-gray-500">
//           Página {page} / {totalPages}
//         </p>
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={handleNextPage}
//         disabled={page === totalPages}
//         className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
//       >
//         <ChevronRight />
//       </button>
//     </div>
//   )
// }
