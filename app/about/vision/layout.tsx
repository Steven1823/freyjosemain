import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vision & Mission | Freyjose Technical College Ngong',
  description:
    'Read the vision, mission and values of Freyjose Technical College in Ngong, Kenya. A trusted technical college for school leavers seeking certificate programmes.',
  keywords: [
    'Freyjose Technical College vision',
    'technical college Ngong',
    'certificate programmes Kenya',
    'courses for school leavers',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/about/vision',
  },
  openGraph: {
    title: 'Vision & Mission | Freyjose Technical College',
    description:
      'See the vision and mission guiding Freyjose Technical College in Ngong, Kenya.',
    url: 'https://freyjose.ac.ke/about/vision',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return children
}
