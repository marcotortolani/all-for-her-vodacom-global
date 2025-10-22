import { configSiteStatic } from '../../configSiteStatic'
const {
  coverBienestar,
  coverSalud,
  coverLifestyle,
  coverConsejos,
  coverFitness,
  coverAmor,
  coverTest,
  coverVos,
  coverModa,
  coverBelleza,
  coverRecetas,
  coverCosmic,
} = configSiteStatic.images
const {
  iconoBienestar,
  iconoSalud,
  iconoLifestyle,
  iconoConsejos,
  iconoFitness,
  iconoAmor,
  iconoTest,
  iconoVos,
  iconoModa,
  iconoBelleza,
  iconoRecetas,
  iconoCosmic,
} = configSiteStatic.icons

export const CATEGORIES = {
  home: { name: 'Home', slug: '' },
  bienestar: {
    name: 'Bienestar',
    slug: 'bienestar',
  },
  moda: {
    name: 'Moda',
    slug: 'moda',
  },
  belleza: {
    name: 'Belleza',
    slug: 'belleza',
  },
  recetas: {
    name: 'Recetas',
    slug: 'recetas',
  },
  amor: {
    name: 'Amor y Sexo',
    slug: 'amor',
  },
  cosmic: {
    name: 'Cosmic',
    slug: 'cosmic',
  },
  relaciones: {
    name: 'Relaciones',
    slug: 'relaciones',
  },
  videos: {
    name: 'Videos',
    slug: 'videos',
  },
  favoritos: {
    name: 'Favoritos',
    slug: 'favoritos',
  },
  salud: {
    name: 'Salud',
    slug: 'bienestar/salud',
  },
  lifestyle: {
    name: 'Lifestyle',
    slug: 'bienestar/lifestyle',
  },
  consejos: {
    name: 'Consejos',
    slug: 'bienestar/consejos',
  },
  fitness: {
    name: 'Fitness',
    slug: 'bienestar/fitness',
  },
  tests: {
    name: 'Tests',
    slug: 'amor/tests',
  },
  vos: {
    name: 'Vos',
    slug: 'amor/vos',
  },
}

export const staticCoverBienestar = {
  id: 1,
  title: CATEGORIES.bienestar.name,
  imgSrc: coverBienestar,
  iconSrc: iconoBienestar,
  href: `/${CATEGORIES.bienestar.slug}`,
}
export const subcategoriesBienestar = [
  {
    id: 1,
    title: CATEGORIES.salud.name,
    imgSrc: coverSalud,
    iconSrc: iconoSalud,
    href: `/${CATEGORIES.salud.slug}`,
  },
  {
    id: 2,
    title: CATEGORIES.lifestyle.name,
    imgSrc: coverLifestyle,
    iconSrc: iconoLifestyle,
    href: `/${CATEGORIES.lifestyle.slug}`,
  },
  {
    id: 3,
    title: CATEGORIES.consejos.name,
    imgSrc: coverConsejos,
    iconSrc: iconoConsejos,
    href: `/${CATEGORIES.consejos.slug}`,
  },
  {
    id: 4,
    title: CATEGORIES.fitness.name,
    imgSrc: coverFitness,
    iconSrc: iconoFitness,
    href: `/${CATEGORIES.fitness.slug}`,
  },
]

export const staticCoverAmor = {
  id: 1,
  title: CATEGORIES.amor.name,
  imgSrc: coverAmor,
  iconSrc: iconoAmor,
  href: `/${CATEGORIES.amor.slug}`,
}
export const subcategoriesAmor = [
  {
    id: 1,
    title: CATEGORIES.tests.name,
    imgSrc: coverTest,
    iconSrc: iconoTest,
    href: `/${CATEGORIES.tests.slug}`,
  },
  {
    id: 2,
    title: CATEGORIES.vos.name,
    imgSrc: coverVos,
    iconSrc: iconoVos,
    href: `/${CATEGORIES.vos.slug}`,
  },
]

export const staticCoverModa = {
  id: 1,
  title: CATEGORIES.moda.name,
  imgSrc: coverModa,
  iconSrc: iconoModa,
  href: `/${CATEGORIES.moda.slug}`,
}

export const staticCoverBelleza = {
  id: 1,
  title: CATEGORIES.belleza.name,
  imgSrc: coverBelleza,
  iconSrc: iconoBelleza,
  href: `/${CATEGORIES.belleza.slug}`,
}

export const staticCoverRecetas = {
  id: 1,
  title: CATEGORIES.recetas.name,
  imgSrc: coverRecetas,
  iconSrc: iconoRecetas,
  href: `/${CATEGORIES.recetas.slug}`,
}

export const sliderSidebarCategories = [
  {
    id: 1,
    name: CATEGORIES.bienestar.name,
    imgSrc: coverBienestar,
    href: `/${CATEGORIES.bienestar.slug}`,
  },
  {
    id: 2,
    name: CATEGORIES.moda.name,
    imgSrc: coverModa,
    href: `/${CATEGORIES.moda.slug}`,
  },
  {
    id: 3,
    name: CATEGORIES.belleza.name,
    imgSrc: coverBelleza,
    href: `/${CATEGORIES.belleza.slug}`,
  },
  {
    id: 4,
    name: CATEGORIES.recetas.name,
    imgSrc: coverRecetas,
    href: `/${CATEGORIES.recetas.slug}`,
  },
  {
    id: 5,
    name: CATEGORIES.amor.name,
    imgSrc: coverAmor,
    href: `/${CATEGORIES.amor.slug}`,
  },
  {
    id: 6,
    name: CATEGORIES.cosmic.name,
    imgSrc: coverCosmic,
    href: `/${CATEGORIES.cosmic.slug}`,
  },
]
