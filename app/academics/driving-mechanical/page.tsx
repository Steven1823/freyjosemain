'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'NTSA Driving Certificate',
    duration: '3 months',
    level: 'Certificate',
    units: ['Traffic Rules & Regulations', 'Defensive Driving', 'Vehicle Safety Checks', 'Road Signs & Markings', 'NTSA Licensing Procedures'],
  },
  {
    title: 'Certificate in Motor Vehicle Mechanics',
    duration: '1 year',
    level: 'Certificate',
    units: ['Engine Overhaul & Maintenance', 'Electrical Systems', 'Transmission & Gearbox', 'Brakes & Suspension', 'Diagnostics & Troubleshooting'],
  },
  {
    title: 'Automotive Engineering',
    duration: '2 years',
    level: 'Diploma',
    units: ['Advanced Engine Technology', 'Auto-Electronics', 'Fleet Management', 'Workshop Management', 'Safety & Environmental Compliance'],
  },
]

const careers = ['Professional Driver', 'Motor Vehicle Mechanic', 'Fleet Manager', 'Auto Electrician', 'Service Garage Owner', 'Automotive Technician']

export default function DrivingMechanicalPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-red-600 to-red-900 pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-red-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Driving & Mechanical</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Driving & Mechanical in Ngong</h1>
          <p className="text-lg text-red-100 max-w-2xl">
            NTSA-accredited driving courses and hands-on motor vehicle mechanics training. FREYJOSE Technical College in Ngong offers driving and mechanical diplomas for school leavers.
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="w-full bg-red-50 py-10 border-b border-red-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            <strong>Driving, Motor Vehicle Mechanics, and Automotive Engineering programmes at FREYJOSE Technical College, Ngong, Kajiado, Kenya.</strong> We provide NTSA-accredited professional driving certificates, motor mechanics training, and automotive engineering diplomas for secondary school leavers. Learn engine overhaul, electrical diagnostics, vehicle maintenance, fleet management, and workshop operations.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-10">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="p-6 border-t-4 border-red-400 shadow-sm">
                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">{c.level} - {c.duration}</span>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.units.map((u) => (
                    <li key={u} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
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
      <section className="w-full bg-red-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Career Opportunities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-red-100">
                <CheckCircle size={18} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{career}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-red-600 to-red-900 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Get Behind the Wheel of Your Career</h3>
          <p className="text-red-100 mb-6">Intake ongoing — enrol today.</p>
          <Link href="/admission/new-applications">
            <Button className="px-10 py-4 bg-white text-red-600 hover:bg-red-50 font-bold text-lg rounded-full shadow-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
