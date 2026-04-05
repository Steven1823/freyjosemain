'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, BookOpen, Monitor, Briefcase, Car, UtensilsCrossed, Scissors } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    icon: Scissors,
    title: 'Beauty & Cosmetology',
    href: '/academics/beauty-cosmetology',
    color: 'pink',
    duration: '6 months – 2 years',
    courses: ['Certificate in Beauty Therapy', 'Diploma in Cosmetology', 'Hairdressing & Salon Management'],
    desc: 'Master professional beauty skills including skincare, makeup artistry, nail technology, and full salon management.',
  },
  {
    icon: Monitor,
    title: 'ICT & Computer Studies',
    href: '/academics/ict',
    color: 'blue',
    duration: '6 months – 2 years',
    courses: ['Certificate in Computer Applications', 'Diploma in ICT', 'Web Design & Development'],
    desc: 'Gain practical, industry-relevant skills in computing, networking, software, and digital technologies.',
  },
  {
    icon: Briefcase,
    title: 'Business & Accounting',
    href: '/academics/business-accounting',
    color: 'purple',
    duration: '1 – 3 years',
    courses: ['Accounting Technicians Diploma (ATD)', 'Certified Public Accountants (CPA)', 'Business Management Diploma'],
    desc: 'Build a strong foundation in business administration, financial accounting, and entrepreneurship.',
  },
  {
    icon: Car,
    title: 'Driving & Mechanical',
    href: '/academics/driving-mechanical',
    color: 'red',
    duration: '3 months – 1 year',
    courses: ['NTSA Driving Certificate', 'Certificate in Motor Vehicle Mechanics', 'Automotive Engineering'],
    desc: 'Become a professional driver or qualified mechanic with NTSA-accredited training and hands-on workshops.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Catering',
    href: '/academics/hospitality',
    color: 'orange',
    duration: '6 months – 2 years',
    courses: ['Certificate in Food & Beverage', 'Diploma in Hospitality Management', 'Professional Cookery'],
    desc: 'Prepare for thriving careers in hotels, restaurants, tourism and events management.',
  },
]

const colorMap: Record<string, string> = {
  pink: 'border-pink-400 bg-pink-50 text-pink-600',
  blue: 'border-blue-400 bg-blue-50 text-blue-600',
  purple: 'border-purple-400 bg-purple-50 text-purple-600',
  red: 'border-red-400 bg-red-50 text-red-600',
  orange: 'border-orange-400 bg-orange-50 text-orange-600',
}

export default function AllProgramsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-blue-700 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Academics</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Academic Programs</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            From beauty therapy to business accounting — choose a program that launches your career from day one.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog) => {
              const Icon = prog.icon
              const cardStyle = colorMap[prog.color]
              return (
                <Card key={prog.title} className={`p-6 border-t-4 ${cardStyle} bg-white shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cardStyle}`}>
                      <Icon size={26} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{prog.title}</h2>
                      <span className="text-xs text-gray-500">{prog.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.desc}</p>
                  <ul className="space-y-1 mb-5">
                    {prog.courses.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                        <BookOpen size={14} className="text-gray-400 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link href={prog.href}>
                    <Button variant="outline" className="w-full font-semibold">
                      View Program <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-red-600 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Find Your Perfect Program</h3>
          <p className="text-purple-100 text-lg mb-8">Join thousands of graduates who started their journey at FREYJOSE.</p>
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
