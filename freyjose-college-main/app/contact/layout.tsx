import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact FREYJOSE Technical Training College | Ngong, Kenya',
  description:
    'Contact FREYJOSE Technical Training College for admissions, course guidance, and campus visits. Call +254 715 505 526 or email info@freyjose.ac.ke.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/contact',
  },
  openGraph: {
    title: 'Contact FREYJOSE Technical Training College',
    description: 'Reach admissions and support teams in Ngong, Kajiado County, Kenya.',
    url: 'https://freyjose.ac.ke/contact',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
