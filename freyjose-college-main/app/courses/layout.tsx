import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses Offered at FREYJOSE | Technical Programs in Ngong, Kenya',
  description:
    'Browse FREYJOSE courses in Beauty, ICT, Business, Driving and Mechanical, and Hospitality. Compare options and start your application today.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/courses',
  },
  openGraph: {
    title: 'FREYJOSE Courses Offered',
    description: 'Explore technical and professional programs at FREYJOSE Technical Training College.',
    url: 'https://freyjose.ac.ke/courses',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
