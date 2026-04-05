'use client'

import { Card } from '@/components/ui/card'
import { BookOpen, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StudentLifeSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Learning Modes',
      description: 'Flexible day and evening classes tailored to your schedule. Learn at your own pace with supportive instructors.',
    },
    {
      icon: Users,
      title: 'Expert Tutors',
      description: 'Industry professionals with years of experience dedicated to your success and career development.',
    },
    {
      icon: Calendar,
      title: 'Flexible Schedules',
      description: 'Multiple intake dates throughout the year. Choose what works best for your lifestyle and commitments.',
    },
  ]

  return (
    <section id="student-life" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 text-balance">
            Student Life at FREYJOSE
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            We create an environment where students thrive, learn, and grow into skilled professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-8 bg-white border-border shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-gradient-to-r from-blue-100 to-purple-100 p-6 sm:p-10 md:p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-purple-600">Experience Campus Life Today</h3>
          <p className="text-lg text-gray-700">Be part of a community that supports your growth and development</p>
          <Button
            onClick={() => window.location.href = '/admission/new-applications'}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg mx-auto"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  )
}
