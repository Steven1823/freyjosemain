import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, ShieldCheck, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'School Management | Freyjose Technical College',
  description:
    'Meet the school management team at Freyjose Technical College in Ngong, including the School Director and leadership approach.',
  alternates: {
    canonical: 'https://freyjose.ac.ke/about/management',
  },
  openGraph: {
    title: 'School Management | Freyjose Technical College',
    description:
      'Learn about the leadership team and School Director at Freyjose Technical College in Ngong, Kenya.',
    url: 'https://freyjose.ac.ke/about/management',
    siteName: 'FREYJOSE Technical Training College',
    type: 'website',
  },
}

const leadershipPrinciples = [
  {
    icon: Users,
    title: 'Student-centered leadership',
    description: 'Decisions are guided by student growth, practical learning, and employability outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountable administration',
    description: 'The management team supports a disciplined, transparent, and supportive learning environment.',
  },
  {
    icon: GraduationCap,
    title: 'Career-focused direction',
    description: 'Leadership keeps every program aligned with industry needs and real-world skills development.',
  },
]

export default function ManagementPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="w-full bg-gradient-to-b from-slate-100 to-white pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-slate-900 text-white hover:bg-slate-900">School Management</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Leadership at FREYJOSE</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the leadership guiding Freyjose Technical College and supporting a practical, student-focused
            learning experience in Ngong, Kenya.
          </p>
        </div>
      </section>

      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="p-8 border-2 border-slate-200 shadow-lg bg-gradient-to-br from-white to-slate-50">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">School Director</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">School Director</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The School Director provides strategic leadership for the college, ensuring that teaching,
                student support, and operations stay aligned with the institution's mission.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This office works closely with tutors, support staff, and partners to maintain quality training,
                strong discipline, and a clear path from classroom learning to workplace readiness.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you are a student, parent, or partner, the management team is committed to clear communication
                and a responsive college experience.
              </p>
            </Card>

            <div className="space-y-6">
              {leadershipPrinciples.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="p-6 border border-slate-200">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-slate-900 text-white p-3">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <Card className="mt-8 p-8 bg-slate-900 text-white border-0 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Working with the School Director</h2>
            <p className="text-slate-200 leading-relaxed mb-6 max-w-3xl">
              The School Director oversees the college's standards and supports the staff in delivering a safe,
              practical, and respectful environment for every learner.
            </p>
            <Link
              href="/about/vision"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              View Vision & Mission
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
