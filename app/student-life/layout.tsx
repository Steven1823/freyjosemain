import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Life at FREYJOSE | Campus Activities and Support',
  description:
    'Discover student life at FREYJOSE, including clubs, mentorship, student support services, and campus facilities in Ngong, Kenya.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/student-life',
  },
  openGraph: {
    title: 'Student Life at FREYJOSE',
    description: 'Campus activities, support services, and a vibrant learning community.',
    url: 'https://freyjose.ac.ke/student-life',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function StudentLifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
