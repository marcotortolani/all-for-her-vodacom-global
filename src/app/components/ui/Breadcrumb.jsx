'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { poppinsReg500 } from '../../../utils/fonts'

export default function Breadcrumb({ homeElement, separator }) {
  const paths = usePathname()

  const pathNames = paths
    .split('/')
    .map((path) => (path === '' ? homeElement : path))
    .filter((path) => !/^\d+$/.test(path))

  return (
    <div
      className={poppinsReg500.className + ' z-20  w-full h-10 flex md:p-0  '}
    >
      <ul className=" w-full h-full flex">
        {pathNames.map((el, i) => (
          <li key={i} className=" flex items-center">
            <Link
              className={
                poppinsReg500.className +
                ` px-3 py-1 capitalize text-xs md:text-sm text-EpaWhite bg-EpaPrimary cursor-pointer rounded-full`
              }
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
