import React from "react";
import { getPostsByCategoryId } from "@/utils/api";
import { getRandomPosts, cleanDataPosts } from "@/utils/functions";
import SwiperSliderPosts from "./SwiperSliderPosts";

export default async function SliderRandomPosts({ id, qty, categorySlug }) {
  const dataPosts = await getPostsByCategoryId({ id });

  const randomPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataPosts, qty: qty }),
    categorySlug,
  });

  return (
    <SwiperSliderPosts
      posts={randomPosts}
      slidesPerView={1}
      delayPerView={3500}
      spaceBetweenSlides={30}
      colorBullets={"default"}
      sizeBullets={"default"}
    />
  );
}
