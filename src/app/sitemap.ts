import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sanjivaniedge.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    // Static service pages
    '/services/bpo',
    '/services/cloud',
    '/services/consulting',
    '/services/cybersecurity',
    '/services/emerging',
    '/services/erp',
    '/services/it-infrastructure',
    '/services/software',
    // Dynamic service detail pages (slugs that differ from static folders)
    '/services/software-development',
    '/services/cloud-services',
    '/services/emerging-technologies',
    '/services/consulting-support',
    '/services/bpo-services',
    '/services/erp-services',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
