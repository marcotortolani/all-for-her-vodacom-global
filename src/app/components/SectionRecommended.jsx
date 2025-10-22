import React from "react";
import { getCategoryId } from "@/utils/api";
import HorizontalLine from "./ui/HorizontalLine";
import RandomPostsRecommended from "./RandomPostsRecommended";
import { poppinsReg500 } from "@/utils/fonts";

export default async function SectionRecommended({ category, qty }) {
  const categoryID = await getCategoryId(category.name);

  return (
    <section className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-4">
      <div className=" w-full flex flex-col items-center">
        <div className=" w-full h-fit ">
          <HorizontalLine size="xs" />
          <h4
            className={
              poppinsReg500.className + " mb-2 text-sm md:text-lg lg:text-xl"
            }
          >
            Podría interesarte
          </h4>
        </div>
        <RandomPostsRecommended
          id={categoryID}
          qty={qty}
          categorySlug={category.slug}
        />
      </div>
    </section>
  );
}
