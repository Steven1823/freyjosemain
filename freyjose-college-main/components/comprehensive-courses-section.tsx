'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ComprehensiveCoursesSection() {
  const courseCategories = [
    {
      title: 'Business & Accounting',
      icon: '📊',
      courses: [
        'Accounting Technicians Diploma (ATD)',
        'Certified Public Accountants (CPA)',
        'Business Management',
        'Financial Management',
        'Procurement & Logistics',
      ],
    },
    {
      title: 'Beauty & Cosmetology',
      icon: '💄',
      courses: [
        'Cosmetology',
        'Hairdressing',
        'Beauty Therapy',
        'Nail Technology',
        'Barbering',
        'Salon Management',
      ],
    },
    {
      title: 'Information Technology',
      icon: '💻',
      courses: [
        'Introduction to Computers',
        'Microsoft Office Suite',
        'Internet & E-mail',
        'Web Development',
        'Network Administration',
      ],
    },
    {
      title: 'Hospitality & Service',
      icon: '🍽️',
      courses: [
        'Hotel Management',
        'Culinary Arts',
        'Event Management',
        'Catering Services',
        'Restaurant Management',
      ],
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 text-balance">
            Explore Our Professional Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-balance">
            FREYJOSE offers industry-recognized programs across multiple disciplines designed to equip you with the skills employers demand.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseCategories.map((category, idx) => (
            <Card key={idx} className="p-6 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-2xl mb-3">{category.icon}</h3>
              <h4 className="text-lg font-bold text-purple-600 mb-4">{category.title}</h4>
              <ul className="space-y-2 mb-6">
                {category.courses.map((course, courseIdx) => (
                  <li key={courseIdx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => window.location.href = '/admission/new-applications'}
                className="w-full text-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg border-2 border-purple-200 mb-12">
          <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">Why Choose FREYJOSE?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-purple-600 mb-2">Industry-Recognized</p>
              <p className="text-gray-700">Certifications accredited by KASNEB, KNEC, and NITA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-purple-600 mb-2">Expert Instructors</p>
              <p className="text-gray-700">Well-trained and experienced tutors in all levels</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold text-purple-600 mb-2">Flexible Learning</p>
              <p className="text-gray-700">Day, evening, and weekend classes available</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.href = '/admission/new-applications'}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg"
          >
            Apply Now
          </Button>
          <Button
            onClick={() => window.location.href = '/admission/requirements'}
            className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold text-lg rounded-lg"
          >
            View Requirements
          </Button>
        </div>
      </div>
    </section>
  )
}
