import { ImageProps } from 'next/image'
import { LinkProps } from 'next/link'

export type Article = {
  id: number
  title: string
  description: string
  author: string
  profileSrc: ImageProps['src']
  articleLink: LinkProps['href']
  imageSrc: ImageProps['src']
  imageAlt?: ImageProps['alt']
}

export type Coach = {
  id: Number
  profileLink: LinkProps['href']
  profileSrc: ImageProps['src']
  name: string
  location: string
  latitude: number
  longitude: number
  rating: number
  tags: Tag[]
  header: string
  body: string
  items: Item[]
  feature?: {
    title: string
    description: string
  }
}

export type Item = {
  title: string
  description: string
  price: number
}

export type Tag = {
  title: string
  href: string
}

export type Location = {
  title: string
  lat: number
  lng: number
}
