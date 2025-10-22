import React from "react";
import Image from "next/image";
import Link from "next/link";

import { poppinsReg400 } from "../../../utils/fonts";

export default function ButtonSeePost({ text, href, size, icon }) {
  return (
    <Link
      className={
        poppinsReg400.className +
        ` flex items-center justify-between gap-2  text-EpaWhite text-center ${
          size === "xs"
            ? " text-sm shadow-none px-3 py-0 md:px-4 lg:px-6 lg:py-2 md:text-lg lg:text-xl"
            : size === "sm"
            ? " shadow-sm px-3 py-0 lg:px-6 lg:py-2 lg:text-lg "
            : size === "md"
            ? " text-base shadow-md px-4 py-2 "
            : " shadow-none px-1 py-0"
        }  shadow-black bg-EpaPrimary rounded-full hover:cursor-pointer`
      }
      href={href}
    >
      {text}
      {icon && <Image src={icon} alt="Eye Icon" width={24} height={24} />}
    </Link>
  );
}
