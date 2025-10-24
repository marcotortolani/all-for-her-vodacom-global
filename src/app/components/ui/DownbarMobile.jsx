'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { configSiteStatic } from '../../../../configSiteStatic.js'

const { iconoAtras, iconoBuscar, iconoHome, iconoFavorito, iconoVideo2 } =
  configSiteStatic.icons

// import { ChevronLeft, Search, Home, Heart, PlayCircle } from 'lucide-react'

const navButtons = {
  back: {
    id: 1,
    title: 'back',
    iconSrc: iconoAtras,
    href: '',
  },
  search: {
    id: 2,
    title: 'search',
    iconSrc: iconoBuscar,
    href: '#',
  },
  home: {
    id: 3,
    title: 'home',
    iconSrc: iconoHome,
    href: '/',
  },
  favourites: {
    id: 4,
    title: 'favorites',
    iconSrc: iconoFavorito,
    href: '/favorites',
  },
  video: {
    id: 5,
    title: 'videos',
    iconSrc: iconoVideo2,
    href: '/videos',
  },
}

export default function DownbarMobile() {
  const [currentPath, setCurrentPath] = useState('/')
  const [previousPath, setPreviousPath] = useState(['', ''])
  const path = usePathname()

  useEffect(() => {
    if (path !== currentPath) {
      let newArray = previousPath
      newArray[0] = currentPath
      newArray[1] = path
      setPreviousPath([...newArray])
      setCurrentPath(path)
    }
  }, [path, currentPath, previousPath])

  return (
    <div className=" fixed bottom-0 w-full overflow-hidden h-[8vh] min-h-[40px] max-h-[60px]  p-[0.8rem] py-4  flex items-center justify-center text-white bg-primary md:hidden">
      <ul className=" w-full h-full flex items-center justify-around ">
        {Object.values(navButtons).map((button) => (
          <li
            className={`h-fit p-2 flex items-center justify-center ${
              currentPath === button.href ? 'bg-black' : 'bg-transparent'
            }  rounded-lg `}
            key={button.id}
          >
            <Link
              className=" w-full h-full flex items-center justify-center"
              href={
                button.title !== 'back' ? button.href : `${previousPath[0]}`
              }
            >
              <Image
                className=" w-auto h-full min-h-[15px] max-h-[20px]"
                width={60}
                height={60}
                src={button.iconSrc}
                alt={`Icon ${button.title} Minimalistic`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
