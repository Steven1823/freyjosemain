import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Freyjose Technical College Ngong, Kenya',
  description: 'Find answers about Freyjose Technical College in Ngong, Kajiado: admissions, courses offered, fees, location, and student support.',
  keywords: [
    'FREYJOSE FAQs',
    'frequently asked questions',
    'FREYJOSE admissions FAQ',
    'course information',
    'fees and payments',
    'student life questions',
    'technical college Kenya',
    'Freyjose Ngong location',
    'courses offered in Ngong',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/faqs',
  },
  openGraph: {
    title: 'FAQs - Frequently Asked Questions | FREYJOSE Technical College',
    description: 'Find answers to commonly asked questions about admissions, courses, fees, and student support at FREYJOSE.',
    url: 'https://freyjose.ac.ke/faqs',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
