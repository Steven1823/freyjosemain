import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beauty & Cosmetology Programs | FREYJOSE Technical College',
  description: 'Professional Beauty & Cosmetology Training in Ngong. Master makeup artistry, hairdressing, skincare, spa therapy, and salon management.',
  keywords: [
    'beauty school Kenya',
    'cosmetology course',
    'hairdressing training',
    'makeup artistry course',
    'spa therapy certification',
    'salon management training',
    'beauty certification Kenya',
    'professional beauty training',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/academics/beauty-cosmetology',
  },
  openGraph: {
    title: 'Beauty & Cosmetology Programs | FREYJOSE Technical College',
    description: 'Professional Beauty & Cosmetology training with hands-on salon experience.',
    url: 'https://freyjose.ac.ke/academics/beauty-cosmetology',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
