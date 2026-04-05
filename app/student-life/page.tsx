'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, BookOpen, Users, Calendar, Heart, Trophy, Music } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const activities = [
  { icon: BookOpen, title: 'Flexible Learning', desc: 'Day and evening classes designed to fit your schedule without compromising on quality.' },
  { icon: Users, title: 'Peer Community', desc: 'Connect with like-minded students and build lifelong friendships and professional networks.' },
  { icon: Calendar, title: 'Events & Activities', desc: 'Cultural days, sports, industry visits, and graduation ceremonies throughout the year.' },
  { icon: Heart, title: 'Student Welfare', desc: 'Dedicated counselling and welfare services to support your physical and mental wellbeing.' },
  { icon: Trophy, title: 'Competitions & Awards', desc: 'Annual awards recognising academic excellence and outstanding student contributions.' },
  { icon: Music, title: 'Arts & Culture', desc: 'Express yourself through drama, music, and cultural festivals that celebrate diversity.' },
]

const graduationPhoto = {
  src: '/images/slide-1.jpeg',
  alt: 'FREYJOSE Class of 2025 graduation group photo',
}

const learningPhotos = [
  {
    src: '/images/student-life-learning.jpg',
    alt: 'Students in practical beauty and hairdressing learning session',
  },
  {
    src: '/images/student-life-learning-2.jpg',
    alt: 'Students practicing hands-on beauty training in class',
  },
  {
    src: '/images/student-life-learning-3.jpg',
    alt: 'Students practicing salon and beauty skills during class',
  },
]

export default function StudentLifePage() {
  const [currentLearningIndex, setCurrentLearningIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLearningIndex((prev) => (prev + 1) % learningPhotos.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-blue-700 pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Student Life</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Life at FREYJOSE</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Beyond the classroom — discover a vibrant, supportive environment where you grow as a student and as a person.
          </p>
        </div>
      </section>

      {/* Graduation 2025 Photo */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">Graduation 2025</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            In 2025, FREYJOSE celebrated a successful graduation ceremony where students from different departments completed their training and moved to the next stage of their careers.
          </p>
          <div className="max-w-3xl mx-auto w-full px-2 sm:px-0">
            <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-2xl shadow-md group">
              <Image
                src={graduationPhoto.src}
                alt={graduationPhoto.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning in Progress */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">Learning in Progress</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Our students learn through hands-on practical sessions every day, building real skills for employment and entrepreneurship.
          </p>
          <div className="max-w-3xl mx-auto w-full px-2 sm:px-0">
            <div className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden rounded-2xl shadow-md group">
              {learningPhotos.map((photo, index) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                    index === currentLearningIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {learningPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  aria-label={`Show learning image ${index + 1}`}
                  onClick={() => setCurrentLearningIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentLearningIndex ? 'w-8 bg-purple-600' : 'w-2.5 bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">Life Beyond the Classroom</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => {
              const Icon = act.icon
              return (
                <Card key={i} className="p-6 bg-white shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{act.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-br from-purple-700 to-red-600 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">Become Part of Our Community</h3>
          <p className="text-purple-100 mb-6">Experience a college life that shapes your future and builds your character.</p>
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
