export type StudentPortalModule = {
  id: string
  title: string
  description: string
}

export const studentPortalModules: StudentPortalModule[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Overview of your registration number, course, status, and key summaries.',
  },
  {
    id: 'fees',
    title: 'Fees & Payments',
    description: 'See your total fees, amount paid, balance, and payment history.',
  },
  {
    id: 'results',
    title: 'Results',
    description: 'Access published results, grades, GPA, and downloadable result slips.',
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'View official notices, study documents, and approved student files.',
  },
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'Receive academic updates, deadlines, and important notices.',
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Raise issues, ask for help, or start a secure support ticket.',
  },
]
