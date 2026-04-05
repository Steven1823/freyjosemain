"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Bell, ChevronLeft, ChevronRight } from 'lucide-react'

export function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const liveAnnouncements = [
    'March Intake is open. Apply now before seats fill up.',
    'New ICT Lab is now operational with modern computers and fast internet.',
    'Day and Evening classes available at our Ngong campus.',
  ]

  const news = [
    {
      id: 1,
      title: 'New ICT Lab Now Open',
      excerpt: 'We are thrilled to announce the opening of our brand-new ICT laboratory equipped with the latest computers and high-speed internet at our Ngong campus.',
      date: 'February 2026',
      category: 'Announcement',
      categoryColor: 'bg-blue-100 text-blue-700',
      highlight: false,
    },
    {
      id: 2,
      title: '🎓 Graduation Ceremony — Class of 2025',
      excerpt: 'Congratulations to our Class of 2025 graduates! Over 60 students received their certificates across Beauty, ICT, Business, Hospitality, and Mechanical programs at our Ngong campus.',
      date: 'January 2026',
      category: 'Achievement',
      categoryColor: 'bg-green-100 text-green-700',
      highlight: true,
    },
    {
      id: 3,
      title: '📢 March 2026 Intake Now Open',
      excerpt: 'Applications are now open for our March 2026 intake. Seats are limited — apply early to secure your spot in any of our professional programs. Call 0715 505 526 today!',
      date: 'March 2026',
      category: 'Intake Open',
      categoryColor: 'bg-red-100 text-red-700',
      highlight: true,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length)
    }, 6500)

    return () => clearInterval(timer)
  }, [news.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % news.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + news.length) % news.length)

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with live badge */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Bell className="text-red-600 animate-bounce" size={22} />
            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Live Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600">
            Latest News &amp; Announcements
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest happenings at FREYJOSE Technical Training College, Ngong.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
            <span>Live Announcement: {liveAnnouncements[currentSlide % liveAnnouncements.length]}</span>
          </div>
          <a href="/admission/new-applications" className="text-red-700 underline underline-offset-4 whitespace-nowrap">
            Apply Now
          </a>
        </div>

        <div className="relative">
          {news.map((item, index) => (
            <Card
              key={item.id}
              className={`p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col bg-white ${item.highlight ? 'border-2 border-purple-300' : 'border border-border'} ${
                index === currentSlide ? 'opacity-100 translate-y-0 relative' : 'opacity-0 -translate-y-2 pointer-events-none absolute inset-0'
              }`}
            >
              <div className="flex gap-2 mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.categoryColor}`}>
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 mb-4 flex-1 text-base leading-relaxed">{item.excerpt}</p>
              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-sm text-muted-foreground font-medium">{item.date}</span>
                {item.id === 2 ? (
                  <a href="/about/graduation" className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:underline">
                    See Photos <ArrowRight size={14} />
                  </a>
                ) : item.id === 3 ? (
                  <a href="/admission/new-applications" className="flex items-center gap-1 text-red-600 text-sm font-semibold hover:underline">
                    Apply Now <ArrowRight size={14} />
                  </a>
                ) : (
                  <ArrowRight className="text-purple-600" size={18} />
                )}
              </div>
            </Card>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
            aria-label="Previous news slide"
          >
            <ChevronLeft size={20} className="text-purple-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
            aria-label="Next news slide"
          >
            <ChevronRight size={20} className="text-purple-700" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {news.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'w-7 bg-purple-600' : 'w-2.5 bg-purple-200'}`}
              aria-label={`Go to news slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <Bell className="mx-auto mb-3 text-yellow-300" size={32} />
          <h3 className="text-2xl font-bold mb-2">March 2026 Intake — Apply Before Seats Fill Up!</h3>
          <p className="text-purple-100 mb-6">Call or apply online today. Day &amp; Evening classes available at our Ngong campus.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admission/new-applications">
              <Button className="bg-white text-purple-700 font-bold hover:bg-purple-50 px-8 py-3">
                Apply Online Now
              </Button>
            </a>
            <a href="tel:+254715505526">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-3">
                📞 0715 505 526
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
