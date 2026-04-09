'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

export default function EventsPage() {
  const upcomingEvents = [
    { 
      title: 'March 2026 Intake Open Day', 
      date: 'Every Saturday, 9 AM – 1 PM', 
      location: 'FREYJOSE Campus, Ngong Town',
      description: 'Visit our Ngong campus, meet our tutors, explore facilities and submit your application on the spot.'
    },
    { 
      title: 'Graduation Ceremony — Class of 2025', 
      date: 'April 5, 2026', 
      location: 'FREYJOSE Main Hall, Ngong',
      description: 'Celebrating the achievements of our Class of 2025 graduates with family, friends and industry guests.'
    },
    { 
      title: 'Beauty & Cosmetology Showcase', 
      date: 'April 20, 2026', 
      location: 'FREYJOSE Campus, Ngong',
      description: 'Students demonstrate their skills in hair, makeup, and cosmetology to the public and potential employers.'
    },
    { 
      title: 'Industry Workshop — ICT & Business', 
      date: 'Monthly Sessions', 
      location: 'ICT Lab, Ngong Campus',
      description: 'Guest lectures and hands-on workshops with industry professionals covering the latest trends.'
    },
  ]

  const pastEvents = [
    { title: 'Graduation 2024', theme: 'Enhancing Skills for Life', graduates: '60+ students' },
    { title: 'Career Fair 2024', desc: 'Students networked with 20+ employers from Nairobi and Kajiado' },
    { title: 'Mentorship Program Launch', desc: 'Industry professionals mentor students in their chosen fields' },
  ]

  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-red-100 to-white pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">College Events</h1>
          <p className="text-lg text-gray-700 mb-8">Be part of our vibrant college community</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, idx) => (
                <Card key={idx} className="p-6 border-2 border-red-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-3">
                    <Calendar className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-red-600 mb-1">{event.title}</h3>
                      <p className="text-sm font-semibold text-purple-600">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Events Highlight */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-red-50 border-2 border-purple-200 mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Graduation Theme 2024</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ENHANCING SKILLS FOR LIFE
            </p>
            <p className="text-gray-700">
              Our annual graduation ceremony celebrates the transformation of students into skilled professionals. Skill enhancement provides the opportunity and knowledge for individuals to develop and strengthen the necessary skills to gain, maintain, and advance in their chosen area. Join us as we honor the achievements of our graduates.
            </p>
          </Card>

          {/* Past Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Recent Highlights</h2>
            <div className="space-y-3">
              {pastEvents.map((event, idx) => (
                <Card key={idx} className="p-4 bg-red-50 border border-red-200">
                  <p className="font-semibold text-red-600">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.theme || event.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-red-600">Don't Miss Our Next Event!</h3>
            <p className="text-lg text-gray-700">Join FREYJOSE and be part of our dynamic learning community</p>
            <Button 
              onClick={() => window.location.href = '/admission/new-applications'}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
