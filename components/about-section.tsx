'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const values = [
    {
      title: 'Our Vision',
      description: 'To be the leading technical training institution in East Africa, empowering individuals with globally relevant skills.',
    },
    {
      title: 'Our Mission',
      description: 'To provide accessible, affordable, and world-class technical training that transforms lives and drives national development.',
    },
    {
      title: 'Core Values',
      points: ['Excellence', 'Integrity', 'Innovation', 'Student Success', 'Community Impact'],
    },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 text-balance">
            About FREYJOSE
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Committed to delivering quality technical education and professional development since 2015.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((item, index) => (
            <Card key={index} className="p-8 bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
              {item.description && <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>}
              {item.points && (
                <div className="space-y-3">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-slate-700 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-800 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-white p-12 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to Start Your Journey?</h3>
          <p className="text-lg text-slate-600">Join thousands of students transforming their careers at FREYJOSE</p>
          <Button
            onClick={() => window.location.href = '/admission/new-applications'}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg rounded-full mx-auto"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  )
}
