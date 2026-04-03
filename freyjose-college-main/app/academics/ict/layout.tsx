import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ICT - Information & Communication Technology | FREYJOSE Technical College',
  description: 'Learn ICT and Software Development at FREYJOSE. Professional training in programming, web development, networking, cybersecurity, and database management in Ngong, Kenya.',
  keywords: [
    'ICT course Kenya',
    'software development training',
    'programming course Ngong',
    'web development Kenya',
    'networking course',
    'cybersecurity training',
    'computer science certification',
    'technical college ICT',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/academics/ict',
  },
  openGraph: {
    title: 'ICT Programs | FREYJOSE Technical College',
    description: 'Professional ICT and Software Development training with practical experience.',
    url: 'https://freyjose.ac.ke/academics/ict',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function ICTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
