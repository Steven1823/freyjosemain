import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'College Events | Freyjose Technical College Ngong',
  description:
    'Explore student events at Freyjose Technical College in Ngong, Kenya. A vibrant technical college with practical certificate programmes for school leavers.',
  keywords: [
    'Freyjose college events',
    'technical college student life Kenya',
    'courses for school leavers',
    'certificate programmes Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/about/events',
  },
  openGraph: {
    title: 'College Events | Freyjose Technical College',
    description: 'Discover events and activities at Freyjose Technical College in Ngong.',
    url: 'https://freyjose.ac.ke/about/events',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children
}
