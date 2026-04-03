'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function VisionPage() {
  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-100 to-white pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">Our Vision & Mission</h1>
          <p className="text-lg text-gray-700 mb-8">Guiding our commitment to excellence in technical education</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Mission */}
            <Card className="p-8 bg-white border-2 border-purple-200 shadow-lg">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To unlock individual student potential through tailored professional, technical education and training solutions that percolate through the ever changing societal skill set needs.
              </p>
              <p className="text-lg font-semibold text-purple-600 italic">
                Motto: Opportunities through Knowledge
              </p>
            </Card>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-purple-600 mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Respect', desc: 'We cultivate mutual respect amongst all stakeholders.' },
                  { title: 'Teamwork', desc: 'We nurture teamwork culture by allowing individuality to thrive.' },
                  { title: 'Integrity', desc: 'We demand for doing the right things right.' },
                  { title: 'Customer Focus', desc: 'Our clients come first and everything else after.' },
                  { title: 'Creativity & Innovativeness', desc: 'We creatively and innovatively sharpen thought processes to bring out originality.' },
                ].map((value, idx) => (
                  <Card key={idx} className="p-6 bg-gradient-to-br from-purple-50 to-white border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-600 mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* About the College */}
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">About FREYJOSE College</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Established in 2015, FREYJOSE Technical Training College has been a beacon of excellence in professional and technical education. We have successfully enrolled and trained over 850 students across various Diploma, Certificate, and Vocational programs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our institution is accredited and staffed with well-trained and experienced tutors committed to delivering world-class education. Each year, we celebrate the achievements of our graduates as they enter the professional world equipped with practical skills and knowledge.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-2xl font-bold text-purple-600">Ready to Transform Your Future?</h3>
            <a href="/admission/new-applications">
              <Button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg">
                Apply Now & Join FREYJOSE
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
