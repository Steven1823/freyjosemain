import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FREYJOSE Technical Training College',
    short_name: 'FREYJOSE',
    description:
      'Career-focused technical college in Ngong for school leavers, with hands-on programmes in ICT, business, hospitality, beauty and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f2747',
    icons: [
      {
        src: '/icon.jpg?v=20260327',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/icon.jpg?v=20260327',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
