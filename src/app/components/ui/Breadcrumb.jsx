'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb({ homeElement, separator }) {
  const paths = usePathname()

  let pathNames = paths
    .split('/')
    .map((path) => (path === '' ? homeElement : path))
    .filter((path) => !/^\d+$/.test(path))

  if (
    pathNames.includes('editorial') ||
    pathNames.includes('video') ||
    pathNames.includes('videos')
  ) {
    pathNames.pop()
  }

  return (
    <div
      className={' z-20  w-full h-10 flex md:p-0 font-poppins font-medium  '}
    >
      <ul className=" w-full h-full flex items-center justify-start gap-1 lg:gap-2">
        {pathNames.slice(0, 3).map((el, i) => (
          <li key={i} className=" flex items-center">
            <Link
              className={` px-3 py-1 capitalize font-poppins font-medium text-xs md:text-sm text-white bg-primary cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out rounded-full`}
              href={`${
                i === 0
                  ? '/'
                  : i === 1
                  ? `/${pathNames[1]}`
                  : i === 2
                  ? `/${pathNames[1]}/${pathNames[2]}`
                  : ''
              }`}
              target="_self"
            >
              {el}
            </Link>
            {i + 1 < pathNames.length && (
              <span className=" mx-1 text-lg font-normal  ">{separator}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
