'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Certificate in Beauty Therapy',
    duration: '6 months',
    level: 'Certificate',
    units: ['Skincare & Facial Treatments', 'Body Massage Techniques', 'Nail Technology', 'Lash & Brow Artistry', 'Customer Service in Beauty'],
  },
  {
    title: 'Diploma in Cosmetology',
    duration: '1 year',
    level: 'Diploma',
    units: ['Advanced Skincare', 'Chemical Treatments', 'Electrolysis & Waxing', 'Salon Business Management', 'Health & Safety Standards'],
  },
  {
    title: 'Hairdressing & Salon Management',
    duration: '1 – 2 years',
    level: 'Diploma',
    units: ['Hair Cutting & Styling', 'Colouring & Highlighting', 'Relaxing & Perming', 'Salon Operations', 'Retail & Marketing'],
  },
]

const careers = ['Salon Owner / Manager', 'Beauty Therapist', 'Makeup Artist', 'Nail Technician', 'Spa Therapist', 'Brand Ambassador']

export default function BeautyCosmetologyPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-pink-600 to-purple-700 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-pink-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Beauty & Cosmetology</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Beauty & Cosmetology in Ngong</h1>
          <p className="text-lg text-pink-100 max-w-2xl">
            Master professional beauty skills and launch a rewarding career. FREYJOSE Technical College in Ngong, Kajiado offers hands-on beauty and cosmetology training for school leavers.
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="w-full bg-pink-50 py-10 border-b border-pink-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Beauty & Cosmetology certificates and diplomas at FREYJOSE Technical College, Ngong, Kenya.</strong> We provide professional beauty and cosmetology training for secondary school leavers seeking career advancement. Whether you're interested in hairdressing, makeup artistry, spa therapy, or salon management, our practical programmes combine classroom learning with real-world salon experience.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-10">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="p-6 border-t-4 border-pink-400 shadow-sm">
                <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3">{c.level} · {c.duration}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.units.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-pink-400 mt-0.5 flex-shrink-0" />
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
      <section className="w-full bg-pink-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-8">Career Opportunities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-pink-100">
                <CheckCircle size={18} className="text-pink-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-pink-600 to-purple-700 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Start Your Beauty Career Today</h3>
          <p className="text-pink-100 mb-6">Intake ongoing — limited seats available.</p>
          <Link href="/admission/new-applications">
            <Button className="px-10 py-4 bg-white text-pink-600 hover:bg-pink-50 font-bold text-lg rounded-full shadow-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
