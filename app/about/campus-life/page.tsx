'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Lightbulb, Trophy, Heart } from 'lucide-react'

export default function CampusLifePage() {
  const campusHighlights = [
    { icon: Users, title: 'Student Clubs', desc: 'Join diverse clubs and societies to develop leadership and networking skills' },
    { icon: Lightbulb, title: 'Innovation Hub', desc: 'Access resources to develop and showcase your creative projects' },
    { icon: Trophy, title: 'Sports & Recreation', desc: 'Participate in sports events and wellness programs' },
    { icon: Heart, title: 'Student Support', desc: 'Access counseling, mentoring, and career guidance services' },
  ]

  const facilities = [
    'Modern Computer Labs',
    'Well-Equipped Workshop Facilities',
    'Library & Learning Commons',
    'Student Cafeteria',
    'Sports Facilities',
    'Prayer & Meditation Rooms',
    'Accessible Campus Grounds',
    'Student Lounges',
  ]

  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-teal-100 to-white pt-36 pb-16 sm:pt-40 sm:pb-20 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">Campus Life at FREYJOSE</h1>
          <p className="text-lg text-gray-700 mb-8">More than academics - a complete student experience</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Campus Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal-600 mb-8">Student Life Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campusHighlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Card key={idx} className="p-6 border-2 border-teal-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <Icon className="text-teal-600 flex-shrink-0" size={32} />
                      <div>
                        <h3 className="text-xl font-bold text-teal-600 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Campus Facilities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-6">Campus Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facilities.map((facility, idx) => (
                <Card key={idx} className="p-4 bg-teal-50 border border-teal-200">
                  <p className="font-semibold text-teal-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    {facility}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Testimonial */}
          <Card className="p-8 bg-gradient-to-r from-teal-50 to-purple-50 border-2 border-teal-200 mb-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Student Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">
              "FREYJOSE has given me more than just education. The friendly environment, supportive staff, and networking opportunities have shaped me into a confident professional. The balance between academics and extracurricular activities makes campus life truly enriching."
            </p>
            <p className="font-semibold text-purple-600">- Recent Graduate, Class of 2023</p>
          </Card>

          {/* Community Values */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Community Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-purple-600 mb-2">Inclusivity</h3>
                <p className="text-gray-700">Everyone is welcomed and valued for their unique contributions</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-600 mb-2">Collaboration</h3>
                <p className="text-gray-700">We work together to achieve common goals and celebrate success</p>
              </div>
              <div>
                <h3 className="font-bold text-purple-600 mb-2">Growth</h3>
                <p className="text-gray-700">Personal and professional development is encouraged at every step</p>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-teal-600">Experience Campus Life Today!</h3>
            <p className="text-lg text-gray-700">Join a community that cares about your growth</p>
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
