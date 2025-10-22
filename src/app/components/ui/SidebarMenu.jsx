import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CATEGORIES } from '@/utils/static_data'
import HorizontalLine from './HorizontalLine'
import SliderSidebar from '../SliderSidebar'
import { configSiteStatic } from '../../../../configSiteStatic.js'

import { poppinsReg400 } from '../../../utils/fonts'

const { logoVertical } = configSiteStatic.images
const {
  iconoBienestar,
  iconoModa,
  iconoBelleza,
  iconoSalud,
  iconoRecetas,
  iconoAmor,
  iconoCosmic,
  iconoVideo,
  iconoFavoritos,
  iconoHome,
} = configSiteStatic.icons

const buttonElements = [
  {
    id: 1,
    name: CATEGORIES.bienestar.name,
    iconSrc: iconoBienestar,
    href: `/${CATEGORIES.bienestar.slug}`,
  },
  {
    id: 2,
    name: CATEGORIES.moda.name,
    iconSrc: iconoModa,
    href: `/${CATEGORIES.moda.slug}`,
  },
  {
    id: 3,
    name: CATEGORIES.belleza.name,
    iconSrc: iconoBelleza,
    href: `/${CATEGORIES.belleza.slug}`,
  },
  {
    id: 4,
    name: CATEGORIES.relaciones.name,
    iconSrc: iconoSalud,
    href: `/${CATEGORIES.relaciones.slug}`,
  },
  {
    id: 5,
    name: CATEGORIES.recetas.name,
    iconSrc: iconoRecetas,
    href: `/${CATEGORIES.recetas.slug}`,
  },
  {
    id: 6,
    name: CATEGORIES.amor.name,
    iconSrc: iconoAmor,
    href: `/${CATEGORIES.amor.slug}`,
  },
  {
    id: 7,
    name: CATEGORIES.cosmic.name,
    iconSrc: iconoCosmic,
    href: `/${CATEGORIES.cosmic.slug}`,
  },
  {
    id: 8,
    name: CATEGORIES.videos.name,
    iconSrc: iconoVideo,
    href: `/${CATEGORIES.videos.slug}`,
  },
  {
    id: 9,
    name: CATEGORIES.favoritos.name,
    iconSrc: iconoFavoritos,
    href: `/${CATEGORIES.favoritos.slug}`,
  },
  {
    id: 10,
    name: CATEGORIES.home.name,
    iconSrc: iconoHome,
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
        } transition-all   w-1/2 min-w-[160px] max-w-[200px] h-full lg:h-fit min-h-[600px] md:max-h-[650px] lg:min-h-[500px]  px-4 py-4  overflow-y-scroll lg:overflow-y-hidden  bg-EpaPrimary shadow-md shadow-black rounded-tr-3xl rounded-br-3xl`}
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
            <span className=" absolute top-[50%] w-5/6 h-[2px] p-0 bg-EpaWhite rotate-[25deg] line-clamp-1 content-normal rounded-full" />
            <span className=" absolute top-[50%] w-5/6 h-[2px] p-0 bg-EpaWhite -rotate-[25deg] line-clamp-1 content-normal rounded-full" />
          </button>

          <div className={`absolute left-1/3 w-[40%] h-auto`}>
            <Image
              src={logoVertical}
              alt="Logo Vertical Epa Mujer"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div
          className={` ${
            isOpen ? ' md:hidden ' : ' '
          } z-20 relative w-full h-[44px]  hidden md:flex items-center justify-center pointer-events-auto`}
        >
          <button
            className=" w-12 h-10 p-2 flex flex-col justify-between bg-transparent hover:bg-EpaPrimaryDark pointer-events-auto rounded-xl "
            onClick={onOpen}
          >
            <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full " />
            <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full " />
            <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full " />
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
                      ? ' bg-EpaDetails hover:bg-opacity-70 '
                      : ' bg-EpaPrimaryDark hover:bg-opacity-30 '
                  } w-full h-fit min-h-[30px] md:min-h-[10px] flex items-center  rounded-full`}
                  key={button.id}
                >
                  <Link
                    className=" w-full h-fit px-3  py-0  flex items-center justify-between pointer-events-auto"
                    href={button.href}
                  >
                    <h4
                      className={
                        poppinsReg400.className +
                        ` ${
                          isOpen ? '' : ' hidden '
                        } transition-all w-5/6 whitespace-nowrap text-sm text-EpaWhite`
                      }
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
