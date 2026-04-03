'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HelpCircle, FileText, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function RequirementsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const requirements = [
    {
      title: 'Basic Entry Requirements',
      items: [
        'Level 6 courses: Minimum KCSE grade C- (minus)',
        'Level 5 courses: Minimum KCSE grade D',
        'Level 3 courses: KCPE certificate accepted',
        'Valid national identification (ID/Passport)',
        'Birth certificate (copy)',
        'Passport-size photographs (2)',
      ],
    },
    {
      title: 'Program-Specific Requirements',
      items: [
        'Some courses may require specific subject passes',
        'Beauty & Hospitality: No specific subject requirements',
        'Business Management: Preferably with English and Math',
        'Accounting Programs: Math and English passes preferred',
        'Technical Programs: Science subjects beneficial',
      ],
    },
    {
      title: 'Age & Eligibility',
      items: [
        'Minimum age: 18 years at time of enrollment',
        'No maximum age limit - lifelong learning encouraged',
        'Nationals and international students welcome',
        'Must be of good moral character',
        'No criminal record required disclosure',
      ],
    },
  ]

  const faqs = [
    {
      q: 'What is the minimum academic qualification required?',
      a: 'Entry depends on level: Level 6 requires KCSE C- (minus), Level 5 requires KCSE D, and Level 3 requires a KCPE certificate.',
    },
    {
      q: 'Can international students apply?',
      a: 'Yes! International students are welcome. You will need a valid passport, evidence of English proficiency, and may need a student visa depending on your country. Contact admissions for specific requirements.',
    },
    {
      q: 'What are the program duration and fees?',
      a: 'Program durations range from 3-12 months depending on the course. The application fee is KSH 1,000. Course fees vary by program and payment plans are available.',
    },
    {
      q: 'Do you offer computer classes?',
      a: 'Yes, computer classes are available as part of our training options.',
    },
    {
      q: 'Are there scholarships or financial aid?',
      a: 'We offer merit-based support for deserving students. Payment plans are available to help spread costs. Contact our financial aid office to discuss options.',
    },
    {
      q: 'What is the class size and learning environment?',
      a: 'We maintain small class sizes (average 20-30 students) to ensure personalized attention. Our modern facilities and experienced tutors create an engaging learning environment.',
    },
    {
      q: 'Do you offer evening and weekend classes?',
      a: 'Yes! We offer flexible schedules including morning, afternoon, and evening classes to accommodate working professionals and other commitments.',
    },
    {
      q: 'What happens after I complete my course?',
      a: 'You receive an accredited certificate/diploma. We provide career guidance, job placement support, and access to our alumni network for continued professional development.',
    },
    {
      q: 'Can I transfer from another institution?',
      a: 'Yes, we accept transfers. Contact admissions to discuss your previous studies and how they can be credited toward your program here.',
    },
    {
      q: 'What support services are available?',
      a: 'We offer counseling, academic support, career guidance, library access, and sports facilities. Student support is integral to our mission.',
    },
    {
      q: 'How do I contact admissions?',
      a: 'Email: info@freyjose.ac.ke | Phone: +254 712 345 678 | Visit: Admissions office during working hours | WhatsApp: +254 712 345 678',
    },
  ]

  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-green-100 to-white pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">Requirements & FAQs</h1>
          <p className="text-lg text-gray-700 mb-8">Everything you need to know about applying</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-green-600 mb-8 flex items-center gap-3">
              <FileText size={32} />
              Entry Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {requirements.map((req, idx) => (
                <Card key={idx} className="p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-600 mb-4">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Document Checklist */}
          <Card className="p-8 bg-blue-50 border-2 border-blue-200 mb-16">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Application Documents Checklist</h2>
            <div className="space-y-3">
              {[
                'Valid National ID or Passport (copy)',
                'KCSE Certificate or equivalent (copy)',
                'Birth Certificate (copy)',
                'Passport-size photographs (2)',
                'Academic transcripts if applying for higher level',
                'Character reference letter (optional)',
                'Medical fitness certificate (if required by program)',
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-blue-600 rounded"></div>
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-8 flex items-center gap-3">
              <HelpCircle size={32} />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card 
                  key={idx}
                  className="border-2 border-purple-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-purple-600 text-lg pr-4">{faq.q}</h3>
                      <span className={`text-2xl text-purple-600 flex-shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </div>
                    {expandedFaq === idx && (
                      <div className="mt-4 pt-4 border-t border-purple-200">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <Card className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-6">Our friendly admissions team is ready to help!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-purple-600 mb-2">📧 Email</p>
                <a href="mailto:info@freyjose.ac.ke" className="text-gray-700 hover:text-purple-600">
                  info@freyjose.ac.ke
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-purple-600 mb-2">📞 Phone</p>
                <a href="tel:+254712345678" className="text-gray-700 hover:text-purple-600">
                  +254 712 345 678
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-purple-600 mb-2">💬 WhatsApp</p>
                <a href="https://wa.me/254712345678" className="text-gray-700 hover:text-purple-600" target="_blank" rel="noopener noreferrer">
                  Message us
                </a>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-purple-600">Ready to Apply?</h3>
            <p className="text-lg text-gray-700">Start your application journey today. Application fee: KSH 1,000</p>
            <Button 
              onClick={() => window.location.href = '/admission/new-applications'}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg"
            >
              Apply Now (KSH 1,000)
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
