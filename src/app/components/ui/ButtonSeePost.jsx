import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dictionary from '@/dictionary/lang.json'

export default function ButtonSeePost({
  text = dictionary['See'],
  href,
  size,
  icon,
  bgColor = 'bg-primary',
}) {
  return (
    <Link
      className={` flex items-center justify-between gap-2 font-poppins font-normal text-white text-center ${
        size === 'xs'
          ? ' text-sm shadow-none px-3 py-0 md:px-4 lg:px-6 lg:py-2 md:text-lg lg:text-xl'
          : size === 'sm'
          ? ' shadow-sm px-5 py-1 lg:px-6 lg:py-2 text-sm lg:text-lg '
          : size === 'md'
          ? ' text-lg shadow-md px-8 py-0 '
          : ' shadow-none px-1 py-0'
      } ${bgColor} shadow-black rounded-full hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out`}
      href={href}
    >
      {text}
      {icon && <Image src={icon} alt="Eye Icon" width={24} height={24} />}
    </Link>
  )
}
