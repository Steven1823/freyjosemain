import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://freyjose.ac.ke/sitemap.xml',
    host: 'https://freyjose.ac.ke',
  }
}
