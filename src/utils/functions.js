export function cleanDataPosts({
  posts,
  categorySlug,
  allCategoriesData,
  videosCategoryID,
}) {
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
      category:
        categorySlug !== 0
          ? categorySlug
          : allCategoriesData.find(
              (categ) =>
                categ.id ===
                post?.categories?.filter((cat) => cat !== videosCategoryID)[0]
            )?.slug || '',
      title: post.title.rendered,
      excerpt: pExcerpt[0],
      images: imgArray,
    })
  }
  return data
}

export function getRandomPosts({ posts, qty = 'all' }) {
  if (qty === 'all' || qty > posts.length) return posts

  const elements = qty < 1 ? 1 : qty

  let postsRandom = []
  while (postsRandom.length < elements) {
    const index = Math.floor(Math.random() * posts.length)
    if (!postsRandom.some((el) => el.id === posts[index].id)) {
      postsRandom.push(posts[index])
    }
  }
  return postsRandom
}

export function getLatestPosts({ posts, qty = 'all' }) {
  if (qty === 'all' || qty > posts.length) return posts
  // take the "qty" latest
  const latestPosts = []
  for (let i = 0; i < qty; i++) {
    let post = posts[i]
    if (!post) break
    latestPosts.push(post)
  }

  return latestPosts
}

export function getImageHeaderPost(postData) {
  if (!postData) return

  // process the content and return an object with id, title, images array, paragraph excerpt array
  let imgArray = []

  postData.content.rendered
    .split('</p>')
    .map((item) => item.trim())
    .forEach((element) => {
      if (element.includes('<img')) {
        const image = element.match(/src="(.*?)"/)[1].replaceAll('"', '')
        imgArray.push(image)
      }
    })

  return imgArray[imgArray.length - 1]
}

export function getVimeoNumber({ string }) {
  // Expresión regular para encontrar el número después de "vimeo.com/"
  const regex = /vimeo.com\/(\d+)/
  // Aplicar la expresión regular a la cadena
  //const match = string.match(regex);

  const match = string.match(/src="https:\/\/player.vimeo.com\/video\/(\d+)\?/)
  // Verificar si se encontró el número
  return match && match[1] ? match[1] : null
}

export function cleanDataSearch() {}
