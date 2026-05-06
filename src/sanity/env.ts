export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

<<<<<<< HEAD
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const hasSanityConfig = Boolean(dataset && projectId)

export const useCdn = false
=======
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
>>>>>>> 84c420f8400a653b0b8515906394088b90968dfd
