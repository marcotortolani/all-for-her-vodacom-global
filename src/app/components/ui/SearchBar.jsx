'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import parse from 'html-react-parser'
import { useState, useEffect } from 'react'
import { openSans } from '@/utils/fonts'
import { searchData, getCategoryNameByPostId } from '@/utils/api'

import { configSiteStatic } from '../../../../configSiteStatic'
const { iconoBuscarBlack } = configSiteStatic.icons
import { Loader2 } from 'lucide-react'

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!searchTerm) return
    searchData(searchTerm).then((results) => {
      const resCleaned = results.map((res) => ({
        id: res.id,
        title: res.title.rendered,
      }))
      setResults(resCleaned)
    })
  }, [searchTerm])

  useEffect(() => {
    setInputValue('')
    setSearchTerm('')
    setResults([])
  }, [pathname])

  function handleChange(e) {
    e.preventDefault()
    setInputValue(e.target.value)
    setSearchTerm(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault()
    setSearchTerm(inputValue)
  }

  function handleClick(id) {
    getCategoryNameByPostId(id).then((catName) => {
      setInputValue('')
      setSearchTerm('')
      setResults([])
      router.push(`/${catName}/${id}`)
    })
  }

  return (
    <div className=" w-2/3 max-w-[400px] lg:max-w-[600px] h-fit min-h-10 absolute -bottom-5 lg:top-24 flex justify-center">
      <form action="" className=" relative w-full ">
        <input
          className={
            openSans.className +
            ` search-bar w-full  pl-6 py-1 text-sm font-[300] border-EpaPrimary border-solid border-2 rounded-full 
                outline-none focus:border-EpaDetails `
          }
          type="text"
          name="search"
          id="search"
          placeholder="Buscar"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        {inputValue.length !== 0 && results.length === 0 ? (
          <div className="absolute top-0 right-2 px-2 h-full flex items-center animate-spin">
            <Loader2 color={'gray'} />
          </div>
        ) : (
          <button
            onClick={handleSearch}
            className=" absolute top-0 right-2 px-2 h-full flex items-center  "
          >
            <Image
              src={iconoBuscarBlack}
              width={14}
              height={14}
              alt="Icon Magnifying Glass"
            />
          </button>
        )}
      </form>
      {results.length > 0 && inputValue && (
        <div className=" -z-10 absolute top-10 w-full bg-EpaPostButton border-EpaPrimary  border-solid border-2 rounded-xl">
          <ul className=" w-full h-fit p-2 py-1">
            {results?.map((result) => (
              <li
                key={result.id}
                className="w-full my-3 px-2 bg-EpaPrimary hover:bg-EpaDetails text-EpaWhite rounded-lg"
              >
                <button
                  onClick={() => handleClick(result.id)}
                  className="w-full  overflow-hidden line-clamp-1 text-left hover:cursor-pointer "
                >
                  {parse(result.title)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

{
  /* <search role="search">
<form action="/search">
  <input type="search" name="" id="" />
  <input type="submit" value="Search" />
</form>
</search> */
}
