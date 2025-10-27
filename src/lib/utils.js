import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parse } from 'node-html-parser'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const sanitizeContent = (content) => {
  if (!content)
    return 'Explora el mundo junto a nosotros. Descubre destinos, costumbres, sabores y consejos para viajar mejor. Acompáñanos en esta aventura y deja que cada historia te inspire a tu próxima travesía.'

  const root = parse(content.replaceAll('&nbsp;', ''))
  root
    .getElementsByTagName('p')

    .map((tag) => tag.setAttribute('style', 'margin-bottom:15px'))
  root
    .getElementsByTagName('img')
    .map((tag) =>
      tag.setAttribute(
        'style',
        'width:100%;margin-bottom:15px;border-radius:5px'
      )
    )
  return root.toString()
}
