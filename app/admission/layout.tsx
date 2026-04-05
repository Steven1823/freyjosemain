import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admissions | Apply to FREYJOSE Technical College | Ngong, Kenya',
  description:
    'Apply to FREYJOSE Technical Training College in Ngong, Kenya. Learn about our admission process, requirements, and how to enroll in our professional courses. Intake is in progress — apply today!',
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission',
  },
  openGraph: {
    title: 'Admissions — FREYJOSE Technical Training College',
    description: 'Apply now for our professional courses in Ngong, Kenya. Simple admission process, intake in progress.',
    url: 'https://freyjose.ac.ke/admission',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
