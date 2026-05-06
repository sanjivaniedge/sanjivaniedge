import { createImageUrlBuilder } from '@sanity/image-url'

import type { SanityImageSource } from '@sanity/image-url'

import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({
  projectId: projectId ?? '',
  dataset: dataset ?? '',
})

export const urlFor = (source: unknown) => {
  return builder.image(source as SanityImageSource)
}
