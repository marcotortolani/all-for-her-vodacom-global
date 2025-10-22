"use client";
import React from "react";
export default function BurguerMenu({onOpen}) {
  return (
    <>
      <button
        className=" w-7 h-5 flex flex-col justify-between bg-transparent"
        onClick={onOpen}
      >
        <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full" />
        <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full" />
        <span className=" w-full h-[2px] p-0 bg-EpaWhite line-clamp-1 content-normal rounded-full" />
      </button>
    </>
  );
}
