import { createClient } from 'next-sanity'

<<<<<<< HEAD
import type { SanityClient } from 'next-sanity'

import { apiVersion, dataset, hasSanityConfig, projectId, useCdn } from '../env'

export const client: SanityClient | null = hasSanityConfig
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null
=======
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
>>>>>>> 84c420f8400a653b0b8515906394088b90968dfd
