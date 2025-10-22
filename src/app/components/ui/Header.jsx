'use client'
import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { abrilFatface } from '../../../utils/fonts'
import { configSiteStatic } from '../../../../configSiteStatic.js'
import SidebarMenu from './SidebarMenu'
import BurguerMenu from './BurguerMenu'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const { logoHorizontal, logoVertical } = configSiteStatic.images

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
        isNavbarVisible ? 'top-5 ' : ' -top-36  '
      } transition-all z-20 fixed lg:top-0 lg:absolute w-full h-fit flex justify-center`}
    >
      <div className=" absolute top-4 lg:top-0 w-screen h-20 hidden lg:flex items-center justify-evenly bg-EpaPrimary shadow-md shadow-gray-800  rounded-b-2xl">
        <div className=" w-1/6 h-full flex items-center justify-center  cursor-default pointer-events-none">
          <Link
            href="/"
            className=" w-fit h-1/3 xl:h-1/2 flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
          >
            {logoHorizontal && (
              <Image
                width={250}
                height={250}
                className="w-auto h-full"
                src={logoHorizontal}
                alt="Logo Epa Mujer"
              />
            )}
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

      <div className=" lg:hidden  w-[90%] max-w-[460px] h-20 flex flex-col items-center justify-center bg-EpaPrimary rounded-2xl ">
        <div className="w-full h-full flex items-center justify-around">
          <BurguerMenu onOpen={openSidebar} />

          {sectionName === 'home' ? (
            <>
              <Image
                width={250}
                height={250}
                className="w-2/4 max-w-[250px]"
                src={logoHorizontal}
                alt="Logo Epa Mujer"
              />
              <div className=" w-7 h-5 bg-transparent"></div>
            </>
          ) : (
            <>
              <div
                className={
                  abrilFatface.className +
                  `px-4 py-[0.1rem] text-EpaPrimary bg-EpaBackground rounded-full cursor-default pointer-events-none `
                }
              >
                <span className=" mx-4 capitalize text-2xl">{sectionName}</span>
              </div>
              <Link href="/" className=" h-2/5 ">
                <Image
                  className=" w-auto h-full"
                  width={120}
                  height={120}
                  src={logoVertical}
                  alt="Logo Epa Mujer"
                />
              </Link>
            </>
          )}
        </div>

        <SearchBar />
      </div>
    </header>
  )
}
