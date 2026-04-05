"use client"

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Wanjiru Kamau',
    role: 'Alumni — Beauty Therapy, Class of 2024',
    quote:
      'After completing my Beauty Therapy course at FREYJOSE, I was able to open my own salon in Ngong within 3 months. The practical training here is unmatched!',
  },
  {
    name: 'Brian Otieno',
    role: 'Current Student — ICT',
    quote:
      'The ICT lab is modern and the tutors are very hands-on. I can already build websites after just 4 months. FREYJOSE is the real deal.',
  },
  {
    name: 'Esther Ng\'ang\'a',
    role: 'Parent of Graduate',
    quote:
      'My daughter studied Hospitality & Catering here and got a job at a Nairobi hotel within weeks of graduating. The certificate is respected by employers.',
  },
  {
    name: 'James Mwangi',
    role: 'Alumni — Business Management, Class of 2024',
    quote:
      'The Business Management course gave me everything I needed to run my own business. The lecturers are experienced professionals who teach real-world skills.',
  },
  {
    name: 'Faith Achieng',
    role: 'Current Student — Hairdressing',
    quote:
      'Flexible evening classes allowed me to study while still working. The fee structure is also very affordable. I highly recommend FREYJOSE to anyone.',
  },
  {
    name: 'David Muthoni',
    role: 'Alumni — Motor Vehicle Mechanics',
    quote:
      'The workshop facilities are well-equipped and the instructors are very experienced. I now work at a reputable garage in Ngong town after graduating.',
  },
]

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-3">What Our Students Say</h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Real stories from students, alumni, and parents of FREYJOSE Technical Training College, Ngong.
        </p>
        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-md border border-purple-100 flex flex-col gap-3 transition-all duration-500 ${
                index === currentSlide ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-2 pointer-events-none absolute inset-0'
              }`}
            >
              <div className="text-purple-300 text-5xl font-serif leading-none select-none">&ldquo;</div>
              <p className="text-gray-700 leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-auto pt-3 border-t border-purple-50">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-purple-600">{t.role}</p>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-purple-50"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="text-purple-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-purple-50"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="text-purple-700" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, index) => (
            <button
              key={t.name}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'w-7 bg-purple-600' : 'w-2.5 bg-purple-200'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white border border-purple-100 p-6 text-center shadow-sm">
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Inspired by these success stories? Start your journey with FREYJOSE today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="/admission/new-applications">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8 py-3">
                Apply Now
              </Button>
            </a>
            <a href="#courses">
              <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3">
                View Courses
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
