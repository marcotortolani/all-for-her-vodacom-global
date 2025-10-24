import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { URL_LANDING_SUBS } from '@/config/config'

import logoHorizontal from '../../../../public/images/brand-logo-horizontal.webp'

export default function Footer() {
  return (
    <footer
      className={` w-full h-[25vh] min-h-[160px] max-h-[200px] py-6 mb-20 bg-accent font-poppins font-normal flex flex-col items-center justify-around gap-2`}
    >
      <div className="w-full h-1/4 sm:h-2/5 md:h-1/3 flex items-center justify-center  cursor-default pointer-events-none">
        <Link
          href={'/'}
          className=" w-fit h-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer pointer-events-auto"
        >
          <Image
            width={250}
            height={250}
            className=" w-auto h-full"
            src={logoHorizontal}
            alt="Logo Epa Mujer"
          />
        </Link>
      </div>
      <div className=" h-1/3 flex flex-col items-center gap-0 pointer-events-none cursor-defaul select-none">
        <p className=" uppercase text-xs md:text-sm lg:text-base leading-4 text-white">
          Epa Mujer es un sitio de Media Moob S.A.
        </p>
        <p className=" uppercase text-xs md:text-sm lg:text-base leading-4 text-white">
          Todos los derechos reservados.
        </p>
      </div>
      <Link
        href={'/terms'}
        className=" h-1/4 uppercase text-xs md:text-sm lg:text-base text-primaryDark hover:text-primary underline"
      >
        Términos y Condiciones
      </Link>
      <Link
        href={URL_LANDING_SUBS}
        target="_blank"
        className=" h-1/4 uppercase text-xs md:text-sm lg:text-base text-primaryDark hover:text-primary underline"
      >
        Suscripción
      </Link>
    </footer>
  )
}
