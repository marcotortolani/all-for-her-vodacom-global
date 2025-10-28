import React from 'react'
import parse from 'html-react-parser'
import { cleanDataPosts } from '@/utils/functions'
import { getDataPostBySlug } from '@/utils/api'

import ButtonLikeFav from './ui/ButtonLikeFav'
import { sanitizeContent } from '@/lib/utils'

export default async function VideoPost({ slug, categorySlug }) {
  const [dataPost] = await getDataPostBySlug(slug)

  if (!dataPost) return null

  const content = sanitizeContent(dataPost.content?.rendered)

  const post = cleanDataPosts({
    posts: new Array(dataPost),
    categorySlug: categorySlug,
  })

  const vimeoNumber = dataPost?.video?.url
    ?.split('/')
    .pop(dataPost.video.url.split('/').length - 1)

  return (
    <section className="relative w-full md:w-5/6 lg:w-4/6 lg:max-w-[900px] flex flex-col items-center gap-4 ">
      <div className="z-50 absolute top-0 right-0 translate-x-2 -translate-y-2 flex items-center justify-center ">
        <ButtonLikeFav post={post[0]} />
      </div>
      <h3
        className={` w-full pr-4 font-abrilFatface font-medium text-left text-4xl md:text-5xl lg:text-6xl text-black `}
      >
        {parse(post[0]?.title || '')}
      </h3>

      <div className=" w-full aspect-video rounded-lg lg:rounded-xl">
        {vimeoNumber && (
          <iframe
            src={
              'https://player.vimeo.com/video/' +
              vimeoNumber +
              `?background=0&badge=1&autoplay=0&autopause=1&byline=0&controls=1&pip=none&quality_selector=0`
            }
            className=" rounded-[inherit]"
            loading="lazy"
            width="100%"
            height="100%"
            allow="fullscreen"
            allowFullScreen
            autoPlay={false}
            title={dataPost?.title.rendered}
          ></iframe>
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-black my-2 font-normal text-sm leading-[1.3rem] md:text-[1rem] md:leading-[1.45rem]"
      ></div>
    </section>
  )
}
