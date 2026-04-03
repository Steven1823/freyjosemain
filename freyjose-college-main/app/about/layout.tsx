import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About FREYJOSE | Vision & Mission | Ngong, Kenya',
  description:
    'Learn about FREYJOSE Technical Training College — our vision, mission, core values, and student-centered training in Ngong, Kajiado County, Kenya.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/about',
  },
  openGraph: {
    title: 'About FREYJOSE Technical Training College',
    description: 'Our vision, mission, and core values in Ngong, Kenya.',
    url: 'https://freyjose.ac.ke/about',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
