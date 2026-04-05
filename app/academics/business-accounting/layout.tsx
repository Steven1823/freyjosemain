import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business & Accounting Programs | FREYJOSE Technical College',
  description: 'Master Business Management and Accounting at FREYJOSE. Comprehensive training in bookkeeping, financial reporting, taxation, and entrepreneurship.',
  keywords: [
    'accounting course Kenya',
    'business management training',
    'bookkeeping course',
    'financial reporting certification',
    'accounting software training',
    'entrepreneurship course',
    'KASNEB pathway',
    'business certification Kenya',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/academics/business-accounting',
  },
  openGraph: {
    title: 'Business & Accounting Programs | FREYJOSE Technical College',
    description: 'Professional Business & Accounting training with industry certification pathways.',
    url: 'https://freyjose.ac.ke/academics/business-accounting',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
