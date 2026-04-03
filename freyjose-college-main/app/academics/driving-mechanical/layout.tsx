import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driving & Mechanical Engineering Programs | FREYJOSE Technical College',
  description: 'Professional Driving and Mechanical Engineering Training in Ngong. PSV licensing, automotive repair, engine maintenance, and vehicle mechanics certification.',
  keywords: [
    'driving school Kenya',
    'PSV training course',
    'mechanical engineering training',
    'automotive mechanic course',
    'professional driving license',
    'vehicle maintenance training',
    'engine repair certification',
    'automotive engineering Kenya',
  ],
  alternates: {
    canonical: 'https://freyjose.ac.ke/academics/driving-mechanical',
  },
  openGraph: {
    title: 'Driving & Mechanical Engineering Programs | FREYJOSE Technical College',
    description: 'Professional Driving & Mechanical Engineering training with NTSA-certified instructors.',
    url: 'https://freyjose.ac.ke/academics/driving-mechanical',
    siteName: 'FREYJOSE Technical College',
    type: 'website',
  },
};

export default function DrivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
