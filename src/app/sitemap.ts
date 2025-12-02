import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sanjivaniedge.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/bpo',
    '/services/cloud',
    '/services/consulting',
    '/services/cybersecurity',
    '/services/emerging',
    '/services/erp',
    '/services/it-infrastructure',
    '/services/software',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
