import React from "react";
import { openSans } from "../../utils/fonts";

export default function LabelCategory({ title }) {
  return (
    <div className=" z-30 absolute  w-screen h-[80vh] p-0 hidden  items-center justify-end bg-purple-600 bg-opacity-40 pointer-events-none">
      <div className=" w-20 h-48 flex  items-center justify-center  bg-black">
        <div
          className={
            openSans.className +
            " w-48 h-20  -rotate-90 text-center font-medium bg-EpaPrimary bg-opacity-80 rounded-t-xl  text-2xl text-EpaWhite"
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}
