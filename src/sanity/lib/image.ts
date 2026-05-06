import { createImageUrlBuilder } from '@sanity/image-url'

<<<<<<< HEAD
import type { SanityImageSource } from '@sanity/image-url'

import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({
  projectId: projectId ?? '',
  dataset: dataset ?? '',
})

export const urlFor = (source: unknown) => {
  return builder.image(source as SanityImageSource)
=======
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: any) => {
  return builder.image(source)
>>>>>>> 84c420f8400a653b0b8515906394088b90968dfd
}
