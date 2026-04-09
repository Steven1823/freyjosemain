'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Accounting Technicians Diploma (ATD)',
    duration: '2 years',
    level: 'Diploma',
    units: ['Financial Accounting', 'Principles of Management', 'Entrepreneurship', 'Business Law', 'Public Finance & Taxation'],
  },
  {
    title: 'Certified Public Accountants (CPA)',
    duration: '3 years',
    level: 'Professional',
    units: ['Foundation Level', 'Intermediate Level', 'Advanced Level', 'Auditing & Assurance', 'Strategic Financial Management'],
  },
  {
    title: 'Business Management Diploma',
    duration: '2 years',
    level: 'Diploma',
    units: ['Principles of Management', 'Marketing Management', 'Human Resource Management', 'Business Communication', 'Strategic Management'],
  },
]

const careers = ['Accountant', 'Financial Analyst', 'Business Manager', 'Entrepreneur', 'Tax Consultant', 'Auditor']

export default function BusinessAccountingPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-purple-900 pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Business & Accounting</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Business & Accounting in Ngong</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Build a strong foundation in finance, accounting, and business management. FREYJOSE Technical College in Ngong offers professional business and accounting programmes for school leavers.
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="w-full bg-purple-50 py-10 border-b border-purple-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Accounting, Business Management, and CPA programmes at FREYJOSE Technical College, Ngong, Kajiado County, Kenya.</strong> We provide comprehensive business and accounting training for secondary school leavers seeking careers in finance, management, and entrepreneurship. Our diplomas cover financial accounting, business law, entrepreneurship, tax, and strategic management with practical office experience.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-10">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="p-6 border-t-4 border-purple-500 shadow-sm">
                <span className="inline-block bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full mb-3">{c.level} - {c.duration}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.units.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="w-full bg-purple-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Career Opportunities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                <CheckCircle size={18} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-purple-900 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Advance Your Business Career</h3>
          <p className="text-purple-100 mb-6">Intake ongoing — limited seats available.</p>
          <Link href="/admission/new-applications">
            <Button className="px-10 py-4 bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg rounded-full shadow-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
