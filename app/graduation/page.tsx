'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, GraduationCap, Calendar, Award, Camera, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { icon: GraduationCap, value: '60+', label: 'Graduates', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Users, value: '5', label: 'Departments', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Award, value: '100%', label: 'Certified', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Star, value: '2025', label: 'Class of', color: 'text-red-600', bg: 'bg-red-50' },
]

const photos = [
  { src: '/images/slide-1.jpeg', alt: 'FREYJOSE Class of 2025 Graduation Ceremony' },
  { src: '/images/slide-2.jpeg', alt: 'FREYJOSE 2025 Graduates receiving certificates' },
  { src: '/images/slide-3.jpeg', alt: 'FREYJOSE College proud Class of 2025' },
]

const programs = [
  { name: 'Beauty & Cosmetology', count: '18 graduates', color: 'bg-pink-100 text-pink-800' },
  { name: 'ICT & Computer Studies', count: '14 graduates', color: 'bg-blue-100 text-blue-800' },
  { name: 'Business & Accounting', count: '12 graduates', color: 'bg-purple-100 text-purple-800' },
  { name: 'Hospitality & Catering', count: '10 graduates', color: 'bg-orange-100 text-orange-800' },
  { name: 'Driving & Mechanical', count: '8 graduates', color: 'bg-green-100 text-green-800' },
]

const steps = [
  { step: 1, title: 'Complete Your Program', desc: 'Successfully finish all required units, practicals, and examinations for your enrolled program.' },
  { step: 2, title: 'Clear Outstanding Fees', desc: 'Ensure all tuition and exam fees are fully settled before the graduation registration deadline.' },
  { step: 3, title: 'Register for Graduation', desc: 'Fill in the graduation registration form from the admissions office at least 4 weeks before the ceremony.' },
  { step: 4, title: 'Collect Your Gown', desc: 'Collect your graduation gown and accessories from the college store one week before the ceremony.' },
  { step: 5, title: 'Attend the Ceremony', desc: 'Join family, friends, and the FREYJOSE community for a memorable graduation celebration.' },
]

export default function GraduationPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-800 to-blue-700 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Graduation</span>
          </nav>
          <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎓 Graduation Ceremony 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Celebrating Our Class of 2025</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            On January 24, 2026, FREYJOSE Technical Training College proudly held its annual graduation ceremony at our Ngong campus — celebrating over 60 students who completed their professional training programs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className={`${s.bg} rounded-2xl p-6 text-center`}>
                  <Icon className={`${s.color} mx-auto mb-2`} size={32} />
                  <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                  <div className="text-gray-600 text-sm font-medium mt-1">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2025 Graduation Photos */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-700 mb-3">2025 Graduation Day Moments</h2>
            <p className="text-gray-600">Highlights from our memorable January 2026 graduation ceremony</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div key={i} className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden rounded-2xl shadow-md group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-xs font-semibold bg-black/40 px-2 py-1 rounded">{photo.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs that graduated */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-3">Class of 2025 by Department</h2>
          <p className="text-gray-600 mb-8">Graduates across all five schools of learning at FREYJOSE</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((p, i) => (
              <div key={i} className={`rounded-xl px-5 py-4 font-semibold flex items-center justify-between ${p.color}`}>
                <span>{p.name}</span>
                <span className="bg-white/60 px-2 py-0.5 rounded text-xs font-bold">{p.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Graduate */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-3">How to Graduate</h2>
            <p className="text-gray-600">Follow these steps to ensure a smooth graduation process</p>
          </div>
          <div className="space-y-5">
            {steps.map((s) => (
              <Card key={s.step} className="p-6 bg-white shadow-sm flex gap-5 items-start border-l-4 border-blue-500">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: 'Annual Ceremonies', desc: 'Held in January and July each year at our Ngong campus.', color: 'bg-blue-50 text-blue-600' },
              { icon: Award, title: 'Merit Awards', desc: 'Top performers receive merit awards and scholarship opportunities.', color: 'bg-purple-50 text-purple-600' },
              { icon: Camera, title: 'Professional Photos', desc: 'Professional photography and videography on your graduation day.', color: 'bg-pink-50 text-pink-600' },
              { icon: GraduationCap, title: 'Gowns & Regalia', desc: 'Full graduation gowns and regalia provided on the ceremony day.', color: 'bg-green-50 text-green-600' },
            ].map((h, i) => {
              const Icon = h.icon
              return (
                <Card key={i} className="p-5 text-center shadow-sm border border-gray-100">
                  <div className={`w-12 h-12 ${h.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{h.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-purple-800 to-blue-700 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <GraduationCap size={48} className="text-white/60 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Your Graduation Starts Today</h3>
          <p className="text-purple-100 text-lg mb-8">
            Enrol now and take the first step towards joining our next class of proud FREYJOSE graduates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission/new-applications">
              <Button className="px-10 py-4 bg-white text-purple-800 hover:bg-purple-50 font-bold text-lg rounded-full shadow-lg">
                Apply Now
              </Button>
            </Link>
            <a href="tel:+254715505526">
              <Button variant="outline" className="px-10 py-4 border-white text-white hover:bg-white/10 font-bold text-lg rounded-full">
                Call: +254 715 505 526
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
