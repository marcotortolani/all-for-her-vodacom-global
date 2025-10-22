import React from "react";
import { getCategoryId } from "../../utils/api";
import { CATEGORIES } from "@/utils/static_data";
import SliderRandomPosts from "./SliderRandomPosts";
import StaticCover from "./StaticCover";
import SubcategoriesItems from "./SubcategoriesItems";
import CardsLatestPosts from "./CardsLatestPosts";
import {
  staticCoverBienestar,
  subcategoriesBienestar,
} from "@/utils/static_data";
//import LabelCategory from "./LabelCategory";

export default async function BienestarSummary() {
  const cat = CATEGORIES.bienestar;
  const id = await getCategoryId(cat.name);

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit p-0 pb-1 relative top-0 flex flex-col items-center">
      {/* <LabelCategory title={summaryElements[0].title} /> */}

      <StaticCover elem={staticCoverBienestar} />
      <SubcategoriesItems subcatElem={subcategoriesBienestar} />

      <CardsLatestPosts id={id} qty={2} categorySlug={cat.slug} />

      <div className=" w-screen  h-full pt-6 flex items-center justify-center md:bg-EpaPrimary md:bg-opacity-80 ">
        <SliderRandomPosts id={id} qty={4} categorySlug={cat.slug} />
      </div>
    </section>
  );
}
