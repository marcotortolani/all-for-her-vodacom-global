// src/utils/api.js

'use server'
import { API_CONTENT } from '@/config/config'

const REVALIDATE_CACHE = 3600 * 12 // revalidate every 12 hours

export async function getData(slug) {
  const res = await fetch(API_CONTENT + slug, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: REVALIDATE_CACHE },
  })

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`)
  }

  // Obtener el total de páginas del header
  const totalPages = res.headers.get('X-WP-TotalPages')
  const totalPosts = res.headers.get('X-WP-Total')
  const data = await res.json()

  return {
    data,
    totalPages: totalPages ? parseInt(totalPages) : 1,
    totalPosts: totalPosts ? parseInt(totalPosts) : 0,
  }
}

export async function getDataPostById(id) {
  const response = await getData(`posts/${id}`)
  return response.data
}

export async function getDataPostBySlug(slug) {
  const response = await getData(`posts?slug=${slug}`)
  return response.data
}

export async function getDataCategoryByPostId(id) {
  const response = await getData(`categories?post=${id}`)
  return response.data
}

export async function getCategoryId(categoryName) {
  const response = await getData('categories?per_page=30')
  const data_categs = response.data

  let categoryId

  data_categs?.map((cat) => {
    if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
      categoryId = cat.id
    }
  })
  return categoryId
}

export async function getPostsByCategoryId({
  id,
  tagExclude = 0,
  page = 1,
  perPage = 12,
}) {
  const response = await getData(
    `posts?per_page=${perPage}&page=${page}&categories=${id}&tags_exclude=${tagExclude}`
  )

  return {
    posts: response.data,
    totalPages: response.totalPages,
    totalPosts: response.totalPosts,
  }
}

export async function getVideoPostsByCategoryId({
  id,
  tagID = 14,
  page = 1,
  perPage = 20,
}) {
  const response = await getData(
    `posts?per_page=${perPage}&page=${page}&categories=${id}&tags=${tagID}`
  )
  return {
    posts: response.data,
    totalPages: response.totalPages,
    totalPosts: response.totalPosts,
  }
}

export async function searchData(slug) {
  const response = await getData(`posts?search=${slug}`)
  return response.data
}

export async function getCategoryNameByPostId(id) {
  const response = await getData(`categories?post=${id}`)
  return response.data[0].name.toLowerCase()
}

// // src/utils/api.js

// 'use server'
// import { API_CONTENT } from '@/config/config'

// const REVALIDATE_CACHE = 3600 * 12 // revalidate every 12 hours

// export async function getData(slug) {
//   const res = await fetch(API_CONTENT + slug, {
//     mode: 'cors',
//     credentials: 'omit',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     next: { revalidate: REVALIDATE_CACHE },
//     //cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error(`Error ${res.status}: ${res.statusText}`)
//   }
//   return res.json()
// }

// export async function getDataPagination(slug) {
//   const res = await fetch(API_CONTENT + slug, {
//     mode: 'cors',
//     credentials: 'omit',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     next: { revalidate: REVALIDATE_CACHE },
//   })
//   if (!res.ok) {
//     throw new Error(`Error ${res.status}: ${res.statusText}`)
//   }

//   // Obtener el total de páginas del header
//   const totalPages = res.headers.get('X-WP-TotalPages')
//   const totalPosts = res.headers.get('X-WP-Total')
//   const data = await res.json()

//   return {
//     data,
//     totalPages: totalPages ? parseInt(totalPages) : 1,
//     totalPosts: totalPosts ? parseInt(totalPosts) : 0,
//   }
// }

// export async function getDataPostById(id) {
//   const data_post = await getData(`posts/${id}`)
//   return data_post
// }
// export async function getDataPostBySlug(slug) {
//   const data_post = await getData(`posts?slug=${slug}`)
//   return data_post
// }

// export async function getDataCategoryByPostId(id) {
//   const data_category = await getData(`categories?post=${id}`)
//   return data_category
// }

// export async function getCategoryId(categoryName) {
//   const data_categs = await getData('categories?per_page=30')

//   let categoryId

//   data_categs?.map((cat) => {
//     if (cat.name.toLowerCase() === categoryName.toLowerCase()) {
//       categoryId = cat.id
//     }
//   })
//   return categoryId
// }

// export async function getPostsByCategoryId({ id, tagExclude = 0 }) {
//   const perPage = 10
//   const data_posts = await getData(
//     `posts?per_page=${perPage}&categories=${id}&tags_exclude=${tagExclude}`
//   )
//   return data_posts
// }

// export async function getVideoPostsByCategoryId({ id, tagID = 14 }) {
//   const perPage = 20
//   const data_posts = await getData(
//     `posts?per_page=${perPage}&categories=${id}&tags=${tagID}`
//   )
//   return data_posts
// }

// export async function searchData(slug) {
//   const data = await getData(`posts?search=${slug}`)
//   return data
// }

// export async function getCategoryNameByPostId(id) {
//   //const data = await fetch(EPA_MUJER_API + `categories?post=${id}`);
//   const data = await getData(`categories?post=${id}`)
//   //const dataJson = data.json()
//   return data[0].name.toLowerCase()
// }
