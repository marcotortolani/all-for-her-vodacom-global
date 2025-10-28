import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import HorizontalLine from './HorizontalLine'
import SliderSidebar from '../SliderSidebar'

import logoVertical from '../../../../public/images/brand-white-logo.webp'

const buttonElements = [
  {
    id: 1,
    name: 'Health',
    iconSrc: '/images/health-white-icon.webp',
    href: '/health',
  },
  {
    id: 2,
    name: 'Lifestyle',
    iconSrc: '/images/lifestyle-white-icon.webp',
    href: '/lifestyle',
  },
  {
    id: 3,
    name: 'Food',
    iconSrc: '/images/food-white-icon.webp',
    href: '/food',
  },
  {
    id: 4,
    name: 'Fashion',
    iconSrc: '/images/fashion-white-icon.webp',
    href: '/fashion',
  },
  {
    id: 5,
    name: 'Fitness',
    iconSrc: '/images/fitness-white-icon.webp',
    href: '/fitness',
  },
  {
    id: 6,
    name: 'Advice',
    iconSrc: '/images/advice-white-icon.webp',
    href: '/advice',
  },
  {
    id: 7,
    name: 'Videos',
    iconSrc: '/images/videos-white-icon.webp',
    href: '/videos',
  },
  {
    id: 8,
    name: 'Favorites',
    iconSrc: '/images/favorites-white-icon.webp',
    href: '/favorites',
  },
  {
    id: 9,
    name: 'Home',
    iconSrc: '/images/home-white-icon.webp',
    href: '/',
  },
]

export default function SidebarMenu({ isVisible, isOpen, onOpen, onClose }) {
  const path = usePathname()
  const pathName = path.split('/')

  return (
    <div
      className={` ${
        isVisible
          ? ' lg:-translate-x-full '
          : isOpen
          ? ' lg:-translate-x-2 '
          : ' lg:translate-x-[4.5rem]  '
      } ${
        isOpen
          ? ' left-0 bg-black  bg-opacity-40 pointer-events-auto '
          : ' -left-2 md:left-0 bg-opacity-0 pointer-events-none '
      } transition-all fixed top-0 z-40 w-full h-full md:flex md:items-center   lg:bg-transparent bg-opacity-40 lg:bg-opacity-0  `}
      onClick={isVisible ? onClose : null}
    >
      <div
        className={` ${
          isOpen
            ? ' translate-x-0 md:-translate-x-0 '
            : ' -translate-x-full md:w-[80px] md:min-w-[80px]  '
        } transition-all   w-1/2 min-w-[160px] max-w-[200px] h-full lg:h-fit min-h-[600px] md:max-h-[650px] lg:min-h-[500px]  px-4 py-4  overflow-y-scroll lg:overflow-y-hidden  bg-primary shadow-md shadow-black rounded-tr-3xl rounded-br-3xl`}
      >
        <div
          className={`${
            isOpen ? '' : ' md:hidden '
          } relative w-full h-fit flex items-center justify-start `}
        >
          <button
            className={`relative top-0 w-7 h-7 my-2 flex flex-col justify-between cursor-pointer pointer-events-auto`}
            onClick={onClose}
          >
            <span className=" absolute top-[50%] w-5/6 h-[2px] p-0 bg-white rotate-[25deg] line-clamp-1 content-normal rounded-full" />
            <span className=" absolute top-[50%] w-5/6 h-[2px] p-0 bg-white -rotate-[25deg] line-clamp-1 content-normal rounded-full" />
          </button>

          <div className={`pl-2 w-full max-w-[120px] h-auto`}>
            <Image
              src={logoVertical}
              alt="Brand White Logo"
              width={112}
              height={21}
            />
          </div>
        </div>

        <div
          className={` ${
            isOpen ? ' md:hidden ' : ' '
          } z-20 relative w-full h-[44px]  hidden md:flex items-center justify-center pointer-events-auto`}
        >
          <button
            className=" w-12 h-10 p-2 flex flex-col justify-between bg-transparent hover:bg-primaryDark pointer-events-auto rounded-xl "
            onClick={onOpen}
          >
            <span className=" w-full h-[2px] p-0 bg-white line-clamp-1 content-normal rounded-full " />
            <span className=" w-full h-[2px] p-0 bg-white line-clamp-1 content-normal rounded-full " />
            <span className=" w-full h-[2px] p-0 bg-white line-clamp-1 content-normal rounded-full " />
          </button>
        </div>
        <HorizontalLine color={'white'} size={'xs'} />

        <SliderSidebar />

        <nav className="w-full h-fit overflow-hidden ">
          <ul
            className={` ${
              isOpen ? '' : ' md:min-w-[30px]'
            } w-full min-w-[130px] h-4/6 min-h-fit pt-4 mb-2 flex flex-col gap-3 overflow-hidden snap-none`}
          >
            {buttonElements.map((button) => {
              const isActive =
                pathName.length > 1
                  ? pathName[1] === button.href.replace('/', '')
                  : true

              return (
                <li
                  className={` ${
                    isActive
                      ? ' bg-black/30 hover:bg-opacity-70 '
                      : ' bg-primary-light hover:bg-opacity-30 '
                  } w-full h-fit min-h-[40px] flex items-center  rounded-full`}
                  key={button.id}
                >
                  <Link
                    className=" w-full h-fit px-3 py-0  flex items-center justify-between pointer-events-auto"
                    href={button.href}
                  >
                    <h4
                      className={` ${
                        isOpen ? '' : ' hidden '
                      } transition-all w-5/6 whitespace-nowrap font-poppins font-normal text-sm text-white`}
                    >
                      {button.name}
                    </h4>
                    <div
                      className={` ${
                        isOpen ? 'ml-1' : 'ml-0'
                      } w-auto h-full  py-2`}
                    >
                      <Image
                        src={button.iconSrc}
                        alt={`Icon ${button.name}`}
                        width={20}
                        height={20}
                      />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
