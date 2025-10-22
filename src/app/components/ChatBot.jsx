'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ChatBotIcon } from '@/utils/icons'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

const URL_CHATBOT = 'https://test.moob.club:8002/IA/ve/movistar/teamgamers/chat/'

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setChatOpen(false)
  }, [pathname])

  return (
    <div
      className={
        poppins.className +
        'z-[80000000] fixed bottom-16 md:bottom-16 lg:bottom-4 right-0 md:right-4 w-full md:w-[400px] lg:w-[450px] h-fit'
      }
    >
      <iframe
        src={URL_CHATBOT}
        className={`${
          chatOpen
            ? ' opacity-100 scale-y-100 flex translate-x-0'
            : ' opacity-0 scale-y-0 translate-x-[200%]  '
        }  absolute bottom-14 md:bottom-16 lg:bottom-20 md:right-0 w-full md:w-[380px] lg:w-[400px] 
        h-[60svh] max-h-[550px]
         transition-all duration-150 ease-in-out`}
      />
      <div className=" w-full my-2 pr-2 sm:pr-0 flex items-center justify-end md:justify-between">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" relative w-12 h-12 md:w-16 md:h-16 p-1 shadow-black shadow-md bg-EpaPrimary rounded-full "
        >
          <ChatBotIcon />
        </button>
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className=" hidden md:flex px-4 lg:px-8 py-4 whitespace-nowrap shadow-black shadow-md text-lg lg:text-lg xl:text-xl text-EpaWhite bg-EpaPrimary rounded-full "
        >
          ¡Hablá con nuestro asistente online!
        </button>
      </div>
    </div>
  )
}
