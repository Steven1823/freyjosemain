import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Portal | FREYJOSE',
  description: 'Student portal for fees, results, announcements, and support.',
}

export default function StudentPortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
