import React from "react";
import { getCategoryId, getVideoPostsByCategoryId } from "../../utils/api";
import { cleanDataPosts, getRandomPosts } from "@/utils/functions";
import { CATEGORIES } from "@/utils/static_data";
import StaticCover from "./StaticCover";
import SliderVideoPosts from "./SliderVideoPosts";
import CardsLatestPosts from "./CardsLatestPosts";
import SliderRandomPosts from "./SliderRandomPosts";
import { staticCoverBelleza } from "@/utils/static_data";
//import LabelCategory from "./LabelCategory";

export default async function BellezaSummary() {
  const cat = CATEGORIES.belleza;
  const categoryID = await getCategoryId(cat.name);
  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  const qtyVideoElements = 4;
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  });

  return (
    <section className=" z-50 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit p-0 pb-1 relative top-0 flex flex-col items-center">
      {/* <LabelCategory title={summaryElements[0].title} /> */}

      <StaticCover elem={staticCoverBelleza} />

      <CardsLatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />

      <SliderVideoPosts
        sliderElements={randomVideoPosts}
        slidesPerView={2}
        spaceBetweenSlides={10}
        delayPerView={3500}
        colorBullets={"default"}
        sizeBullets={"default"}
      />

      <div className=" w-screen  h-full pt-6 flex items-center justify-center md:bg-EpaPrimary md:bg-opacity-80 ">
        <SliderRandomPosts id={categoryID} qty={4} categorySlug={cat.slug} />
      </div>
    </section>
  );
}
