'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomPosts } from '@/utils/functions'
import SwiperSliderHomeCover from './SwiperSliderHomeCover'

function cleanDataPosts({ posts, catFiltered }) {
  // process the content and return an object with id, title, images array, paragraph excerpt array
  let data = []
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]
    let imgArray = [],
      pExcerpt = []
    if (!post) continue
    post.excerpt.rendered
      .split('</p>')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .forEach((paragraph) => {
        pExcerpt.push(paragraph.replace(/<[^>]+>/g, ''))
      })
    post.content.rendered
      .split('</p>')
      .map((item) => item.trim())
      .forEach((element) => {
        if (element.includes('<img')) {
          const image = element.match(/src="(.*?)"/)[1].replaceAll('"', '')
          imgArray.push(image)
        }
        // else if (element !== "") {
        //   pArray.push(element);
        // }
      })
    let categ =
      catFiltered.filter((cat) => cat.id === post.categories[0])[0].slug ===
      'amor-y-sexo'
        ? 'amor'
        : catFiltered.filter((cat) => cat.id === post.categories[0])[0].slug
    
    data.push({
      id: post.id,
      category: categ,
      title: post.title.rendered,
      excerpt: pExcerpt[0],
      image: imgArray[0],
    })
  }
  return data
}

export default function SliderRandomPostsHomeCover({
  posts,
  qty,
  catFiltered,
}) {
  const [randomPosts, setRandomPosts] = useState([])

  useEffect(() => {
    if (!posts) return
    const newRandomPosts = cleanDataPosts({
      posts: getRandomPosts({ posts: posts, qty: qty }),
      catFiltered: catFiltered,
    })
    setRandomPosts(newRandomPosts)
  }, [posts, qty, catFiltered])

  return (
    <SwiperSliderHomeCover
      posts={randomPosts}
      slidesPerView={1}
      delayPerView={4000}
      spaceBetweenSlides={20}
      colorBullets={'white'}
      sizeBullets={'default'}
    />
  )
}
