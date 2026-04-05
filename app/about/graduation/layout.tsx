import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Graduation Highlights | Freyjose Technical College',
  description:
    'View graduation highlights at Freyjose Technical College, Ngong, Kenya. Our technical college prepares school leavers with certificate programmes and job-ready skills.',
  keywords: [
    'Freyjose graduation',
    'technical college graduation Kenya',
    'certificate programmes for school leavers',
    'career training Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/about/graduation',
  },
  openGraph: {
    title: 'Graduation Highlights | Freyjose Technical College',
    description: 'Celebrate student success at Freyjose Technical College in Ngong.',
    url: 'https://freyjose.ac.ke/about/graduation',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AboutGraduationLayout({ children }: { children: React.ReactNode }) {
  return children
}
