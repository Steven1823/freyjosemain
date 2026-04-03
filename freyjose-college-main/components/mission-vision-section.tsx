'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function MissionVisionSection() {
  const coreValues = [
    {
      title: 'Respect',
      description: 'We cultivate mutual respect amongst all stakeholders.',
    },
    {
      title: 'Teamwork',
      description: 'We nurture teamwork culture by allowing individuality to thrive.',
    },
    {
      title: 'Integrity',
      description: 'We demand for doing the right things right.',
    },
    {
      title: 'Customer Focus',
      description: 'Our clients come first and everything else after.',
    },
    {
      title: 'Creativity & Innovativeness',
      description: 'We creatively and innovatively sharpen thought processes to bring out originality.',
    },
  ]

  return (
    <section id="mission" className="w-full py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-white border-2 border-purple-200 shadow-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To unlock individual student potential through tailored professional, technical education and training solutions that percolate through the ever changing societal skill set needs.
            </p>
            <p className="text-lg font-semibold text-purple-600 italic">
              Motto: Opportunities through Knowledge
            </p>
          </Card>

          <Card className="p-8 bg-white border-2 border-blue-200 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be a leading technical training institution recognized for quality education, innovation, and producing skilled professionals who make meaningful contributions to society and the economy.
            </p>
            <p className="text-lg font-semibold text-blue-600 italic">
              Excellence through Education
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-12 text-balance">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-lg font-bold text-purple-600 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* About the College */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About FREYJOSE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Established in 2015, FREYJOSE Technical Training College has been a beacon of excellence in professional and technical education.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                We have successfully trained over 850 students across Diploma, Certificate, and Vocational programs with well-trained and experienced tutors.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                An accredited institution committed to developing skilled professionals equipped with practical knowledge and industry-ready competencies.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.location.href = '/about/vision'}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
