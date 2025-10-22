import React from "react";
import { CATEGORIES } from "@/utils/static_data";
import {
  getCategoryId,
  getPostsByCategoryId,
  getVideoPostsByCategoryId,
} from "@/utils/api";
import { getRandomPosts, cleanDataPosts } from "@/utils/functions";
import FeaturedPosts from "@/app/components/FeaturedPosts";
import SliderVideoPosts from "@/app/components/SliderVideoPosts";
import LatestPosts from "@/app/components/LatestPosts";
import SliderCover from "@/app/components/SliderCover";

export default async function VosPage() {
  const cat = CATEGORIES.amor;
  const categoryID = await getCategoryId(cat.name);
  const dataPosts = await getPostsByCategoryId({ id: categoryID });
  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  const qtyElements = 3;
  const randomPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataPosts, qty: qtyElements }),
    categorySlug: cat.slug,
  });

  const qtyVideoElements = 4;
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  });

  return (
    <main className=" z-0 mt-36 w-full   h-full min-h-screen px-4 flex flex-col items-center justify-between ">
      <div className=" w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center">
        <SliderCover
          sliderElements={randomPosts}
          slidesPerView={1}
          spaceBetweenSlides={30}
          delayPerView={3500}
          colorBullets={"primary"}
          sizeBullets={"default"}
        />

        <FeaturedPosts id={categoryID} qty={2} categorySlug={cat.slug} />

        <SliderVideoPosts
          sliderElements={randomVideoPosts}
          slidesPerView={2}
          spaceBetweenSlides={10}
          delayPerView={3500}
          colorBullets={"default"}
          sizeBullets={"default"}
        />

        <LatestPosts id={categoryID} qty={"all"} categorySlug={cat.slug} />
      </div>

      <div className="w-full h-20"></div>
    </main>
  );
}
