'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { BookOpen, CreditCard, FileText, MessageCircle, Megaphone, ShieldCheck, UserCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const demoStudent = {
  name: 'Jane Wanjiku',
  registrationNumber: 'FJ20260001',
  course: 'ICT & Computer Studies',
  intake: 'March 2026',
  academicStatus: 'Active',
  feeBalance: 'KSH 24,000',
  amountPaid: 'KSH 36,000',
  latestResult: 'Programming - B',
}

const quickLinks = [
  { title: 'Dashboard', href: '/student-portal', icon: UserCircle },
  { title: 'Fees & Payments', href: '/student-portal#fees', icon: CreditCard },
  { title: 'Results', href: '/student-portal#results', icon: FileText },
  { title: 'Announcements', href: '/student-portal#announcements', icon: Megaphone },
  { title: 'Support', href: '/student-portal#support', icon: MessageCircle },
  { title: 'Documents', href: '/student-portal#documents', icon: BookOpen },
]

export function StudentPortalHome() {
  const [accessMode, setAccessMode] = useState<'demo' | 'live'>('demo')

  const statusBadge = useMemo(() => {
    return accessMode === 'demo' ? 'Demo mode' : 'Live Firebase mode'
  }, [accessMode])

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                <ShieldCheck className="mr-2 h-4 w-4" /> Secure student access
              </div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Welcome, {demoStudent.name}
              </h1>
              <p className="max-w-2xl text-base text-slate-600">
                This portal extension keeps the public FREYJOSE site intact while adding a secure, student-focused experience for dashboard access, fees, results, announcements, and support.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{demoStudent.registrationNumber}</p>
              <p>{demoStudent.course}</p>
              <p>Intake: {demoStudent.intake}</p>
              <p className="mt-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {statusBadge}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setAccessMode('demo')} variant={accessMode === 'demo' ? 'default' : 'outline'}>
            Demo student view
          </Button>
          <Button onClick={() => setAccessMode('live')} variant={accessMode === 'live' ? 'default' : 'outline'}>
            Firebase-ready view
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Fee Balance', value: demoStudent.feeBalance },
            { label: 'Amount Paid', value: demoStudent.amountPaid },
            { label: 'Latest Results', value: demoStudent.latestResult },
            { label: 'Academic Status', value: demoStudent.academicStatus },
          ].map((item) => (
            <Card key={item.label} className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Student portal navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {quickLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:bg-blue-50"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-blue-700" />
                        <span className="font-semibold text-slate-800">{item.title}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>What is included</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>• Secure login and protected student area</p>
              <p>• Fee balance, payments, and outstanding balances</p>
              <p>• Results, result slips, and document access</p>
              <p>• Announcements and support requests</p>
              <p>• Public chatbot plus student-specific AI assistance</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
