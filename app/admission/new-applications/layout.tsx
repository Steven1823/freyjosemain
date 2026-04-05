import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply Now | Freyjose Technical College Ngong Kenya',
  description:
    'Apply to Freyjose Technical College in Ngong, Kenya. Join certificate programmes in ICT, business, hospitality, beauty and more for school leavers.',
  keywords: [
    'apply technical college Kenya',
    'Freyjose admissions',
    'courses for school leavers',
    'certificate programmes Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/admission/new-applications',
  },
  openGraph: {
    title: 'Apply Now | Freyjose Technical College',
    description: 'Start your application at Freyjose Technical College in Ngong, Kenya.',
    url: 'https://freyjose.ac.ke/admission/new-applications',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function NewApplicationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
