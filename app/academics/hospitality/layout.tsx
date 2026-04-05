import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality & Culinary Arts Programs | FREYJOSE Technical College',
  description: 'Professional Hospitality and Culinary Arts Training at FREYJOSE. Learn hotel management, chef training, food service, and event management.',
  keywords: [
    'hospitality training Kenya',
    'culinary arts course',
    'chef training program',
    'hotel management course',
    'food service certification',
    'event management training',
    'hospitality certification',
    'professional chef course',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/academics/hospitality',
  },
  openGraph: {
    title: 'Hospitality & Culinary Arts Programs | FREYJOSE Technical College',
    description: 'Professional Hospitality & Culinary Arts training with on-campus restaurant experience.',
    url: 'https://freyjose.ac.ke/academics/hospitality',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
