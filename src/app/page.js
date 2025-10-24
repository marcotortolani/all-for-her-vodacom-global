import React from 'react'
import { getData } from '@/utils/api'
import { CATEGORIES } from '@/utils/constants'

import SliderRandomPostsHomeCover from './components/SliderRandomPostsHomeCover'
import SliderCategoryButtons from './components/SliderCategoryButtons'
import HorizontalLine from './components/ui/HorizontalLine'
import HealthSummary from './components/HealthSummary'
import LifestyleSummary from './components/LifestyleSummary'
import FoodSummary from './components/FoodSummary'
import FashionSummary from './components/FashionSummary'
import FitnessSummary from './components/FitnessSummary'
import AdviceSummary from './components/AdviceSummary'

export default async function Home() {
  const categoriesIDExcluded = [CATEGORIES.food.id]

  const stringIDExcluded = categoriesIDExcluded.join(',')

  const { data: dataPostsFiltered } = await getData(
    `posts?per_page=30&categories_exclude=${stringIDExcluded}`
  )

  return (
    <main className=" z-0 relative w-full px-4 flex flex-col items-center ">
      <div className=" z-40 relative top-0 w-screen h-[92vh] min-h-[540px] flex flex-col items-center">
        <SliderRandomPostsHomeCover posts={dataPostsFiltered} qty={4} />
        <SliderCategoryButtons />
      </div>
      <HealthSummary />
      <div className=" w-full mb-4 md:mb-0 md:h-20 md:w-5/6 lg:max-w-4xl lg:w-4/6 flex justify-center items-center ">
        <HorizontalLine />
      </div>
      <LifestyleSummary />
      <FoodSummary />
      <FashionSummary />
      <FitnessSummary />
      <AdviceSummary />
      <div className="w-full h-20"></div>
    </main>
  )
}
