import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Graduation at FREYJOSE | Ceremony Details and Graduate Journey',
  description:
    'See FREYJOSE graduation updates, ceremony highlights, and the graduation process for students across all departments.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/graduation',
  },
  openGraph: {
    title: 'FREYJOSE Graduation',
    description: 'Graduation highlights and guidance for current students.',
    url: 'https://freyjose.ac.ke/graduation',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function GraduationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
