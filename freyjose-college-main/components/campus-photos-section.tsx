'use client'

import { useEffect, useState } from 'react'

const stats = [
  {
    value: '500+',
    label: 'Graduates',
    icon: '🎓',
    bg: 'bg-purple-600',
    desc: 'Successful professionals in the field',
  },
  {
    value: '18+',
    label: 'Courses Offered',
    icon: '📚',
    bg: 'bg-blue-600',
    desc: 'Across 5 schools of learning',
  },
  {
    value: '2015',
    label: 'Established',
    icon: '🏛️',
    bg: 'bg-red-600',
    desc: 'Over a decade of excellence in Ngong',
  },
  {
    value: '100%',
    label: 'Practical Training',
    icon: '🛠️',
    bg: 'bg-green-600',
    desc: 'Hands-on, industry-relevant curriculum',
  },
  {
    value: '3',
    label: 'Intakes Per Year',
    icon: '📅',
    bg: 'bg-orange-500',
    desc: 'January, May, and September intakes',
  },
  {
    value: '5',
    label: 'Schools of Learning',
    icon: '🏫',
    bg: 'bg-indigo-600',
    desc: 'Beauty, ICT, Business, Hospitality & Mechanical',
  },
]

export function CampusPhotosSection() {
  const [scrollY, setScrollY] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handlePreferenceChange = () => setReducedMotion(mediaQuery.matches)
    const handleScroll = () => setScrollY(window.scrollY)

    mediaQuery.addEventListener('change', handlePreferenceChange)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handlePreferenceChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-3">
          FREYJOSE at a Glance
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          A decade of transforming lives through practical, career-focused education in Ngong, Kenya.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat, index) => {
            const direction = index % 2 === 0 ? 1 : -1
            const travel = (scrollY * (0.05 + index * 0.008)) % 16
            const iconOffset = reducedMotion ? 0 : travel * direction

            return (
            <div
              key={index}
              className={`${stat.bg} text-white rounded-2xl p-6 flex flex-col items-start gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <span
                className="text-3xl will-change-transform"
                style={{ transform: `translateY(${iconOffset}px)` }}
              >
                {stat.icon}
              </span>
              <div className="text-4xl md:text-5xl font-extrabold leading-none">{stat.value}</div>
              <div className="text-lg font-bold">{stat.label}</div>
              <div className="text-sm text-white/80 leading-snug">{stat.desc}</div>
            </div>
            )
          })}
        </div>

        {/* Motto banner */}
        <div className="mt-10 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xl md:text-2xl font-bold italic mb-2">&ldquo;Opportunities through Knowledge&rdquo;</p>
          <p className="text-white/80 text-sm">
            FREYJOSE Technical Training College — Ngong, Kajiado County, Kenya
          </p>
        </div>
      </div>
    </section>
  )
}
