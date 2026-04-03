import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campus Life | Freyjose Technical College Ngong Kenya',
  description:
    'See campus life at Freyjose Technical College in Ngong, Kenya. Join a modern technical college with practical certificate programmes and support for school leavers.',
  keywords: [
    'campus life Freyjose',
    'technical college Ngong Kenya',
    'certificate programmes',
    'courses for school leavers',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/about/campus-life',
  },
  openGraph: {
    title: 'Campus Life | Freyjose Technical College',
    description: 'Discover the campus experience at Freyjose Technical College in Ngong.',
    url: 'https://freyjose.ac.ke/about/campus-life',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function CampusLifeLayout({ children }: { children: React.ReactNode }) {
  return children
}
