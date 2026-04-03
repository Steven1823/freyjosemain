'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Certificate in Food & Beverage',
    duration: '6 months',
    level: 'Certificate',
    units: ['Food Preparation & Cooking', 'Beverage Service', 'Food Safety & Hygiene', 'Menu Planning', 'Bar Operations'],
  },
  {
    title: 'Diploma in Hospitality Management',
    duration: '2 years',
    level: 'Diploma',
    units: ['Hotel Front Office Operations', 'Housekeeping Management', 'Food & Beverage Management', 'Events Planning', 'Tourism & Travel Management'],
  },
  {
    title: 'Professional Cookery',
    duration: '1 year',
    level: 'Certificate',
    units: ['Continental & African Cuisine', 'Pastry & Bakery', 'Kitchen Management', 'Nutritional Science', 'Catering for Events'],
  },
]

const careers = ['Hotel Manager', 'Executive Chef', 'Tour Guide', 'Events Coordinator', 'Restaurant Owner', 'Catering Manager']

export default function HospitalityPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-orange-500 to-orange-800 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-orange-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Hospitality & Catering</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hospitality & Catering in Ngong</h1>
          <p className="text-lg text-orange-100 max-w-2xl">
            Prepare for thriving careers in Kenya's hospitality and tourism sectors. FREYJOSE Technical College in Ngong offers professional catering and hospitality training.
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="w-full bg-orange-50 py-10 border-b border-orange-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Hospitality Management, Food & Beverage, and Professional Cookery programmes at FREYJOSE Technical College, Ngong, Kajiado, Kenya.</strong> We provide comprehensive catering and hospitality training for secondary school leavers seeking careers in hotels, restaurants, tourism, and event management. Master food preparation, housekeeping, hotel operations, event planning, and customer service.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-10">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="p-6 border-t-4 border-orange-400 shadow-sm">
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-3">{c.level} - {c.duration}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.units.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
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
      <section className="w-full bg-orange-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Career Opportunities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                <CheckCircle size={18} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-orange-500 to-orange-800 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Start Your Hospitality Journey</h3>
          <p className="text-orange-100 mb-6">Intake ongoing — limited seats available.</p>
          <Link href="/admission/new-applications">
            <Button className="px-10 py-4 bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg rounded-full shadow-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
