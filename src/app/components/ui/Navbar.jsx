'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/utils/static_data'
import { poppinsReg400 } from '../../../utils/fonts'
import { HeartIcon } from '@/utils/icons'

const links = [
  { title: CATEGORIES.bienestar.name, href: `/${CATEGORIES.bienestar.slug}` },
  { title: CATEGORIES.moda.name, href: `/${CATEGORIES.moda.slug}` },
  { title: CATEGORIES.belleza.name, href: `/${CATEGORIES.belleza.slug}` },
  { title: CATEGORIES.relaciones.name, href: `/${CATEGORIES.relaciones.slug}` },
  { title: CATEGORIES.recetas.name, href: `/${CATEGORIES.recetas.slug}` },
  { title: CATEGORIES.amor.name, href: `/${CATEGORIES.amor.slug}` },
  { title: CATEGORIES.cosmic.name, href: `/${CATEGORIES.cosmic.slug}` },
  { title: CATEGORIES.videos.name, href: `/${CATEGORIES.videos.slug}` },
  { title: CATEGORIES.favoritos.name, href: `/${CATEGORIES.favoritos.slug}` },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className=" w-fit h-full flex items-center">
      <ul className=" w-full flex items-center justify-around gap-4 xl:gap-6">
        {links.map((link, index) => {
          const isActive = pathname === link.href
          return (
            <li
              key={index}
              className={
                poppinsReg400.className +
                `  ${
                  isActive
                    ? ' bg-EpaPrimaryDark border-2'
                    : 'bg-transparent border-[1px]'
                } h-fit text-EpaWhite border-EpaWhite hover:scale-110 cursor:pointer rounded-full`
              }
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
