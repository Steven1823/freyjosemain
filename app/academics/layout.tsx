import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Academics | Programs & Courses | FREYJOSE Technical Training College',
  description:
    'Explore all diploma, certificate and vocational programs offered at FREYJOSE Technical Training College in Ngong, Kajiado County, Kenya.',
  openGraph: {
    title: 'Academics – FREYJOSE Technical Training College',
    description: 'Beauty, ICT, Business, Driving, Hospitality programs and more.',
    url: 'https://freyjose.ac.ke/academics',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
