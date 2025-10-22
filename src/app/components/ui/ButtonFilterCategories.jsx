"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { poppinsReg500 } from "../../../utils/fonts";

import { FilterIcon } from "../../../utils/icons";

export default function ButtonFilterCategories() {
  const path = usePathname();
  const pathName = path.split("/")[1];

  return (
    <div
      className={
        poppinsReg500.className +
        ` ${pathName === "videos" && pathName.length <= 2 ? " " : " hidden "} `
      }
    >
      <button className=" flex items-center justify-center gap-2  px-3 py-1 capitalize text-xs md:text-sm text-EpaWhite bg-EpaPrimary cursor-pointer rounded-full">
        Filtrar
        <div className=" h-3">
          <FilterIcon />
        </div>
      </button>
    </div>
  );
}
