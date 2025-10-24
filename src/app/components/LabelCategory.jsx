import React from 'react'

export default function LabelCategory({ title }) {
  return (
    <div className=" z-30 absolute  w-screen h-[80vh] p-0 hidden  items-center justify-end bg-purple-600 bg-opacity-40 pointer-events-none">
      <div className=" w-20 h-48 flex  items-center justify-center  bg-black">
        <div
          className={
            ' w-48 h-20  -rotate-90 font-openSans text-center font-medium bg-primary bg-opacity-80 rounded-t-xl  text-2xl text-white'
          }
        >
          {title}
        </div>
      </div>
    </div>
  )
}
