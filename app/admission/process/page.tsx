'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function AdmissionProcessPage() {
  const processSteps = [
    {
      title: 'Step 1: Research & Choose',
      desc: 'Explore our courses and programs to find what matches your career goals and interests.',
      details: [
        'Review course duration and fees',
        'Check entry requirements',
        'Understand career prospects',
      ],
    },
    {
      title: 'Step 2: Submit Application',
      desc: 'Fill out the online application form with your personal and educational information.',
      details: [
        'Complete application form',
        'Upload required documents',
        'Provide contact information',
      ],
    },
    {
      title: 'Step 3: Document Verification',
      desc: 'Our admissions team will verify your credentials and academic qualifications.',
      details: [
        'Review submitted documents',
        'Verify academic records',
        'Conduct preliminary assessment',
      ],
    },
    {
      title: 'Step 4: Interview (if required)',
      desc: 'Selected applicants may be invited for a brief interview to assess suitability.',
      details: [
        'Attend virtual or in-person interview',
        'Discuss career goals',
        'Ask questions about the program',
      ],
    },
    {
      title: 'Step 5: Payment of Fees',
      desc: 'Complete your admission by paying the required fees and enrollment charges.',
      details: [
        'Receive fee structure',
        'Multiple payment options available',
        'Payment plan assistance available',
      ],
    },
    {
      title: 'Step 6: Confirmation & Induction',
      desc: 'Receive your admission letter and join our orientation program.',
      details: [
        'Receive official admission letter',
        'Attend induction program',
        'Meet your classmates and tutors',
      ],
    },
  ]

  const timeline = [
    { label: 'Application Submission', duration: 'Year-round' },
    { label: 'Document Review', duration: '3-5 business days' },
    { label: 'Interview (if applicable)', duration: '1-2 weeks' },
    { label: 'Admission Decision', duration: '1 week' },
    { label: 'Enrollment & Induction', duration: 'Upon payment confirmation' },
  ]

  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-purple-100 to-white pt-44 pb-20 sm:pt-48 sm:pb-20 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">Admission Process</h1>
          <p className="text-lg text-gray-700 mb-8">A clear and simple pathway to your future</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-600 mb-8">Complete Process Overview</h2>
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <Card key={idx} className="p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.desc}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-center gap-2 text-gray-600">
                            <ArrowRight size={16} className="text-purple-600 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Application Timeline</h2>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-purple-200 last:border-b-0">
                  <p className="font-semibold text-gray-800">{item.label}</p>
                  <p className="text-purple-600 font-semibold">{item.duration}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Required Documents */}
          <Card className="p-8 bg-blue-50 border-2 border-blue-200 mb-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Documents You'll Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-3">For Admission:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Valid National ID or Passport</li>
                  <li>✓ Academic Certificates/Transcripts</li>
                  <li>✓ Birth Certificate (Copy)</li>
                  <li>✓ Passport-size Photograph (2)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-3">For Enrollment:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Completed admission form</li>
                  <li>✓ Proof of payment</li>
                  <li>✓ Medical fitness certificate (optional)</li>
                  <li>✓ Character reference letter</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">Quick FAQs</h2>
            <div className="space-y-4">
              {[
                { q: 'What are the entry requirements?', a: 'Minimum entry is Form 4 completion or KCSE Grade D and above.' },
                { q: 'Can I apply multiple times if rejected?', a: 'Yes, you can reapply in the next intake period with improved qualifications.' },
                { q: 'Is there financial aid available?', a: 'We offer payment plans and occasionally sponsor deserving students.' },
                { q: 'How long is the admission process?', a: 'Usually 2-4 weeks from application to admission decision.' },
              ].map((faq, idx) => (
                <Card key={idx} className="p-4 bg-white border border-purple-200">
                  <p className="font-semibold text-purple-600 mb-2">{faq.q}</p>
                  <p className="text-gray-700">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-600">Start Your Application Today!</h3>
            <p className="text-lg text-gray-700">We're excited to review your application and welcome you to FREYJOSE</p>
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
