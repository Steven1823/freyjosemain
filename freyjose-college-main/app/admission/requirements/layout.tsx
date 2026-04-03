import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admission Requirements | Freyjose Technical College',
  description:
    'Check admission requirements for Freyjose Technical College in Ngong, Kenya. Find entry details for certificate programmes and courses for school leavers.',
  keywords: [
    'technical college requirements Kenya',
    'Freyjose entry requirements',
    'certificate programmes requirements',
    'courses for school leavers Kenya',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission/requirements',
  },
  openGraph: {
    title: 'Admission Requirements | Freyjose Technical College',
    description: 'Review entry requirements for Freyjose Technical College programmes.',
    url: 'https://freyjose.ac.ke/admission/requirements',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function AdmissionRequirementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
