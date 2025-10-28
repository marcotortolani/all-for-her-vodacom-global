'use client'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarMenu from './SidebarMenu'
import BurguerMenu from './BurguerMenu'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

import logoHorizontal from '../../../../public/images/brand-logo-horizontal.webp'
import logoVertical from '../../../../public/images/brand-logo-vertical.webp'

export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lowerPosition, setLowerPosition] = useState(0)
  const [sectionName, setSectionName] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const path = usePathname()

  function openSidebar() {
    setSidebarOpen(true)
  }
  function closeSidebar() {
    setSidebarOpen(false)
  }

  useEffect(() => {
    if (path === '/') {
      setSectionName('home')
    }
    if (path !== '/') {
      setSectionName(path.split('/')[1])
    }
  }, [path])

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY

    if (scrollPosition > lowerPosition + 100) {
      setLowerPosition(scrollPosition)
      setIsNavbarVisible(false)
      setSidebarOpen(false)
    }
    if (scrollPosition + 50 <= lowerPosition) {
      setLowerPosition(scrollPosition)
      setIsNavbarVisible(true)
    }
  }, [lowerPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <header
      className={` ${
        isNavbarVisible ? 'top-5 lg:top-0' : ' -top-36  '
      } transition-all z-20 fixed  w-full h-fit flex justify-center`}
    >
      <div className=" absolute top-4 lg:top-0 w-screen h-20 hidden lg:flex items-center justify-evenly bg-black/80 shadow-md shadow-gray-800 backdrop-blur-xl border-b border-gray-500 rounded-b-2xl">
        <div className=" w-1/6 h-full flex items-center justify-center  cursor-default pointer-events-none">
          <Link
            href="/"
            className=" w-fit h-1/3 xl:h-1/2 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
          >
            <Image
              width={250}
              height={250}
              className="w-auto h-full"
              src={logoHorizontal}
              alt="Logo Epa Mujer"
            />
          </Link>
        </div>
        <Navbar />
        <SearchBar />
      </div>

      <SidebarMenu
        isVisible={isNavbarVisible}
        isOpen={sidebarOpen}
        onOpen={openSidebar}
        onClose={closeSidebar}
      />

      <div
        className={`${
          sectionName === 'home'
            ? ' bg-black/80 backdrop-blur-md '
            : ' bg-primary '
        } lg:hidden  w-[90%] max-w-[460px] h-20 flex flex-col items-center justify-center rounded-2xl`}
      >
        <div
          className={`${
            sectionName === 'home' ? ' justify-between ' : ' justify-center '
          } relative w-full px-4 h-full flex items-center `}
        >
          <div className="">
            <BurguerMenu onOpen={openSidebar} />
          </div>

          {sectionName === 'home' ? (
            <>
              <Image
                width={250}
                height={250}
                className="w-full max-w-[160px]"
                src={logoHorizontal}
                alt="Brand Logo Horizontal"
              />
              <div className="w-10"></div>
            </>
          ) : (
            <>
              <Link href="/" className=" w-full h-full pl-6 ">
                <div
                  className={`relative w-full h-full flex items-center justify-center text-white font-abrilFatface capitalize text-2xl text-center tracking-wider rounded-full cursor-default pointer-events-none `}
                >
                  <span className="absolute -translate-x-1.5 translate-y-0.5 w-full z-0 text-black/40">
                    {sectionName}
                  </span>
                  <span className=" z-20 w-full ">{sectionName}</span>
                </div>
              </Link>
              <Image
                width={76}
                height={35}
                className="w-full max-w-[70px]"
                src={logoVertical}
                alt="Brand Logo Vertical"
              />
            </>
          )}
        </div>

        <SearchBar />
      </div>
    </header>
  )
}
