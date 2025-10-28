'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/utils/constants'

import { HeartIcon } from '@/utils/icons'

const routes = [
  { title: CATEGORIES.health.name, href: `/${CATEGORIES.health.slug}` },
  { title: CATEGORIES.lifestyle.name, href: `/${CATEGORIES.lifestyle.slug}` },
  { title: CATEGORIES.food.name, href: `/${CATEGORIES.food.slug}` },
  { title: CATEGORIES.fashion.name, href: `/${CATEGORIES.fashion.slug}` },
  { title: CATEGORIES.fitness.name, href: `/${CATEGORIES.fitness.slug}` },
  { title: CATEGORIES.advice.name, href: `/${CATEGORIES.advice.slug}` },
  { title: 'Videos', href: '/videos' },
  { title: 'Favorites', href: '/favorites' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className=" w-fit h-full flex items-center">
      <ul className=" w-full flex items-center justify-around gap-4 xl:gap-6">
        {routes.map((link, index) => {
          const isActive = pathname === link.href
          return (
            <li
              key={index}
              className={`  ${
                isActive
                  ? ' bg-primaryDark border-2'
                  : 'bg-transparent border-[1px]'
              } h-fit font-poppins font-normal text-white border-white hover:scale-110 cursor:pointer rounded-full`}
            >
              <Link
                className=" px-2 py-1 text-sm xl:text-base flex items-center justify-center rounded-[inherit]"
                href={link.href}
              >
                {link.title === 'Favoritos' ? (
                  <div className=" w-4 h-4 xl:w-6 xl:h-6 ">
                    <HeartIcon liked={false} color={'#fff'} />
                  </div>
                ) : (
                  link.title
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
