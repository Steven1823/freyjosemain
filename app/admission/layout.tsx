import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to FREYJOSE Technical College | Fast Online Application | Ngong, Kenya',
  description:
    'Apply today to FREYJOSE Technical College in Ngong, Kenya. Fast 2-minute online application for ICT, Beauty, Business, Driving, and Hospitality courses. Send your application directly to freyjosecollege@gmail.com.',
  keywords: [
    'apply to technical college Kenya',
    'online application form Ngong',
    'college admission Kajiado',
    'apply for ICT course',
    'beauty course application Kenya',
    'hospitality training Ngong',
    'technical college application 2025',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission',
  },
  openGraph: {
    title: 'Apply Today — FREYJOSE Technical College | Ngong',
    description: 'Start your career journey. Quick online application for professional vocational courses in Kenya.',
    url: 'https://freyjose.ac.ke/admission',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FREYJOSE Technical College Campus',
      },
    ],
  },
}

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
