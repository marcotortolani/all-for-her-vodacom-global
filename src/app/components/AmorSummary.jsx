import React from "react";
import { getCategoryId, getVideoPostsByCategoryId } from "@/utils/api";
import { cleanDataPosts, getRandomPosts } from "@/utils/functions";
import { CATEGORIES } from "@/utils/static_data";
import LatestPosts from "./LatestPosts";
import StaticCover from "./StaticCover";
import SubcategoriesItems from "./SubcategoriesItems";
import SliderVideoPosts from "./SliderVideoPosts";
import { staticCoverAmor, subcategoriesAmor } from "@/utils/static_data";
//import LabelCategory from "./LabelCategory";

export default async function AmorSummary() {
  const cat = CATEGORIES.amor;
  const categoryID = await getCategoryId(cat.name);
  const dataVideoPosts = await getVideoPostsByCategoryId({ id: categoryID });

  const qtyVideoElements = 4;
  const randomVideoPosts = cleanDataPosts({
    posts: getRandomPosts({ posts: dataVideoPosts, qty: qtyVideoElements }),
    categorySlug: cat.slug,
  });

  return (
    <section className=" z-50 relative top-0 w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] h-fit pb-0  flex flex-col items-center">
      {/* <LabelCategory title={data?.name} /> */}

      <StaticCover elem={staticCoverAmor} />

      <SubcategoriesItems subcatElem={subcategoriesAmor} />
      
      <SliderVideoPosts
        sliderElements={randomVideoPosts}
        slidesPerView={2}
        spaceBetweenSlides={10}
        delayPerView={3500}
        colorBullets={"default"}
        sizeBullets={"default"}
      />

      <div className=" w-screen md:w-full mt-6 ">
        <LatestPosts id={categoryID} qty={2} categorySlug={cat.slug} />
      </div>
    </section>
  );
}
