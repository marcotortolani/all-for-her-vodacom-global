'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomPosts } from '@/utils/functions'
import SwiperSliderHomeCover from './SwiperSliderHomeCover'

function cleanDataPosts({ posts }) {
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

    data.push({
      id: post.id,
      category: post.categories[0],
      title: post.title.rendered,
      slug: post.slug,
      excerpt: pExcerpt[0],
      tags: post.tags,
      image: imgArray[0],
    })
  }
  return data
}

export default function SliderRandomPostsHomeCover({ posts, qty }) {
  const [randomPosts, setRandomPosts] = useState([])

  useEffect(() => {
    if (!posts) return
    const newRandomPosts = cleanDataPosts({
      posts: getRandomPosts({ posts: posts, qty: qty }),
    })
    setRandomPosts(newRandomPosts)
  }, [posts, qty])

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
