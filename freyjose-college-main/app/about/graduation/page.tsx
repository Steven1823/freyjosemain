'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GraduationCap, Users, Award, Star } from 'lucide-react'

const photos = [
  {
    src: '/images/slide-1.jpeg',
    alt: 'FREYJOSE Class of 2025 Graduation Ceremony',
  },
  {
    src: '/images/slide-2.jpeg',
    alt: 'FREYJOSE 2025 Graduates receiving certificates',
  },
  {
    src: '/images/slide-3.jpeg',
    alt: 'FREYJOSE College Class of 2025 proud graduates',
  },
]

const highlights = [
  { icon: GraduationCap, value: '60+', label: 'Graduates', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Users, value: '5', label: 'Schools of Learning', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Award, value: '100%', label: 'Certificate Awarded', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Star, value: '2025', label: 'Class of', color: 'text-red-600', bg: 'bg-red-50' },
]

const programs = [
  { name: 'Beauty & Cosmetology', count: '18 graduates', color: 'bg-pink-100 text-pink-800' },
  { name: 'ICT & Computer Studies', count: '14 graduates', color: 'bg-blue-100 text-blue-800' },
  { name: 'Business & Accounting', count: '12 graduates', color: 'bg-purple-100 text-purple-800' },
  { name: 'Hospitality & Catering', count: '10 graduates', color: 'bg-orange-100 text-orange-800' },
  { name: 'Driving & Mechanical', count: '8 graduates', color: 'bg-green-100 text-green-800' },
]

export default function GraduationPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-purple-700 to-purple-900 text-white pt-44 pb-16 sm:pt-48 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎓 Graduation Ceremony 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Celebrating Our Class of 2025</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            On January 24, 2026, FREYJOSE Technical Training College held its annual graduation ceremony at our Ngong campus, celebrating 60+ students who successfully completed their professional training programs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <div key={i} className={`${h.bg} rounded-2xl p-6 text-center`}>
                  <Icon className={`${h.color} mx-auto mb-2`} size={32} />
                  <div className={`text-3xl font-extrabold ${h.color}`}>{h.value}</div>
                  <div className="text-gray-600 text-sm font-medium mt-1">{h.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">Graduation Day Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <div key={i} className="relative w-full h-48 sm:h-60 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i === 0}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-10">Graduates by Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programs.map((program, i) => (
              <div key={i} className={`${program.color} rounded-xl px-6 py-4 flex items-center justify-between`}>
                <span className="font-semibold text-sm md:text-base">{program.name}</span>
                <span className="font-bold text-sm">{program.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="w-full bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="p-8 border-2 border-purple-200 shadow-lg">
            <div className="text-purple-300 text-5xl font-serif leading-none select-none mb-4">&ldquo;</div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Class of 2025 graduation ceremony was a proud moment for everyone at FREYJOSE. Watching our students walk across the stage after months of dedication and hard work is a reminder of why we do what we do. These graduates are now equipped with real, practical skills that will transform their futures and contribute to Kenya&apos;s economy.
            </p>
            <div className="border-t border-purple-100 pt-4">
              <p className="font-bold text-gray-900">The Principal</p>
              <p className="text-sm text-purple-600">FREYJOSE Technical Training College, Ngong</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Next Intake CTA */}
      <section className="w-full bg-purple-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our March 2026 Intake</h2>
          <p className="text-purple-100 text-lg mb-8">
            Be part of the next graduating class. Applications are open now — seats are limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admission/new-applications">
              <Button className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 py-3 text-lg">
                Apply Now →
              </Button>
            </a>
            <a href="tel:+254715505526">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-3 text-lg">
                Call 0715 505 526
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
