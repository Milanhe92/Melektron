import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity.client'

const builder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export function urlFor(source: any) {
  return builder.image(source)
}

// Dodajte za optimizaciju slika
export function urlForOptimized(
  source: any, 
  width: number, 
  quality = 75
) {
  return builder
    .image(source)
    .width(width)
    .quality(quality)
    .auto('format')
    .url()
}