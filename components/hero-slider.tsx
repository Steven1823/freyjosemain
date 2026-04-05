'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/slide-1.jpeg',
    badge: 'Success Stories',
    heading: 'Join Our Graduating Class',
    description: 'Thousands of successful graduates transforming their futures at FREYJOSE',
    buttons: [
      { text: 'Apply Now', action: 'apply', style: 'primary' },
      { text: 'View Courses', action: 'courses', style: 'secondary' },
    ],
  },
  {
    image: '/images/slide-2.jpeg',
    badge: 'Excellence in Education',
    heading: 'Professional Recognition Awaits',
    description: 'Earn your certification from a leading technical training college',
    buttons: [
      { text: 'Explore Programs', action: 'courses', style: 'primary' },
      { text: 'Call Now', action: 'call', style: 'secondary' },
    ],
  },
  {
    image: '/images/slide-3.jpeg',
    badge: 'Intake In Progress',
    heading: 'Your Future Starts Here',
    description: 'Join our community of achievers and transform your career today',
    buttons: [
      { text: 'Start Your Journey', action: 'apply', style: 'primary' },
      { text: 'Get in Touch', action: 'call', style: 'secondary' },
    ],
  },
  {
    image: '/images/student-life-upload.jpg',
    badge: 'Hands-on Training',
    heading: 'Real Skills, Real Practice',
    description: 'Train in practical sessions guided by experienced tutors and industry standards.',
    buttons: [
      { text: 'Apply Now', action: 'apply', style: 'primary' },
      { text: 'Explore Programs', action: 'courses', style: 'secondary' },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null)
    setTouchStartX(event.targetTouches[0]?.clientX ?? null)
  }

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.targetTouches[0]?.clientX ?? null)
  }

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const swipeDistance = touchStartX - touchEndX
    const minSwipe = 50

    if (swipeDistance > minSwipe) nextSlide()
    if (swipeDistance < -minSwipe) prevSlide()
  }

  const handleButtonClick = (action: string) => {
    switch (action) {
      case 'apply':
        window.location.href = '/admission/new-applications'
        break
      case 'courses':
        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'call':
        window.location.href = 'tel:+254715505526'
        break
      case 'directions':
        window.open('https://maps.google.com/?q=Ngong+Town+Kajiado+Kenya', '_blank')
        break
    }
  }

  return (
    <div
      className="relative w-full min-h-[100svh] overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.heading}
              fill
              className="object-cover object-center"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 100vw"
              quality={index === 0 ? 96 : 90}
            />
            {/* Soft gradient overlay keeps text readable while preserving photo detail */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/45" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center pt-32 sm:pt-36 md:pt-32">
              <div className="text-center text-white max-w-4xl px-4 sm:px-6">
                <h2 className="text-sm sm:text-xl md:text-3xl font-extrabold mb-1 text-red-300 tracking-wide">FREYJOSE TECHNICAL TRAINING COLLEGE</h2>
                <h3 className="text-[11px] md:text-base font-semibold mb-4 text-gray-100 tracking-widest">CREATE • INNOVATE • ELEVATE</h3>
                <div className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
                  {slide.badge}
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 leading-tight drop-shadow-sm">
                  {slide.heading}
                </h1>
                <p className="text-sm sm:text-base md:text-2xl mb-6 text-gray-50 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  {slide.buttons.map((btn, btnIndex) => (
                    <Button
                      key={btnIndex}
                      onClick={() => handleButtonClick(btn.action)}
                      className={`px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold transition-all ${
                        btn.style === 'primary'
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-white text-blue-900 hover:bg-gray-100'
                      }`}
                    >
                      {btn.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
