import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admission Process | Freyjose Technical College Ngong',
  description:
    'Understand the admission process at Freyjose Technical College in Ngong, Kenya. Follow simple steps to join certificate programmes for school leavers.',
  keywords: [
    'technical college admission process',
    'Freyjose admission steps',
    'certificate programmes Kenya',
    'courses for school leavers',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission/process',
  },
  openGraph: {
    title: 'Admission Process | Freyjose Technical College',
    description: 'See step-by-step admission guidance for Freyjose Technical College.',
    url: 'https://freyjose.ac.ke/admission/process',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AdmissionProcessLayout({ children }: { children: React.ReactNode }) {
  return children
}
