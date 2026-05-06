import { createClient } from 'next-sanity'

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
